import { VueNode } from "@tdesign-pro-component/utils";
import { DatePickerProps, FormItemProps, FormRule } from "tdesign-vue-next";

export interface ProFormDatePickerProps {
    name: string;
    label?: VueNode;
    rules?: FormRule[];
    formItemProps?: FormItemProps;
    modelValue?: string | string[];
    placeholder?: string;
    readonly?: boolean;
    borderless?: boolean;
    disabled?: boolean;
    enableTimePicker?: boolean;
    clearable?: boolean;
    multiple?: boolean;
    format?: string;
    datePickerLabel?: VueNode;
    prefixIcon?: VueNode;
    datePickerProps?: DatePickerProps;
}