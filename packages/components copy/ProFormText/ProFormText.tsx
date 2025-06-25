import { defineComponent, ref, watch, PropType } from "vue";
import { BasicValueType, getSlotOrJSX, VueNode } from "@tdesign-pro-component/utils";
import { FormItem, FormItemProps, FormRule, Input, InputProps } from 'tdesign-vue-next';
import './index.scss';

const ProFormText = defineComponent({
    name: 'ProFormText',
    props: {
        // about form
        name: {
            required: true,
            type: String
        },
        label: [String, Function, Object] as PropType<VueNode>,
        rules: Array as PropType<Array<FormRule>>,
        formItemProps: Object as PropType<FormItemProps>,
        // about input
        modelValue: [String, Number, Boolean, Array] as PropType<BasicValueType>,
        placeholder: {
            type: String,
            default: '请输入'
        },
        type: String,
        prepend: [String, Function, Object] as PropType<VueNode>,
        append: [String, Function, Object] as PropType<VueNode>,
        inputLabel: [String, Function, Object] as PropType<VueNode>,
        suffix: [String, Function, Object] as PropType<VueNode>,
        suffixIcon: [String, Function, Object] as PropType<VueNode>,
        clearable: Boolean,
        readonly: Boolean,
        disabled: Boolean,
        borderless: Boolean,
        inputProps: Object as PropType<InputProps>
    },
    emits: ['update:modelValue', 'change'],
    setup(props, { slots, emit }) {
        const innerValue = ref<BasicValueType>(props.modelValue || '');

        watch(() => props.modelValue, (newValue) => {
            if (newValue !== innerValue.value) {
                innerValue.value = newValue;
            }
        });

        // 处理输入变化
        const handleChange = (value: BasicValueType) => {
            emit('update:modelValue', value);
            emit('change', value);
        };

        const labelRender = getSlotOrJSX<typeof props>('label', slots, props);
        const suffixRender = getSlotOrJSX<typeof props>('suffix', slots, props);
        const inputLabelRender = getSlotOrJSX<typeof props>('inputLabel', slots, props);
        const appendRender = getSlotOrJSX<typeof props>('append', slots, props);
        const prependRender = getSlotOrJSX<typeof props>('prepend', slots, props);
        const suffixIconRender = getSlotOrJSX<typeof props>('suffixIcon', slots, props);

        // 渲染 Input 组件
        const InnerInput = () => (
            <Input 
                v-model={innerValue.value} // 使用 v-model 绑定
                borderless={props.borderless} 
                disabled={props.disabled} 
                readonly={props.readonly} 
                clearable={props.clearable} 
                type={props.type} 
                placeholder={props.placeholder}
                onChange={handleChange}
                {...props.inputProps}
            >
                {
                    {
                        suffix: suffixRender() ? suffixRender : null,
                        label: inputLabelRender() ? inputLabelRender : null,
                        suffixIcon: suffixIconRender() ? suffixIconRender : null
                    }
                }
            </Input>
        );

        // 渲染带装饰的 Input
        function renderInput() {
            if (!props.append && !props.prepend) {
                return <InnerInput />;
            } else {
                return (
                    <t-input-adornment style={{ width: '100%' }}>
                        {{
                            default: () => <InnerInput />,
                            prepend: prependRender() ? prependRender : null,
                            append: appendRender() ? appendRender : null
                        }}
                    </t-input-adornment>
                );
            }
        }

        return () => (
            <FormItem rules={props.rules} name={props.name} {...props.formItemProps}>
                {{
                    default: renderInput,
                    label: labelRender() ? labelRender : null
                }}
            </FormItem>
        );
    }
});

export default ProFormText;