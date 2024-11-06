import { PromiseFunction } from "@tdesign-pro-components/utils";
import { FormRule, FormRules, UploadProps, ValueType } from "tdesign-vue-next";
import { ProFormCheckboxProps } from "../ProFormCheckbox";
import { ProFormRadioProps } from "../ProFormRadio/types";
import { ProFormTextProps } from "../ProFormText";
import { ProFormInputNumberProps } from "../ProFormInputNumber";
import { ProFormTextareaProps } from "../ProFormTextarea";
import { ProFormSelectProps } from "../ProFormSelect";
import { ProFormDatepickerProps } from "../ProFormDatepicker";
import { ProFormTreeSelectProps } from "../ProFormTreeSelect";

export type ProFormItemType = 'text' | 'treeSelect' | 'number' | 'textarea' | 'select' | 'radio' | 'checkbox' | 'datepicker';

export interface ProFormProps {
    options: ProFormOption[];
    request?: PromiseFunction<any>;
    rules?: FormRules;
    labelAlign?: 'left' | 'top' | 'right';
    labelWidth?: string | number;
    form?: any;
    readonly?: boolean;
    disabled?: boolean;
    layout?: 'vertical' | 'inline';
    resetText?: string;
    submitText?: string;
    showReset?: boolean;
}

export interface ProFormOption {
    name: string;
    type: ProFormItemType;
    label?: string;
    data?: any[] | PromiseFunction<any[]>;
    disabled?: boolean;
    readonly?: boolean;
    rules?: FormRule[];
    checkboxProps?: ProFormCheckboxProps;
    radioProps?: ProFormRadioProps;
    textProps?: ProFormTextProps;
    numberProps?: ProFormInputNumberProps;
    textareaProps?: ProFormTextareaProps;
    selectProps?: ProFormSelectProps;
    datepickerProps?: ProFormDatepickerProps;
    treeSelectProps?: ProFormTreeSelectProps;
    uploadProps?: UploadProps;
    span?: number;
    offset?: number;
    initalValue?: ValueType | Array<ValueType>;
}