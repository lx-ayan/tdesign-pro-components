import { BasicValueType, VueNode } from "@tdesign-pro-component/utils";
import { FormItemProps, FormRule, InputNumberProps } from "tdesign-vue-next";

export interface ProFormInputNumberProps {
    name: string;
    modelValue: BasicValueType;
    label?: string | VueNode;
    rules?: Array<FormRule>;
    formItemProps?: FormItemProps;
    placeholder?: string;
    type?: string;
    prepend?: VueNode;
    append?: VueNode;
    inputLabel?: VueNode;
    suffix?: VueNode;
    clearable?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    borderless?: boolean;
    inputNumberProps?: InputNumberProps;
    theme?: 'noraml' | 'column' | 'row';
    min?: number;
    max?: number;
}