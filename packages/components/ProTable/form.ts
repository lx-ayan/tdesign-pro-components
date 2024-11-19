import { ProFormOption } from "../ProForm";
import { ProTableOption, ProTableProps } from "./types";
import { tableOption2FormOption } from "./utils";

export function getFormSlotNameList(options: ProTableOption[]) {
    return options.map(item => `form-${item.key}`);
}

export function getShowFormOptionList(options: ProTableOption[]) {
    return options.filter(toption => !toption.hideInSearch);
}

export function initForm(tableOptions: ProTableOption[], props: ProTableProps) {
    let resultFormOption: ProFormOption[] = [];
    const notHideOptions = getShowFormOptionList(tableOptions);
    const options: ProFormOption[] = [
        ...tableOption2FormOption(notHideOptions as ProTableOption[]),
    ];

    resultFormOption = options.map((item: any, index) => ({
        ...item,
        hidden: !((index + 1) <= (props.searchNum || 3)),
        placeholder: item.placeholder
    })) as any;

    resultFormOption.push({
        name: 'search-extral',
        span: 3
    });

    return resultFormOption;
}

export function formVisible(props: ProTableProps) {
    const flag = props.options.map(item => item.hideInSearch).every(item => item === true);
    return props.hideForm || flag;
}