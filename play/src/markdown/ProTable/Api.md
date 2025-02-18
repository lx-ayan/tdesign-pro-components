## ProTableProps

|属性名|类型|默认值|描述|必填|
|------|------|------|------|------|
|options|Array / ProTableOption |-| 表给配置项，根据该配置项渲染表格列和搜索内容|TRUE|
|request|Function / `(tableRequest:{pageNum: number, pageSize:number, form: T, sort: {[keyName]: 'desc' / 'asc'} }) => void` |-| 获取 dataSource 的方法|TRUE|
|rowKey| string |id| 行索引，取数据中，对应的属性，默认为 id。|FALSE|
|onSearchSuccess| Function / `(data: ProTableResult<any>) => any;` |-| 搜索成功后回调 |FALSE|
|onSearchFail| Function / `onSearchFail?: (exception: Error / string) => void;` |-| 搜索失败后回调 |FALSE|
|hideForm| boolean |false| 隐藏表单 |FALSE|
|hidePage| boolean |false| 隐藏分页器 |FALSE|
|searchNum| number |3| 展示搜索项数量 |FALSE|
|loadingAble| boolean |true| 开启加载状态 |FALSE|
|size| string / `large / medium / small` |medium| 表格大小 |FALSE|
|filterEmptyStr| boolean |true| 过滤 `null/''/undefined` 字段 |FALSE|
|bordered| boolean |false| 边框 |FALSE|
|stripe| boolean |false| 斑马纹 |FALSE|
|hover| boolean |false| 鼠标悬浮 |FALSE|
|empty| string / `VNode` / `TNode` / `(() => VNode / TNode)` |-| 表格空状态 |FALSE|
|cellEmptyContent| string / `VNode` / `TNode` / `(() => VNode / TNode)` |-| 单元格空状态 |FALSE|
|selectData| Array / `any[]` | []| 选择表格的数据，支持 `v-model:selectData` 开启多选模式时，此项必填。 |FALSE|
|selectAble| boolean |false| 开启多选模式 |FALSE|
|tableProps| Object / `TableProps` |-| 表格其他属性，[参考详情](https://tdesign.tencent.com/vue-next/components/table?tab=api "tableProps")。 |FALSE|
|page| Object / `{ pageNum: number, pageSize: number, total: number }` |-| 分页器数据，支持 `v-model:page` |TRUE|
|pageProps| Object / `PaginationProps` |-| 分页器其他属性，[参考详情](https://tdesign.tencent.com/vue-next/components/pagination?tab=api "PaginationProps")。 |false|
| searchText | string | 查询 | 查询按钮文本 | FALSE |





## ProTableOption

|属性名|类型|默认值|描述|必填|
|------|------|------|------|------|
|key|string|-| 对应列属性的名称,搜索项中的 name。 |TRUE|
|title|string/ ` string` / `(() => TNode / VNode)` / `TNode` / `VNode;`|-| 对应列标题，如果想置为空输入一个空格即可，搜索项的 label。 |TRUE|
|hideInTable|boolean|false| 是否隐藏与表格。 |FALSE|
|render| Function / `(data: { row: T, colIndex: number, rowIndex: number }) => VNode / TNode` | - | 自定义渲染, JSX 形式 | FALSE |
| fixed | string / `'left' / 'right'`| - | 固定于左侧/右侧|FALSE|
|children| Array / `Array<BaseTableCol<TableRowData>>`| - | 子集，用于折叠表格功能| FALSE |
| sorter | boolean | false | 排序 | FALSE |
| ellipsisTitle | boolean | false | 标题超出文本展示 `...` | FALSE |
| ellipsis | boolean | false | 表格超出文本展示 `...` | FALSE |
| width | string / number | - | 表格宽度 | FALSE |
| isSlot | boolean | false | 开启插槽自定义渲染 | FALSE | 
|hideInSearch| boolean | false | 隐藏于表单 | FALSE |
| placeholder | string | - | 搜索框内容 | FALSE |
| labelWidth | string / number | - | 搜索框 label 宽度 | FALSE |
| type | string / `text` / `treeSelect` / `number` / `textarea` / `select` / `radio` / `checkbox` / `datepicker`| text | 搜索框类型 | FALSE |
| span | number | 3 | 表单 grid 布局占比 | FALSE |
| offset | number | - | 表单 grid 布局偏移量 | FALSE |
| data | Array / `any[]` / `() => Promise<any[]>`| [] | 下拉框，复选框，单选按钮，树形选择器选择项数据。这里支持异步请求 | FALSE |
| labelAlign | string / `left` / `right` / `top`| right | 表单 label 布局 | FALSE |
| multiple | boolean | false | 表单树形选择器，下拉选择器开启多选 | FALSE |
| range | boolean | false | 日期选择器开启范围选择 | FALSE |
| disabled | boolean | false | 禁用当前表单项 | FALSE |
| rules | Array / `FormRule[]` | - | 表单校验规则 | FALSE |
| checkboxProps | Object / `ProFormCheckboxProps` | - | 多选框其他属性 | FALSE |
| radioProps | Object / `ProFormRadioProps` | - | 单选按钮其他属性 | FALSE |
| textProps | Object / `ProFormTextProps` | - | 输入框其他属性 | FALSE |
| numberProps | Object / `ProFormInputNumberProps` | - | 数字输入看其他属性 | FALSE |
| textareaProps | Object / `ProFormTextareaProps` | - | 文本域其他属性 | FALSE |
| selectProps | Object / `ProFormSelectProps` | - | 下拉选择器其他属性 | FALSE |
| datepickerProps | Object / `ProFormDatepickerProps` | - | 日期选择器其他属性 | FALSE |
| treeSelectProps | Object / `ProFormTreeSelectProps` | - | 树形选择器其他属性 | FALSE |
| readonly | boolean | false | 只读模式，注意: `日期选择器状态为禁用状态` | FALSE |
| labelText | string / `VNode` / `TNode` / `() => (VNode / TNode)` | - | 表单 label 自定义名称 | FALSE |

## ProTable Slot 
|插槽名|数据|描述|
|------|------|------|
|header | - | 表格头部 |
| form-`[key]` | `{form}` | 自定义搜索项, `form` 表格内容，可以使用 v-model = "form.xxx" |
|table-`[key]` | `{row}` | 自定义表格渲染, `row`行数据|
|pro-table-title | - | 表格标题区域 |
|pro-table-actions | - | 表格操作区域 |
| card | `{list}` | 自定义布局, `list`： 当前页数据 |

## ProTable Expose 
|插槽名|类型|描述|
|------|------|------|
|getFormValue | Function / `() => any;` | 获取搜索项表单数据 |
|reset | Function / `() => any;` | 表格重置, 当前页 |
|reload | Function / `() => any;` | 表格重载, 刷新整个表格 |
|getTdesignTable | Function / `() => any;` | 获取 TDesign 表格实例 |
|insertTableData | (index: number, data: any) => void | 手动设置表格数据 |