import { BasicValueType, Optional, PromiseFunction, VueNode, WithFalse } from "@tdesign-pro-component/utils"
import { FilterKey } from "../ProForm";
import { ProFormDatePickerProps } from "../ProFormDatePicker";
import { ProFormSelectProps } from "../ProFormSelect";
import { ProFormInputNumberProps } from "../ProFormInputNumber";
import { ProFormTextareaProps } from "../ProFormTextarea";
import { ProFormTextProps } from "../ProFormText";
import { ProFormRadioProps } from "../ProFormRadio";
import { ProFormCheckboxProps } from "../ProFormCheckbox";
import { BaseTableCol, FormRule, PrimaryTableOnEditedContext, TableEditableCellConfig, TableProps } from "tdesign-vue-next";
import { Ref } from "vue";

export interface ProTableProps<T = any> {
    rowKey?: string;
    options: ProTableOption<T>[];
    request: <REQ, RES>(data: ProTableRequest<REQ>) => Promise<ProTableResult<RES>>;
    dragAble?: boolean;
    dragType?: 'row' | 'col' | 'row-handler';
    dragHandler?: (params: any) => any[];
    empty?: VueNode | string;
    tableProps?: TableProps;
    selectData?: BasicValueType[];
    selectAble?: boolean;
    selectType?: 'single' | 'multiple';
    editAble?: boolean;
    hideFooter?: boolean;
    dataActions?: VueNode  | string;
    expanedRow?: VueNode  | string;
    formHeader?: VueNode  | string;
    hideForm?: boolean;
    dataActionsAlign?: 'left' | 'right';

    [name: string]: any;
}

interface ProTableTitle {
    formTitle: VueNode,
    tableTitle: VueNode
}

export interface ProTableOption<T> {
    key: string;
    title: string | ProTableTitle;
    render?: (row: T, rowIndex?: number) => VueNode;
    hideInTable?: boolean;
    titleRender?: (...args: any[]) => VueNode;
    tableColumnsProps?: Optional<BaseTableCol, 'colKey'>;
    ellipsis?: boolean;
    ellipsisTitle?: boolean;
    fixed?: 'left' | 'right';
    sorter?: boolean;
    width?: string | number;
    footer?: (...args: any[]) => VueNode;
    tableType?: WithFalse<'single' | 'multiple'>;
    edit?: TableEditableCellConfig & {beforeEdit?: () => Promise<any>; onEditSuccess?: (data?: PrimaryTableOnEditedContext<T>) => void, onEditFail?: (e: any) => void};
    

    // form props
    hideInSearch?: boolean;
    placeholder?: string;
    type?: 'text' | 'number' | 'textarea' | 'select' | 'radio' | 'checkbox' | 'date' | 'date-range';
    span?: number;
    data?: any[] | PromiseFunction<any[]>;
    labelAlign?: 'left' | 'right' | 'top';
    disabled?: boolean;
    rules?: FormRule[];
    checkboxProps?: Optional<ProFormCheckboxProps, FilterKey>;
    radioProps?: Optional<ProFormRadioProps, FilterKey>;
    textProps?: Optional<ProFormTextProps, FilterKey>;
    numberProps?: Optional<ProFormInputNumberProps, FilterKey>;
    textareaProps?: Optional<ProFormTextareaProps, FilterKey>;
    selectProps?: Optional<ProFormSelectProps, FilterKey>;
    datePickerProps?: Optional<ProFormDatePickerProps, FilterKey>;
    readonly?: boolean;
}

export interface ProTableRequest<T = any> {
    form: T;
    pageNum: number;
    pageSize: number;
    [name: string]: any;
}

export interface ProTableResult<T = any> {
    list: T[];
    total: number;
    success: boolean;
    [name: string]: any;
}

export interface ProTableRef {
    reset: () => void;
    reload: () => void;
    getTableData: () => Ref<any[]>;
    getFormValue: () => any,
}