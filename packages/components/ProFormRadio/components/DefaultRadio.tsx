import { BasicValueType, OptionData } from "@tdesign-pro-component/utils";
import { Col, Radio, RadioGroup, Row, Space } from "tdesign-vue-next";
import { defineComponent, PropType, ref, watch } from "vue";

const DefaultRadio = defineComponent({
    name: 'DefaultRadio',
    props: {
        data: {
            type: Array as PropType<OptionData[]>
        },
        direction: {
            type: String as PropType<'vertical' | 'horizontal'>,
            default: 'horizontal'
        },
        onChange: {
            type: Function as PropType<(value: BasicValueType) => void>
        },
        modelValue: {
            type: [String, Number, Boolean] as PropType<BasicValueType>
        },
        readonly: {
            type: Boolean
        },
        disabled: {
            type: Boolean
        }
    },
    emits: ['update:modelValue', 'change'],
    setup(props, { emit }) {

        const innerValue = ref<BasicValueType>(props.modelValue || '');

        watch(() => props.modelValue, (newValue) => {
            if (newValue !== innerValue.value) {
                //@ts-ignore
                innerValue.value = newValue;
            }
        });

        // 处理输入变化
        const handleChange = (value: BasicValueType) => {
            if (props.readonly) return;
            emit('update:modelValue', value);
            emit('change', value);
        };

        return () =>
            <RadioGroup v-model={innerValue.value} onChange={handleChange}>
                <Space direction={props.direction}>
                    {
                        //@ts-ignore
                        props.data.map(item => <Radio disabled={props.disabled || item.disabled} key={item.value} value={item.value}>{item.render(item)}</Radio>)
                    }
                </Space>
            </RadioGroup>
    }
})

export default DefaultRadio;