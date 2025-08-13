<script setup lang='ts'>
import { DatePicker, FormItem, InputAdornment, TdFormItemProps } from 'tdesign-vue-next';
import { ProFormDatePickerProps } from './types';
import { computed, getCurrentInstance, h, useAttrs, useSlots } from 'vue';
import './index.css';

defineOptions({
    name: 'ProFormDatePicker'
});

const props = defineProps<ProFormDatePickerProps>();

const slots = useSlots();

const attrs = useAttrs();

const vm = getCurrentInstance();

const modelValue = defineModel();

buildExposed({
    clear() {
        modelValue.value = '';
    }
})

const IDatePicker = h(DatePicker, {
    ...attrs,
    readonly: props.readonly,
    disabled: props.disabled,
    placeholder: props.placeholder,
    format: props.format,
    ...props.datePickerProps,
    range: false,
}, { ...slots, label: slots.datePickerLabel });

const IFormItem = h(FormItem, {
    name: props.name,
    label: props.label,
    labelAlign: props.labelAlign,
    labelWidth: props.labelWidth,
    rules: props.rules,
    ...props.formItemProps
} as TdFormItemProps, { ...slots });

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
            ...props.datePickerProps,
        })">
            <template v-for="key in slotsKeys" :key="key" #[key]>
                <slot :name="key"></slot>
            </template>
            <component v-model="modelValue" :is="IDatePicker">

            </component>
        </component>
    </component>
</template>