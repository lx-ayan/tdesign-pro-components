import { PromiseFunction, SelectDataOption, ValueType } from "@tdesign-pro-components/utils";
import type { FormItemProps, FormRule, SelectProps } from 'tdesign-vue-next';

export interface ProFormSelectProps {
    name: string;
    modelValue: ValueType | Array<ValueType>;
    data: SelectDataOption[] | PromiseFunction<SelectDataOption[]>;
    
    label?: string;
    rules?: FormRule[];
    labelName?: string;
    valueName?: string;
    disabled?: boolean;
    readonly?: boolean;
    multiple?: boolean;
    placeholder?: string;
    selectProps?: SelectProps;
    formItemProps?: FormItemProps;
}