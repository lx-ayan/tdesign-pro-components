import { BaseFormItemProps } from "@tdesign-pro-component/utils";
import { TdFormItemProps, TdTextareaProps } from "tdesign-vue-next";

export interface ProFormTextareaProps extends BaseFormItemProps {
    modelValue: string;
    inputProps?: TdTextareaProps;
    formItemProps?: TdFormItemProps;
}

export interface ProFormTextareaRef {
    clear: () => void;
    blur: () => void;
    focus: () => void;
}