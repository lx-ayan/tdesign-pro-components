import { App, createApp, h, ref } from "vue";
import TDesign from 'tdesign-vue-next';
import 'tdesign-vue-next/es/style/index.css';
import { DrawerForm, DrawerFormProps } from ".";
import { Optional } from "@tdesign-pro-component/utils";
import { ProFormOption } from "../ProForm";
export function useDrawerForm<T = any>(options: ProFormOption<T>[], drawerFormProps?: Optional<DrawerFormProps, 'visible' | 'request' | 'options'>, onClose?: Function) {

    let app: null | App = null;
    let div: null | HTMLDivElement = null;
    const visible = ref(false);

    const InnerDrawerForm = () => h(DrawerForm, {
        ...drawerFormProps,
        visible: visible.value,
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
        },
        options: options
    });

    function open() {
        if (!app) {
            app = createApp(InnerDrawerForm);
        }

        if (!div) {
            div = document.createElement('div');
        }
        document.body.appendChild(div);
        app.use(TDesign);
        app.use(DrawerForm);
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