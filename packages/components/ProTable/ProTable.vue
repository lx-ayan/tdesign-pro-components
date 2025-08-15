<script setup generic="T extends Object" lang='tsx'>
import { Card, Table, Pagination, BaseTableColumns, BaseTableCol, Loading, Icon, PageInfo, TableCol } from 'tdesign-vue-next';
import ProForm from '../ProForm/ProForm.vue';
import { FormItem } from 'tdesign-vue-next';
import { ProTableOption, ProTableProps } from './types';
import { computed, onMounted, ref } from 'vue';
import { ProFormOption } from '../ProForm';

defineOptions({
    name: 'ProTable'
});

const props = withDefaults(defineProps<ProTableProps>(), {
    rowKey: 'id',
    bordered: false,
    cardBordered: true
});

const dataSource = defineModel<T[]>('dataSource');

const showCountWhenCollapsed = props.showSearchNum || 3;

const expandState = ref(false);

const loading = ref(false);

const page = ref<{ pageNum: number, pageSize: number, total: number }>({
    pageNum: 1,
    pageSize: 10,
    total: 0
});

const formModelValue = ref<any>();

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
                form: formModelValue.value,
                pageSize
            });
            dataSource.value = result.list;
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
        const option: BaseTableCol = {
            colKey: item.key,
            title: item.title,
            ellipsis: item.tableProps?.ellipsis || true,
            ...item.tableProps
        }
        if (item.render) {
            option.cell = (_h, { row, rowIndex }) => {
                return item.render(row, rowIndex);
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

function initEditable(options: TableCol[]) {

}

function handlePageChange(pageInfo: PageInfo) {
    request(pageInfo.current, pageInfo.pageSize);
}

async function handleSubmit() {
    await request(1, page.value.pageSize);
    return true;
}

</script>

<template>
    <Card :bordered="props.cardBordered" style="margin-bottom: 28px;"
        v-if="proFormOptions.length > 0 || props.hideForm !== true">
        <ProForm :submit="handleSubmit" v-model="formModelValue" :options="displayedOptions">
            <template #actions>
                <FormItem :label-width="40" style="flex: 1">
                    <div style="width: 100%; float: right;">
                        <t-space style="float: right; overflow: hidden;">
                            <t-button type="submit" :loading="loading">搜索</t-button>
                            <t-button type="reset" :loading="loading" theme="default">重置</t-button>
                            <t-button @click="toggleExpand" v-if="hasMoreOptions" theme="primary" variant="text">
                                <div style="display: flex; align-items: center;">
                                    {{ expandState ? '收起' : '展开' }}
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
            <Table v-bind="props.tableProps" :row-key="props.rowKey" :columns="tableOptions" :bordered="props.bordered"
                :data="dataSource">
            </Table>

            <div style="margin-top: 40px;">
                <Pagination @change="handlePageChange" v-model="page.pageNum" v-model:pageSize="page.pageSize"
                    :total="page.total">
                </Pagination>
            </div>
        </Card>
    </Loading>
</template>