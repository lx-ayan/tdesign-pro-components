import { Button, Col, Form, FormInstanceFunctions, FormItem, FormProps, Loading, MessagePlugin, Row, Upload } from "tdesign-vue-next";
import { defineComponent, onMounted, computed, ref, watch, nextTick } from "vue";
import { ProFormText } from "../ProFormText";
import { ProFormItemType, ProFormOption, ProFormProps } from "./types";
import { ProFormSelect } from "../ProFormSelect";
import { ProFormRadio } from "../ProFormRadio";
import { ProFormCheckbox } from "../ProFormCheckbox";
import { ProFormTextarea } from "../ProFormTextarea";
import { ProFormDatePicker } from "../ProFormDatePicker";
import { ProFormInputNumber } from "../ProFormInputNumber";
import { ProFormDatePickerRange } from "../ProFormDatePickerRange";
import { getSlotOrJSX } from "@tdesign-pro-component/utils";
import { filterChangedValues, initFormData, initFormValue, removeEmptyArray, removeEmptyString } from "./utils";

interface ComponentObj {
    propsKey: string;
    component: any;
}

const Components: Record<string, ComponentObj> = {
    text: {
        propsKey: 'textProps',
        component: ProFormText
    },
    radio: {
        propsKey: 'radioProps',
        component: ProFormRadio
    },
    checkbox: {
        propsKey: 'checkboxProps',
        component: ProFormCheckbox
    },
    select: {
        propsKey: 'selectProps',
        component: ProFormSelect
    },
    date: {
        propsKey: 'datePickerProps',
        component: ProFormDatePicker
    },
    'date-range': {
        propsKey: 'datePickerRangeProps',
        component: ProFormDatePickerRange
    },
    number: {
        propsKey: 'numberProps',
        component: ProFormInputNumber
    },
    textarea: {
        propsKey: 'textareaProps',
        component: ProFormTextarea
    }
}

let initForm = {

}

