import { Optional, PromiseFunction, VueNode, WithFalse } from "@tdesign-pro-component/utils";
import { ProFormOption, ProFormProps, ProFormRef } from "../ProForm";
import { DialogProps, LoadingProps, MessageProps } from "tdesign-vue-next";

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
    content?: string | WithFalse<VueNode>;
    dialogProps?: DialogProps;
    autoClose?: boolean;
    enableTip?: boolean;
    tipTheme?: MessageProps['theme'];
}

export interface ModalFormSlots {
    header?: string | WithFalse<VueNode>;
    footer?: string | WithFalse<VueNode>;
    content?: string | WithFalse<VueNode>;
}

export interface ModalFormEmits {
    (e: 'submit', value: any);
    (e: 'close');
    (e: 'opened');
    (e: 'update:visible', value: boolean);
    (e: 'update:loading', value: boolean);
    (e: 'error', value: any);
}

export interface ModalFormRef {
    submit: () => void;
    reset: () => void;
    open: () => void;
    close: () => void;
    getFormRef: () => ProFormRef
}