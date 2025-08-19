<script setup generic="T extends Object" lang='tsx'>
import { Card, Table, Pagination, BaseTableColumns, BaseTableCol, Loading, Icon, PageInfo, TableCol, DragSortContext, TableRowData, TableInstanceFunctions, ValueType, SelectOptions } from 'tdesign-vue-next';
import ProForm from '../ProForm/ProForm.vue';
import { FormItem } from 'tdesign-vue-next';
import { ProTableOption, ProTableProps } from './types';
import { computed, onMounted, ref, useTemplateRef, watch } from 'vue';
import { ProFormOption, ProFormRef } from '../ProForm';

defineOptions({
    name: 'ProTable'
});

const props = withDefaults(defineProps<ProTableProps>(), {
    rowKey: 'id',
    bordered: false,
    cardBordered: true
});

const emits = defineEmits<{
    (e: 'dragSort', data: DragSortContext<T>): void,
    (e: 'update:dataSource', data: T[]): void;
}>();

const innerDataSource = ref<T[]>([]);

const showCountWhenCollapsed = props.showSearchNum || 3;

const expandState = ref(false);

const loading = ref(false);

const tableRef = useTemplateRef<TableInstanceFunctions>('tableRef');

const proFormRef = useTemplateRef<ProFormRef>('proFormRef');

const selectData = defineModel<{ values: Array<string | number>, context: SelectOptions<T> }>('selectData');

const page = ref<{ pageNum: number, pageSize: number, total: number }>({
    pageNum: 1,
    pageSize: 10,
    total: 0
});

let formModelValue: any = {};

const proFormOptions = computed<ProFormOption[]>(() => {
    return getProFormProps(props.options).filter(item => item.hidden !== true);
});

const tableOptions = computed(() => {
    const options = getTableProps(props.options.filter(item => item.hideInTable !== true));
    return options;
});

const displayedOptions = computed(() => {
    if (expandState.value) return proFormOptions.value;
    return proFormOptions.value.slice(0, showCountWhenCollapsed! as unknown as number);
});

const hasMoreOptions = computed(() =>
    proFormOptions.value.length > showCountWhenCollapsed! as unknown as number
);

const toggleExpand = () => {
    expandState.value = !expandState.value;
};

function initDragTable(options: TableCol[]) {
    if (options.filter(item => item.colKey === 'drag').length > 0) return
    if (props.dragAble) {
        options.unshift({
            colKey: 'drag',
            cell: () => (
                <span>
                    <t-icon name="move" />
                </span>
            ),
            width: 46,
        })
    }
}

onMounted(async () => {
    request(1, page.value.pageSize);
});

async function request(pageNum: number, pageSize: number) {
    if (props.request) {
        try {
            loading.value = true
            const result = await props.request<T>({
                pageNum,
                form: formModelValue,
                pageSize
            });
            innerDataSource.value = result.list;
            page.value.pageNum = pageNum;
            page.value.pageSize = pageSize;
            page.value.total = result.total;
        } finally {
            loading.value = false;
        }
    }
}

function getProFormProps(tableOptions: ProTableOption[]): ProFormOption[] {
    const options: ProFormOption[] = tableOptions.map(item => {
        const option: ProFormOption = {
            name: item.key,
            label: item.title,
            type: item.type,
            data: item.data,
            colProps: item.colProps ? item.colProps : { span: 3 },
            props: item.formProps,
            hidden: item.hideInSearch
        }
        return option;
    });
    return options;
}

function getTableProps(tableOptions: ProTableOption[]) {
    const options: BaseTableColumns = tableOptions.map(item => {
        const option: TableCol = {
            colKey: item.key,
            title: item.title,
            ellipsis: item.tableProps?.ellipsis || true,
            ...item.tableProps,
        }
        if (item.render) {
            option.cell = (_h, { row, rowIndex }) => {
                return item.render(row, rowIndex);
            }
        }
        if (item.edit) {
            option['edit'] = {
                ...item.edit,
                onEdited: (context) => {
                    if (item.edit.onEdited) {
                        item.edit.onEdited(context);
                    } else {
                        innerDataSource.value[context.rowIndex] = context.newRowData as unknown as any;
                        console.log('innerDataSource.value =', innerDataSource.value);
                    }
                }
            }
        }
        return option;
    });
    initSelectTable(options);
    initDragTable(options);
    return options;
}

