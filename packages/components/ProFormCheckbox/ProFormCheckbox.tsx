import { FormItem, FormItemProps, FormRule, CheckboxProps, CheckboxGroup, Checkbox, Row, Col } from "tdesign-vue-next";
import { defineComponent, onMounted, PropType, ref, watch } from "vue";
import { BasicValueType, buildData, getSlotOrJSX, OptionData, RequestOptionData, VueNode } from "@tdesign-pro-component/utils";
import { TagCheckboxProps } from "./types";
import TagCheckbox from './components/TagCheckbox';

const ProFormCheckbox = defineComponent({
    name: 'ProFormCheckbox',
    props: {
        // about pro
        data: {
            type: [Array, Function] as PropType<OptionData[] | RequestOptionData>,
            default: () => []
        },
        theme: {
            type: String as PropType<'default' | 'button' | 'tag'>,
            default: 'default'
        },
        labelName: {
            type: String,
            default: 'label'
        },
        valueName: {
            type: String,
            default: 'value'
        },
        vertical: {
            type: String as PropType<'row' | 'column'>,
            default: 'row'
        },
        loadingText: {
            type: String,
            default: '数据加载中，请稍后...'
        },
        // about form
        name: {
            required: true,
            type: String
        },
        label: [String, Function, Object] as PropType<VueNode>,
        rules: Array as PropType<Array<FormRule>>,
        formItemProps: Object as PropType<FormItemProps>,
        // about input
        modelValue: {
            type: Array as PropType<BasicValueType[]>,
            default: () => []
        },
        checkboxProps: {
            type: [Object] as PropType<CheckboxProps | TagCheckboxProps>
        },
        readonly: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    components: {

    },
    emits: ['update:modelValue', 'change'],
    setup(props, { emit, slots, expose }) {
        const innerOption = ref<OptionData[]>([]);
        const innerLoading = ref(false);
        const innerValue = ref<BasicValueType[]>(props.modelValue || []);
        const labelRender = getSlotOrJSX<typeof props>('label', slots, props);
        const loadingTextRender = getSlotOrJSX<typeof props>('loadingText', slots, props);

        onMounted(() => {
            createData();
        });

        function createData() {
            innerLoading.value = true;
            buildData(props.data, props.labelName, props.valueName).then(res => {
                innerOption.value = res.map(item => {
                    return {
                        ...item,
                        //@ts-ignore
                        render: (current: any) => item.render ? item.render(current) : slots[`option-${item[props.valueName]}`] ? slots[`option-${item[props.valueName]}`]({ option: item }) : item[props.labelName]
                    }
                })
            }).finally(() => {
                innerLoading.value = false;
            })
        }

        function handleChange(value: BasicValueType[]) {
            emit('change', value);
            innerValue.value = value;
        }

        watch(() => props.modelValue, (value) => {
            innerValue.value = value;
        });

        watch(innerValue, (value) => {
            emit('update:modelValue', value);
        });

        watch(() => props.data, () => {
            createData();
        }, { deep: true });

        expose({
            reset: createData
        });

        function RenderCheckbox() {
            switch (props.theme) {
                case 'default':
                default:
                    return props.vertical != 'column' ? <CheckboxGroup v-model={innerValue.value} onChange={handleChange} disabled={props.disabled} readonly={props.readonly}>
                        {
                            //@ts-ignore
                            innerOption.value.map(item => <Checkbox disabled={props.disabled || item.disabled} value={item.value}>{item.render(item)}</Checkbox>)
                        }
                    </CheckboxGroup> : <Row>
                        <CheckboxGroup value={innerValue.value} onChange={handleChange} disabled={props.disabled} readonly={props.readonly}>
                            {
                                //@ts-ignore
                                innerOption.value.map(item => <Col span={12}><Checkbox disabled={props.disabled || item.disabled} value={item.value}>{item.render(item)}</Checkbox></Col>)
                            }
                        </CheckboxGroup>
                    </Row>
                case 'tag':
                    //@ts-ignore
                    return <TagCheckbox {...props.checkboxProps} readonly={props.readonly} disabled={props.disabled} vertical={props.vertical} onChange={handleChange} modelValue={innerValue.value} data={innerOption.value} />
                  
            }
        }

        return () => <FormItem rules={props.rules} name={props.name} {...props.formItemProps}>
            {{
                default: () => innerLoading.value ? loadingTextRender() : RenderCheckbox(),
                label: labelRender() ? labelRender : null,
            }}
        </FormItem>
    }
});

export default ProFormCheckbox;