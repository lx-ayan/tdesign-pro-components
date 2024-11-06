import { DatePickerProps, DateValue, FormItemProps, FormRule } from "tdesign-vue-next";

export type DatePickerValueType = DateValue | (DateValue)[]

export interface ProFormDatepickerProps {
    // form props
    name: string;
    modelValue: DatePickerValueType;
    label?: string;
    rules?: FormRule[];
    formItemProps?: FormItemProps;
    labelWidth?: string | number;
    labelAlign?: 'left' | 'top' | 'right';
    requiredMark?: boolean;
    
    // input decorator props
    prepend?: string;
    append?: string;

    // datepicker props
    placeholder?: string;
    disabled?: boolean;
    range?: boolean;
    clearable?: boolean;
    allowInput?: boolean;
    datepickerProps?: DatePickerProps;
}