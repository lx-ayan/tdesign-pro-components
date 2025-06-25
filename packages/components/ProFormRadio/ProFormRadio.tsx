import { FormItem, FormItemProps, FormRule, RadioProps } from "tdesign-vue-next";
import { defineComponent, onMounted, PropType, ref, watch } from "vue";
import DefaultRadio from './components/DefaultRadio';
import ButtonRadio from './components/ButtonRadio';
import { BasicValueType, buildData, getSlotOrJSX, Optional, OptionData, RequestOptionData, VueNode } from "@tdesign-pro-component/utils";
import TagRadio from "./components/TagRadio";
import { TagRadioProps } from "./types";

const ProFormRaido = defineComponent({
    name: 'ProFormRadio',
    props: {
        // about pro
        data: {
            type: [Array, Function] as PropType<OptionData[] | RequestOptionData>,
            default: () => []
        },
        theme: {
            type: String as PropType<'default' | 'radio' | 'button' | 'tag'>,
            default: 'radio'
        },
        labelName: {
            type: String,
            default: 'label'
        },
        valueName: {
            type: String,
            default: 'value'
        },
        direction: {
            type: String as PropType<'vertical' | 'horizontal'>,
            default: 'horizontal'
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
            type: [String, Number, Boolean] as PropType<BasicValueType>
        },
        radioProps: {
            type: [Object] as PropType<RadioProps | Optional<TagRadioProps, 'data'>>
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
        DefaultRadio,
        ButtonRadio,
        TagRadio
    },
    emits: ['update:modelValue', 'change'],
    setup(props, { emit, slots }) {
        const innerOption = ref<OptionData[]>([]);
        const innerLoading = ref(false);
        const innerValue = ref<BasicValueType>(props.modelValue || '2222');
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

        function handleChange(value: BasicValueType) {
            emit('change', value);
            emit('update:modelValue', value);
        }

        watch(() => props.modelValue, (value) => {
            //@ts-ignore
            innerValue.value = value;
        });

        watch(() => props.data, (value) => {
            if (Array.isArray(value)) {
                createData()
            }
        }, { deep: true })

        function RenderRadio() {
            switch (props.theme) {
                case 'radio':
                default:
                    //@ts-ignore
                    return <><DefaultRadio direction={props.direction} onChange={handleChange} {...props.radioProps} readonly={props.readonly} disabled={props.disabled} vertical={props.vertical} v-model={innerValue.value} data={innerOption.value} /></>;
                case 'button':
                    //@ts-ignore
                    return <ButtonRadio onChange={handleChange} {...props.radioProps} readonly={props.readonly} disabled={props.disabled} vertical={props.vertical} v-model={innerValue.value} data={innerOption.value} />;
                case 'tag':
                    //@ts-ignore
                    return <TagRadio direction={props.direction} onChange={handleChange} {...props.radioProps} readonly={props.readonly} disabled={props.disabled} vertical={props.vertical} v-model={innerValue.value} data={innerOption.value} />
            }
        }

        return () => <FormItem rules={props.rules} name={props.name} {...props.formItemProps}>
            {{
                default: () => (innerLoading.value ? loadingTextRender() : RenderRadio()),
                label: labelRender() ? labelRender() : null,
            }}
        </FormItem>
    }
});

export default ProFormRaido;