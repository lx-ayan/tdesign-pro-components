import { FormItemProps, FormRule, InputNumberProps, SizeEnum } from "tdesign-vue-next";
import { CSSProperties } from "vue";

export interface ProFormInputNumberProps {
    name: string;
    modelValue: number;

    // form props
    label?: string;
    rules?: FormRule[];
    formItemProps?: FormItemProps;
    labelWidth?: string | number;
    labelAlign?: 'left' | 'top' | 'right';

    // input Number props
    size?: SizeEnum;
    autoWidth?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    theme?: 'column' | 'row' | 'normal'
    inputNumberProps?: InputNumberProps;
    placeholder?: string;
    style?: string | CSSProperties;
}