import { ProFormOption } from "../ProForm";
import { ProTableOption } from "./types";

export function tableOption2FormOption(tableOptions: ProTableOption[]): ProFormOption[] {
    const proFormOptions: ProFormOption[] = [];
    tableOptions.forEach((item: ProTableOption) => {
        proFormOptions.push({
            ...item,
            label: item.title,
            span: item.span || 3,
            formItemProps: {
                labelAlign: item.labelWidth || 'right',
                labelWidth: item.labelWidth
            },
            hidden: item.hideInForm,
            name: item.key,
            type: item.type || 'text',
        });
    })
    return proFormOptions;
}