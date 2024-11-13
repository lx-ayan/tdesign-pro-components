<script setup lang='ts'>
import { onMounted, ref, watch } from 'vue';
import { ProFormOption, ProFormProps, ProFormRef } from './types';
import { initFormData, initFormValue, filterChangedValues } from './utils';
import { warn } from '@tdesign-pro-component/utils';

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

const formRef = ref<any>();

const emits = defineEmits<{
    (e: 'submit', value: any): void;
    (e: 'error', result: any, message: string): void;
    (e: 'reset'): void;
}>();

const props = withDefaults(defineProps<ProFormProps>(), {
    submitFilter: true,
    showReset: true,
    submitText: '提交',
    resetText: '重置',
    marginY: 24,
    footerAligin: 'right'
});

const slots = defineSlots();

const innerOptions = ref<ProFormOption[]>([]);

let initForm: any = {};

const innerFormValue = ref<any>();

onMounted(() => {
    init();
});

function init() {
    (innerOptions.value as ProFormOption[]) = props.options.filter(option => !option.hidden);
    if (!props.request) {
        initForm = initFormValue(initFormData(innerOptions.value as ProFormOption[]), innerOptions.value as ProFormOption[]);
        innerFormValue.value = initFormValue(JSON.parse(JSON.stringify(initForm)), innerOptions.value as ProFormOption[]);
    } else {
        props.request().then(res => {
            initForm = initFormValue(res, innerOptions.value as ProFormOption[]);
            innerFormValue.value = initFormValue(JSON.parse(JSON.stringify(res)), innerOptions.value as ProFormOption[]);
        });
    }
}

function handleSubmit() {
    formRef.value.validate().then((result: any) => {
        if (result === true) {
            const resultValue = props.submitFilter ? filterChangedValues(initForm, getFormValue()) : getFormValue();
            emits('submit', resultValue);
        } else {
            warn('请查看表单');
            emits('error', result, '请检查表单');
        }
    })
}

function handleReset() {
    emits('reset');
    formRef.value.reset();
}

function getFormValue() {
    return innerFormValue.value
}

defineExpose<ProFormRef>({
    initForm: init,
    getFormValue,
    submit: () => handleSubmit(),
    reset: () => handleReset(),
    setItem: (key: string, value: any) => {
        innerFormValue.value[key] = value;
    }
})

watch(() => props.options, () => {
    init();
}, { deep: true });

</script>

<template>
    <t-form class="pro-form" ref="formRef" :labelAlign="props.labelAlign" :labelWidth="props.labelWidth"
        :rules="props.rules" v-bind="props.formProps" @submit="handleSubmit" @reset="handleReset"
        :data="innerFormValue">
        <t-row align="center" :gutter="[48, props.marginY]" v-if="innerFormValue">
            <t-col :span="item.span || 6" :key="index" v-for="item, index in innerOptions">
                <template v-if="item.type != 'upload'">
                    <component :is="TYPE_CONSTABLE[(item.type as TYPEKEY) || 'text'].componentName"
                        v-model="innerFormValue[item.name]" :key="item.name + index" :label="item.label"
                        :labelName="item.labelName" :valueName="item.valueName" :childrenName="item.childrenName"
                        :rules="item.rules" :multiple="item.multiple" :name="item.name" :data="item.data"
                        :readonly="props.readonly || item.readonly" :range="item.range"
                        :disabled="props.disabled || item.disabled" :placeholder="item.placeholder"
                        :formItemProps="item.formItemProps"
                        v-bind="item[TYPE_CONSTABLE[(item.type as TYPEKEY) || 'text'].propsName as keyof ProFormOption]"
                        v-if="!slots[`form-${item.name}`]">
                    </component>

                    <slot v-else :name="`form-${item.name}`" :form="innerFormValue" v-bind="item"></slot>
                </template>
                <t-form-item v-else :key="item.name + index" :label="item.label" :rules="item.rules" :name="item.name">
                    <t-upload v-model="innerFormValue[item.name]" :multiple="item.multiple"
                        :readonly="props.readonly || item.readonly" :disabled="props.disabled || item.disabled"
                        v-bind="item.uploadProps">
                    </t-upload>
                </t-form-item>
            </t-col>
        </t-row>
        <t-form-item v-if="!props.hideFooter">
            <div v-if="!slots.footer" class="pro-form-footer">
                <template v-if="!props.hideFooter && !slots.footer">
                    <t-button v-bind="props.submitButtonProps" class="pro-form-submit-button" type="submit">{{
        props.submitText }}</t-button>
                    <t-button v-bind="props.resetButtonProps" v-if="props.showReset" theme="default" type="reset">{{
                        props.resetText }}</t-button>
                    <slot name="extra"></slot>
                </template>

                <template v-else>
                    <slot name="footer"></slot>
                </template>
            </div>
        </t-form-item>
    </t-form>
</template>

<style>
.pro-form {
    overflow-x: hidden;
}

.pro-form-footer {
    margin-top: 24px;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: v-bind('props.footerAligin');
}

.pro-form-submit-button {
    margin-right: 12px;
}
</style>