<script setup lang='tsx'>
import { onMounted, ref, watch } from 'vue';
import { ProFormOption, ProFormProps, ProFormRef } from './types';
import { initFormData, initFormValue, filterChangedValues, removeEmptyStringFields } from './utils';
import { warn } from '@tdesign-pro-component/utils';
import { ProFormText } from "../ProFormText";
import { ProFormCheckbox } from "../ProFormCheckbox";
import { ProFormSelect } from "../ProFormSelect";
import { ProFormRadio } from "../ProFormRadio";
import { ProFormDatepicker } from "../ProFormDatepicker";
import { ProFormInputNumber } from "../ProFormInputNumber";
import { ProFormTextarea } from "../ProFormTextarea";
import { ProFormTreeSelect } from "../ProFormTreeSelect";
import { useVModel } from '@tdesign-pro-component/hooks';

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
    (e: 'update:loading', v: boolean): void;
}>();

const props = withDefaults(defineProps<ProFormProps>(), {
    submitFilter: true,
    showReset: true,
    submitText: '提交',
    resetText: '重置',
    marginY: 24,
    footerAligin: 'right',
});

const slots = defineSlots();

const innerOptions = ref<ProFormOption[]>([]);

const loading = useVModel(props, 'loading', emits, true);

let initForm: any = {};

const innerFormValue = ref<any>();

onMounted(() => {
    init();
});

function init() {
    (innerOptions.value as any[]) = props.options.filter(option => !option.hidden);
    if (!props.request) {
        setInnerFormValue(initFormData(innerOptions.value as any[]));
    } else {
        props.request().then(res => {
            if (res) {
                setInnerFormValue(res, true);
            } else {
                setInnerFormValue(initFormData(innerOptions.value as any[]));
            }
        });
    }
}

function setInnerFormValue(data: any, isRequest = false) {
    initForm = initFormValue(data, innerOptions.value as any[]);
    let beforeObj: any = {};
    if (innerFormValue.value) {
        beforeObj = filterChangedValues(initForm, innerFormValue.value);
    }
    innerFormValue.value = { ...initFormValue(JSON.parse(JSON.stringify(isRequest ? data : initForm)), innerOptions.value as any[]), ...beforeObj };
}

function resetRequest() {
    props.request!().then(res => {
        if (res) {
            innerFormValue.value = { ...initFormValue(JSON.parse(JSON.stringify(res)), innerOptions.value as any[]) };
        } else {
            setInnerFormValue(initFormData(innerOptions.value as any[]));
        }
    });
}

