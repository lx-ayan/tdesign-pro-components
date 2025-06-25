import { PromiseFunction, BasicValueType } from "@tdesign-pro-component/utils";
import { FormItemProps, FormRule, SizeEnum, TNode, TreeSelectProps } from "tdesign-vue-next";
import { VNode } from "vue";

export interface ProFormTreeSelectProps {
    name: string;
    modelValue: BasicValueType | Array<BasicValueType>;
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
    append?: string | (() => (TNode | VNode)) | TNode | VNode;
    prepend?: string | (() => (TNode | VNode)) | TNode | VNode;
}

export interface TreeSelectOptionProps {    
    label?: string;
    value?: BasicValueType;
    children?: TreeSelectOptionProps[];
    [name: string]: any;
}

export interface ProFormTreeSelectRef { 
    getValue: () => BasicValueType;
    focus: () => void;
    blur: () => void;
    clear: () => void;
    getRef: <T extends any = any> () => T;
}