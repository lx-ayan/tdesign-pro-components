import { BaseFormItemProps, FormOptionData } from "@tdesign-pro-component/utils";
import { OptionData, TdFormItemProps, TdInputAdornmentProps, TdTreeSelectProps } from "tdesign-vue-next";

export interface ProFormTreeSelectProps extends BaseFormItemProps {
    data: FormOptionData | (() => Array<OptionData | any>);
    treeSelectProps?: TdTreeSelectProps & TdInputAdornmentProps;
    formItemProps?: TdFormItemProps;
    keyName?: string;
    valueName?: string;
    childName?: string;
}

export interface ProFormTreeSelectRef {
    clear: () => void;
    resetData: () => void;
}