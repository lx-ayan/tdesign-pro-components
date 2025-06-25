import { BasicValueType, OptionData } from "@tdesign-pro-component/utils";
import { Col, Row, Space } from "tdesign-vue-next";
import { defineComponent, PropType, ref, watch } from "vue";
import TagItem from "./TagItem";

const TagRadio = defineComponent({
    name: 'TagRadio',
    props: {
        data: {
            type: Array as PropType<OptionData[]>
        },
        direction: {
            type: String as PropType<'vertical' | 'horizontal'>,
            default: 'horizontal'
        },
        onChange: {
            type: Function
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
        const innerValue = ref<BasicValueType>(props.modelValue || '');

        function handleClick(value: BasicValueType, item: OptionData) {
            if (props.readonly || props.disabled || item.disabled) {
                return
            }
            emit('change', value);
            innerValue.value = value;
        }

        watch(() => props.modelValue, (value) => {
            //@ts-ignore
            innerValue.value = value;
        });

        watch(innerValue, (value) => {
            emit('update:modelValue', value);
        });


        return () => <Space direction={props.direction}>
            {
                props.data.map(item => <TagItem disabled={props.disabled || item.disabled} fill={props.fill} updateColor={props.updateColor} currentIndex={innerValue.value} key={item.value} onClick={() => handleClick(item.value, item)} data={item}>{item.render(item)}</TagItem>)
            }
        </Space>
    }
})

export default TagRadio;