import { Optional, PromiseFunction } from "@tdesign-pro-component/utils";
import { ButtonProps, FormItemProps, FormProps, FormRule, FormRules, TNode, UploadProps, ValueType } from "tdesign-vue-next";
import { ProFormCheckboxProps } from "../ProFormCheckbox";
import { ProFormRadioProps } from "../ProFormRadio/types";
import { ProFormTextProps } from "../ProFormText";
import { ProFormInputNumberProps } from "../ProFormInputNumber";
import { ProFormTextareaProps } from "../ProFormTextarea";
import { ProFormSelectProps } from "../ProFormSelect";
import { ProFormDatepickerProps } from "../ProFormDatepicker";
import { ProFormTreeSelectProps } from "../ProFormTreeSelect";
import { VNode } from "vue";

export type ProFormItemType = 'text' | 'treeSelect' | 'number' | 'textarea' | 'select' | 'radio' | 'checkbox' | 'datepicker' | 'upload';

export type FilterKey = 'name' | 'modelValue';

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
    footerAligin?: 'left' | 'center' | 'right';
    resetText?: string;
    submitText?: string;
    showReset?: boolean;
    formProps?: FormProps;
    filterEmptyStr?: boolean; // 过滤空字符串
    submitFilter?: boolean; // 提交时候是否只要修改变化的数据（增量提交）
    submitButtonProps?: ButtonProps;
    resetButtonProps?: ButtonProps;
    hideFooter?: boolean;
}

export interface ProFormOption {
    name: string;
    hidden?: boolean;
    type?: ProFormItemType;
    placeholder?: string;
    labelName?: string;
    valueName?: string;
    childrenName?: string;
    label?: string | TNode | VNode | (() => TNode | VNode);
    data?: any[] | PromiseFunction<any[]>;
    multiple?: boolean;
    range?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    rules?: FormRule[];
    checkboxProps?: Optional<ProFormCheckboxProps, FilterKey | 'data'>;
    radioProps?: Optional<ProFormRadioProps, FilterKey | 'data'>;
    textProps?: Optional<ProFormTextProps, FilterKey>;
    numberProps?: Optional<ProFormInputNumberProps, FilterKey>;
    textareaProps?: Optional<ProFormTextareaProps, FilterKey>;
    selectProps?: Optional<ProFormSelectProps, FilterKey | 'data'>;
    datepickerProps?: Optional<ProFormDatepickerProps, FilterKey>;
    treeSelectProps?: Optional<ProFormTreeSelectProps, FilterKey | 'data'>;
    uploadProps?: UploadProps;
    urlName?: string;
    span?: number;
    offset?: number;
    initalValue?: ValueType | Array<ValueType>;
    formItemProps?: FormItemProps;
    onChange?: (value: any, name?: string) => void;
}

export interface ProFormRef {
    getFormValue: () => any;
    submit: () => void;
    reset: () => void;
    initForm: () => void;
    setItem: (key: string, value: any) => void;
}

export interface IObjectWithPossibleEmptyStrings {
    [key: string]: string | IObjectWithPossibleEmptyStrings | null | undefined;
}