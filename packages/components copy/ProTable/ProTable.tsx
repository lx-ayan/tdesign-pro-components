import { computed, defineComponent, onMounted, ref, watch } from "vue";
import ProTableHeader from './components/ProTableHeader';
import { ProTableProps } from "./types";
import { options2tableOption, tableOption2formOption } from "./utils";
import { Card, Pagination, PrimaryTableOnEditedContext, Table } from "tdesign-vue-next";
import { ProFormOption } from "../ProForm";
import { BasicValueType, getSlotOrJSX } from "@tdesign-pro-component/utils";


//@ts-ignore
const ProTable = defineComponent(
    <T extends Record<string, any>>(props: ProTableProps<T>, {slots, emit, expose}) => {
        const emptyRender = getSlotOrJSX<ProTableProps<T>>('empty', slots, props);
        const expandedRowRender = (params: {row:T, rowIndex: number}) => {
            return getSlotOrJSX<ProTableProps<T>>('expanedRow', slots, props, params)();
        }

        const tableItemRender = (params: {row:T, rowIndex: number}, key: string) => {
            return getSlotOrJSX<ProTableProps<T>>(`table-${key}`, slots, props, params)();
        }

        const actionsRender =  getSlotOrJSX<ProTableProps<T>>(`actions`, slots, props);
        const footerActionsRender =  getSlotOrJSX<ProTableProps<T>>(`footerActions`, slots, props);
        const titleRender =  getSlotOrJSX<ProTableProps<T>>(`title`, slots, props);

        const options = ref<ProFormOption<T>[]>([]);
        const loading = ref(false);
        const tableColumns = ref<any[]>([]);
        const pageInfo = ref({ pageNum: 1, pageSize: 10, total: 0 });
        const dataSource = ref<any[]>([]);
        const tableHeaderRef = ref<any>();
        const innerSelectData = ref<BasicValueType[]>([]);

        const chooseData = computed(() => dataSource.value.filter(item => innerSelectData.value.includes(item[props.rowKey])))

        const dataActionsRender =  getSlotOrJSX<ProTableProps<T>>(`dataActions`, slots, props);

        const renderItem = computed(() => {
            const obj: Record<string, any> = {};
            tableColumns.value.map(item => item.colKey).forEach(key => {
                obj[key] = (props[`table-${key}`] || slots[`table-${key}`]) ? (data: any) => tableItemRender(data, key): undefined
            })
            return obj;
        });

        const hideForm = computed(() => {
            //@ts-ignore
            return options.value.filter(item => item.hidden).length == options.value.length;
        })
        
        onMounted(() => {
            initForm()
            initTable()
            request();
        })

        function initForm() {
            options.value = tableOption2formOption(props.options || []);
        }

        function initTable() {
            tableColumns.value = options2tableOption(props.options.filter(item => !item.hideInTable) || []);
            initEditable();
            initSelectTable();
            initDragTable();
            function initDragTable() {
                if(tableColumns.value.filter(item => item.colKey === 'drag').length > 0) return
                if(props.dragAble) {
                    tableColumns.value.unshift({
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

            function initSelectTable() {
                if(tableColumns.value.filter(item => item.colKey === 'row-select').length > 0) return
                if(props.selectAble) {
                    tableColumns.value.unshift({
                        colKey: 'row-select',
                        type: props.selectType,
                        width: 46,
                    })
                }
            }

            function initEditable() {
                if(!props.editAble) return;
                tableColumns.value = tableColumns.value.map(item => {
                    const option = props.options.find(option => item.colKey == option.key);
                    return {
                        ...item,
                        edit: {
                            ...option.edit? option.edit: {},
                            onEdited: (context: PrimaryTableOnEditedContext<T>) => {
                                function doEdit() {
                                    const newData = [...dataSource.value];
                                    newData.splice(context.rowIndex, 1, context.newRowData);
                                    dataSource.value = newData;
                                    option.edit.onEditSuccess && option.edit.onEditSuccess(context);
                                }
                                if(option.edit.beforeEdit) {
                                    option.edit.beforeEdit().then(() => {
                                        doEdit()
                                    }).catch(e => {
                                        option.edit.onEditFail && option.edit.onEditFail(e);
                                    }) 
                                } else {
                                    doEdit()
                                }
                            }
                        }
                    }
                })
            }
            
        }

        function onSelectChange(data) {
            innerSelectData.value = data;
        }

        function handleSearch() {
            pageInfo.value.pageNum = 1;
            request()
        }

        function request() {
            if (props.request) {
                loading.value = true;
                props.request({
                    form: tableHeaderRef.value?tableHeaderRef.value.getSearchValue() : {},
                    pageNum: pageInfo.value.pageNum,
                    pageSize: pageInfo.value.pageSize
                }).then(res => {
                    if(res.success === false) {
                        return
                    }
                    dataSource.value = res.list || []
                    pageInfo.value.total = res.total;
                }).catch(() => {

                }).finally(() => {
                    loading.value = false;
                })
            }
        }

        const onDragSort = (dragParams: any) => {
            const { newData, sort } = dragParams;
            if(props.dragHandler) {
                if(sort === 'col') {
                    tableColumns.value =  props.dragHandler(dragParams);
                } else {
                    dataSource.value = props.dragHandler(dragParams);
                }
            } else {
                if (sort === 'col') {
                    tableColumns.value = newData;
                } else {
                    dataSource.value = newData;
                }
            }
        };

        watch(() => pageInfo.value.pageNum, () => {
            request();
        })

        watch(() => pageInfo.value.pageSize, () => {
            request();
        });

        watch(innerSelectData, (value) => {
            emit('update:selectData', value);
        });

        watch(() => props.selectData, (value) => {
            innerSelectData.value = props.selectData;
        });

        watch(() => props.options, () => {
            initTable();
            initForm();
        }, {deep: true});

        expose({
            reload: tableHeaderRef.value?.reset,
            getTableData: () => dataSource,
            reset: request,
            getFormValue: tableHeaderRef.value?.getSearchValue,
        })

        return () => <div>
            {(!hideForm.value && !props.hideForm) && <div  style="margin-bottom: 16px;"><ProTableHeader formHeader={props.formHeader} ref={tableHeaderRef} loading={loading.value} onSearch={handleSearch} onReset={handleSearch} options={options.value} /></div>}
            <div>
                <Card>
                    {{
                        title: titleRender() ? titleRender(): undefined,
                        actions: actionsRender() ? actionsRender(): undefined,
                        default: () => <>
                                <div style="display: flex; margin-bottom: 16px;">
                                        {
                                            (dataActionsRender() && props.dataActionsAlign === 'left') && <div>
                                                {dataActionsRender()}
                                            </div>
                                        }
                                    <div>
                                        {
                                            slots['card'] ?  <div v-loading={loading.value}>
                                                {slots['card']({list: dataSource.value})}
                                            </div>:
                                            <Table onSelectChange={onSelectChange} onDragSort={onDragSort} drag-sort={props.dragType} loading={loading.value} data={dataSource.value} columns={tableColumns.value} {...props.tableProps}>
                                                {{
                                                    empty: emptyRender(),
                                                    expandedRow: (props.expanedRow || slots.expanedRow) ? expandedRowRender: undefined,
                                                    ...slots,
                                                    ...renderItem.value,
                                                }}
                                            </Table>
                                        }
                                        
                                        {
                                        footerActionsRender()  && <div>
                                            {footerActionsRender()}
                                        </div>
                                        }
                                    </div>
                                    {
                                        (dataActionsRender() && props.dataActionsAlign === 'right') &&<div>

                                            {dataActionsRender({data: chooseData.value})}
                                        </div>
                                    }
                                </div>
                               
                                {
                                    !props.hideFooter && <div>
                                        <Pagination  v-model={pageInfo.value.pageNum} v-model:pageSize={pageInfo.value.pageSize} disabled={loading.value} total={pageInfo.value.total} />
                                    </div>
                                }
                            
                        </>
                    }}
                </Card>
            </div>
        </div>
    },
    {
        name: 'ProTable',
        emits: ['update:selectData'],
        props: {
            options: Array,
            request: Function,
            dragSort: [Boolean, String],
            dragHandler: Function,
            empty: [String, Function, Object],
            formHeader: [String, Function, Object],
            tableProps: [Object],
            dragAble: Boolean,
            dragType: {
                type: String,
                default: 'row-handler'
            },
            selectData: Array,
            selectAble: Boolean,
            selectType: {
                type: String,
                default: 'multiple'
            },
            editAble: Boolean,
            hideFooter: Boolean,
            expanedRow: Function,
            hideForm: Boolean,
            rowKey: {
                type: String,
                default: 'id'
            },
            dataActionsAlign: {
                type: String,
                default: 'left'
            }
        }
    }
);

export default ProTable;
