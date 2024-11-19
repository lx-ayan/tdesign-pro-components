import { ProTableOption, ProTableProps } from "./types";

export function initTable(props: ProTableProps) {
    const resultColumns: any = [];
    if (props.selectAble) {
        resultColumns.unshift({
            colKey: 'row-select', type: 'multiple'
        })
    }
    props.options.forEach((item: ProTableOption) => {
        resultColumns.push(createTableOption(item, props) as unknown as any)
    });
    return resultColumns;
}

function createTableOption(option: ProTableOption, props: ProTableProps) {
    const object: any = {
        colKey: option.key,
        title: option.title as any,
        ellipsis: option.ellipsis,
        ellipsisTitle: option.ellipsisTitle,
        fixed: option.fixed,
        sorter: option.sorter,
        children: option.children,
        width: option.width,
        ...option.tableColumnsProps as any,
    }
    if (option.render) {
        object.cell = (_h: any, row: any) => option!.render!(row) as any
    }
    return object;
}