type ProTableOptionType = 'input' | 'select' | 'textarea' | 'checkbox' | 'radio' | 'datepicker'

interface ProTableOption {
    type: ProTableOptionType
}

interface ProTableResult<T extends Object = Object> {
    total: number;
    list: T[];
    pageNumber?: number;
    pageSize?: number;
}

interface ProTableRequest {
    form: object;
    pageNumber: number;
    pageSize: number;
    sorter?: Record<string, 'asc' | 'desc'>;
}

interface ProTableProps {
    options: ProTableOption[]
}