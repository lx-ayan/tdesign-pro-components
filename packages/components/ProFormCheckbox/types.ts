import { PromiseFunction, ValueType } from "@tdesign-pro-components/utils";
import { CheckboxProps, FormItemProps, FormRule, TNode } from "tdesign-vue-next";

export interface ProFormCheckboxProps {
    // form props 
    name: string;
    modelValue: ValueType | Array<ValueType>;
    data: CheckboxOptionProps[] | PromiseFunction<CheckboxOptionProps[]>;
    label?: string;
    formItemProps?: FormItemProps;
    rules?: FormRule[];
    labelWidth?: string | number;
    labelAlign?: 'left' | 'top' | 'right';

    // checkbox props
    labelName?: string;
    valueName?: string;
    disabled?: boolean;
    readonly?: boolean;
    max?: number;
    checkboxProps?: CheckboxProps;
}

export interface CheckboxOptionProps {
    label: string | (() => TNode);
    value: ValueType;
    disabled?: boolean;
    readonly?: boolean;
    checked?: boolean;
}