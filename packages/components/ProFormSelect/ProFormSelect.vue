<script setup lang='ts'>
import { onMounted, ref, watch } from 'vue';
import { warn } from '@tdesign-pro-components/utils/log';

defineOptions({ name: 'ProFormSelect' });

const props = defineProps(_props);

const emits = defineEmits<ProFormSelectEmits>();

const labelName = props.keyName || 'label';

const valueName = props.valueName || 'value';

const options = ref<any[]>([]);

const innerValue = ref<any>(props.modelValue);

function handleChange(value: any) {
    if (!options.value.length) return;
    emits('update:modelValue', value);
    if (!props.multiple) {
        emits('change', { label: options.value.find(item => item[valueName] == value)[labelName], value })
    } else {
        const data = options.value.filter(item => {
            return value.includes(item.value)
        })
        emits('change', data);
    }
}

watch(() => props.modelValue, (val) => innerValue.value = val)

onMounted(() => {
    if (!props.name) {
        warn('name is empty')
    }
})
</script>

<template>
    <t-form-item :name="props.name" v-bind="props.formAttrs" :label="props.label"
        :rules="props.rules">
        <t-select :style="{ width: props.width }" v-bind="$attrs" :multiple="multiple" :disabled="disabled"
            :readonly="props.readonly" @change="handleChange" v-model="innerValue"
            :placeholder="props.placeholder || '请选择'" :options="options"></t-select>
    </t-form-item>
</template>

<style scoped></style>