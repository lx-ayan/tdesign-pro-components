import { BaseFormItemProps } from "@tdesign-pro-component/utils";
import { InputAdornmentProps, TdDatePickerProps, TdFormItemProps } from "tdesign-vue-next";

export interface ProFormDatePickerProps extends BaseFormItemProps {
    format?: TdDatePickerProps['format'];
    datePickerProps?: TdDatePickerProps & InputAdornmentProps;
    formItemProps?: TdFormItemProps;
}

export interface ProFormDatePickerRef {
    clear: () => void;
}