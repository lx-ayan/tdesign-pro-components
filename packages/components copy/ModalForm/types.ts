import { VueNode } from "@tdesign-pro-component/utils";
import { ProFormOption, ProFormProps } from "../ProForm";
import { DialogProps } from "tdesign-vue-next";

export interface ModalFormProps<T = any> {
    title: string | VueNode;
    visible: boolean;
    options: ProFormOption<T>[];
    request?: ProFormProps['request'];
    formProps?: ProFormProps<T>;
    dialogProps?: DialogProps;
    footer?: string | VueNode;
    width?: string | number;
}