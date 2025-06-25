import { BasicValueType, OptionData } from "@tdesign-pro-component/utils";
import { CheckTag, CheckTagGroup, Col, Radio, RadioGroup, Row, Tag } from "tdesign-vue-next";
import { defineComponent, PropType, ref, watch } from "vue";
import TagItem from "./TagItem";

const TagRadio = defineComponent({
    name: 'TagRadio',
    props: {
        data: {
            type: Array as PropType<OptionData[]>
        },
        vertical: {
            type: String as PropType<'row' | 'col'>,
            default: 'row'
        },
        onChange: {
            type: Function as PropType<(value: BasicValueType) => void>
        },
        modelValue: {
            type: [String] as PropType<string>
        },
        gap: {
            type: String,
            default: '24px'
        },
        updateColor: {
            type: Boolean,
            default: false
        },
        fill: {
            type: Boolean,
            default: false
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
        TagItem
    },
    emits: ['update:modelValue', 'change'],
    setup(props, { emit }) {
        const innerValue = ref<BasicValueType>(props.modelValue);
        
        function handleClick(value: BasicValueType, item: OptionData) {
            if(props.readonly || props.disabled || item.disabled) {
                return
            }
            emit('change', value);
            innerValue.value = value;
        }

        watch(() => props.modelValue, (value) => {
            innerValue.value = value;
        });

        watch(innerValue, (value) => {
            emit('update:modelValue', value);
        });

        const RenderRowRadio = () => {
            return props.data.map(item => <span style={{marginRight: props.gap}}><TagItem disabled={props.disabled || item.disabled} fill={props.fill} updateColor={props.updateColor} currentIndex={innerValue.value} key={item.value} onClick={() => handleClick(item.value, item)} data={item}>{item.render(item)}</TagItem></span>)
        }

        const RenderColRadio = () => <Row gutter={20} style={{width: '100%'}}>
            {
                props.data.map(item => <Col style={{marginBottom: props.gap}} key={item.value} span={12}><TagItem disabled={props.disabled || item.disabled} fill={props.fill} updateColor={props.updateColor} currentIndex={innerValue.value} key={item.value} onClick={() => handleClick(item.value, item)} data={item}>{item.render(item)}</TagItem></Col>)
            }
        </Row>

        return () => props.vertical !== 'col' ? RenderRowRadio() : RenderColRadio()
    }
})

export default TagRadio;