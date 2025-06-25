import { ProFormOption } from "./types";
export interface IObjectWithPossibleEmptyStrings {
    [key: string]: string | IObjectWithPossibleEmptyStrings | null | undefined;
}
export function initFormData(options: ProFormOption<any>[], initalData: any) {
    const obj: any = {};
    options.forEach(option => {
        if (![null, undefined].includes(initalData[option.name])) {
            obj[option.name] = initalData[option.name];
        } else {
            if (option.type === undefined || ['text', 'textarea', 'radio', 'number'].includes(option.type)) {
                obj[option.name] = '';
            } else if (['select', 'treeSelect'].includes(option.type)) {
                obj[option.name] = option.selectProps?.multiple ? [] : '';
            }
            // else if (['treeSelect'].includes(option.type)) {
            //     obj[option.name] = option.treeSelectProps.multiple ? [] : '';
            // }
            else if (['checkbox', 'upload'].includes(option.type)) {
                obj[option.name] = [];
            }
            else if (option.type === 'date') {
                obj[option.name] = null;
            } else if (option.type === 'date-range') {
                obj[option.name] = [];
            }
            else {
                obj[option.name] = ''
            }
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
                    result[option.name] = option.selectProps.multiple ? [] : '';
                }
                // else if (['treeSelect'].includes(option.type)) {
                //     result[option.name] = option.treeSelectProps.multiple ? [] : '';
                // }
                else if (['checkbox', 'upload'].includes(option.type)) {
                    result[option.name] = [];
                }
                else if (option.type === 'date') {
                    result[option.name] = null;
                } else if (option.type === 'date-range') {
                    result[option.name] = [];
                }
                else {
                    result[option.name] = option.type === 'upload' ? [] : ''
                }
            } else {
                if (option.type === 'upload') {
                    if (typeof data[option.name] === 'string') {
                        result[option.name] = data[option.name].split(',').map((url: string) => ({
                            url: `${url}`,
                            name: url.split('/').pop()
                        }))
                    } else {
                        result[option.name] = [];
                        data[option.name].forEach((url: any) => {
                            if (typeof url === 'string') {
                                result[option.name].push({
                                    url: `${url}`,
                                    name: url.split('/').pop()
                                })
                            } else {
                                result[option.name].push({
                                    ...url,
                                    url: url[option.urlName || 'url']
                                })
                            }
                        })
                    }
                } else {
                    result[option.name] = data[option.name];
                }
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
            result[key] = undefined;
        }
    }

    for (let key in obj2) {
        if (!obj1.hasOwnProperty(key)) {
            result[key] = obj2[key];
        }
    }

    return result;
}


export function removeEmptyArray(obj: IObjectWithPossibleEmptyStrings): IObjectWithPossibleEmptyStrings {
    const result: IObjectWithPossibleEmptyStrings = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            if(typeof value === 'object') {
                if(Array.isArray(value) && value.length) {
                    result[key] = value
                }
            } else {
                result[key] = value;
            }
        }
    }
    return result;
}

export function removeEmptyString(obj: IObjectWithPossibleEmptyStrings) {
    const result: IObjectWithPossibleEmptyStrings = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            if(typeof value === 'object') {
                result[key] = value;
            } else {
                if (value !== '' && value !== undefined && value !== null) {
                    result[key] = value;
                }
            }
        }
    }
    return result;
}