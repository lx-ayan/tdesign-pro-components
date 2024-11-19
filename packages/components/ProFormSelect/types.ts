import { PromiseFunction, ValueType } from "@tdesign-pro-component/utils";
import type { FormItemProps, FormRule, SelectProps, SizeEnum, TNode } from 'tdesign-vue-next';
import { VNode } from "vue";

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
  append?: string | (() => (TNode | VNode)) | TNode | VNode;
  prepend?: string | (() => (TNode | VNode)) | TNode | VNode;

  // select
  size?: SizeEnum;
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
  filterable?: boolean;
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

export interface ProFormSelectRef {
  getValue: () => ValueType;
  focus: () => void;
  blur: () => void;
  clear: () => void;
  getRef: <T extends any = any> () => T;
}
