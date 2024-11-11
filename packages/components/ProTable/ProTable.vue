<script setup lang='ts'>
import { onMounted, ref, watch } from 'vue';
import { ProTableProps, ProTableOption } from './types';
import { ProFormOption, ProFormRef } from '../ProForm';
import { tableOption2FormOption } from './utils';
import { TableProps } from 'tdesign-vue-next';

defineOptions({ name: 'ProTable' });

const slots = defineSlots();

const formOptions = ref<ProFormOption[]>([]);

const tableOptions = ref<ProTableOption[]>([]);

const proFormRef = ref<ProFormRef>();

const formHideForm = ref(false);

const showMoreState = ref(false);

const showMoreButton = ref(false);

const tableColumns = ref<TableProps['columns']>([]);

const tableData = getTableData();

function getTableData(total = 5) {
    const data = [];
    for (let i = 0; i < total; i++) {
        data.push({
            key: i + 1,
            title: ['贾明', '张三', '王芳'][i % 3],
            status: i % 3,
            author: ['电子签署', '纸质签署', '纸质签署'][i % 3],
            detail: {
                email: ['w.cezkdudy@lhll.au', 'r.nmgw@peurezgn.sl', 'p.cumx@rampblpa.ru'][i % 3],
            },
            matters: ['宣传物料制作费用', 'algolia 服务报销', '相关周边制作费', '激励奖品快递费'][i % 4],
            time: [2, 3, 1, 4][i % 4],
            createTime: ['2022-01-01', '2022-02-01', '2022-03-01', '2022-04-01', '2022-05-01'][i % 4],
        });
    }
    return data;
}

const props = withDefaults(defineProps<ProTableProps>(), {
    hideForm: false,
    searchNum: 3
});

onMounted(() => {
    init();
});

function init() {
    initProTable();
    initForm();
}

function initProTable() {
    formHideForm.value = formVisible();
    tableOptions.value = props.options;
    props.options.forEach((item, index) => {
        tableColumns.value?.push(createTableOption(item))
    })
}

function createTableOption(item: ProTableOption) {
    const object = {
        colKey: item.key,
        title: item.title as any,
        ...item.tableColumnsProps as any,
    }

    if (item.render) {
        object.cell = (_h: any, row: any) => item?.render(row)
    }

    return object;
}

function initForm() {
    const options: ProFormOption[] = [
        ...tableOption2FormOption(tableOptions.value as ProTableOption[]),
    ];

    showMoreButton.value = getNotHiddenForm() > props.searchNum;

    formOptions.value = options.map((item: any, index) => ({
        ...item,
        hidden: !((index + 1) <= props.searchNum),
        placeholder: item.placeholder
    })) as any;

    formOptions.value.push({
        name: 'search',
        span: 3
    });
}

function getNotHiddenForm() {
    return props.options.map((item: any) => !item.hideInForm).length;
}

function formVisible() {
    const flag = props.options.map(item => item.hideInForm).every(item => item === true);
    return props.hideForm || flag;
}

function handleMoreClick(visible: boolean) {
    if (visible) {
        formOptions.value = formOptions.value.map((item: any) => ({ ...item, hidden: false } as ProFormOption))
    } else {
        initForm();
    }

    showMoreState.value = visible;
}

watch(() => props.options, () => {
    initProTable();
}, { deep: true });

</script>

<template>
    <div class="pro-table">
        <div v-if="slots.header" class="pro-table-header">
            <slot name="header" />
        </div>
        <div v-if="!formHideForm" class="pro-table-form">
            <t-card>
                <ProForm hideFooter ref="proFormRef" :options="formOptions">
                    <template #form-search>
                        <t-button>查询</t-button>
                        <t-button>重置</t-button>
                        <t-button v-if="showMoreButton" @click="handleMoreClick(!showMoreState)">{{ showMoreState ? '收缩'
            : '展开' }}</t-button>
                    </template>
                </ProForm>
            </t-card>
        </div>

        <div class="pro-table-body">
            <t-card>
                <t-table row-key="key" :data="tableData" :columns="tableColumns"></t-table>
            </t-card>
        </div>
    </div>
</template>

<style>
.pro-table-form {
    margin-bottom: 16px;
}
</style>