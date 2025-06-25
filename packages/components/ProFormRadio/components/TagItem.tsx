import { BasicValueType, OptionData } from "@tdesign-pro-component/utils";
import { computed, defineComponent, PropType } from "vue";
import './TagItem.scss';

const TagItem = defineComponent({
    name: 'TagItem',
    props: {
        data: Object as PropType<OptionData>,
        currentIndex: [String, Boolean, Number] as PropType<BasicValueType>,
        fill: Boolean,
        updateColor: Boolean,
        disabled: Boolean
    },
    setup(props, {slots}) {
        const className = computed(() => {
            if(props.disabled) {
                //@ts-ignore
                return props.currentIndex === props.data.value ?`tag-item tag-item-disabled-active`: `tag-item tag-item-disabled`
            }
            //@ts-ignore
            return props.currentIndex === props.data.value? `tag-item tag-item-active ${props.fill? 'tag-item-active-fill': ''} ${props.updateColor? 'tag-item-color-active': ''}`: 'tag-item'
        });

        return () => <div class={className.value}>
            {slots.default && slots?.default()}
        </div>
    }
});

export default TagItem;