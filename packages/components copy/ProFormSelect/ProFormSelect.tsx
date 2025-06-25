import { BasicValueType, buildData, getSlotOrJSX, OptionData, RequestOptionData, VueNode } from "@tdesign-pro-component/utils";
import { FormItem, FormItemProps, FormRule, Select, SelectProps } from "tdesign-vue-next";
import { defineComponent, onMounted, PropType, ref, watch } from "vue";

const ProFormSelect = defineComponent({
    name: 'ProFormSelect',
    props: {
        // about pro
        data: {
            type: [Array, Function] as PropType<OptionData[] | RequestOptionData>,
            default: () => []
        },
        labelName: {
            type: String,
            default: 'label'
        },
        valueName: {
            type: String,
            default: 'value'
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
        modelValue: [String, Number, Boolean, Array] as PropType<BasicValueType | BasicValueType[]>,
        placeholder: {
            type: String,
            default: '请选择'
        },
        readonly: Boolean,
        disabled: Boolean,
        clearable: Boolean,
        multiple: Boolean,
        filterable: Boolean,
        borderless: Boolean,
        filter: Function as PropType<SelectProps['filter']>,
        onSearch: Function as PropType<SelectProps['onSearch']>,
        panelTopContent: [String, Function, Object] as PropType<VueNode>,
        panelBottomContent: [String, Function, Object] as PropType<VueNode>,
        collapsedItems: [String, Function, Object] as PropType<VueNode>,
        prefixIcon: [String, Function, Object] as PropType<VueNode>,
        selectProps: Object as PropType<SelectProps>
    },
    emits: ['update:modelValue', 'change', 'search'],
    setup(props, { slots, emit, expose }) {
        const labelRender = getSlotOrJSX<typeof props>('label', slots, props);
        const innerOption = ref<OptionData[]>([]);
        const innerLoading = ref(false);
        const innerValue = ref<typeof props.modelValue>(props.modelValue || '');
        const panelTopContentRender = getSlotOrJSX<typeof props>('panelTopContent', slots, props);
        const panelBottomContentRender = getSlotOrJSX<typeof props>('panelBottomContent', slots, props);
        const prefixIconRender = getSlotOrJSX<typeof props>('prefixIcon', slots, props);
        const CollapsedItemsRender = (slotsArgument) => {
            const result = getSlotOrJSX<typeof props>('collapsedItems', slots, props, slotsArgument);
            return result() ? result() : null;
        };

        onMounted(() => {
            createData();
        });

        function createData() {
            innerLoading.value = true;
            buildData(props.data, props.labelName, props.valueName).then(res => {
                innerOption.value = res.map(item => {
                    return {
                        ...item,
                        render: (current: any) => item.render ? item.render(current) : slots[`option-${item[props.valueName]}`] ? slots[`option-${item[props.valueName]}`]({ option: item }) : item[props.labelName]
                    }
                })
            }).finally(() => {
                innerLoading.value = false;
            })
        }

        function handleChange(value: BasicValueType | BasicValueType[]) {
            emit('update:modelValue', value);
            emit('change', value);
        }

        function handleSearch(value: string) {
            emit('search', value);
        }

        watch(() => props.modelValue, (newValue) => {
            if (newValue !== innerValue.value) {
                innerValue.value = newValue;
            }
        });

        watch(() => props.data, () => {
            createData();
        }, { deep: true });

        expose({
            reset: createData
        })

        return () => (
            <FormItem rules={props.rules} name={props.name} {...props.formItemProps}>
                {{
                    label: labelRender() ? labelRender : null,
                    default: () => (
                        <Select
                            v-model={innerValue.value}
                            borderless={props.borderless}
                            style={{ width: '100%' }}
                            filterable={props.filterable}
                            filter={props.filter}
                            multiple={props.multiple}
                            disabled={props.disabled}
                            readonly={props.readonly}
                            clearable={props.clearable}
                            placeholder={props.placeholder}
                            loading={innerLoading.value}
                            onSearch={handleSearch}
                            onChange={handleChange}
                            {...props.selectProps}
                        >
                            {
                                {
                                    default: () => innerOption.value && innerOption.value.map(item => (
                                        <t-option disabled={props.disabled || item.disabled} key={item.value} value={item.value} label={item.label}>
                                            {item.render(item)}
                                        </t-option>
                                    )),
                                    panelTopContent: panelTopContentRender() ? panelTopContentRender : null,
                                    panelBottomContent: panelBottomContentRender() ? panelBottomContentRender : null,
                                    collapsedItems: (value: any) => CollapsedItemsRender(value),
                                    prefixIcon: prefixIconRender() ? prefixIconRender : null
                                }
                            }
                        </Select>
                    )
                }}
            </FormItem>
        );
    }
});

export default ProFormSelect;