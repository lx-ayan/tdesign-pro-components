<script setup lang='tsx'>
import { FormItem, Select, InputAdornment, TdFormItemProps, Option } from 'tdesign-vue-next';
import { ProFormSelectProps } from './types';
import { getCurrentInstance, h, onMounted, ref, useSlots } from 'vue';
import { buildData, OptionData } from '@tdesign-pro-component/utils';
import useSlotKey from '../../hooks/useSlotKeys';
import { OptionRenderer } from '@tdesign-pro-component/utils/components';

defineOptions({
    name: 'ProFormSelect'
});

const props = withDefaults(defineProps<ProFormSelectProps>(), {
    keyName: 'label',
    valueName: 'value'
});

const slots = useSlots();

const slotsKeys = useSlotKey(slots);

const options = ref<OptionData[]>([]);

const modelValue = defineModel();

const vm = getCurrentInstance();

buildExposed({
    clear() {
        modelValue.value = props.selectProps.multiple ? [] : '';
    },
    resetData() {
        makeData();
    }
})

const IFormItem = h(FormItem, {
    name: props.name,
    label: props.label,
    labelAlign: props.labelAlign,
    labelWidth: props.labelWidth,
    rules: props.rules,
    ...props.formItemProps
} as TdFormItemProps, { ...slots });

async function makeData() {
    buildData(props.data, props.keyName, props.valueName).then(res => {
        options.value = res;
    });
}

onMounted(() => {
    makeData();
});

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
</script>

<template>
    <component :is="IFormItem">
        <template v-for="key in slotsKeys" :key="key" #[key]>
            <slot :name="key"></slot>
        </template>
        <component :is="h(InputAdornment, {
            ...props.selectProps,
        })">
            <template v-for="key in slotsKeys" :key="key" #[key]>
                <slot :name="key"></slot>
            </template>

            <Select :placeholder="props.selectProps?.placeholder || props.placeholder"
                :readonly="props.selectProps?.readonly || props.readonly"
                :disabled="props.selectProps?.disabled || props.disabled" v-bind="{ ...$attrs, ...props.selectProps }"
                v-model="modelValue">
                <template v-for="key in slotsKeys" :key="key" #[key]>
                    <slot :name="key"></slot>
                </template>
                <template v-if="$slots.selectLabel" #label>
                    <slot name="selectLabel"></slot>
                </template>
                <Option :label="option.label" :disabled="option.disabled" :value="option.value"
                    v-for="option in options" :key="option.value">
                    <OptionRenderer :option="option"></OptionRenderer>
                </Option>
            </Select>
        </component>
    </component>
</template>