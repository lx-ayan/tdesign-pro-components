import { TdDialogProps } from "tdesign-vue-next";
import { ProFormOption, ProFormProps } from "../ProForm";

export interface ModalFormProps {
    options: ProFormOption[];
    request?: ProFormProps['request'];
    title?: TdDialogProps['header'];
    formProps?: ProFormProps;
    dialogProps?: TdDialogProps;
}