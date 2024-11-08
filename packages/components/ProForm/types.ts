import { Optional, PromiseFunction } from "@tdesign-pro-components/utils";
import { ButtonProps, FormProps, FormRule, FormRules, UploadProps, ValueType } from "tdesign-vue-next";
import { ProFormCheckboxProps } from "../ProFormCheckbox";
import { ProFormRadioProps } from "../ProFormRadio/types";
import { ProFormTextProps } from "../ProFormText";
import { ProFormInputNumberProps } from "../ProFormInputNumber";
import { ProFormTextareaProps } from "../ProFormTextarea";
import { ProFormSelectProps } from "../ProFormSelect";
import { ProFormDatepickerProps } from "../ProFormDatepicker";
import { ProFormTreeSelectProps } from "../ProFormTreeSelect";

export type ProFormItemType = 'text' | 'treeSelect' | 'number' | 'textarea' | 'select' | 'radio' | 'checkbox' | 'datepicker' | 'upload';

type FilterKey = 'name' | 'modelValue';

export interface ProFormProps {
    options: ProFormOption[];
    request?: PromiseFunction<any>;
    rules?: FormRules;
    labelAlign?: 'left' | 'top' | 'right';
    labelWidth?: string | number;
    marginY?: number;
    readonly?: boolean;
    disabled?: boolean;
    layout?: 'vertical' | 'inline';
    resetText?: string;
    submitText?: string;
    showReset?: boolean;
    formProps?: FormProps;
    filterEmpty?: boolean; // 过滤空值
    submitFilter?: boolean; // 提交时候是否只要修改变化的数据（增量提交）
    submitButtonProps?: ButtonProps;
    resetButtonProps?: ButtonProps;
}

export interface ProFormOption {
    name: string;
    hidden?: boolean;
    type?: ProFormItemType;
    labelName?: string;
    valueName?: string;
    childrenName?: string;
    label?: string;
    data?: any[] | PromiseFunction<any[]>;
    multiple?: boolean;
    range?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    rules?: FormRule[];
    checkboxProps?: Optional<ProFormCheckboxProps, FilterKey>;
    radioProps?: Optional<ProFormRadioProps, FilterKey>;
    textProps?: Optional<ProFormTextProps, FilterKey>;
    numberProps?: Optional<ProFormInputNumberProps, FilterKey>;
    textareaProps?: Optional<ProFormTextareaProps, FilterKey>;
    selectProps?: Optional<ProFormSelectProps, FilterKey>;
    datepickerProps?: Optional<ProFormDatepickerProps, FilterKey>;
    treeSelectProps?: Optional<ProFormTreeSelectProps, FilterKey>;
    uploadProps?: UploadProps;
    span?: number;
    offset?: number;
    initalValue?: ValueType | Array<ValueType>;
}

export interface ProFormRef {
    getFormValue: () => any;
    submit: () => void;
    reset: () => void;
    initForm: () => void;
    setItem: (key: string, value: any) => void;
}