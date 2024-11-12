import { Optional, PromiseFunction, ValueType } from "@tdesign-pro-components/utils";
import { BaseTableCol, FormRule, PaginationProps, SizeEnum, TNode, TableProps, TableRowData } from "tdesign-vue-next";
import { ProFormCheckboxProps } from "../ProFormCheckbox";
import { ProFormRadioProps } from "../ProFormRadio/types";
import { ProFormTextProps } from "../ProFormText";
import { ProFormTextareaProps } from "../ProFormTextarea";
import { ProFormInputNumberProps } from "../ProFormInputNumber";
import { ProFormSelectProps } from "../ProFormSelect";
import { ProFormDatepickerProps } from "../ProFormDatepicker";
import { ProFormTreeSelectProps } from "../ProFormTreeSelect";
import { FilterKey } from "../ProForm";
import { CSSProperties, VNode } from "vue";

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
    request: <T = any> (data: ProTableRequest<T>) => Promise<ProTableResult<T>>;
    onSearchSuccess?: (data: ProTableResult<any>) => any;
    onSearchFail?: (exception: Error | string) => void;
    keyName?: string;
    hideForm?: boolean;
    hidePage?: boolean;
    searchNum?: number;
    loading?: boolean;
    size?: SizeEnum;

    // page
    page: { pageNum: number, pageSize: number, total: number }
    pageProps: PaginationProps;
}

export interface ProTableOption<T = any> {
    // table
    key: string;
    title: string | (() => TNode | VNode) | TNode | VNode;
    hideInTable?: boolean;
    tableColumnsProps?: TableProps['columns'];
    render?: (data: {row: T, colIndex: number, rowIndex: number}) => VNode | TNode;
    fixed?: 'left' | 'right';
    children?: Array<BaseTableCol<TableRowData>>;
    tableProps?: BaseTableCol;
    sorter?: boolean;
    ellipsisTitle?: boolean;
    ellipsis?: boolean;
    width?: string | number;



    // form props
    hideInSearch?: boolean;
    searchSpan?: number;
    searchStyle?: CSSProperties;
    searchIcon?: string;
    placeholder?: string;
    labelWidth?: string;
    type?: 'text' | 'treeSelect' | 'number' | 'textarea' | 'select' | 'radio' | 'checkbox' | 'datepicker';
    span?: number;
    offset?: number;
    data?: any[] | PromiseFunction<any[]>;
    labelAlign?: 'left' | 'right' | 'top';
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