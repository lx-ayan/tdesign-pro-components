import { ProFormOption } from "./types";

export function filterEmptyValue(obj: object) {

}

export function initFormData(options: ProFormOption[]) {
    const obj: any = {};
    options.forEach(option => {
        if (![null, undefined].includes(option.initalValue)) {
            obj[option.name] = option.initalValue;
        } else {
            obj[option.name] = null;
        }
    });

    return obj;
}

export function initFormValue(data: any, options: ProFormOption[]) {
    const result: any = {};
    Object.keys(data).forEach(key => {
        const option = options.find(item => item.name === key);
        if (option) {
            if ([null, undefined].includes(data[option.name])) {
                if (option.type === undefined || ['text', 'textarea', 'radio', 'number'].includes(option.type)) {
                    result[option.name] = '';
                } else if (['select', 'treeSelect'].includes(option.type)) {
                    result[option.name] = option.multiple ? [] : '';
                } else if (['checkbox', 'upload'].includes(option.type)) {
                    result[option.name] = [];
                } else if (option.type === 'datepicker') {
                    result[option.name] = option.range ? [] : null;
                } else {
                    result[option.name] = ''
                }
            } else {
                result[option.name] = data[option.name];
            }
        }
    });

    return result;
}

export function filterChangedValues(obj1: any, obj2: any, result: any = {}) {
    for (let key in obj1) {
        if (obj2.hasOwnProperty(key)) {
            if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
                let subResult = {};
                filterChangedValues(obj1[key], obj2[key], subResult);
                if (Object.keys(subResult).length > 0) {
                    result[key] = subResult;
                }
            } else if (obj1[key] !== obj2[key]) {
                result[key] = obj2[key];
            }
        } else {
            result[key] = null;
        }
    }

    for (let key in obj2) {
        if (!obj1.hasOwnProperty(key)) {
            result[key] = obj2[key];
        }
    }

    return result;
}
