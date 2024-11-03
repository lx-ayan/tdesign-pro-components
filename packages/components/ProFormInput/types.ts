import { FormItemProps, FormRule, InputProps, SizeEnum } from "tdesign-vue-next";

export interface ProFormInputProps {
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
    append?: string;
    prepend?: string;
    inputProps?: InputProps;
    labelWidth?: string | number;
    labelAlign?: 'left' | 'top' | 'right';
    requiredMark?: boolean;
    rules?: Array<FormRule>;
    formItemProps?: FormItemProps;
}