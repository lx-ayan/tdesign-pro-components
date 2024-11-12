<script setup lang='ts'>
import { onMounted, ref, watch } from 'vue';
import { ProTableProps, ProTableOption } from './types';
import { ProFormOption, ProFormRef } from '../ProForm';
import { tableOption2FormOption } from './utils';
import { TableProps } from 'tdesign-vue-next';
import { warn } from '@tdesign-pro-components/utils';
import { useVModel } from '@tdesign-pro-components/hooks';

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
    searchNum: 3
});

const emits = defineEmits<{
    (e: 'update:page', value: { pageNum: number, pageSize: number, total?: number }): void;
}>();

const slots = defineSlots();

const formOptions = ref<ProFormOption[]>([]);

const tableOptions = ref<ProTableOption[]>([]);

const proFormRef = ref<ProFormRef>();

const innerLoading = ref(false);

const formHideForm = ref(false);

const showMoreState = ref(false);

const showMoreButton = ref(false);

const tableColumns = ref<TableProps['columns']>([]);

const tableData = ref<any[]>([]);

let formSlotsName = ref<string[]>([]);

const innerPage = useVModel(props, 'page', emits, props.page || { pageNum: 1, pageSize: 10, total: 10 });

onMounted(() => {
    init();
});

function init() {
    initProTable();
    initForm();
    onSearch();
}

function initProTable() {
    formHideForm.value = formVisible();
    tableOptions.value = props.options;
    props.options.forEach((item) => {
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
        object.cell = (_h: any, row: any) => item!.render!(row)
    }
    return object;
}

// About Table
function onSearch() {
    console.log(innerPage.value)
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
    if (props.loading) {
        innerLoading.value = true
    }
    props.request!({
        pageNum: innerPage.value.pageNum,
        pageSize,
        form: getFormValue(),
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

// About Form
function initForm() {
    formSlotsName.value = props.options.map(item => `form-${item.key}`);
    const _tableOptions = (tableOptions.value as unknown as ProTableOption[]).filter(toption => !toption.hideInSearch);
    const options: ProFormOption[] = [
        ...tableOption2FormOption(_tableOptions as ProTableOption[]),
    ];

    showMoreButton.value = getNotHiddenForm() > props.searchNum;

    formOptions.value = options.map((item: any, index) => ({
        ...item,
        hidden: !((index + 1) <= props.searchNum),
        placeholder: item.placeholder
    })) as any;

    formOptions.value.push({
        name: 'search-extral',
        span: 3
    });
}

function getNotHiddenForm() {
    return props.options.map((item: any) => !item.hideInSearch).length;
}

function formVisible() {
    const flag = props.options.map(item => item.hideInSearch).every(item => item === true);
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
                <ProForm filter @submit="onSearch" hideFooter ref="proFormRef" :options="formOptions">
                    <template :key="item" v-for="item in formSlotsName" #[item]="{ form }">
                        <component :name="getOptionByKey(item)!.option.key" :label="getOptionByKey(item)!.option.title"
                        :size="props.size"
                            v-model="form[getOptionByKey(item).option.key]"
                            :is="getOptionByKey(item)!.component.componentName" v-if="!slots[item]" v-bind="{
            ...getOptionByKey(item).option,
            //@ts-ignore
            ...getOptionByKey(item).option[getOptionByKey(item).component.propsName as keyof ProTableOption]
        }" />
                        <slot v-else :name="item" :form="form"></slot>
                    </template>

                    <template #form-search-extral>
                        <t-button :loading="innerLoading" type="submit">查询</t-button>
                        <t-button :loading="innerLoading" type="reset">重置</t-button>
                        <t-button v-if="showMoreButton" @click="handleMoreClick(!showMoreState)">{{ showMoreState ? '收缩'
            : '展开' }}</t-button>
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
                <t-table :size="props.size" :row-key="props.rowKey" :data="tableData" :columns="tableColumns">
                    
                </t-table>
                <div class="pro-table-page" v-if="!props.hidePage && props.page">
                    <t-pagination :disabled="innerLoading" :size="props.size" v-model:current="innerPage.pageNum" 
                        :total="innerPage.total" v-model:page-size="innerPage.pageSize" v-bind="props.pageProps" @change="pageChange" />
                </div>
            </t-card>
        </div>
    </div>
</template>

<style>
.pro-table-form {
    margin-bottom: 16px;
}

.pro-table-page {
    margin-top: 16px;
}
</style>