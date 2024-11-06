import { PromiseFunction, ValueType } from "@tdesign-pro-components/utils";
import { FormItemProps, FormRule, SizeEnum, TreeSelectProps } from "tdesign-vue-next";
import { ProFormSelectRef } from "../ProFormSelect";

export interface ProFormTreeSelectProps {
    name: string;
    modelValue: ValueType | Array<ValueType>;
    data: TreeSelectOptionProps[] | PromiseFunction<TreeSelectOptionProps[]>;

    // form
    label?: string;
    rules?: FormRule[];
    formItemProps?: FormItemProps;
    labelWidth?: string | number;
    labelAlign?: 'left' | 'top' | 'right';
    requiredMark?: boolean;

    // tree-select
    placeholder?: string;
    labelName?: string;
    valueName?: string;
    childrenName?: string;
    autoWidth?: boolean;
    borderless?: boolean;
    size?: SizeEnum;
    clearable?: boolean;
    disabled?: boolean;
    filterable?: boolean;
    loading?: boolean;
    multiple?: boolean;
    readonly?: boolean;
    treeSelectProps?: TreeSelectProps;

    // input dectorator
    append?: string;
    prepend?: string;
}

export interface TreeSelectOptionProps {
    label?: string;
    value?: ValueType;
    children?: TreeSelectOptionProps[];
    [name: string]: any;
}

export interface ProFormTreeSelectRef extends ProFormSelectRef { }