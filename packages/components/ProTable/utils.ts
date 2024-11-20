import { ProFormOption } from "../ProForm";
import { ProTableOption } from "./types";

export function tableOption2FormOption(tableOptions: ProTableOption[]): ProFormOption[] {
    const proFormOptions: ProFormOption[] = [];
    tableOptions.forEach((item: ProTableOption) => {
        proFormOptions.push({
            ...item,
            label: item.labelText || item.title,
            span: item.span || 3,
            formItemProps: {
                labelAlign: item.labelAlign || 'right',
                labelWidth: item.labelWidth
            },
            hidden: item.hideInSearch,
            name: item.key,
            type: item.type || 'text',
        });
    });
    return proFormOptions;
}