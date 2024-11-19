<script setup lang='ts'>
import { onMounted, ref, watch } from 'vue';
import { ProTableProps, ProTableOption, ProTableRef, TableOrder } from './types';
import { ProFormOption, ProFormRef } from '../ProForm';
import { TableProps } from 'tdesign-vue-next';
import { warn } from '@tdesign-pro-component/utils';
import { useVModel } from '@tdesign-pro-component/hooks';
import { initTable } from './table';
import { getFormSlotNameList, getShowFormOptionList, initForm, formVisible } from './form';
import {removeEmptyStringFields} from '../ProForm/utils';
defineOptions({ name: 'ProTable' });

const TYPE_CONSTABLE = {
    text: {
        propsName: 'textProps',
        componentName: 'ProFormText'
    },
    select: {
        propsName: 'selectProps',
        componentName: 'ProFormSelect'
    },
    radio: {
        propsName: 'radioProps',
        componentName: 'ProFormRadio'
    },
    textarea: {
        propsName: 'textareaProps',
        componentName: 'ProFormTextarea'
    },
    datepicker: {
        propsName: 'datepickerProps',
        componentName: 'ProFormDatepicker'
    },
    checkbox: {
        propsName: 'checkboxProps',
        componentName: 'ProFormCheckbox'
    },
    number: {
        propsName: 'numberProps',
        componentName: 'ProFormInputNumber'
    },
    treeSelect: {
        propsName: 'treeSelectProps',
        componentName: 'ProFormTreeSelect'
    }
}

const props = withDefaults(defineProps<ProTableProps>(), {
    hideForm: false,
    searchNum: 3,
    filterEmptyStr: true,
    rowKey: 'id',
    loadingAble: true
});

const emits = defineEmits<{
    (e: 'update:page', value: { pageNum: number, pageSize: number, total?: number }): void;
    (e: 'update:selectData', value: any[]): void;
    (e: 'select-change', value: any[], ctx?: any): void;
    (e: 'reset'): void;
    (e: 'reload'): void;
}>();

const slots = defineSlots();

const formOptions = ref<ProFormOption[]>([]);

const tableRef = ref<any>();

const tableOptions = ref<ProTableOption[]>([]);

const proFormRef = ref<ProFormRef>();

const sortObj = ref<Record<string, TableOrder>>({});

const innerLoading = ref(false);

const formHideForm = ref(false);

const showMoreState = ref(false);

const showMoreButton = ref(false);

const tableColumns = ref<TableProps['columns']>([]);

const slotsArr = ref<string[]>();

const tableData = ref<any[]>([]);

let formSlotsName = ref<string[]>([]);

const selectRowKeys = useVModel(props, 'selectData', emits, props.selectData || []);

const innerPage = useVModel(props, 'page', emits, props.page || { pageNum: 1, pageSize: 10, total: 10 });

onMounted(() => {
    init();
});

function init() {
    initProTable();
    initProForm();
    onSearch();
}

function initProTable() {
    tableOptions.value = props.options;
    tableColumns.value = initTable(props);
    slotsArr.value = props.options.filter(item => item.isSlot).map(item => item.key)
}

// About Table
function onSearch() {
    request(1, innerPage.value.pageSize);
}

function onReset() {
    request(1, innerPage.value.pageSize);
}

function pageChange(e: any) {
    innerPage.value.pageNum = e.current || 1;
    innerPage.value.pageSize = e.pageSize;
    request(innerPage.value.pageNum, innerPage.value.pageSize);
}

function request(pageNum: number, pageSize: number) {
    if (!props.request) {
        warn('request is not function');
        return;
    }
    if (props.loadingAble) {
        innerLoading.value = true
    }
    const form = props.filterEmptyStr ? removeEmptyStringFields(getFormValue()) : getFormValue();
    delete form['search-extral'];
    props.request!({
        pageNum: innerPage.value.pageNum,
        pageSize,
        form,
        sort: sortObj.value
    } as any).then(res => {
        if (props.onSearchSuccess) {
            props.onSearchSuccess(res);
        }
        tableData.value = res.list;
        innerPage.value.total = res.total;
    }).catch(e => {
        if (props.onSearchFail) {
            props.onSearchFail(e);
        }
    }).finally(() => {
        innerPage.value.pageNum = pageNum;
        innerPage.value.pageSize = pageSize;
        innerLoading.value = false;
    })
}

function sortChange(value: any, { col }: { col: { key: string } }) {
    const { key } = col;
    let obj = { ...sortObj.value };
    if (value === void 0 && obj[key]) {
        delete obj[key];
    } else {
        if (value !== void 0) {
            obj[key] = value.descending ? 'desc' : 'asc';
        }
    }
    sortObj.value = obj;
    request(innerPage.value.pageNum, innerPage.value.pageSize);
}

function handleSelected(v: any) {
    selectRowKeys.value = v;
}

