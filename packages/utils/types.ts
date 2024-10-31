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

export type PromiseFunction<T> = (...args?: any[]) => Promise<T>;