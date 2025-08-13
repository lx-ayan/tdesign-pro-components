import { BaseFormItemProps, FormOptionData } from "@tdesign-pro-component/utils";
import { OptionData, TdFormItemProps, TdRadioGroupProps } from "tdesign-vue-next";

export interface ProFormRadioProps extends BaseFormItemProps {
    data: FormOptionData | (() => Array<OptionData | any>);
    radioProps?: TdRadioGroupProps;
    formItemProps?: TdFormItemProps;
    keyName?: string;
    valueName?: string;
}

export interface ProFormRadioRef {
    clear: () => void;
    resetData: () => void;
}