import { BaseFormItemProps } from "@tdesign-pro-component/utils";
import { TdFormItemProps, TdInputAdornmentProps, TdInputNumberProps } from "tdesign-vue-next";

export interface ProFormInputNumberProps extends BaseFormItemProps {
    theme?: TdInputNumberProps['theme'];
    inputNumberProps?: TdInputNumberProps & TdInputAdornmentProps;
    formItemProps?: TdFormItemProps;
}

export interface ProFormInputNumberRef {
    clear: () => void;
}