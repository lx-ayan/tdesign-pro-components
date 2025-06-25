import { getSlotOrJSX, VueNode } from "@tdesign-pro-component/utils";
import { DatePickerProps, DateRangePicker, FormItem, FormItemProps, FormRule } from "tdesign-vue-next";
import { defineComponent, PropType, ref, watch } from "vue";

const ProFormDatePickerRange = defineComponent({
    name: 'ProFormDatePickerRange',
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
        modelValue: {
            type:  [Array] as PropType<string[]>,
            default: () => []
        },
        placeholder: {
            type: String,
            default: '请选择日期'
        },
        readonly: Boolean,
        borderless: Boolean,
        disabled: Boolean,
        enableTimePicker: Boolean,
        clearable: Boolean,
        format: {
            type: String,
            default: 'YYYY-MM-DD'
        },
        datePickerLabel: [String, Function, Object] as PropType<VueNode>,
        prefixIcon: [Function, Object] as PropType<VueNode>,
        datePickerProps: Object as PropType<DatePickerProps>
    },
    setup: (props, { slots, emit }) => {
        const labelRender = getSlotOrJSX<typeof props>('label', slots, props);
        const datePickerLabelRender = getSlotOrJSX<typeof props>('datePickerLabel', slots, props);
        const prefixIconRender = getSlotOrJSX<typeof props>('prefixIcon', slots, props);
        const innerValue = ref<string | string[]>(props.modelValue)

        function handleChange(value: string) {
            emit('change', value);
            innerValue.value = value;
        }

        watch(() => props.modelValue, (value) => {
            innerValue.value = value;
        });

        watch(innerValue, (value) => {
            emit('update:modelValue', value);
        });

        return () => {
            return <FormItem rules={props.rules} name={props.name} {...props.formItemProps}>
                {{
                    default: () => <DateRangePicker
                        range
                        value={innerValue.value}
                        clearable={props.clearable}
                        borderless={props.borderless}
                        format={props.format}
                        onChange={handleChange}
                        readonly={props.readonly}
                        disabled={props.disabled}
                        enableTimePicker = {props.enableTimePicker}
                        placehoder={props.placeholder}
                        multiple={props.multiple}
                        label={datePickerLabelRender()? datePickerLabelRender(): null}
                        >
                            {{
                                prefixIcon: prefixIconRender()? prefixIconRender(): null
                            }}
                        </DateRangePicker>,
                    label: labelRender() ? labelRender : null
                }}
            </FormItem>
        }
    }
});

export default ProFormDatePickerRange