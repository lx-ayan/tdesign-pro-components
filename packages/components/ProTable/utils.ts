import { ProFormOption } from "../ProForm";
import { ProTableOption } from "./types"

export const tableOption2formOption = <T>(options: ProTableOption<T>[]) => {
    const proFormOptions: ProFormOption<T>[] = [];
    options.forEach(tableOption => {
        proFormOptions.push({
            name: tableOption.key,
            label: typeof tableOption.title === 'string' ? tableOption.title : tableOption.title.formTitle as unknown as any,
            type: tableOption.type,
            span: tableOption.span || 3,
            hidden: tableOption.hideInSearch,
            placeholder: tableOption.placeholder,
            data: tableOption.data || []
        })
    })
    return proFormOptions
}

export const options2tableOption = <T>(options: ProTableOption<T>[]) => {
    const tableColumns: any[] = [];
    options.forEach(tableOption => {
        const obj = {
            ...tableOption.tableColumnsProps,
            foot: tableOption.footer,
            colKey: tableOption.key,
            title: typeof tableOption.title === 'string' ? tableOption.title : tableOption.title.tableTitle as unknown as any,
            ellipsis: tableOption.ellipsis,
            ellipsisTitle: tableOption.ellipsisTitle,
            fixed: tableOption.fixed,
            sorter: tableOption.sorter,
            width: tableOption.width,
            render: tableOption.titleRender,
            type: tableOption.tableType
        }
        if (tableOption.render) {
            //@ts-ignore
            obj.cell = (_h: any, {row, rowIndex}: {row: T, rowIndex: number}) => tableOption.render(row, rowIndex) as any
        }
        tableColumns.push(obj)
    })

    return tableColumns;
}