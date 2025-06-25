import { Dialog, Space } from "tdesign-vue-next";
import { defineComponent, ref, useTemplateRef, watch } from "vue";
import { ProForm, ProFormRef } from "../ProForm";
import { ModalFormProps } from "./types";
import { getSlotOrJSX } from "@tdesign-pro-component/utils";

//@ts-ignore
const ModalForm = defineComponent(
    <T extends any>(props: ModalFormProps<T>, {emit, slots, expose}) => {
        const innerVisible = ref(false);
        const proFormRef = useTemplateRef<ProFormRef<T>>('proFormRef');
        const request = ref<any>(undefined);
        const titleRender = getSlotOrJSX<ModalFormProps>('title', slots, props)();
        const footerRender = getSlotOrJSX<ModalFormProps>('footer', slots, props)();

        function handleOpened() {
            request.value = props.request;
            setTimeout(() => {
                proFormRef.value.resetRequest();
            })
        }

        function handleConfirm() {
            proFormRef.value.validate().then(res => {
                console.log('res',res);
                if(res===true) {
                    emit('confirm', proFormRef.value.getFormValue())
                }
            })
        }
        
        function handleCancel() {
            proFormRef.value.reset();
            emit('cancel');
        }

        function handleClose() {
            proFormRef.value.reset();
            emit('close');
        }

        watch(() => props.visible, (value) => {
            innerVisible.value = value;
        });

        watch(innerVisible, (value) => {
            emit('update:visible', value);
        });

        expose({
            reset: proFormRef.value?.reset,
            submit: proFormRef.value?.submit,
            validate: proFormRef.value?.validate,
            getFormValue: proFormRef.value?.getFormValue
        })

        return () => <>
            <Dialog width={props.width} onConfirm={handleConfirm} dialogStyle={{padding: '16px 24px', overFlowX:'hidden', borderRadius: '4px' ,...props.dialogProps?.dialogStyle}} onCancel={handleCancel} onClose={handleClose} onOpened={handleOpened} v-model:visible={innerVisible.value} {...props.dialogProps}>
                {{
                    default: () => <Space><ProForm {...props.formProps} ref="proFormRef" gap={24} options={props.options} request={request.value} hideFooter>

                        </ProForm></Space>,
                    header: titleRender? () => titleRender: undefined,
                    footer: footerRender? () => footerRender: undefined,
                    ...slots
                }}
            </Dialog>
        </>
    },
    {
        name: 'ModalForm',
        emits: ['update:visible', 'confirm'],
        props: {
            title: String,
            visible: Boolean,
            options: Array,
            request: Function,
            formProps: Object,
            dialogProps: Object,
            width: [String, Object]
        }
    }
);

export default ModalForm;