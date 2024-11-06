import { PromiseFunction, ValueType } from "@tdesign-pro-components/utils";
import type { FormItemProps, FormRule, SelectProps } from 'tdesign-vue-next';

export interface ProFormSelectProps {
  name: string;
  modelValue: ValueType | Array<ValueType>;
  data: SelectOptionProps[] | PromiseFunction<SelectOptionProps[]>;

  // form
  label?: string;
  rules?: FormRule[];
  formItemProps?: FormItemProps;
  labelWidth?: string | number;
  labelAlign?: 'left' | 'top' | 'right';
  requiredMark?: boolean;
  
  // input decorator
  prepend?: string;
  append?: string;

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
  selectLabel?: string;
  optionGroup?: boolean;
}

export interface SelectOptionProps {
  group?:
  | string
  | {
    label: string;
  };
  divider?: boolean;
  label?: string;
  value?: number;
  children?: SelectOptionProps[];
  [name: string]: any;
}
