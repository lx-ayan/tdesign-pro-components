import { PromiseFunction, ValueType } from "@tdesign-pro-components/utils";
import { FormItemProps, FormRule, RadioGroupProps } from "tdesign-vue-next";

export interface ProFormRadioProps {
    name: string;
    data: RadioOptionProps[] | PromiseFunction<RadioOptionProps[]>;
    modelValue: ValueType;

    // form props
    label?: string;
    rules?: FormRule[];
    formItemProps?: FormItemProps;
    labelWidth?: string | number;
    labelAlign?: 'left' | 'top' | 'right';
    
    // radio props
    labelName?: string;
    valueName?: string;
    button?: boolean;
    radioProps?: RadioGroupProps;
    disabled?: boolean;
    readonly?: boolean;
    variant?: "outline" | "primary-filled" | "default-filled";
}

export interface RadioOptionProps {
    label?: string;
    value?: ValueType;
    allowUncheck?: boolean;
    disabled?: boolean;
    [name: string]: any;
}