// About Form
function initProForm() {
    formHideForm.value = formVisible(props);
    formSlotsName.value = getFormSlotNameList(props.options);
    showMoreButton.value = getShowFormOptionList(props.options).length > props.searchNum;
    formOptions.value = initForm(tableOptions.value as ProTableOption[], props);
}

function handleMoreClick(visible: boolean) {
    if (visible) {
        formOptions.value = formOptions.value.map((item: any) => ({ ...item, hidden: false } as ProFormOption))
    } else {
        initProForm();
    }
    showMoreState.value = visible;
}

function getOptionByKey(name: string): { option: ProTableOption, component: { componentName: string, propsName: string } } {
    name = name.replace('form-', '').trim();
    const option = (formOptions.value as unknown as ProTableOption[]).find(item => item.key === name)! as ProTableOption;
    return {
        option,
        component: TYPE_CONSTABLE[option.type || 'text']
    };
}

function getFormValue() {
    return proFormRef.value?.getFormValue();
}

defineExpose<ProTableRef>({
    getFormValue,
    reset: (resetParam: boolean = false) => {
        if (resetParam) {
            proFormRef.value?.reset();
        }
        request(innerPage.value.pageNum, innerPage.value.pageSize)
    },
    reload: () => {
        proFormRef.value?.reset();
        request(1, innerPage.value.pageSize);
    },
    getTdesignTable: () => {
        return tableRef.value
    },
    setRequestData: (index: number, data: any) => {
        if (index < 0 || index > tableData.value.length) return;
        tableData.value[index] = data;
    }
})

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
                <ProForm :filterEmptyStr="props.filterEmptyStr" filter @submit="onSearch" @reset="onReset" hideFooter
                    ref="proFormRef" :options="formOptions">
                    <template :key="item" v-for="item in formSlotsName" #[item]="{ form }">
                        <component :name="getOptionByKey(item)!.option.key" :label="getOptionByKey(item)!.option.title"
                            v-model="form[getOptionByKey(item).option.key]"
                            :is="getOptionByKey(item)!.component.componentName" v-if="!slots[item]" v-bind="{
            ...getOptionByKey(item).option,
            //@ts-ignore
            ...getOptionByKey(item).option[getOptionByKey(item).component.propsName as keyof ProTableOption]
        }" />
                        <slot v-else :name="item" :form="form"></slot>
                    </template>

                    <template #form-search-extral>
                        <div class="pro-table-form-actions">
                            <t-button :loading="innerLoading" type="submit">查询</t-button>
                            <t-button :loading="innerLoading" theme="default" type="reset">重置</t-button>
                            <t-button v-if="showMoreButton" @click="handleMoreClick(!showMoreState)">{{ showMoreState ?
            '收缩'
            : '展开' }}</t-button>
                        </div>
                    </template>
                </ProForm>
            </t-card>
        </div>

        <div class="pro-table-body">
            <t-card>
                <template v-if="slots['pro-table-title']" #title>
                    <slot name="pro-table-title"></slot>
                </template>

                <template v-if="slots['pro-table-actions']" #actions>
                    <slot name="pro-table-actions"></slot>
                </template>
                <template v-if="!slots.card">
                    <t-table @select-change="handleSelected" :bordered="props.bordered" :stripe="props.stripe"
                        :hover="props.hover" ref="tableRef" :empty="props.empty"
                        :cellEmptyContent="props.cellEmptyContent" v-bind="props.tableProps" :loading="innerLoading"
                        @sort-change="sortChange" :size="props.size" :row-key="props.rowKey" :data="tableData"
                        :selected-row-keys="selectRowKeys" :columns="tableColumns">
                        <template v-if="slots.expandedRow" #expandedRow="{ row }">
                            <slot name="expandedRow" :row="row">

                            </slot>
                        </template>
                        <template v-for="(slotName) in slotsArr" #[slotName]="{ row, rowIndex }">
                            <slot :row="row" :index="rowIndex" :name="`table-${slotName}`"></slot>
                        </template>
                    </t-table>
                </template>

                <template v-else>
                    <t-loading :size="props.loadingProps?.size" :loading="innerLoading" v-bind="props.loadingProps"
                        :show-overlay="props.loadingProps?.showOverlay">
                        <slot name="card" :list="tableData"></slot>
                    </t-loading>
                </template>

                <div class="pro-table-page" v-if="!props.hidePage && props.page">
                    <t-pagination :disabled="innerLoading" :size="props.size" v-model:current="innerPage.pageNum"
                        :total="innerPage.total" v-model:page-size="innerPage.pageSize" v-bind="props.pageProps"
                        @change="pageChange" />
                </div>
            </t-card>
        </div>
    </div>
</template>

<style>
.pro-table-form {
    margin-bottom: 16px;
}

.pro-table-form-actions .t-button {
    margin-right: 12px;
}

.pro-table-page {
    margin-top: 16px;
}
</style>