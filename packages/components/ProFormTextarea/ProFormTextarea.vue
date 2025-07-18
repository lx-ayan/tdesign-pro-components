<script setup lang='ts'>
import { ref, onMounted } from 'vue';
import { ProFormTextareaProps, ProFormTextareaRef } from './types';
import { BasicValueType, warn } from '@tdesign-pro-component/utils';
import { useVModel } from '@tdesign-pro-component/hooks';

defineOptions({
    name: 'ProFormTextarea'
});

const props = withDefaults(defineProps<ProFormTextareaProps>(), {

});

const emits = defineEmits<{
    (e: 'update:modelValue', value: any): void;
    (e: 'blur', value: BasicValueType, context: { e: FocusEvent }): void;
    (e: 'change', value: BasicValueType, context?: { e?: InputEvent }): void;
    (e: 'focus', value: BasicValueType, context: { e: FocusEvent }): void;
    (e: 'keydown', value: BasicValueType, context: { e: KeyboardEvent }): void;
    (e: 'keypress', value: BasicValueType, context: { e: KeyboardEvent }): void;
    (e: 'keyup', value: BasicValueType, context: { e: KeyboardEvent }): void;
}>();

const innerValue = useVModel(props, 'modelValue', emits, props.modelValue || '');

const textareaRef = ref<any>();

onMounted(() => {
    if (!props.name) {
        warn('name is empty');
    }
})

function handleBlur(value: BasicValueType, context: { e: FocusEvent }) {
    emits('blur', value, context);
}

function handleChange(value: BasicValueType, context?: { e?: InputEvent }) {
    emits('change', value, context);
}

function handleFocus(value: BasicValueType, context: { e: FocusEvent }) {
    emits('focus', value, context);
}

function handleKeydown(value: BasicValueType, context: { e: KeyboardEvent }) {
    emits('keydown', value, context);
}

function handleKeypress(value: BasicValueType, context: { e: KeyboardEvent }) {
    emits('keypress', value, context);
}

function handleKeyup(value: BasicValueType, context: { e: KeyboardEvent }) {
    emits('keyup', value, context);
}

defineExpose<ProFormTextareaRef>({
    clear: () => innerValue.value = '',
    focus: () => textareaRef.value.focus(),
    getRef: () => textareaRef.value,
    blur: () => textareaRef.value.blur(),
    getValue: () => innerValue.value
});
</script>
<template>
    <t-form-item :label="props.label" :name="props.name"
        :rules="props.rules"
        :labelWidth="props.labelWidth" :labelAlign="props.labelAlign" v-bind="props.formItemProps">
        <t-textarea ref="textareaRef" v-model="innerValue" :disabled="props.disabled" :size="props.size"
            :readonly="props.readonly" :placeholder="props.placeholder || `请输入${props.label || '数据'}`"
            :autofocus="props.autofocus" v-bind="props.textareaProps" @blur="handleBlur" @change="handleChange"
            @focus="handleFocus" @keydown="handleKeydown" @keypress="handleKeypress" @keyup="handleKeyup">
        </t-textarea>
    </t-form-item>
</template>

<style lang='scss'></style>