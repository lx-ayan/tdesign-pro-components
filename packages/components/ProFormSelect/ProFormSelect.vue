<script setup lang='ts'>
import { onMounted, ref, watch } from 'vue';
import { warn } from '@tdesign-pro-components/utils/log';
import { ProFormSelectProps } from './types';

defineOptions({ name: 'ProFormSelect' });

const props = withDefaults(defineProps<ProFormSelectProps>(), {
    labelName: 'label',
    valueName: 'value'
});

const emits = defineEmits<{
    (e: 'update:modelValue', value: any): void;
    (e: 'change', value: { label: string, value: any } | Array<{ label: string, value: any }>): void;
}>();


const options = ref<any[]>([]);

const innerValue = ref<any>(props.modelValue);

function handleChange(value: any) {
    console.log('value',value);
}

watch(() => props.modelValue, (val) => innerValue.value = val)

onMounted(() => {
    if (!props.name) {
        warn('name is empty')
    }
})
</script>

<template>
    <t-form-item :name="props.name" v-bind="props.formItemProps" :label="props.label" :rules="props.rules">
        <t-select v-bind="$attrs" :multiple="multiple" :disabled="disabled"
            :readonly="props.readonly" @change="handleChange" v-model="innerValue"
            :placeholder="props.placeholder || `请选择${label || '数据'}`" :options="options"></t-select>
    </t-form-item>
</template>

<style scoped></style>