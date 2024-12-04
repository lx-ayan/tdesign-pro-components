import { isFunction } from "./is";

export function getSlots<T = Record<string, any>, K = keyof T>(slots: any, props: T, prop?: K) {
    let _prop: any = prop || ('default' as any);

    if (slots[_prop]) {
        return slots[_prop]();
    }

    if ((props as any)[_prop] === false) {
        return void 0;
    }

    if (!(props as any)[_prop]) {
        return void 0;
    }

    if (isFunction((props as any)[_prop])) {
        return ((props as any)[_prop] as Function)();
    }

    return (props as any)[_prop];
}