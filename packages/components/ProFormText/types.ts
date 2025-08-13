import { BaseFormItemProps } from "@tdesign-pro-component/utils";
import { TdFormItemProps, TdInputProps, TdInputAdornmentProps } from "tdesign-vue-next";

export interface ProFormTextProps extends BaseFormItemProps {
    modelValue: string;
    inputProps?: TdInputProps & TdInputAdornmentProps;
    formItemProps?: TdFormItemProps;
}

export interface ProFormTextRef {
    clear: () => void;
    blur: () => void;
    focus: () => void;
}