const ProForm = defineComponent(
    <T extends Record<string, any> | Object>(props: ProFormProps<T>, { slots, emit, expose }) => {

        const innerFormData = ref<T>({} as unknown as T);

        const innerLoading = ref(false);

        const innerOptions = computed(() => props.options.filter(item => !item.hidden));

        const formInstance = ref<FormInstanceFunctions>();

        const footerRender = getSlotOrJSX<typeof props>('footer', slots, props)();

        const extralRender = getSlotOrJSX<typeof props>('extral', slots, props)();

        onMounted(() => {
            initForm = props.initalData || {};
            init();
        })

        function init() {
            buildData();
        }

        function reset() {
            innerFormData.value = initFormData(props.options, innerFormData.value || {});
        }

        function buildData() {
            if (props.request) {
                innerLoading.value = true;
                props.request().then(result => {
                    if (result) {
                        innerFormData.value = initFormData(innerOptions.value, initFormValue(result, innerOptions.value))
                    } else {
                        innerFormData.value = initFormData(innerOptions.value, props.initalData || {})
                    }
                    if ("{}" == JSON.stringify(initForm)) {
                        initForm = innerFormData.value;
                    }
                }).catch(err => {
                    MessagePlugin.error(err);
                }).finally(() => {
                    innerLoading.value = false;
                })
            } else {
                if (props.initalData) {
                    innerFormData.value = initFormData(innerOptions.value, props.initalData || {})
                }
            }
        }

        function onChange(key: string, value: any) {
            emit('change', key, value);
            innerFormData.value[key] = value;

            const option = innerOptions.value.find(item => item.name === key);
            option?.onChange?.(value, key);
        }

        function handleSubmit() {
            formInstance.value.validate().then((res) => {
                if (res) {
                    if (props.onSubmit) {
                        innerLoading.value = true;
                        let data = props.increment ? filterChangedValues(initForm, innerFormData.value) : innerFormData.value;
                        data = props.filterEmptyStr ? removeEmptyString(data) : data;
                        data = props.filterEmptyArray ? removeEmptyArray(data) : data;
                        props.onSubmit(data as unknown as T).then(() => {
                            props.onSuccess && props.onSuccess();
                        }).catch((e) => {
                            props.onFail && props.onFail(e);
                        }).finally(() => {
                            innerLoading.value = false;
                        })
                    }
                } else {
                    props.onFail && props.onFail(res);
                }
            })
        }
        watch(() => props.options, (value) => {
            reset();
        }, { deep: true })

        expose({
            setItem: (key: keyof typeof innerFormData.value, value: any) => {
                innerFormData.value[key] = value;
            },
            getItem: (key: keyof typeof innerFormData.value) => {
                return innerFormData.value[key];
            },
            resetRequest: buildData,
            validate: async () => {
                return await formInstance.value.validate()
            },
            submit: () => {
                formInstance.value.submit()
            },
            reset: () => {
                formInstance.value.reset()
            },
            getFormInstance: () => formInstance.value,
            getFormValue: () => {
                let data = innerFormData.value
                data = props.filterEmptyStr ? removeEmptyString(data) : data;
                data = props.filterEmptyArray ? removeEmptyArray(data) : data;
                return data;
            }
        })

        const RenderFormItem = ({ option }: { option: ProFormOption }) => {
            const Component = Components[option.type || 'text']?.component || ProFormText;

            if (option.type !== 'upload') {
                return option.hidden ? null : <Col span={option.span || 6}>
                    {
                        slots[option.name] && slots[option.name]({ option }) ? slots[option.name]({ option }) :
                            <Component
                                v-model={innerFormData.value[option.name]}
                                label={option.label} placeholder={option.placeholder} name={option.name}
                                readonly={props.readonly || option.readonly} disabled={props.disabled || option.disabled}
                                rules={option.rules} data={option.data}
                                {...{
                                    ...option[Components[option.type || 'text'].propsKey],
                                    onChange: (v: string) => {
                                        onChange(option.name as unknown as string, v)
                                    }
                                }}
                                formItemProps={option.formItemProps} />
                    }
                </Col>
            } else {
                return option.hidden ? null : <Col span={option.span || 6}>
                    {slots[option.name] && slots[option.name]({ option }) ? slots[option.name]({ option }) : <t-form-item
                        label={option.label} name={option.name} rules={option.rules} {...option.formItemProps}>
                        <Upload
                            v-model={innerFormData.value[option.name]}
                            readonly={props.readonly || option.readonly} disabled={props.disabled || option.disabled}
                            {...option.uploadProps}>
                        </Upload>
                    </t-form-item>
                    }
                </Col>
            }
        }

        const ProFormInstance = () => {
            return <Row gutter={[0, props.gap === undefined ? 20 : props.gap]}>
                {
                    //@ts-ignore
                    innerOptions.value.map(item => {
                        //@ts-ignore
                        return <RenderFormItem key={item.name} option={item}></RenderFormItem>
                    })
                }

                {
                    footerRender ? <FormItem style={{flex: '1'}}>
                        {footerRender}
                    </FormItem> : !props.hideFooter &&  <Col span={props.footerSpan}> <FormItem style={`display: flex; justify-content: right;`}>
                        <div style="margin-right:16px">
                            {extralRender}
                        </div>
                        <Button type="submit">{props.submitText}</Button>
                        {
                            !props.hideReset && <Button style="margin-left:16px;" type="reset" theme="default">{props.resetText}</Button>
                        }

                    </FormItem>
                    </Col>
                }
            </Row>
        }

        return () => <>
            <Loading loading={innerLoading.value}>
                <Form validate-trigger="blur" labelAlign={props.labelAlign} rules={props.rules} {...props.formProps} data={innerFormData.value} ref={formInstance} onSubmit={handleSubmit}>
                    {{
                        default: () => slots.default ? slots.default() : <ProFormInstance />
                    }}
                </Form>
            </Loading>
        </>
    }, {
    name: 'ProForm',
    emits: ['change', 'submit'],
    props: {
        options: {
            type: Array,
            default: () => []
        },
        request: Function,
        initalData: Object,
        onSubmit: Function,
        footer: [String, Function, Object],
        onSuccess: Function,
        onFail: Function,
        increment: Boolean,
        readonly: Boolean,
        disabled: Boolean,
        submitText: {
            type: String,
            default: '提交'
        },
        resetText: {
            type: String,
            default: '重置'
        },
        hideReset: Boolean,
        extral: [String, Function, Object],
        formProps: Object,
        labelAlign: String,
        rules: Object,
        footerAligin: String,
        hideFooter: Boolean,
        gap: Number,
        footerSpan: {
            type: [Number, String],
            default: 12
        },
        filterEmptyStr: Boolean,
        filterEmptyArray: Boolean,
        onChage: Function
    } as any
});

export default ProForm;