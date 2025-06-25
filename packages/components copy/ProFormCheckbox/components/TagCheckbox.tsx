import { BasicValueType, OptionData } from "@tdesign-pro-component/utils";
import { CheckTag, CheckTagGroup, Col, Radio, RadioGroup, Row, Tag } from "tdesign-vue-next";
import { defineComponent, PropType, ref, watch } from "vue";
import TagItem from "./TagItem";

const TagBox = defineComponent({
    name: 'TagBox',
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
            type: Array as PropType<BasicValueType[]>,
            default: () => []
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
    setup(props, { emit }) {
        const innerValue = ref<BasicValueType[]>(props.modelValue);
        
        function handleClick(value: BasicValueType, item: OptionData) {
            if(props.readonly || props.disabled || item.disabled) {
                return
            }
            const arr = innerValue.value;
            const flag = arr.includes(value)
            if(flag) innerValue.value = arr.filter(item => item != value)
            else innerValue.value.push(value)
            emit('change', innerValue.value);
        }

        watch(() => props.modelValue, (value) => {
            innerValue.value = value;
        });

        watch(innerValue, (value) => {
            emit('update:modelValue', value);
        });

        const RenderRowRadio = () => {
            return props.data.map(item => <span style={{marginRight: props.gap}}><TagItem disabled={props.disabled || item.disabled} fill={props.fill} updateColor={props.updateColor} currentData={innerValue.value} key={item.value} onClick={() => handleClick(item.value, item)} data={item}>{item.render(item)}</TagItem></span>)
        }

        const RenderColRadio = () => <Row gutter={20} style={{width: '100%'}}>
            {
                props.data.map(item => <Col style={{marginBottom: props.gap}} key={item.value} span={12}><TagItem disabled={props.disabled || item.disabled} fill={props.fill} updateColor={props.updateColor} currentData={innerValue.value} key={item.value} onClick={() => handleClick(item.value, item)} data={item}>{item.render(item)}</TagItem></Col>)
            }
        </Row>

        return () => props.vertical === 'row' ? RenderRowRadio() : RenderColRadio()
    }
})

export default TagBox;