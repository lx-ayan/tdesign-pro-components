import { BaseFormItemProps, FormOptionData, RequestOptionData } from "@tdesign-pro-component/utils";
import { OptionData, TdFormItemProps, TdInputAdornmentProps, TdSelectProps } from "tdesign-vue-next";

export interface ProFormSelectProps extends BaseFormItemProps {
    data: FormOptionData | (() => Array<OptionData | any>);
    selectProps?: TdSelectProps & TdInputAdornmentProps;
    formItemProps?: TdFormItemProps;
    keyName?: string;
    valueName?: string;
}

export interface ProFormSelectRef {
    clear: () => void;
    resetData: () => void;
}