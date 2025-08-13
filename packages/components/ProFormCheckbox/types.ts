import { BaseFormItemProps, FormOptionData, OptionData } from "@tdesign-pro-component/utils";
import { TdCheckboxGroupProps, TdCheckboxProps, TdCheckTagGroupProps, TdFormItemProps } from "tdesign-vue-next";

export interface ProFormCheckboxProps extends BaseFormItemProps {
    data: FormOptionData | (() => Array<OptionData | any>);
    checkboxProps?: TdCheckboxGroupProps;
    formItemProps?: TdFormItemProps;
    keyName?: string;
    valueName?: string;
}

export interface ProFormCheckboxRef {
    clear: () => void;
    resetData: () => void;
}