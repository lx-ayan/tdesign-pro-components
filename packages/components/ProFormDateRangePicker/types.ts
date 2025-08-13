import { BaseFormItemProps } from "@tdesign-pro-component/utils";
import { TdDateRangePickerProps, TdFormItemProps } from "tdesign-vue-next";

export interface ProFormDateRangePickerProps extends Omit<BaseFormItemProps, 'placeholder'> {
    placeholder?: string[];
    format?: TdDateRangePickerProps['format'];
    dateRangePickerProps?: TdDateRangePickerProps;
    formItemProps?: TdFormItemProps;
}

export interface ProFormDateRangePickerRef {
    clear: () => void;
    getDateWithTime: () => [string, string];
}