import { VNode, VNodeChild } from "vue";

export type ElementSize = 'small' | 'medium' | 'large';

export type ValueType = string | number | boolean | undefined | null;

export type ElementPosition = 'left' | 'right' | 'top';

export type Nullable<T> = T | null;

export interface SelectDataOption {
    label: string;
    value: 'string' | 'number' | 'boolean';
    disabled?: boolean;
    options?: SelectDataOption[];
}

export type PromiseFunction<T> = (...args: any[]) => Promise<T>;

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type WithFalse<T extends any = any> = T | false;

export type VueNode = VNode | VNodeChild | (() => VNode);