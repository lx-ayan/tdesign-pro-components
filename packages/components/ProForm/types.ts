import { Optional, PromiseFunction, VueNode} from "@tdesign-pro-component/utils";
import { FormInstanceFunctions, FormItemProps, FormProps, FormRule, UploadProps } from "tdesign-vue-next";
import { VNode } from "vue";
import { ProFormCheckboxProps } from "../ProFormCheckbox";
import { ProFormRadioProps } from "../ProFormRadio";
import { ProFormTextProps } from "../ProFormText";
import { ProFormInputNumberProps } from "../ProFormInputNumber";
import { ProFormTextareaProps } from "../ProFormTextarea";
import { ProFormSelectProps } from "../ProFormSelect";
import { ProFormDatePickerProps } from "../ProFormDatePicker";
import { ProFormDatePickerRangeProps } from "../ProFormDatePickerRange";
export type ProFormItemType = 'text' | 'number' | 'textarea' | 'select' | 'radio' | 'checkbox' | 'date' | 'upload' | 'date-range';
export type FilterKey = 'name' | 'modelValue';

export interface ProFormProps<T = any> {
    options?: ProFormOption<T>[];
    request?: PromiseFunction<T>;
    initalData?: any;
    onSubmit?: (value: T) => Promise<any>;
    footer?: VueNode;
    onSuccess?: () => void;
    onFail?: (error?: any) => void;
    increment?: boolean;
    filterEmptyStr?: boolean;
    filterEmptyArray?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    submitText?: string;
    resetText?: string;
    hideReset?: boolean;
    extral?: VueNode;
    formProps?: FormProps;
    labelAlign?: FormProps['labelAlign'];
    rules?: FormProps['rules'];
    footerAligin?: 'left' | 'center' | 'right';
    hideFooter?: boolean;
    gap?: number;
    footerSpan?: number | string;
    onChange?: (key: string, value: any) => void;
}

export interface ProFormOption<T = any> {
    name: keyof T | string;
    hidden?: boolean;
    type?: ProFormItemType;
    placeholder?: string;
    label?: VNode | string;
    data?: any[] | PromiseFunction<any[]>;
    disabled?: boolean;
    readonly?: boolean;
    rules?: FormRule[];
    checkboxProps?: Optional<ProFormCheckboxProps, FilterKey | 'data'>;
    radioProps?: Optional<ProFormRadioProps, FilterKey | 'data'>;
    textProps?: Optional<ProFormTextProps, FilterKey>;
    numberProps?: Optional<ProFormInputNumberProps, FilterKey>;
    textareaProps?: Optional<ProFormTextareaProps, FilterKey>;
    selectProps?: Optional<ProFormSelectProps, FilterKey | 'data'>;
    datePickerProps?: Optional<ProFormDatePickerProps, FilterKey>;
    datePickerRangeProps?: Optional<ProFormDatePickerRangeProps, FilterKey>
    uploadProps?: UploadProps;
    span?: number;
    formItemProps?: FormItemProps;
    urlName?: string;
    onChange?: (value: any, key: string) => void

}

export interface ProFormRef<T = any> {
    setItem: (key: keyof T, value: any) => void,
    getItem: (key: keyof T) => any,
    resetRequest: () => void,
    validate: () => Promise<any>,
    submit: () => void,
    reset: () => void,
    getFormInstance: () => FormInstanceFunctions,
    getFormValue: () => T
}