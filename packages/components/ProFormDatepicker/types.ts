import { DatePickerProps, DateValue, FormItemProps, FormRule, SizeEnum, TNode } from "tdesign-vue-next";
import { VNode } from "vue";

export type DatePickerValueType = DateValue | (DateValue)[]

export interface ProFormDatepickerProps {
    // form props
    name: string;
    modelValue: DatePickerValueType;
    label?: string;
    rules?: FormRule[];
    format?: string;
    formItemProps?: FormItemProps;
    labelWidth?: string | number;
    labelAlign?: 'left' | 'top' | 'right';

    // input decorator props
    append?: string | (() => (TNode | VNode)) | TNode | VNode;
    prepend?: string | (() => (TNode | VNode)) | TNode | VNode;

    // datepicker props
    size?: SizeEnum;
    placeholder?: string;
    disabled?: boolean;
    range?: boolean;
    clearable?: boolean;
    allowInput?: boolean;
    datepickerProps?: DatePickerProps;
}