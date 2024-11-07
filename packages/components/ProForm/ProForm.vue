<script setup lang='ts'>
import { onMounted, ref } from 'vue';
import { ProFormOption, ProFormProps } from './types';
import { initFormData } from './utils';

defineOptions({ name: 'ProForm' });

const TYPE_CONSTABLE = {
    text: {
        propsName: 'textProps',
        componentName: 'ProFormText'
    },
    select: {
        propsName: 'selectProps',
        componentName: 'ProFormSelect'
    },
    radio: {
        propsName: 'radioProps',
        componentName: 'ProFormRadio'
    },
    textarea: {
        propsName: 'textareaProps',
        componentName: 'ProFormTextarea'
    },
    datepicker: {
        propsName: 'datepickerProps',
        componentName: 'ProFormDatepicker'
    },
    checkbox: {
        propsName: 'checkboxProps',
        componentName: 'ProFormCheckbox'
    },
    number: {
        propsName: 'numberProps',
        componentName: 'ProFormInputNumber'
    },
    treeSelect: {
        propsName: 'treeSelectProps',
        componentName: 'ProFormTreeSelect'
    }
}

type TYPEKEY = keyof typeof TYPE_CONSTABLE;

const props = withDefaults(defineProps<ProFormProps>(), {
    filterEmpty: true,
    submitFilter: true,
    submitText: '提交',
    resetText: '重置'
});

const slots = defineSlots();

let initFormValue: any = {};

const innerFormValue = ref<any>();

onMounted(() => {
    init();
});

function init() {
    if (!props.request) {
        initFormValue = initFormData(props.options);
        innerFormValue.value = JSON.parse(JSON.stringify(initFormValue));
    } else {
        props.request().then(res => {
            initFormValue = res;
            innerFormValue.value = JSON.parse(JSON.stringify(res));
        })
    }
}

</script>

<template>

    <t-form :data="innerFormValue">
        {{innerFormValue}}
        <t-row :gutter="[0, 28]" v-if="innerFormValue">
            <t-col :span="item.span || 6" :key="index" v-for="item, index in props.options">
                <component v-model="innerFormValue[item.name]"
                    :is="TYPE_CONSTABLE[(item.type as TYPEKEY) || 'text'].componentName" :label="item.label"
                    :labelName="item.labelName"
                    :valueName="item.valueName"
                    :childrenName="item.childrenName"
                    :rules="item.rules"
                    :name="item.name" :data="item.data" :readonly="props.readonly || item.readonly"
                    :disabled="props.disabled || item.disabled"
                    v-bind="item[TYPE_CONSTABLE[(item.type as TYPEKEY) || 'text'].propsName as keyof ProFormOption]"
                    v-if="!slots[`form-${item.name}`]">
                </component>
                <slot v-else :name="`form-${item.name}`" :form="innerFormValue" v-bind="item"></slot>
            </t-col>
        </t-row>

        <t-form-item>
            <t-button type="submit">提交</t-button>

            <t-button type="reset">重置</t-button>
        </t-form-item>
    </t-form>
</template>

<style lang='scss'></style>