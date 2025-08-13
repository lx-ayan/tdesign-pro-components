import { FormRule, TdColProps, TdFormProps, TdRowProps } from "tdesign-vue-next";
import { ProFormTextProps } from "../ProFormText";
import { ProFormSelectProps } from "../ProFormSelect";
import { ProFormRadioProps } from "../ProFormRadio";
import { ProFormCheckboxProps } from "../ProFormCheckbox";
import { ProFormDatePickerProps } from "../ProFormDatepicker";
import { ProFormDateRangePickerProps } from "../ProFormDateRangePicker";
import { ProFormTreeSelectProps } from "../ProFormTreeSelect";
import { ProFormInputNumberProps } from "../ProFormInputNumber";
import { FormOptionData, OptionData } from "@tdesign-pro-component/utils";

export type FormComponentType = 'text' | 'select' | 'radio' | 'checkbox' | 'date' | 'dateRange' | 'treeSelect' | 'inputNumber' | 'textarea'

type ProFormItemProps = ProFormTextProps | ProFormSelectProps | ProFormRadioProps | ProFormCheckboxProps | ProFormDatePickerProps | ProFormDateRangePickerProps | ProFormTreeSelectProps | ProFormInputNumberProps

export interface ProFormProps {
    options: ProFormOption[];
    request?: () => Promise<any>;
    formProps?: TdFormProps;
    rowProps?: TdRowProps;
}

export interface ProFormOption {
    name: string;
    label?: string;
    rules?: Array<FormRule>;
    hidden?: boolean;
    type?: FormComponentType | ((...args: any[]) => any);
    data?: FormOptionData | (() => Array<OptionData | any>);
    colProps?: TdColProps;
    props?: Partial<ProFormItemProps>;
    [name: string]: any;
}

export interface ProFormRef {

}