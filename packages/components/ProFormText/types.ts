import { ValueType } from "@tdesign-pro-component/utils";
import { FormItemProps, FormRule, InputProps, SizeEnum, TNode } from "tdesign-vue-next";
import { VNode } from "vue";

export interface ProFormTextProps {
    name: string;
    modelValue: string;
    label?: string;
    placeholder?: string;
    autofocus?: boolean;
    borderless?: boolean;
    clearable?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    size?: SizeEnum;
    type?: 'text' | 'password' | 'textarea';
    align?: 'left' | 'center' | 'right';
    append?: string | (() => (TNode | VNode)) | TNode | VNode;
    prepend?: string | (() => (TNode | VNode)) | TNode | VNode;
    inputProps?: InputProps;

    labelWidth?: string | number;
    labelAlign?: 'left' | 'top' | 'right';
    rules?: Array<FormRule>;
    formItemProps?: FormItemProps;
}

export interface ProFormTextRef {
    focus: () => void;
    blur: () => void;
    clear: () => void;
    getValue: () => ValueType;
    getRef: <T extends any = any> () => T
}