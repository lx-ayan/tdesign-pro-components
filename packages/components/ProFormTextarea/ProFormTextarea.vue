<script setup lang='ts'>
import { FormItem, TdFormItemProps, Textarea } from 'tdesign-vue-next';
import { ProFormTextareaProps } from './types';
import { computed, getCurrentInstance, h, useAttrs, useSlots } from 'vue';
const props = defineProps<ProFormTextareaProps>();

const slots = useSlots();

const attrs = useAttrs();

const vm = getCurrentInstance();

buildExposed({
    clear() {
        modelValue.value = '';
    }
})

defineOptions({
    name: 'ProFormTextarea'
});

function changeRef(inputRef) {
    buildExposed({ ...inputRef });
}

const IInput = h(Textarea, {
    ...attrs,
    readonly: props.readonly,
    disabled: props.disabled,
    placeholder: props.placeholder,
    ...props.textareaProps,
}, { ...slots });

const IFormItem = h(FormItem, {
    name: props.name,
    label: props.label,
    labelAlign: props.labelAlign,
    labelWidth: props.labelWidth,
    rules: props.rules,
    ...props.formItemProps
} as TdFormItemProps, { ...slots });

const modelValue = defineModel();

function buildExposed(fn: Object) {
    vm.exposed = {
        ...vm.exposed,
        ...fn
    }

    vm.exposeProxy = {
        ...vm.exposed,
        ...fn
    }
}

const slotsKeys = computed(() => Object.keys(slots));
</script>

<template>
    <component :is="IFormItem">
        <template v-for="key in slotsKeys" :key="key" #[key]>
            <slot :name="key"></slot>
        </template>
        <component v-model="modelValue" :is="IInput">

        </component>
    </component>
</template>