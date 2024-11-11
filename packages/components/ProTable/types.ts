import { Optional, PromiseFunction, ValueType } from "@tdesign-pro-components/utils";
import { FormRule, TNode, TableProps } from "tdesign-vue-next";
import { ProFormCheckboxProps } from "../ProFormCheckbox";
import { ProFormRadioProps } from "../ProFormRadio/types";
import { ProFormTextProps } from "../ProFormText";
import { ProFormTextareaProps } from "../ProFormTextarea";
import { ProFormInputNumberProps } from "../ProFormInputNumber";
import { ProFormSelectProps } from "../ProFormSelect";
import { ProFormDatepickerProps } from "../ProFormDatepicker";
import { ProFormTreeSelectProps } from "../ProFormTreeSelect";
import { FilterKey } from "../ProForm";
import { VNode } from "vue";

export interface ProTableRequest<T = any> {
    form: T;
    pageNum: number;
    pageSize: number;
}

export interface ProTableResult<T = any> {
    list: T[];
    total: number;
    pageNum?: number;
    pageSize?: number;
}

export interface ProTableProps {
    options: ProTableOption[];
    request: <T = any> (data: ProTableRequest<T>) => PromiseFunction<ProTableResult<T>>;
    keyName?: string;
    hideForm?: boolean;
    hidePage?: boolean;
    searchNum?: number;

}

export interface ProTableOption {
    // table
    key: string;
    title: string | (() => TNode | VNode) | TNode | VNode;
    hideInTable?: boolean;
    tableColumnsProps?: TableProps['columns'];
    render: ReturnType<TableProps['columns']['cell']>


    // form props
    hideInForm?: boolean;
    placeholder?: string;
    labelWidth?: string;
    type: 'text' | 'treeSelect' | 'number' | 'textarea' | 'select' | 'radio' | 'checkbox' | 'datepicker';
    span?: number;
    offset?: number;
    data?: any[] | PromiseFunction<any[]>;
    multiple?: boolean;
    range?: boolean;
    disabled?: boolean;
    rules?: FormRule[];
    checkboxProps?: Optional<ProFormCheckboxProps, FilterKey>;
    radioProps?: Optional<ProFormRadioProps, FilterKey>;
    textProps?: Optional<ProFormTextProps, FilterKey>;
    numberProps?: Optional<ProFormInputNumberProps, FilterKey>;
    textareaProps?: Optional<ProFormTextareaProps, FilterKey>;
    selectProps?: Optional<ProFormSelectProps, FilterKey>;
    datepickerProps?: Optional<ProFormDatepickerProps, FilterKey>;
    treeSelectProps?: Optional<ProFormTreeSelectProps, FilterKey>;
    readonly?: boolean;
    display?: boolean;
    initalValue?: ValueType | Array<ValueType>;
}