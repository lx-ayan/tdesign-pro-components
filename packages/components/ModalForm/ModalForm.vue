<script setup lang='ts'>
import { Data, Dialog, FormValidateResult } from 'tdesign-vue-next';
import ProForm from '../ProForm/ProForm.vue';
import { ModalFormProps } from './types';
import { h, ref, useAttrs, useSlots, useTemplateRef } from 'vue';
import { ProFormRef } from '../ProForm';

defineOptions({
    name: 'ModalForm'
});

const attrs = useAttrs();

const slots = useSlots();

const visible = defineModel<boolean>('visible');

const formData = defineModel();

const props = defineProps<ModalFormProps>();

const proFormRef = useTemplateRef<ProFormRef>('proFormRef');

const loading = ref(false);

const emits = defineEmits<{
    (e: 'submit', data: any): void;
    (e: 'error', data: any);
}>();

function handleConfirm() {
    loading.value = true;
    proFormRef.value?.validate().then(res => {
        if(res === true) {
            emits('submit', formData.value);
        } else {
            emits('error', res as FormValidateResult<Data>)
        }
    }).catch(err => {
        emits('error', err)
    }).finally(() => {
        loading.value = false;
    })
}

function handleBeforeClose() {
    proFormRef.value?.reset();
}

defineExpose({
    getFormInstance: () => proFormRef.value,
    getFormData: () => proFormRef.value.getFormData()
});

</script>

<template>
    <Dialog :confirm-loading="loading" @before-close="handleBeforeClose" @confirm="handleConfirm" v-bind="{ ...attrs, ...props.dialogProps, header: props.title }" v-model:visible="visible">

        <div style="overflow-x: hidden; padding-bottom: 24px;" v-loading="loading">
            <ProForm ref="proFormRef" :form-props="{ labelAlign: 'top' }" :hide-actions="true" v-model="formData"
                :options="props.options" :request="props.request" v-bind="{...props.formProps}">
                <slot v-for="item in Object.keys($slots)" :name="item"></slot>
            </ProForm>
        </div>

        <template v-if="slots.footer" #footer>
            <slot name="footer">

            </slot>
        </template>
    </Dialog>
</template>