//@ts-ignore
import { VNode, VNodeChild } from "vue";

export type VueNode = VNode | VNodeChild | ((...args: any[]) => VNode) | string;

export type WithFalse<T extends any = any> = T | false;

export type PromiseFunction<T> = (...args: any[]) => Promise<T>;

export type StringOrVueNode = string | VueNode | (() => VueNode);

export interface OptionData {
    label: string,
    value: any,
    span?: number;
    disabled?: boolean;
    render?: (item: any) => VueNode;
}

export type RequestOptionData = () => Promise<OptionData[]>;

export type FormOptionData = Array<OptionData> | RequestOptionData | Array<any>;

export type BasicValueType = string | number | boolean;

export type ReturnType<T> = T extends () => infer R ? R: never;

export type ParamType<T> = T extends (...args: infer P) => any ? P: never;

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>