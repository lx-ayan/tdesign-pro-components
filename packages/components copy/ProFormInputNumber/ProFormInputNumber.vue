<script setup lang='ts'>
import { onMounted, ref} from 'vue';
import { ProFormInputNumberProps } from './types';
import { warn } from '@tdesign-pro-component/utils';
import { useVModel } from '@tdesign-pro-component/hooks';
defineOptions({
    name: 'ProFormInputNumber'
});
const props = withDefaults(defineProps<ProFormInputNumberProps>(), {
    theme: 'column',
    labelAlign: 'left'
});
const emits = defineEmits<{
    (e: 'update:modelValue', value: string): void;
    (e: 'change', value: string, context?: { e?: InputEvent | MouseEvent | CompositionEvent; trigger: 'input' | 'initial' | 'clear' }): void;
    (e: 'input', value: InputEvent): void;
    (e: 'blur', value: string, context?: { e: FocusEvent }): void;
    (e: 'focus', value: string, context?: { e: FocusEvent }): void;
    (e: 'keydown', value: string, context?: { e: KeyboardEvent }): void;
    (e: 'keypress', value: string, context?: { e: KeyboardEvent }): void;
    (e: 'keyup', value: string, context?: { e: KeyboardEvent }): void;
    (e: 'validate', context?: { error?: 'exceed-maximum' | 'below-minimum' }): void;
}>();
const innerValue = useVModel(props, 'modelValue', emits, props.modelValue || '');
const inputNumberRef = ref();
onMounted(() => {
    if(!props.name) {
        warn('name is empty');
    }
})
function handleInput(e: InputEvent) {
    emits('input', e);
}
function handleChange(value: string, context: { e?: InputEvent | MouseEvent | CompositionEvent; trigger: 'input' | 'initial' | 'clear' }) {
    emits('change', value, context);
}
function handleBlur(value: string, context: { e: FocusEvent }) {
    emits('blur', value, context);
}
function handleFocus(value: string, context?: { e: FocusEvent }) {
    emits('focus', value, context);
}
function handleKeydown(value: string, context?: { e: KeyboardEvent }) {
    emits('keydown', value, context);
}
function handleKeypress(value: string, context?: { e: KeyboardEvent }) {
    emits('keypress', value, context);
}
function handleKeyup(value: string, context?: { e: KeyboardEvent }) {
    emits('keyup', value, context);
}
function handleValidate(context?: { error?: 'exceed-maximum' | 'below-minimum' }) {
    emits('validate', context);
}
defineExpose({
    getValue: () => innerValue.value,
    focus: () => inputNumberRef.value.focus(),
    blur: () => inputNumberRef.value.blur()
});
</script>

<template>
    <t-form-item :label="props.label" :name="props.name" :rules="props.rules" v-bind="props.formItemProps">
        <t-input-number style="width:100%;" ref="inputNumberRef" v-model="innerValue" @input="handleInput" @change="handleChange" @blur="handleBlur" @focus="handleFocus"
            @keydown="handleKeydown" @keypress="handleKeypress" @keyup="handleKeyup" @validate="handleValidate"
            :theme="props.theme" :readonly="props.readonly" :disabled="props.disabled" 
            :placeholder="props.placeholder || `请输入`"
            v-bind="props.inputNumberProps"></t-input-number>
    </t-form-item>

</template>

<style lang='scss'></style>