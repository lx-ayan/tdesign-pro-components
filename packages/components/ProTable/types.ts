import { FormOptionData, OptionData } from "@tdesign-pro-component/utils";
import { FormComponentType, ProFormOption } from "../ProForm";
import { BaseTableCol, TableCol, TableProps, TdColProps, TdLoadingProps } from 'tdesign-vue-next';

export interface ProTableRequest<T = any> {
    pageNum: number;
    pageSize: number;
    form: T;
    sorter?: Record<string, string>;
    [name: string]: any;
}

export interface ProTableResult<T = any> {
    total: number;
    list: T[];
    pages?: number;
    pageNum?: number;
    pageSize?: number;
    [name: string]: any;
}

export interface ProTableProps {
    options: ProTableOption[];
    request: <T = any> (data: ProTableRequest<any>) => ProTableResult<T> | Promise<ProTableResult<T>>;
    rowKey?: string;
    hideForm?: boolean;
    showSearchNum?: number;
    loadingProps?: TdLoadingProps;
    cardBordered?: boolean;
    bordered?: boolean;
    tableProps?: TableProps;
    selectAble?: boolean;
    dragAble?: boolean;
    dataSource?: any[];
    selectType?: 'multiple' | 'single';
}

export interface ProTableOption<T = any> {
    key: string;
    title: string;
    hideInSearch?: boolean;
    hideInTable?: boolean;
    data?: FormOptionData | (() => Array<OptionData | any>);
    render?: (row: T, rowIndex: number) => any;
    type?: FormComponentType;
    colProps?: TdColProps;
    formProps?: Partial<ProFormOption>;
    tableProps?: BaseTableCol;
    edit?: TableCol['edit'];
}