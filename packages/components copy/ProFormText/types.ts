import { BasicValueType, VueNode } from "@tdesign-pro-component/utils";
import { FormItemProps, FormRule, InputProps } from "tdesign-vue-next";

export interface ProFormTextProps {
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
    inputProps?: InputProps;
}

export interface ProFormTextRef {
    focus: () => void;
    blur: () => void;
    clear: () => void;
    getValue: () => BasicValueType;
    getRef: <T extends any = any> () => T
}