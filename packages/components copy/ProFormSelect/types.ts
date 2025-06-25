import { BasicValueType, PromiseFunction, VueNode } from "@tdesign-pro-component/utils";
import { FormItemProps, FormRule, SelectProps } from "tdesign-vue-next";

export interface ProFormSelectProps {
    name: string;
    modelValue: BasicValueType | BasicValueType[];
    data: any[] | PromiseFunction<any[]>;
    labelName?: string;
    valueName?: string;
    label?: string | VueNode;
    rules?: FormRule[];
    formItemProps?: FormItemProps;
    placeholder?: string;
    readonly?: boolean;
    disabled?: boolean;
    clearable?: boolean;
    multiple?: boolean;
    filterable?: boolean;
    borderless?: boolean;
    filter?: SelectProps['filter'];
    onSearch?: SelectProps['onSearch'];
    panelTopContent?: VueNode;
    panelBottomContent?: VueNode;
    collapsedItems?: VueNode;
    prefixIcon?: VueNode;
    selectProps?: SelectProps;
}

export interface ProFormSelectRef {
    reset: () => void;
}