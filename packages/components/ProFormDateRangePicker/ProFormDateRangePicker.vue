<script setup lang='ts'>
import { DateRangePicker, FormItem, InputAdornment, TdFormItemProps } from 'tdesign-vue-next';
import { ProFormDateRangePickerProps } from './types';
import { computed, getCurrentInstance, h, useAttrs, useSlots } from 'vue';
import './index.css';

defineOptions({
    name: 'ProFormDateRangePicker'
});

const props = withDefaults(defineProps<ProFormDateRangePickerProps>(), {
});

const slots = useSlots();

const attrs = useAttrs();

const vm = getCurrentInstance();

const modelValue = defineModel<any[]>();

buildExposed({
    clear() {
        modelValue.value = [];
    },
    getDateWithTime: () => {
        if (!modelValue.value || (modelValue.value && !modelValue.value.length)) {
            return []
        } else {
            if (!props.format) {
                [modelValue.value[0] + ' 00:00:00', modelValue.value[1] + ' 23:59:59']
            } else {
                const hasTime = props.format.toLocaleLowerCase().includes('hh:mm:ss');
                return hasTime ? modelValue.value : [modelValue.value[0] + ' 00:00:00', modelValue.value[1] + ' 23:59:59'];
            }
        }
    }
});

const IDatePicker = h(DateRangePicker, {
    ...attrs,
    readonly: props.readonly,
    disabled: props.disabled,
    placeholder: props.placeholder,
    format: props.format,
    ...props.dateRangePickerProps,
    range: true,
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
        <component v-model="modelValue" :is="IDatePicker">

        </component>
    </component>
</template>