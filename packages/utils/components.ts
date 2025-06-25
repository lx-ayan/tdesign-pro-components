import { isFunction } from "lodash-es";

export function getSlotOrJSX<T = Object>(key: keyof T, slots: any, props: T, ...slotsArguments: any) {
    return (...args: any) => {
        return slots[key] ? slots[key as string](...slotsArguments, ...args) : (isFunction(props[key]) ? props[key](...slotsArguments, ...args) : props[key] || null)
    }
}