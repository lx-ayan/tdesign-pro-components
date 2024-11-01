<script setup lang='ts'>
import { onMounted, ref, watch } from 'vue';
import { warn } from '@tdesign-pro-components/utils/log';
import { CustomOptionInfo, ProFormSelectProps } from './types';
import { SelectDataOption, isFunction } from '@tdesign-pro-components/utils';

defineOptions({ name: 'ProFormSelect' });

const props = withDefaults(defineProps<ProFormSelectProps>(), {
    labelName: 'label',
    valueName: 'value'
});

const emits = defineEmits<{
    (e: 'update:modelValue', value: any): void;
    (e: 'change', value: { label: string, value: any } | Array<{ label: string, value: any }>): void;
}>();


const options = ref<SelectDataOption[]>([]);

const innerLoading = ref(false);

const innerValue = ref<any>(props.modelValue);

onMounted(() => {
    if (!props.name) {
        warn('name is empty');
    }
    initData();
});

function initData() {
    if (isFunction(props.data)) {
        innerLoading.value = true;
        (props.data as Function)().then((res: any) => {
            options.value = res.map((item: any) => ({ label: item[props.labelName], value: item[props.valueName], disabled: item.disabled }))
        }).finally(() => {
            innerLoading.value = false;
        })
    } else {
        options.value = (props.data as CustomOptionInfo[]).map((item: any) => ({ label: item[props.labelName], value: item[props.valueName], disabled: item.disabled }))
    }
}

function handleChange(value: any) {
    emits('change', value);
}

watch(() => props.modelValue, (value) => innerValue.value = value)

watch(innerValue, (value) => {
    emits('update:modelValue', value);
});

watch(() => props.loading, (value) => innerLoading.value = value);


</script>

<template>
    <t-form-item :name="props.name" v-bind="props.formItemProps" :label="props.label" :rules="props.rules">
        <t-select :loadingText="props.loadingText" :loading="innerLoading" valueType="object" v-bind="props.selectProps" :multiple="props.multiple" :disabled="props.disabled" :readonly="props.readonly"
            @change="handleChange" v-model="innerValue" :placeholder="props.placeholder || `请选择${label || '数据'}`"
            :options="options"></t-select>
    </t-form-item>
</template>

<style scoped></style>