<script setup lang='tsx'>
import { onMounted, ref } from 'vue';
import { ProForm, ProFormOption, ProFormRef } from '../ProForm';
import { ModalFormProps, ModalFormEmits, ModalFormSlots, ModalFormRef } from './types';
import { useVModel } from '@tdesign-pro-component/hooks';
import { getSlots } from '@tdesign-pro-component/utils';
import { MessagePlugin } from 'tdesign-vue-next';
defineOptions({
    name: 'ModalForm'
});

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
    },
    upload: {
        propsName: 'uploadProps',
        componentName: 'upload'
    }
}

const props = withDefaults(defineProps<ModalFormProps>(), {
    autoClose: false,
    enableTip: false,
    tipTheme: 'error',
    labelAlign: 'top'
});

const emits = defineEmits<ModalFormEmits>();

const slots = defineSlots<ModalFormSlots>();

const requestFn = () => Promise.resolve(null);

const proFormRef = ref<ProFormRef>();

const slotNames = ref<string[]>([]);

const visible = useVModel(props, 'visible', emits, false);

const loading = useVModel(props, 'loading', emits, false);

onMounted(() => {
    slotNames.value = props.options.map(item => `form-${item.name}`);
})

function handleOpen() {
    emits('opened');
    proFormRef.value?.resetRequest();
    visible.value = true;
}

function handleClose() {
    emits('close');
    proFormRef.value?.reset();
    visible.value = false;
}

function handleConfirm() {
    proFormRef.value?.validate().then(async v => {
        loading.value = true;
        try {
            await emits('submit', v);
            if (props.autoClose) {
                setTimeout(() => {
                    handleClose();
                    loading.value = false;
                }, 200)
            } else {
                loading.value = false;
                proFormRef.value?.resetRequest();
            }
        } catch {
            loading.value = false;
        }
    }).catch(e => {
        emits('error', e);
        if (props.enableTip) {
            const key = Object.keys(e)[0];
            MessagePlugin[props.tipTheme](e[key][0].message);
        }
    })
}

const Header = getSlots(slots, props, 'header');

const Footer = getSlots(slots, props, 'footer');

const RenderHeader = () => Header;

const RenderFooter = () => Footer;

function getOptionByname(name: string): { option: ProFormOption, component: { componentName: string, propsName: string } } {
    name = name.replace('form-', '').trim();
    const option = (props.options).find(item => item.name === name)! as ProFormOption;

    return {
        option,
        component: TYPE_CONSTABLE[option.type || 'text']
    };
}

defineExpose<ModalFormRef>({
    submit: handleConfirm,
    reset: () => proFormRef.value?.reset(),
    open: () => visible.value = true,
    close: () => visible.value = false,
    getFormRef: () => proFormRef.value!
})

</script>

