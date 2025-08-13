<script setup lang='ts'>
import { FormItem, Input, InputAdornment, TdFormItemProps } from 'tdesign-vue-next';
import { ProFormTextProps } from './types';
import { computed, getCurrentInstance, h, useAttrs, useSlots } from 'vue';
import './index.css';
const props = defineProps<ProFormTextProps>();

const slots = useSlots();

const attrs = useAttrs();

const vm = getCurrentInstance();

buildExposed({
    clear() {
        modelValue.value = '';
    }
})

defineOptions({
    name: 'ProFormText'
});

function changeRef(inputRef) {
    buildExposed({ ...inputRef });
}

const IInput = h(Input, {
    ...attrs,
    readonly: props.readonly,
    disabled: props.disabled,
    placeholder: props.placeholder,
    ...props.inputProps,
}, { ...slots, label: slots.inputLabel });

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
        <component :is="h(InputAdornment, {
            ...props.inputProps,
        })">
            <template v-for="key in slotsKeys" :key="key" #[key]>
                <slot :name="key"></slot>
            </template>
            <component :ref="changeRef" v-model="modelValue" :is="IInput">

            </component>
        </component>
    </component>
</template>