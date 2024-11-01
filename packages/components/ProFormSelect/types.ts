import { PromiseFunction, SelectDataOption, ValueType } from "@tdesign-pro-components/utils";
import type { FormItemProps, FormRule, SelectProps } from 'tdesign-vue-next';

export interface ProFormSelectProps {
    name: string;
    modelValue: ValueType | Array<ValueType>;
    data: CustomOptionInfo[] | PromiseFunction<CustomOptionInfo[]>;

    // form
    label?: string;
    rules?: FormRule[];
    formItemProps?: FormItemProps;

    // select
    labelName?: string;
    valueName?: string;
    disabled?: boolean;
    readonly?: boolean;
    multiple?: boolean;
    placeholder?: string;
    autofocus?: boolean;
    autoWidth?: boolean;
    borderless?: boolean;
    clearable?: boolean;
    creatable?: boolean;
    loading?: boolean;
    loadingText?: string;
    selectProps?: SelectProps;
}

export interface CustomOptionInfo {
    group?:
      | string
      | {
          label: string;
        };
    divider?: boolean;
    label?: string;
    value?: number;
    children?: CustomOptionInfo[];
  }