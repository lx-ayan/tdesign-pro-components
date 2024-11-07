<script setup lang="ts">
import { warn } from '@tdesign-pro-components/utils';
import { ProFormTextProps, ProFormTextRef } from './types';
import { onMounted, ref, watch } from 'vue';

defineOptions({ name: 'ProFormText' });

const props = withDefaults(defineProps<ProFormTextProps>(), {});

const inputRef = ref<any>();

const emits = defineEmits<{
    (e: 'update:modelValue', value: string): void;
    (e: 'change', value: string, context?: { e?: InputEvent | MouseEvent | CompositionEvent; trigger: 'input' | 'initial' | 'clear' }): void;
    (e: 'input', value: InputEvent): void;
    (e: 'blur', value: string, context?: { e: FocusEvent }): void;
    (e: 'focus', value: string, context?: { e: FocusEvent }): void;
    (e: 'clear', context?: { e: MouseEvent }): void;
    (e: 'click', context?: { e: MouseEvent }): void;
    (e: 'keydown', value: string, context?: { e: KeyboardEvent }): void;
    (e: 'keypress', value: string, context?: { e: KeyboardEvent }): void;
    (e: 'keyup', value: string, context?: { e: KeyboardEvent }): void;
    (e: 'mouseenter', context?: { e: MouseEvent }): void;
    (e: 'mouseleave', context?: { e: MouseEvent }): void;
    (e: 'paste', context?: { e: ClipboardEvent; pasteValue: string }): void;
    (e: 'validate', context?: { error?: 'exceed-maximum' | 'below-minimum' }): void;
    (e: 'wheel', context: { e: WheelEvent }): void;
}>();

const innerValue = ref(props.modelValue);

const slots = defineSlots();

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

function handleClear(context?: { e: MouseEvent }) {
    emits('clear', context);
}

function handleClick(context?: { e: MouseEvent }) {
    emits('click', context);
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

function handleMouseenter(context?: { e: MouseEvent }) {
 emits('mouseenter', context);
}

function handleMouseleave(context?: { e: MouseEvent }) {
 emits('mouseleave', context);
}

function handlePaste(context?: { e: ClipboardEvent; pasteValue: string }) {
 emits('paste', context);
}

function handleValidate(context?: { error?: 'exceed-maximum' | 'below-minimum' }) {
 emits('validate', context);
}

function handleWheel(context: { e: WheelEvent }) {
 emits('wheel', context);
}

watch(() => props.modelValue, (value) => {
    innerValue.value = value;
});


watch(innerValue, (value) => {
    emits('update:modelValue', value);
});

defineExpose<ProFormInputRef>({
    blur: () => inputRef.value.blur(),
    focus: () => inputRef.value.focus(),
    getValue: () => innerValue.value,
    clear: () => innerValue.value = '',
    getRef: () => inputRef.value
})

</script>

<template>
    <t-form-item 
    :label="props.label" 
    :name="props.name"
    :rules="props.rules"
    :labelWidth="props.labelWidth"
    :labelAlign="props.labelAlign"
    :requiredMark="props.requiredMark"
    v-bind="props.formItemProps">
        <t-input-adornment v-if="(slots.prepend || slots.append || props.prepend || props.append)" :prepend="props.prepend" :append="props.append">
            <template v-if="slots.prepend" #prepend>
                <slot name="prepend" />
            </template>
            <template v-if="slots.append" #append>
                <slot name="append" />
            </template>
            <t-input
                ref="inputRef"
                :readonly="props.readonly"
                :autofocus="props.autofocus"
                :borderless="props.borderless"
                :clearable="props.clearable"
                :disabled="props.disabled"
                :size="props.size"
                :type="props.type"
                :align="props.align"
                v-model="innerValue" 
                @input="handleInput" 
                @change="handleChange"
                @blur="handleBlur"
                @focus="handleFocus"
                @clear="handleClear"
                @click="handleClick"
                @keydown="handleKeydown"
                @keypress="handleKeypress"
                @keyup="handleKeyup"
                @mouseenter="handleMouseenter"
                @mouseleave="handleMouseleave"
                @paste="handlePaste"
                @validate="handleValidate"
                @wheel="handleWheel"
                :placeholder="props.placeholder || `请输入${label || '数据'}`"
                v-bind="props.inputProps">
                <template  v-if="slots.suffixIcon" #suffixIcon>
                    <slot name="suffixIcon"></slot>
                </template>

                <template  v-if="slots.suffix" #suffix>
                    <slot name="suffix"></slot>
                </template>
                
                <template  v-if="slots.prefixIcon" #prefixIcon>
                    <slot name="prefixIcon"></slot>
                </template>
            </t-input>
        </t-input-adornment>
        <t-input 
                v-else
                ref="tInputRef"
                :readonly="props.readonly"
                :autofocus="props.autofocus"
                :borderless="props.borderless"
                :clearable="props.clearable"
                :disabled="props.disabled"
                :size="props.size"
                :type="props.type"
                :align="props.align"
                @input="handleInput" 
                v-model="innerValue" 
                @change="handleChange"
                @blur="handleBlur"
                @focus="handleFocus"
                @clear="handleClear"
                @click="handleClick"
                @keydown="handleKeydown"
                @keypress="handleKeypress"
                @keyup="handleKeyup"
                @mouseenter="handleMouseenter"
                @mouseleave="handleMouseleave"
                @paste="handlePaste"
                @validate="handleValidate"
                @wheel="handleWheel"
                :placeholder="props.placeholder || `请输入${label || '数据'}`"
                v-bind="props.inputProps">
                <template  v-if="slots.suffixIcon" #suffixIcon>
                    <slot name="suffixIcon"></slot>
                </template>

                <template  v-if="slots.suffix" #suffix>
                    <slot name="suffix"></slot>
                </template>
                
                <template  v-if="slots.prefixIcon" #prefixIcon>
                    <slot name="prefixIcon"></slot>
                </template>
            </t-input>
    </t-form-item>
</template>

<style scoped>
.t-input-adornment {
    width: 100%;
}
</style>