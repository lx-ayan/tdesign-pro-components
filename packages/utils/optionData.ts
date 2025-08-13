
import { isFunction } from "./is";
import type { OptionData } from "./types";

export async function buildData(data: any, keyName: string = 'label', valueName: string = 'value', childrenName: string = 'children'): Promise<Array<OptionData>> {
    if (isFunction(data)) {
        const _data = await data();
        const result = _data.map((item: any) => ({
            ...item,
            label: item[keyName],
            value: item[valueName],
            children: item[childrenName],
            disabled: item.disabled,
            render: item.render
        }))
        return result;
    } else {
        const result = data.map((item: any) => ({
            ...item,
            label: item[keyName],
            value: item[valueName],
            children: item[childrenName],
            disabled: item.disabled,
            render: item.render
        }));
        return result;
    }
}