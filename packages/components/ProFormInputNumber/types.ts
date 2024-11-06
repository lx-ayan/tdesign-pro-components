import { FormItemProps, FormRule, InputNumberProps, SizeEnum } from "tdesign-vue-next";

export interface ProFormInputNumberProps {
    name: string;
    modelValue: number;

    // form props
    label?: string;
    rules?: FormRule[];
    formItemProps?: FormItemProps;
    labelWidth?: string | number;
    labelAlign?: 'left' | 'top' | 'right';
    requiredMark?: boolean;

    // input Number props
    size?: SizeEnum;
    autoWidth?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    theme?: 'column' | 'row' | 'normal'
    inputNumberProps?: InputNumberProps;
    placeholder?: string;
}