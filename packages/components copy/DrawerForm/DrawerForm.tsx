import { Dialog, Drawer } from "tdesign-vue-next";
import { defineComponent, ref, useTemplateRef, watch } from "vue";
import { ProForm, ProFormRef } from "../ProForm";
import { DrawerFormProps } from "./types";
import { getSlotOrJSX } from "@tdesign-pro-component/utils";

//@ts-ignore
const DrawerForm = defineComponent(
    <T extends any>(props: DrawerFormProps<T>, {emit, slots, expose}) => {
        const innerVisible = ref(false);
        const proFormRef = useTemplateRef<ProFormRef<T>>('proFormRef');
        const request = ref<any>(undefined);
        const titleRender = getSlotOrJSX<DrawerFormProps>('title', slots, props)();
        const footerRender = getSlotOrJSX<DrawerFormProps>('footer', slots, props)();

        function handleOpened() {
            request.value = props.request;
            setTimeout(() => {
                proFormRef.value.resetRequest();
            })
        }

        function handleConfirm() {
            proFormRef.value.validate().then(res => {
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
            <Drawer size={props.width} onConfirm={handleConfirm} onCancel={handleCancel} onClose={handleClose} onBeforeOpen={handleOpened} v-model:visible={innerVisible.value} {...props.drawerProps}>
                {{
                    default: () => <ProForm {...props.formProps} ref="proFormRef" gap={24} options={props.options} request={request.value} hideFooter>

                        </ProForm>,
                    header: titleRender? () => titleRender: undefined,
                    footer: footerRender? () => footerRender: undefined,
                    ...slots
                }}
            </Drawer>
        </>
    },
    {
        name: 'DrawerForm',
        emits: ['update:visible', 'confirm'],
        props: {
            title: String,
            visible: Boolean,
            options: Array,
            request: Function,
            formProps: Object,
            drawerProps: Object,
            width: [String, Object]
        }
    }
);

export default DrawerForm;