<template>
    <div>
        <t-dialog :confirmLoading="loading" @confirm="handleConfirm" @opened="handleOpen" @cancel="handleClose"
            @close="handleClose" v-model:visible="visible" :width="props.width" v-bind="props.dialogProps">
            <template #header>
                <RenderHeader />
            </template>

            <template v-if="slots.footer || props.footer" #footer>
                <RenderFooter></RenderFooter>
            </template>

            <ProForm :label-align="props.labelAlign" v-model:loading="loading" :loading-text="props.loadingText"
                :loading-props="props.loadingProps" hide-footer ref="proFormRef" :options="props.options"
                :request="visible ? props.request : requestFn" v-bind="props.proFormProps">
                <template v-for="item in slotNames" #[item]="{ form }">
                    <template v-if="!slots[item as keyof ModalFormSlots]">
                        <ProFormText :label-align="props.labelAlign"
                            v-if="!getOptionByname(item)!.option.type || getOptionByname(item)!.option.type! === 'text'"
                            :name="getOptionByname(item)!.option.name" :label="getOptionByname(item)!.option.label"
                            v-model="form[getOptionByname(item).option.name]" v-bind="{
            ...getOptionByname(item).option,
            //@ts-ignore
            ...getOptionByname(item).option[getOptionByname(item).component.propsName]
        }">
                        </ProFormText>

                        <ProFormSelect v-if="getOptionByname(item)!.option.type! === 'select'"
                            :label-align="props.labelAlign" :name="getOptionByname(item)!.option.name"
                            :label="getOptionByname(item)!.option.label"
                            v-model="form[getOptionByname(item).option.name]" v-bind="{
            ...getOptionByname(item).option,
            //@ts-ignore
            ...getOptionByname(item).option[getOptionByname(item).component.propsName]
        }">
                        </ProFormSelect>

                        <ProFormRadio v-if="getOptionByname(item)!.option.type! === 'radio'"
                            :label-align="props.labelAlign" :name="getOptionByname(item)!.option.name"
                            :label="getOptionByname(item)!.option.label"
                            v-model="form[getOptionByname(item).option.name]" v-bind="{
            ...getOptionByname(item).option,
            //@ts-ignore
            ...getOptionByname(item).option[getOptionByname(item).component.propsName]
        }">
                        </ProFormRadio>

                        <ProFormCheckbox v-if="getOptionByname(item)!.option.type! === 'checkbox'"
                            :label-align="props.labelAlign" :name="getOptionByname(item)!.option.name"
                            :label="getOptionByname(item)!.option.label"
                            v-model="form[getOptionByname(item).option.name]" v-bind="{
            ...getOptionByname(item).option,
            //@ts-ignore
            ...getOptionByname(item).option[getOptionByname(item).component.propsName]
        }">
                        </ProFormCheckbox>

                        <ProFormInputNumber v-if="getOptionByname(item)!.option.type! === 'number'"
                            :label-align="props.labelAlign" :name="getOptionByname(item)!.option.name"
                            :label="getOptionByname(item)!.option.label"
                            v-model="form[getOptionByname(item).option.name]" v-bind="{
            ...getOptionByname(item).option,
            //@ts-ignore
            ...getOptionByname(item).option[getOptionByname(item).component.propsName]
        }">
                        </ProFormInputNumber>

                        <ProFormDatepicker v-if="getOptionByname(item)!.option.type! === 'datepicker'"
                            :label-align="props.labelAlign" :name="getOptionByname(item)!.option.name"
                            :label="getOptionByname(item)!.option.label"
                            v-model="form[getOptionByname(item).option.name]" v-bind="{
            ...getOptionByname(item).option,
            //@ts-ignore
            ...getOptionByname(item).option[getOptionByname(item).component.propsName]
        }">
                        </ProFormDatepicker>

                        <ProFormTreeSelect v-if="getOptionByname(item)!.option.type! === 'treeSelect'"
                            :label-align="props.labelAlign" :name="getOptionByname(item)!.option.name"
                            :label="getOptionByname(item)!.option.label"
                            v-model="form[getOptionByname(item).option.name]" v-bind="{
            ...getOptionByname(item).option,
            //@ts-ignore
            ...getOptionByname(item).option[getOptionByname(item).component.propsName]
        }">
                        </ProFormTreeSelect>

                        <ProFormTextarea v-if="getOptionByname(item)!.option.type! === 'textarea'"
                            :label-align="props.labelAlign" :name="getOptionByname(item)!.option.name"
                            :label="getOptionByname(item)!.option.label"
                            v-model="form[getOptionByname(item).option.name]" v-bind="{
            ...getOptionByname(item).option,
            //@ts-ignore
            ...getOptionByname(item).option[getOptionByname(item).component.propsName]
        }">
                        </ProFormTextarea>

                        <t-form-item v-if="getOptionByname(item)!.option.type! === 'upload'"
                            :label-align="props.labelAlign" :key="getOptionByname(item)!.option.name"
                            :label="getOptionByname(item)!.option.label" :rules="getOptionByname(item)!.option.rules"
                            :name="getOptionByname(item)!.option.name"
                            v-bind="getOptionByname(item)!.option.formItemProps">
                            <t-upload v-model="form[getOptionByname(item).option.name]"
                                :multiple="getOptionByname(item)!.option.multiple"
                                :readonly="getOptionByname(item)!.option.readonly"
                                :disabled="getOptionByname(item)!.option.disabled"
                                v-bind="getOptionByname(item)!.option.uploadProps">
                            </t-upload>
                        </t-form-item>
                    </template>
                    <slot v-else :name="item as keyof ModalFormSlots" :form="form as any"></slot>
                </template>
            </ProForm>
        </t-dialog>
    </div>
</template>

<style lang='scss'></style>