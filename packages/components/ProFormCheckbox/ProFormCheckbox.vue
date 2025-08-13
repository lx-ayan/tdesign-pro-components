<script setup lang='tsx'>
import { getCurrentInstance, h, onMounted, ref, useSlots } from 'vue';
import { ProFormCheckboxProps } from './types';
import { FormItem, TdFormItemProps, RadioGroup, Radio, CheckboxGroup, Checkbox } from 'tdesign-vue-next';
import useSlotKey from '@tdesign-pro-component/hooks/useSlotKeys';
import { buildData, OptionData } from '@tdesign-pro-component/utils';
import { OptionRenderer } from '@tdesign-pro-component/utils/components';

defineOptions({
    name: 'ProFormCheckbox'
});

const props = withDefaults(defineProps<ProFormCheckboxProps>(), {
    keyName: 'label',
    valueName: 'value'
});

const slots = useSlots();

const options = ref<OptionData[]>([]);

const slotsKeys = useSlotKey(slots);

const modelValue = defineModel<any[]>();

const vm = getCurrentInstance();

buildExposed({
    clear() {
        modelValue.value = [];
    },
    resetData() {
        makeData();
    }
});

const IFormItem = h(FormItem, {
    name: props.name,
    label: props.label,
    labelAlign: props.labelAlign,
    labelWidth: props.labelWidth,
    rules: props.rules,
    ...props.formItemProps
} as TdFormItemProps);

onMounted(() => {
    makeData();
})

function makeData() {
    buildData(props.data, props.keyName, props.valueName).then(res => {
        options.value = res;
    })
}

function buildExposed(fn: Object = {}) {
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
        <CheckboxGroup v-model="modelValue" :readonly="props.checkboxProps?.readonly || props.readonly"
            :disabled="props.checkboxProps?.disabled || props.disabled"  v-bind="{ ...$attrs, ...props.checkboxProps }">
            <Checkbox :disabled="option.disabled" :value="option.value" v-for="option in options" :key="option.value">
                <OptionRenderer :option="option"></OptionRenderer>
            </Checkbox>
        </CheckboxGroup>
    </component>
</template>