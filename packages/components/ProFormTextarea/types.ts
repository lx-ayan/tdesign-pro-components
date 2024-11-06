import { FormItemProps, FormRule, SizeEnum, TextareaProps } from "tdesign-vue-next";
import { ProFormTextRef } from "../ProFormText/types";

export interface ProFormTextareaProps {
    name: string;
    modelValue: string;
    label?: string;
    placeholder?: string;
    autofocus?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    size?: SizeEnum;
    textareaProps?: TextareaProps;

    labelWidth?: string | number;
    labelAlign?: 'left' | 'top' | 'right';
    requiredMark?: boolean;
    rules?: Array<FormRule>;
    formItemProps?: FormItemProps;
}

export interface ProFormTextareaRef extends ProFormTextRef {

}