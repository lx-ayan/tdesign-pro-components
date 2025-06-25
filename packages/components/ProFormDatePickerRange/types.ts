import { VueNode } from "@tdesign-pro-component/utils";
import { DatePickerProps, FormItemProps, FormRule } from "tdesign-vue-next";

export interface ProFormDatePickerRangeProps {
    name: string;
    label?: VueNode;
    rules?: FormRule[];
    formItemProps?: FormItemProps;
    modelValue?: string[];
    placeholder?: string;
    readonly?: boolean;
    borderless?: boolean;
    disabled?: boolean;
    enableTimePicker?: boolean;
    clearable?: boolean;
    format?: string;
    datePickerLabel?: VueNode;
    prefixIcon?: VueNode;
    datePickerProps?: DatePickerProps;
}