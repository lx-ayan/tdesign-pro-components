import { ModalForm, type ModalFormProps } from ".";
import { createApp, h, ref, type App } from "vue";
import TDesign from 'tdesign-vue-next';
import 'tdesign-vue-next/es/style/index.css';
import { Optional } from "@tdesign-pro-component/utils";
import { ProFormOption } from "../ProForm";

export function useModalForm<T = any>(options: ProFormOption<T>[], modalFormProps?: Optional<ModalFormProps, 'request' | 'visible' | 'options'>, onClose?: Function) {
    const visible = ref(false);

    const modalForm = () => h(ModalForm, {
        ...modalFormProps,
        visible: visible.value,
        options: options,
        onCancel: () => {
            close();
            if(onClose) {
                onClose()
            }
        },
        onClose: () => {
            close();
            if(onClose) {
                onClose();
            }
        }
    });

    let app: null | App = createApp(modalForm);

    let div: null | HTMLDivElement = document.createElement('div');

    function open() {
        if (!app) {
            app = createApp(modalForm);
        }

        if (!div) {
            div = document.createElement('div');
        }

        document.body.appendChild(div);

        app.use(TDesign)

        app.use(ModalForm);

        app.mount(div);

        visible.value = true;
    }

    function close() {
        visible.value = false;
        setTimeout(() => {
            if (app) {
                app.unmount();
            }
            if (div) {
                document.body.removeChild(div!);
            }
            app = null;
            div = null;
        }, 100)
    }

    return [open, close];
}