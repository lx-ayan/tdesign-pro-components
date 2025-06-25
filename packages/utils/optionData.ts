
import { isFunction } from "./is";
import type { FormOptionData, OptionData } from "./types";

export function buildData(data: FormOptionData, keyName: string = 'label', valueName: string = 'value'): Promise<Array<OptionData>> {
    return new Promise((resolve) => {
        if (!isFunction(data) && !Array.isArray(data)) resolve([]);
        if (isFunction(data)) {
            //@ts-ignore
            data().then(res => {
                const result = res.map((item: any) => ({
                    label: item[keyName],
                    value: item[valueName],
                    disabled: item.disabled,
                    render: item.render
                }));
                resolve(result);
            })
        } else {
            //@ts-ignore
            const result = data.map((item: any) => ({
                ...item,
                label: item[keyName],
                value: item[valueName],
                disabled: item.disabled,
                render: item.render
            }));
            resolve(result);
        }
    });
}