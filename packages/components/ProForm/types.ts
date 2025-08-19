import { FormInstanceFunctions, FormRule, TdColProps, TdFormProps, TdRowProps } from "tdesign-vue-next";
import { ProFormTextProps } from "../ProFormText";
import { ProFormSelectProps } from "../ProFormSelect";
import { ProFormRadioProps } from "../ProFormRadio";
import { ProFormCheckboxProps } from "../ProFormCheckbox";
import { ProFormDateRangePickerProps } from "../ProFormDateRangePicker";
import { ProFormTreeSelectProps } from "../ProFormTreeSelect";
import { ProFormInputNumberProps } from "../ProFormInputNumber";
import { FormOptionData, OptionData } from "@tdesign-pro-component/utils";
import { ProFormDatePickerProps } from "../ProFormDatePicker";

export type FormComponentType = 'text' | 'select' | 'radio' | 'checkbox' | 'date' | 'dateRange' | 'treeSelect' | 'inputNumber' | 'textarea'

type ProFormItemProps = ProFormTextProps | ProFormSelectProps | ProFormRadioProps | ProFormCheckboxProps | ProFormDatePickerProps | ProFormDateRangePickerProps | ProFormTreeSelectProps | ProFormInputNumberProps

export interface ProFormProps {
    options: ProFormOption[];
    modelValue?: Record<string, any>;
    hideActions?: boolean;
    submit?: (data: any) => any | Promise<any>;
    error?: (error: string) => void;
    request?: (...args: any) => any;
    formProps?: TdFormProps;
    rowProps?: TdRowProps;
}

export interface ProFormOption {
    name: string;
    label?: string;
    rules?: Array<FormRule>;
    hidden?: boolean;
    type?: FormComponentType | ((...args: any[]) => any) | any;
    data?: FormOptionData | (() => Array<OptionData | any>);
    colProps?: TdColProps;
    props?: Partial<ProFormItemProps>;
    [name: string]: any;
}

export interface ProFormRef {
    setItem: (key: string, data: any) => void;
    reset: FormInstanceFunctions['reset'];
    validate: FormInstanceFunctions['validate'];
    clearValidate: FormInstanceFunctions['clearValidate'];
    submit: FormInstanceFunctions['submit'];
    getFormData: () => any;
}

export type ExtractNames<T extends ProFormOption[]> = T[number]['name'];