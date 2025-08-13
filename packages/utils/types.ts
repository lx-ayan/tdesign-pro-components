import { FormRule, TdFormItemProps } from 'tdesign-vue-next';

export type WithFalse<T extends any = any> = T | false;

export type PromiseFunction<T> = (...args: any[]) => Promise<T>;

export interface OptionData {
    label: string,
    value: any,
    span?: number;
    disabled?: boolean;
    render?: (item: OptionData) => any;
}

export type RequestOptionData = () => Promise<OptionData[]>;

export type FormOptionData = Array<OptionData | any> | RequestOptionData;

export type BasicValueType = string | number | boolean;

export type ReturnType<T> = T extends () => infer R ? R : never;

export type ParamType<T> = T extends (...args: infer P) => any ? P : never;

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type BaseFormItemProps = {
    name: string;
    label?: TdFormItemProps['label'];
    labelAlign?: TdFormItemProps['labelAlign'];
    labelWidth?: TdFormItemProps['labelWidth'];
    readonly?: boolean;
    disabled?: boolean;
    placeholder?: string;
    rules?: Array<FormRule>;
}