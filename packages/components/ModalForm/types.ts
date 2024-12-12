import { Optional, PromiseFunction, VueNode, WithFalse } from "@tdesign-pro-component/utils";
import { ProFormOption, ProFormProps, ProFormRef } from "../ProForm";
import { DialogProps, FormProps, LoadingProps, MessageProps } from "tdesign-vue-next";

export interface ModalFormProps {
    options: ProFormOption[];
    visible: boolean;
    request?: PromiseFunction<any>;
    proFormProps?: Optional<ProFormProps, 'options'>;
    loading?: boolean;
    loadingText?: string;
    loadingProps?: LoadingProps;
    width?: string | number;
    theme?: DialogProps['theme'];
    header?: string | WithFalse<VueNode>;
    footer?: string | WithFalse<VueNode>;
    dialogProps?: DialogProps;
    autoClose?: boolean;
    enableTip?: boolean;
    tipTheme?: MessageProps['theme'];
    labelAlign?: FormProps['labelAlign'];
}

export interface ModalFormSlots {
    header?: string | WithFalse<VueNode>;
    footer?: string | WithFalse<VueNode>;
}

export interface ModalFormEmits {
    (e: 'submit', value: any): void;
    (e: 'close'): void;
    (e: 'opened'): void;
    (e: 'update:visible', value: boolean): void;
    (e: 'update:loading', value: boolean): void;
    (e: 'error', value: any): void;
}

export interface ModalFormRef {
    submit: () => void;
    reset: () => void;
    open: () => void;
    close: () => void;
    getFormRef: () => ProFormRef
}