function initSelectTable(options: TableCol[]) {
    if (options.filter(item => item.colKey === 'row-select').length > 0) return
    if (props.selectAble) {
        options.unshift({
            colKey: 'row-select',
            type: props.selectType,
            width: 46,
        })
    }

    return options;
}

function handlePageChange(pageInfo: PageInfo) {
    request(pageInfo.current, pageInfo.pageSize);
}

async function handleSubmit(data) {
    formModelValue = data;
    await request(1, page.value.pageSize);
    return true;
}

function handleDragSort(params: DragSortContext<T>) {
    innerDataSource.value = params.newData;
    emits('dragSort', params);
}

function handleSelectChange(values: string[], context: SelectOptions<T>) {
    selectData.value = {
        values,
        context
    }
}

function handleReset() {
    formModelValue = {};
}

function reload() {
    proFormRef.value.reset();
    request(1, page.value.pageSize)
}

defineExpose({
    validate: tableRef.value?.validateRowData,
    clearValidate: tableRef.value?.clearValidateData,
    getSelectData: () => selectData.value,
    reset: () => {
        proFormRef.value.reset();
        request(page.value.pageNum, page.value.pageSize)
    },
    reload,
    getFormInstance: () => proFormRef.value,
    getTableInstance: () => tableRef.value
});

watch(() => props.dataSource, () => {
    innerDataSource.value = props.dataSource;
}, { deep: true });

watch(innerDataSource, () => {
    emits('update:dataSource', innerDataSource.value as unknown as T[]);
}, { deep: true });

</script>

<template>
    <Card :bordered="props.cardBordered" style="margin-bottom: 28px;"
        v-if="proFormOptions.length > 0 || props.hideForm !== true">
        <ProForm @reset="handleReset" ref="proFormRef" :submit="handleSubmit" :options="displayedOptions">
            <template #actions>
                <FormItem :label-width="40" style="flex: 1">
                    <div style="width: 100%; float: right;">
                        <t-space style="float: right; overflow: hidden;">
                            <t-button type="submit" :loading="loading">{{ props.searchText || '搜索' }}</t-button>
                            <t-button type="reset" @click="reload" :loading="loading" theme="default">{{ props.resetText || '重置'
                            }}</t-button>
                            <t-button @click="toggleExpand" v-if="hasMoreOptions" theme="primary" variant="text">
                                <div style="display: flex; align-items: center;">
                                    {{ expandState ? (props.lessText || '收起') : (props.moreText || '展开') }}
                                    <Icon :name="expandState ? 'chevron-up' : 'chevron-down'" />
                                </div>
                            </t-button>
                        </t-space>
                    </div>
                </FormItem>
            </template>
        </ProForm>
    </Card>
    <Loading :loading="loading">
        <Card :bordered="props.cardBordered">
            <Table @select-change="handleSelectChange" ref="tableRef" @drag-sort="handleDragSort" drag-sort="row"
                v-bind="props.tableProps" :row-key="props.rowKey" :columns="tableOptions" :bordered="props.bordered"
                :data="innerDataSource">
                <template v-for="item in Object.keys($slots)" #[item]="args">
                    <slot :name="item" v-bind="{ ...args }"></slot>
                </template>
            </Table>

            <div style="margin-top: 40px;">
                <Pagination @change="handlePageChange" v-model="page.pageNum" v-model:pageSize="page.pageSize"
                    :total="page.total">
                </Pagination>
            </div>
        </Card>
    </Loading>
</template>