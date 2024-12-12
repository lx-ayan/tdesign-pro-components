import { Optional, PromiseFunction, VueNode, WithFalse } from "@tdesign-pro-component/utils";
import { ProFormOption, ProFormProps, ProFormRef } from "../ProForm";
import { DrawerProps, FormProps, LoadingProps, MessageProps } from "tdesign-vue-next";

export interface DrawerFormProps {
    options: ProFormOption[];
    visible: boolean;
    request?: PromiseFunction<any>;
    proFormProps?: Optional<ProFormProps, 'options'>;
    loading?: boolean;
    loadingText?: string;
    loadingProps?: LoadingProps;
    width?: string | number;
    header?: string | WithFalse<VueNode>;
    footer?: string | WithFalse<VueNode>;
    drawerProps?: DrawerProps;
    autoClose?: boolean;
    enableTip?: boolean;
    tipTheme?: MessageProps['theme'];
    labelAlign?: FormProps['labelAlign'];
}

export interface DrawerFormSlots {
    header?: string | WithFalse<VueNode>;
    footer?: string | WithFalse<VueNode>;
}

export interface DrawerFormEmits {
    (e: 'submit', value: any): void;
    (e: 'close'): void;
    (e: 'opened'): void;
    (e: 'update:visible', value: boolean): void;
    (e: 'update:loading', value: boolean): void;
    (e: 'error', value: any): void;
}

export interface DrawerFormRef {
    submit: () => void;
    reset: () => void;
    open: () => void;
    close: () => void;
    getFormRef: () => ProFormRef
}