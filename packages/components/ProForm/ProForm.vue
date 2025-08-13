<script lang="ts" setup>
import { omit } from 'lodash-es';
import ProFormCheckbox from '../ProFormCheckbox/ProFormCheckbox.vue';
import ProFormDatePicker from '../ProFormDatePicker/ProFormDatePicker.vue';
import ProFormDateRangePicker from '../ProFormDateRangePicker/ProFormDateRangePicker.vue';
import ProFormInputNumber from '../ProFormInputNumber/ProFormInputNumber.vue';
import ProFormRadio from '../ProFormRadio/ProFormRadio.vue';
import ProFormSelect from '../ProFormSelect/ProFormSelect.vue';
import ProFormText from '../ProFormText/ProFormText.vue';
import ProFormTextarea from '../ProFormTextarea/ProFormTextarea.vue';
import ProFormTreeSelect from '../ProFormTreeSelect/ProFormTreeSelect.vue';
import { ProFormOption, ProFormProps } from './types';

const ROOT_PROPS = ['name', 'label', 'type', 'hidden', 'colProps', 'data'];

const props = defineProps<ProFormProps>();

const componentMap = {
    'text': ProFormText,
    'select': ProFormSelect,
    'date': ProFormDatePicker,
    'dateRange': ProFormDateRangePicker,
    'radio': ProFormRadio,
    'checkbox': ProFormCheckbox,
    'treeSelect': ProFormTreeSelect,
    'inputNumber': ProFormInputNumber,
    'textarea': ProFormTextarea
}

function buildOptions() {

}

function getProps(option: ProFormOption) {
    if (option.props) return option.props;
    return Object.entries(option).reduce((props, [key, value]) => {
        if (!ROOT_PROPS.includes(key)) {
            return typeof value === 'object'
                ? { ...props, ...value }
                : { ...props, [key]: value };
        }
        return props;
    }, {} as Record<string, any>);
}

function getComponent() {

}


</script>

<template>
    <t-form>

    </t-form>
</template>