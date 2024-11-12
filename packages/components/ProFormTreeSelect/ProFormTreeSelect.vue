<script setup lang='ts'>
import { onMounted, ref, watch } from 'vue';
import { ProFormTreeSelectProps, ProFormTreeSelectRef, TreeSelectOptionProps } from './types';
import { isFunction, warn } from '@tdesign-pro-component/utils';
import { SelectInputValueChangeContext, TreeSelectValue } from 'tdesign-vue-next';
import { useVModel } from '@tdesign-pro-component/hooks';

defineOptions({
    name: 'ProFormTreeSelect'
})

const props = withDefaults(defineProps<ProFormTreeSelectProps>(), {
    labelName: 'label',
    valueName: 'value',
    childrenName: 'children'
});

const emits = defineEmits<{
    (e: 'update:modelValue', value: any): void;
    (e: 'change', value: any, context: any): void;
    (e: 'enter', context: { inputValue: string; e: KeyboardEvent; value: TreeSelectValue }): void;
    (e: 'focus', context: { value: TreeSelectValue; e: FocusEvent }): void;
    (e: 'input-change', value: string, context: SelectInputValueChangeContext): void;
    (e: 'popup-visible-change', visible: boolean, context: any): void;
    (e: 'remove', options: any): void;
    (e: 'search', filterWords: string, context: { e: KeyboardEvent | SelectInputValueChangeContext['e'] }): void;
}>();

const innerLoading = ref(false);

const innerValue = useVModel(props, 'modelValue', emits, props.modelValue || '');

const selectRef = ref<any>();

const options = ref<TreeSelectOptionProps[]>([]);

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
        (props.data as Function)().then((res: TreeSelectOptionProps[]) => {
            options.value = makeData(res);
        }).finally(() => {
            innerLoading.value = false;
        });
    } else {
        options.value = makeData(props.data as TreeSelectOptionProps[]);
    }
}

function handleChange(value: any, context: any) {
    emits('change', value, context);
}

function handleEnter(context: { inputValue: string; e: KeyboardEvent; value: TreeSelectValue }) {
    emits('enter', context);
}

function handleFocus(context: { value: TreeSelectValue; e: FocusEvent }) {
    emits('focus', context);
}

function handleRemove(options: any) {
    emits('remove', options);
}

function handleSearch(filterWords: string, context: { e: KeyboardEvent }) {
    emits('search', filterWords, context);
}

function handleInputChange(value: string, context: SelectInputValueChangeContext) {
    emits('input-change', value, context);
}

function handlePopupVisibleChange(visible: boolean, context: any) {
    emits('popup-visible-change', visible, context);
}

function makeData(list: TreeSelectOptionProps[]) {
    const resultList: TreeSelectOptionProps[] = [];
    list.forEach(item => {
        let obj: TreeSelectOptionProps = {
            label: item[props.labelName],
            value: item[props.valueName],
        }
        if (item[props.childrenName]) {
            obj[props.childrenName] = makeData(item[props.childrenName])
        }
        resultList.push(obj)
    })

    return resultList;
}

watch(() => props.loading, (value) => innerLoading.value = value);

watch(() => props.data, () => {
    initData();
});

defineExpose<ProFormTreeSelectRef>({
    getValue: () => innerValue.value,
    focus: () => selectRef.value.focus(),
    blur: () => selectRef.value.blur(),
    clear: () => {
        innerValue.value = props.multiple ? [] : '';
    },
    getRef: () => selectRef.value
});
</script>
<template>
    <t-form-item :requiredMark="props.requiredMark" :label="props.label" :name="props.name"
        :labelWidth="props.labelWidth" :labelAlign="props.labelAlign" v-bind="props.formItemProps">
        <t-input-adornment style="width: 100%; border:1px solid red;" v-if="(slots.prepend || slots.append || props.prepend || props.append)"
            :prepend="props.prepend" :append="props.append">
            <template v-if="slots.prepend" #prepend>
                <slot name="prepend" />
            </template>
            <template v-if="slots.append" #append>
                <slot name="append" />
            </template>
            <t-tree-select v-model="innerValue"  :data="options" :placeholder="props.placeholder || `请选择${props.label || '数据'}`"
                @change="handleChange" @enter="handleEnter" @focus="handleFocus" @input-change="handleInputChange"
                @popup-visible-change="handlePopupVisibleChange" @remove="handleRemove" @search="handleSearch"
                :disabled="props.disabled" :readonly="props.readonly" :size="props.size" :autoWidth="props.autoWidth"
                :borderless="props.borderless" :clearable="props.clearable" :loading="innerLoading"
                :filterable="props.filterable" :multiple="props.multiple" v-bind="props.treeSelectProps">
                <template v-if="slots.valueDisplay" #valueDisplay="{ value, onClose }">
                    <slot name="valueDisplay" :value="value" :on-close="onClose"></slot>
                </template>
                <template v-if="slots.prefixIcon" #prefixIcon>
                    <slot name="prefixIcon"></slot>
                </template>
                <template v-if="slots.suffix" #suffix>
                    <slot name="suffix"></slot>
                </template>

                <template v-if="slots.collapsedItems" #collapsedItems="{ value, onClose }">
                    <slot name="collapsedItems" :value="value" :on-close="onClose"></slot>
                </template>
            </t-tree-select>
        </t-input-adornment>
        <t-tree-select v-else v-model="innerValue" :data="options" :placeholder="props.placeholder || `请选择${props.label || '数据'}`"
            @change="handleChange" @enter="handleEnter" @focus="handleFocus" @input-change="handleInputChange"
            @popup-visible-change="handlePopupVisibleChange" @remove="handleRemove" @search="handleSearch"
            :disabled="props.disabled" :readonly="props.readonly" :size="props.size" :autoWidth="props.autoWidth"
            :borderless="props.borderless" :clearable="props.clearable" :loading="innerLoading"
            :filterable="props.filterable" :multiple="props.multiple" v-bind="props.treeSelectProps">
            <template v-if="slots.valueDisplay" #valueDisplay="{ value, onClose }">
                <slot name="valueDisplay" :value="value" :on-close="onClose"></slot>
            </template>
            <template v-if="slots.prefixIcon" #prefixIcon>
                <slot name="prefixIcon"></slot>
            </template>
            <template v-if="slots.suffix" #suffix>
                <slot name="suffix"></slot>
            </template>

            <template v-if="slots.collapsedItems" #collapsedItems="{ value, onClose }">
                <slot name="collapsedItems" :value="value" :on-close="onClose"></slot>
            </template>
        </t-tree-select>
    </t-form-item>
</template>