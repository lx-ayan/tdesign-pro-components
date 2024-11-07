<script setup lang='ts'>
import { ValueType, isFunction, warn } from '@tdesign-pro-components/utils';
import { CheckboxOptionProps, ProFormCheckboxProps } from './types';
import { onMounted, ref, watch } from 'vue';
import { useVModel } from '@tdesign-pro-components/hooks';
const emits = defineEmits<{
    (e: 'update:modelValue', value: ValueType): void,
    (e: 'change', value: ValueType, context: { e: Event, name?: string }): void
}>()

defineOptions({
    name: 'ProFormCheckbox'
});

const props = withDefaults(defineProps<ProFormCheckboxProps>(), {
    labelName: 'label',
    valueName: 'value'
});

const innerValue = useVModel(props, 'modelValue', emits, props.modelValue || []);

const options = ref<CheckboxOptionProps[]>([]);

const slots = defineSlots();

onMounted(() => {
    if (!props.name) {
        warn('name is empty');
    }
    initData();
});

function initData() {
    if (isFunction(props.data)) {
        (props.data as Function)().then((res: any) => {
            options.value = res.map((item: any) => ({ label: (item as any)[props.labelName], value: (item as any)[props.valueName], disabled: (item as { disabled: boolean }).disabled }))
        })
    } else {
        options.value = (props.data as CheckboxOptionProps[]).map((item: any) => ({ label: (item as any)[props.labelName], value: (item as any)[props.valueName], disabled: (item as { disabled: boolean }).disabled }))
    }
}

function handleChange(value: ValueType, context: { e: Event, name?: string }) {
    emits('change', value, context);
}

watch(() => props.data, () => {
    initData();
});

defineExpose({
    getValue: () => innerValue.value
});

</script>

<template>
    <t-form-item :labelWidth="props.labelWidth" :labelAlign="props.labelAlign"
        :label="props.label" :name="props.name" v-bind="props.checkboxProps" :rules="props.rules">
        <t-checkbox-group v-model="innerValue" @change="handleChange" :max="props.max" :disabled="props.disabled"
            :readonly="props.readonly" :options="options" v-bind="props.checkboxProps"></t-checkbox-group>
    </t-form-item>
</template>

<style lang='scss'></style>