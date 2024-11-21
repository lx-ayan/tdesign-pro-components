export function getType(data: any): string {
    return toString.call(data).substring(7, toString.call(data).length - 1).toLowerCase().trim();
}

export function is(data: any, key: string) {
    return key.toLowerCase().trim() == getType(data);
}

export function isFunction(data: any) {
    return is(data, 'function') || is(data, 'asyncfunction');
}