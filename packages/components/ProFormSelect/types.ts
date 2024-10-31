export interface ProFormSelectProps {
    name: string;
    label?: string;
    placeholder?: string;
    data: ProFormSelectOption[] | (() => Promise<ProFormSelectOption[]>)
}

export interface ProFormSelectOption {
    label: string;
    value: 'string' | 'number' | 'boolean';
    disabled?: boolean;
}