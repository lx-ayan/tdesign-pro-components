import { BasicValueType, OptionData } from "@tdesign-pro-component/utils";
import { Col, Radio, RadioGroup, Row } from "tdesign-vue-next";
import { defineComponent, PropType, ref, watch } from "vue";

const DefaultRadio = defineComponent({
    name: 'DefaultRadio',
    props: {
        data: {
            type: Array as PropType<OptionData[]>
        },
        vertical: {
            type: String as PropType<'row' | 'column'>,
            default: 'row'
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

        const RenderRowRadio = () => <>
            <RadioGroup v-model={innerValue.value} onChange={handleChange}>
                {
                    //@ts-ignore
                    props.data.map(item => <Radio disabled={props.disabled || item.disabled} key={item.value} value={item.value}>{item.render(item)}</Radio>)
                }
            </RadioGroup>
        </>

        const RenderColRadio = () => <Row>
            <RadioGroup v-model={innerValue.value} onChange={handleChange}>
                {
                    //@ts-ignore
                    props.data.map(item => <Col key={item.value} span={12}><Radio disabled={props.disabled || item.disabled} value={item.value}>{item.render(item)}</Radio></Col>)
                }
            </RadioGroup>
        </Row>

        return () => props.vertical != 'column' ? RenderRowRadio() : RenderColRadio()
    }
})

export default DefaultRadio;