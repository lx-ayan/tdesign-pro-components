<script setup lang='ts'>
import { ProFormRadioProps, RadioOptionProps } from './types';
import { onMounted, ref, watch } from 'vue';
import { ValueType, isFunction, warn } from '@tdesign-pro-component/utils';
import { useVModel } from '@tdesign-pro-component/hooks';

const emits = defineEmits<{
    (e: 'update:modelValue', value: ValueType): void,
    (e: 'change', value: ValueType, context: {e: Event, name?: string} ): void
}>()

defineOptions({
    name: 'ProFormRadio'
});

const props = withDefaults(defineProps<ProFormRadioProps>(), {
    labelName: 'label',
    valueName: 'value',
    labelAlign: 'left'
});

const innerValue = useVModel(props, 'modelValue', emits, props.modelValue || '');

const options = ref<RadioOptionProps[]>([]);

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
        options.value = (props.data as RadioOptionProps[]).map((item: any) => ({ label: (item as any)[props.labelName], value: (item as any)[props.valueName], disabled: (item as { disabled: boolean }).disabled }))
    }
}

function handleChange(value: ValueType, context: {e: Event, name?: string}) {
    emits('change', value, context);
}

watch(() => props.data, () => {
    initData();
})

defineExpose({
  getValue: () => innerValue.value
});

</script>
<template>
    <t-form-item :labelWidth="props.labelWidth" :labelAlign="props.labelAlign" :rules="props.rules" :label="props.label" :name="props.name" v-bind="props.formItemProps">
        <t-radio-group v-bind="props.radioProps" :variant="props.variant" :disabled="props.disabled" :readonly="props.readonly" v-model="innerValue" @change="handleChange">
            <template v-if="!props.button">
                <t-radio v-for="item in options" :value="item.value" :label="item.label" :key="item.label">
                    <slot name="default" v-if="slots.default" :label="item.label" :value="item.value"></slot>
                    <template v-else>
                        {{ item.label }}
                    </template>
                </t-radio>
            </template>
            <template v-else>
                <t-radio-button v-for="item in options" :value="item.value" :label="item.label" :key="item.label">
                    <slot name="default" v-if="slots.default" :label="item.label" :value="item.value"></slot>
                    <template v-else>
                        {{ item.label }}
                    </template>
                </t-radio-button>
            </template>
        </t-radio-group>
    </t-form-item>
</template>

<style lang='scss'></style>