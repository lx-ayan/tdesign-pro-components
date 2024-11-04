import { PromiseFunction, ValueType } from "@tdesign-pro-components/utils";
import { FormItemProps, FormRule } from "tdesign-vue-next";

export interface ProFormRadioProps {
    name: string;
    data: RadioOptionProps[] | PromiseFunction<RadioOptionProps[]>;
    modelValue: ValueType;

    // form props
    label?: string;
    rules?: FormRule[];
    formItemProps?: FormItemProps;

    // radio props
    labelName?: string;
    valueName?: string;
    button?: boolean;
    
}

export interface RadioOptionProps {
    label?: string;
    value?: ValueType;
    allowUncheck?: boolean;
    disabled?: boolean;
    [name: string]: any;
}