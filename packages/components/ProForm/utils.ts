import { ProFormOption } from "./types";

export function filterEmptyValue(obj: object) {

}

export function initFormData(options: ProFormOption[]) {
    const obj: any = {};
    options.forEach(option => {
        if(![null, undefined].includes(option.initalValue)) {
            obj[option.name] = option.initalValue;
        } else {
            obj[option.name] = null;
        }
    });

    return obj;
}

export function filterDiffrentObject(source: object, target: object) {

}