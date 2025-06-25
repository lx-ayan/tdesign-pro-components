import { BasicValueType, OptionData } from "@tdesign-pro-component/utils";
import { RadioButton, RadioGroup } from "tdesign-vue-next";
import { defineComponent, PropType, ref, watch } from "vue";

const ButtonRadio = defineComponent({
    name: 'ButtonRadio',
    props: {
        data: {
            type: Array as PropType<OptionData[]>
        },
        vertical: {
            type: String as PropType<'row' | 'column'>,
            default: 'row'
        },
        onChange: {
            type: Function
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
    setup(props, { emit }) {
        const innerValue = ref<BasicValueType>(props.modelValue || '');

        function handleChange(value: BasicValueType) {
            if(props.readonly) return;
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

        return () => <RadioGroup readonly={props.readonly} value={innerValue.value} onChange={handleChange}>
            {
                //@ts-ignore
                props.data!.map(item => <RadioButton disabled={props.disabled || item.disabled} {...props} value={item.value}>{item.render(item)}</RadioButton>)
            }
        </RadioGroup>
    }
});

export default ButtonRadio;