function handleSubmit() {
    return formRef.value.validate().then((result: any) => {
        if (result === true) {
            const resultValue = props.submitFilter ? filterChangedValues(initForm, getFormValue()) : getFormValue();
            emits('submit', props.filterEmptyStr ? removeEmptyStringFields(resultValue) : resultValue);
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
    setItem: (key: keyof typeof innerFormValue.value, value: any) => {
        innerFormValue.value[key] = value;
    },
    resetRequest,
    validate: () => {
        return new Promise<any>((resolve, reject) => {
            formRef.value.validate().then((result: any) => {
                if (result === true) {
                    const resultValue = props.submitFilter ? filterChangedValues(initForm, getFormValue()) : getFormValue();
                    const v = props.filterEmptyStr ? removeEmptyStringFields(resultValue) : resultValue;
                    resolve(v);
                } else {
                    warn('请查看表单');
                    reject(result);
                }
            })
        })
    }
})

watch(() => props.options, () => {
    init();
}, { deep: true });

</script>

<template>
    <t-loading :loading="loading" :text="props.loadingText" v-bind="props.loadingProps">
        <t-form class="pro-form" ref="formRef" :labelAlign="props.labelAlign" :labelWidth="props.labelWidth"
            :rules="props.rules" v-bind="props.formProps" @submit="handleSubmit" @reset="handleReset"
            :data="innerFormValue">
            <template v-if="!slots.default">
                <t-row align="center" :gutter="[48, props.marginY]" v-if="innerFormValue">
                    <t-col :span="item.span || 6" :key="index" v-for="item, index in innerOptions">
                        <template v-if="item.type != 'upload'">
                            <div class="pro-form-item">
                                <template v-if="!slots[`form-${item.name}`]">
                                    <ProFormText v-if="!item.type || item.type === 'text'"
                                        v-model="innerFormValue[item.name]" :key="item.name + index" :label="item.label"
                                        :labelName="item.labelName" :valueName="item.valueName"
                                        :childrenName="item.childrenName" :rules="item.rules" :multiple="item.multiple"
                                        :name="item.name" :data="item.data" :readonly="props.readonly || item.readonly"
                                        :range="item.range" :disabled="props.disabled || item.disabled"
                                        :placeholder="item.placeholder" :formItemProps="item.formItemProps"
                                        @change="(v: any) => item.onChange && item.onChange(v, item.name)"
                                        v-bind="item[TYPE_CONSTABLE[(item.type as TYPEKEY) || 'text'].propsName as keyof ProFormOption]">
                                    </ProFormText>

                                    <ProFormSelect v-if="item.type === 'select'" v-model="innerFormValue[item.name]"
                                        :key="item.name + index" :label="item.label" :labelName="item.labelName"
                                        :valueName="item.valueName" :childrenName="item.childrenName"
                                        :rules="item.rules" :multiple="item.multiple" :name="item.name"
                                        :data="item.data" :readonly="props.readonly || item.readonly"
                                        :range="item.range" :disabled="props.disabled || item.disabled"
                                        :placeholder="item.placeholder" :formItemProps="item.formItemProps"
                                        @change="(v: any) => item.onChange && item.onChange(v, item.name)"
                                        v-bind="item[TYPE_CONSTABLE[(item.type as TYPEKEY) || 'text'].propsName as keyof ProFormOption]">

                                    </ProFormSelect>

                                    <ProFormRadio v-if="item.type === 'radio'" v-model="innerFormValue[item.name]"
                                        :key="item.name + index" :label="item.label" :labelName="item.labelName"
                                        :valueName="item.valueName" :childrenName="item.childrenName"
                                        :rules="item.rules" :multiple="item.multiple" :name="item.name"
                                        :data="item.data" :readonly="props.readonly || item.readonly"
                                        :range="item.range" :disabled="props.disabled || item.disabled"
                                        :placeholder="item.placeholder" :formItemProps="item.formItemProps"
                                        @change="(v: any) => item.onChange && item.onChange(v, item.name)"
                                        v-bind="item[TYPE_CONSTABLE[(item.type as TYPEKEY) || 'text'].propsName as keyof ProFormOption]">

                                    </ProFormRadio>

                                    <ProFormCheckbox v-if="item.type === 'checkbox'" v-model="innerFormValue[item.name]"
                                        :key="item.name + index" :label="item.label" :labelName="item.labelName"
                                        :valueName="item.valueName" :childrenName="item.childrenName"
                                        :rules="item.rules" :multiple="item.multiple" :name="item.name"
                                        :data="item.data" :readonly="props.readonly || item.readonly"
                                        :range="item.range" :disabled="props.disabled || item.disabled"
                                        :placeholder="item.placeholder" :formItemProps="item.formItemProps"
                                        @change="(v: any) => item.onChange && item.onChange(v, item.name)"
                                        v-bind="item[TYPE_CONSTABLE[(item.type as TYPEKEY) || 'text'].propsName as keyof ProFormOption]">

                                    </ProFormCheckbox>

                                    <ProFormDatepicker v-if="item.type === 'datepicker'"
                                        v-model="innerFormValue[item.name]" :key="item.name + index" :label="item.label"
                                        :labelName="item.labelName" :valueName="item.valueName"
                                        :childrenName="item.childrenName" :rules="item.rules" :multiple="item.multiple"
                                        :name="item.name" :data="item.data" :readonly="props.readonly || item.readonly"
                                        :range="item.range" :disabled="props.disabled || item.disabled"
                                        :placeholder="item.placeholder" :formItemProps="item.formItemProps"
                                        @change="(v: any) => item.onChange && item.onChange(v, item.name)"
                                        v-bind="item[TYPE_CONSTABLE[(item.type as TYPEKEY) || 'text'].propsName as keyof ProFormOption]">

                                    </ProFormDatepicker>

                                    <ProFormTextarea v-if="item.type === 'textarea'" v-model="innerFormValue[item.name]"
                                        :key="item.name + index" :label="item.label" :labelName="item.labelName"
                                        :valueName="item.valueName" :childrenName="item.childrenName"
                                        :rules="item.rules" :multiple="item.multiple" :name="item.name"
                                        :data="item.data" :readonly="props.readonly || item.readonly"
                                        :range="item.range" :disabled="props.disabled || item.disabled"
                                        :placeholder="item.placeholder" :formItemProps="item.formItemProps"
                                        @change="(v: any) => item.onChange && item.onChange(v, item.name)"
                                        v-bind="item[TYPE_CONSTABLE[(item.type as TYPEKEY) || 'text'].propsName as keyof ProFormOption]">

                                    </ProFormTextarea>

                                    <ProFormInputNumber v-if="item.type === 'number'"
                                        v-model="innerFormValue[item.name]" :key="item.name + index" :label="item.label"
                                        :labelName="item.labelName" :valueName="item.valueName"
                                        :childrenName="item.childrenName" :rules="item.rules" :multiple="item.multiple"
                                        :name="item.name" :data="item.data" :readonly="props.readonly || item.readonly"
                                        :range="item.range" :disabled="props.disabled || item.disabled"
                                        :placeholder="item.placeholder" :formItemProps="item.formItemProps"
                                        @change="(v: any) => item.onChange && item.onChange(v, item.name)"
                                        v-bind="item[TYPE_CONSTABLE[(item.type as TYPEKEY) || 'text'].propsName as keyof ProFormOption]">

                                    </ProFormInputNumber>

                                    <ProFormTreeSelect v-if="item.type === 'treeSelect'"
                                        v-model="innerFormValue[item.name]" :key="item.name + index" :label="item.label"
                                        :labelName="item.labelName" :valueName="item.valueName"
                                        :childrenName="item.childrenName" :rules="item.rules" :multiple="item.multiple"
                                        :name="item.name" :data="item.data" :readonly="props.readonly || item.readonly"
                                        :range="item.range" :disabled="props.disabled || item.disabled"
                                        :placeholder="item.placeholder" :formItemProps="item.formItemProps"
                                        @change="(v: any) => item.onChange && item.onChange(v, item.name)"
                                        v-bind="item[TYPE_CONSTABLE[(item.type as TYPEKEY) || 'text'].propsName as keyof ProFormOption]">

                                    </ProFormTreeSelect>
                                </template>

                                <slot v-else :name="`form-${item.name}`" :form="innerFormValue" v-bind="item"></slot>
                            </div>
                        </template>
                        <t-form-item v-else :key="item.name + index" :label="item.label" :rules="item.rules"
                            :name="item.name" v-bind="item.formItemProps">
                            <t-upload v-model="innerFormValue[item.name]" :multiple="item.multiple"
                                :readonly="props.readonly || item.readonly" :disabled="props.disabled || item.disabled"
                                v-bind="item.uploadProps">
                            </t-upload>
                        </t-form-item>
                    </t-col>
                    <t-col :span="12">
                        <t-form-item v-if="!props.hideFooter">
                            <div v-if="!slots.footer" class="pro-form-footer">
                                <template v-if="!props.hideFooter && !slots.footer">
                                    <t-button :loading="loading" v-bind="props.submitButtonProps"
                                        class="pro-form-submit-button" type="submit">{{
        props.submitText }}</t-button>
                                    <t-button :loading="loading" style="margin-left: 12px;"
                                        v-bind="props.resetButtonProps" v-if="props.showReset" theme="default"
                                        type="reset">{{
        props.resetText }}</t-button>

                                    <slot v-if="slots.actions" name="actions"></slot>
                                </template>

                                <template v-else>
                                    <slot name="footer"></slot>
                                </template>
                            </div>
                        </t-form-item>

                    </t-col>
                </t-row>

            </template>

            <template v-else>
                <slot v-if="innerFormValue" name="default" :form="innerFormValue"></slot>
            </template>
        </t-form>
    </t-loading>

</template>

<style>
.pro-form {
    overflow-x: hidden;
}

/* .pro-form-item {
    display: flex;
    align-items: center;
    width: 100%;
    background-color: red;
} */

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