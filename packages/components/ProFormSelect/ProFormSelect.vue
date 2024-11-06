<script setup lang='ts'>
import { onMounted, ref, watch } from 'vue';
import { ProFormSelectProps, SelectOptionProps } from './types';
import { isFunction, warn } from '@tdesign-pro-components/utils';

defineOptions({ name: 'ProFormSelect' });

const props = withDefaults(defineProps<ProFormSelectProps>(), {
    labelName: 'label',
    valueName: 'value'
});

const emits = defineEmits<{
    (e: 'update:modelValue', value: any): void;
    (e: 'change', value: { label: string, value: any } | Array<{ label: string, value: any }>): void;
}>();

const options = ref<SelectOptionProps[]>([]);

const innerLoading = ref(false);

const isGroup = ref(false);

const innerValue = ref<any>(props.modelValue);

const slots = defineSlots();

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
            options.value = res.map((item: any) => makeOptionData(item))
        }).finally(() => {
            innerLoading.value = false;
        })
    } else {
        options.value = (props.data as SelectOptionProps[]).map((item: any) => {
            return makeOptionData(item)
        })
    }
}

function makeOptionData(item: SelectOptionProps) {
    if (item.group) {
        isGroup.value = true;
        return {
            ...item,
            children: item.children?.map((children: any) => ({ label: children[props.labelName], value: children[props.valueName], disabled: children.disabled }))
        }
    } else {
        isGroup.value = false;
        return { label: (item as any)[props.labelName], value: (item as any)[props.valueName], disabled: (item as { disabled: boolean }).disabled }
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

watch(() => props.data, () => {
    initData();
})

</script>

<template>
    <t-form-item :name="props.name" v-bind="props.formItemProps" :label="props.label" :rules="props.rules" :labelWidth="props.labelWidth" :labelAlign="props.labelAlign" :requiredMark="props.requiredMark">
        <t-input-adornment v-if="(slots.prepend || slots.append || props.prepend || props.append)"
            :prepend="props.prepend" :append="props.append">
            <template v-if="slots.prepend" #prepend>
                <slot name="prepend" />
            </template>
            <template v-if="slots.append" #append>
                <slot name="append" />
            </template>
            <t-select :label="props.selectLabel" :creatable="props.creatable" :clearable="props.clearable"
                :borderless="props.borderless" :autoWidth="props.autoWidth" :autofocus="props.autofocus"
                :loadingText="props.loadingText" :loading="innerLoading" v-bind="props.selectProps"
                :multiple="props.multiple" :disabled="props.disabled" :readonly="props.readonly" @change="handleChange"
                v-model="innerValue" :placeholder="props.placeholder || `请选择${label || '数据'}`">
                <template v-if="slots.prefixIcon" #prefixIcon>
                    <slot name="prefixIcon"></slot>
                </template>

                <template v-if="slots.panelTopContent" #panelTopContent>
                    <slot name="panelTopContent"></slot>
                </template>

                <template v-if="slots.panelBottomContent" #panelBottomContent>
                    <slot name="panelTopContent"></slot>
                </template>

                <template v-if="slots.valueDisplay" #valueDisplay="{ value }">
                    <slot :value="value" name="valueDisplay"></slot>
                </template>

                <template v-if="isGroup">
                    <t-option-group v-for="(list, index) in options" :key="index"
                        :label="typeof list.group === 'object' ? list.group.label : list.group" divider>
                        <t-option v-for="option in list.children" :key="option.value" :value="option.value"
                            :label="option.label">
                            <template v-if="slots.default" #default>
                                <slot name="default" :value="option.value" :label="option.label"></slot>
                            </template>
                        </t-option>
                    </t-option-group>
                </template>
                <template v-else>
                    <t-option v-for="option in options" :key="option.value" :value="option.value" :label="option.label">
                        <template v-if="slots.default" #default>
                            <slot name="default" :value="option.value" :label="option.label"></slot>
                        </template>
                    </t-option>
                </template>

                <template v-if="slots['select-label']" #label>
                    <slot name="select-label"></slot>
                </template>
            </t-select>
        </t-input-adornment>
        <t-select v-else :label="props.selectLabel" :creatable="props.creatable" :clearable="props.clearable"
            :borderless="props.borderless" :autoWidth="props.autoWidth" :autofocus="props.autofocus"
            :loadingText="props.loadingText" :loading="innerLoading" v-bind="props.selectProps"
            :multiple="props.multiple" :disabled="props.disabled" :readonly="props.readonly" @change="handleChange"
            v-model="innerValue" :placeholder="props.placeholder || `请选择${label || '数据'}`">
            <template v-if="slots.prefixIcon" #prefixIcon>
                <slot name="prefixIcon"></slot>
            </template>

            <template v-if="slots.panelTopContent" #panelTopContent>
                <slot name="panelTopContent"></slot>
            </template>

            <template v-if="slots.panelBottomContent" #panelBottomContent>
                <slot name="panelTopContent"></slot>
            </template>

            <template v-if="slots.valueDisplay" #valueDisplay="{ value }">
                <slot :value="value" name="valueDisplay"></slot>
            </template>

            <template v-if="isGroup">
                <t-option-group v-for="(list, index) in options" :key="index"
                    :label="typeof list.group === 'object' ? list.group.label : list.group" divider>
                    <t-option v-for="option in list.children" :key="option.value" :value="option.value"
                        :label="option.label">
                        <template v-if="slots.default" #default>
                            <slot name="default" :value="option.value" :label="option.label"></slot>
                        </template>
                    </t-option>
                </t-option-group>
            </template>
            <template v-else>
                <t-option v-for="option in options" :key="option.value" :value="option.value" :label="option.label">
                    <template v-if="slots.default" #default>
                        <slot name="default" :value="option.value" :label="option.label"></slot>
                    </template>
                </t-option>
            </template>

            <template v-if="slots['select-label']" #label>
                <slot name="select-label"></slot>
            </template>
        </t-select>
    </t-form-item>
</template>

<style scoped></style>