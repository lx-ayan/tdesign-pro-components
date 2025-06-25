import { BasicValueType, PromiseFunction, VueNode } from "@tdesign-pro-component/utils";
import { TagRadioProps } from "../ProFormRadio";
import { FormItemProps, FormRule, CheckboxProps } from "tdesign-vue-next";

export interface ProFormCheckboxProps {
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
    vertical?: 'row' | 'column';
    loadingText?: string | VueNode;
    radioProps?: CheckboxProps | TagCheckboxProps | TagRadioProps;
}

export interface TagCheckboxProps extends TagRadioProps {

}