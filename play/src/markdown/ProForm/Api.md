## ProFormProps
|属性名|类型|默认值|描述|必填|
|------|------|------|------|------|
|options| Array /`ProFormOption[]`| - | 表单配置项，控制表单显示内容 | TRUE |
|request| Function /`() => Promise<any>`| - | 通过请求方式初始化数据 | FALSE |
|rules| Object /`FormRules`| - |表单验证 | FALSE |
|labelAlign| string /`left`/`right`/`top`| - |label 对其方式 | FALSE |
|labelWidth| string / number| - |label 宽度 | FALSE |
|marginY| number | 24 | 表单纵向间距 | FALSE |
|readonly| boolean | false | 只读模式 | FALSE |
|disabled| boolean | false | 禁用模式 | FALSE |
|layout| string / `vertical` / `inline`| - |表单布局。纵向/横向 | FALSE |
|footerAligin| string /`left`/`right`/`center`| right | 表单底部水平位置 | FALSE |
|resetText| string | 重置 | 重置按钮文本 | FALSE |
|submitText| string | 提交 | 提交按钮文本 | FALSE |
|showReset| boolean | true | 展示重置按钮 | FALSE |
|formProps| Object /`FormProps`| - |表单其他配置。[参考详情](https://tdesign.tencent.com/vue-next/components/form?tab=api "FormProps") | FALSE |
|filterEmptyStr| boolean | false | 过滤空值。删除 undefined, null, 空字符串的字段| FALSE |
|submitFilter| boolean | true | 增量提交。比对初始值对象和填写表单后对象。只返回有变化的字段。| FALSE |
|submitButtonProps| Object / `ButtonProps` | - | 提交按钮其他参数。[参考详情](https://tdesign.tencent.com/vue-next/components/button?tab=api "ButtonProps") | FALSE |
|resetButtonProps| Object / `ButtonProps` | - | 重置表单其他参数。[参考详情](https://tdesign.tencent.com/vue-next/components/button?tab=api "ButtonProps") | FALSE |
|hideFooter| boolean | false | 隐藏表单操作位置。| FALSE |

## ProFormOption
|属性名|类型|默认值|描述|必填|
|------|------|------|------|------|
|name|string|-|表单项名称|TRUE|
| hidden| boolean | false | 隐藏于表单 | FALSE |
| type | string / `text` / `treeSelect` / `number` / `textarea` / `select` / `radio` / `checkbox` / `datepicker` / `upload` | text | 表单项类型 | FALSE |
| placeholder | string | - | 文本框提示信息 | FALSE |
| labelName | string | label | 用于下拉框，复选框，单选按钮，树形选择器中的自定义获取 label 字段名 | FALSE |
| valueName | string | value | 用于下拉框，复选框，单选按钮，树形选择器中的自定义获取 value 字段名 | FALSE |
| childrenName | string | children | 用于树形选择器自定义 children 字段名 | FALSE |
| label | string / `VNode` / `TNode` / `() => VNode / TNode` | - | 描述文本 | FALSE |
|data | Array / `() => Promise.resolve(any[])` | -  |  下拉框，复选框，单选按钮，树形选择器中的数据，如果该可以作为AsyncFunction 用于动态请求数据 | FALSE |
| multiple | boolean | false | 用于下拉框，树形选择器，文件上传开启多选模式 | FALSE |
| range | boolean | false | 用于日期选择器开启范围选择 | FALSE |
| disabled | boolean | false | 禁用模式 | FALSE |
| readonly | boolean | false | 只读模式。在日期选择器中展示为禁用| FALSE |
| rules | Array / `FormRule[]` | 表单验证 | FALSE |
| checkboxProps | Object / `ProFormCheckboxProps` | - | 复选框其他属性 | FALSE |
| radioProps | Object / `ProFormRadioProps` | - | 单选框其他属性 | FALSE |
| textProps | Object / `ProFormTextProps` | - | 文本输入框其他属性 | FALSE |
| numberProps | Object / `ProFormInputNumberProps` | - | 数字输入框其他属性 | FALSE |
| textareaProps | Object / `ProFormTextareaProps` | - | 文本域其他属性 | FALSE |
| selectProps | Object / `ProFormSelectProps` | - | 下拉选择器其他属性 | FALSE |
| datepickerProps | Object / `ProFormDatepickerProps` | - | 日期选择器其他属性 | FALSE |
| treeSelectProps | Object / `ProFormTreeSelectProps` | - | 树形选择器其他属性 | FALSE |
| uploadProps | Object / `UploadProps` | - | 上传其他属性 | FALSE |
| urlName | string | url | 上传回显数据时，url 字段自定义| FALSE |
| span | number | 6 | grid 布局占比 | FALSE |
| offset | number | - | grid 布局偏移量 | FALSE |
| initalValue | any | - | 默认值属性 | FALSE |
| formItemProps | Object / `FormItemProps` | - | 表单其他属性 | FALSE |
| onChange | Function / `(value: any, name?: string) => void;` | - | 发生改变事件 | FALSE |

## ProFormRef
```typescript
/**
 * @description 描述...
 * getProFormValue: 获取当前表单数据
 * submit: 提交事件。用于手动提交
 * reset: 重置事件。用于手动重置
 * initForm: 重置表单。
 * setItem: 手动设置表单数据
 */
export interface ProFormRef {
    getFormValue: () => any;
    submit: () => void;
    reset: () => void;
    initForm: () => void;
    setItem: (key: string, value: any) => void;
}
```

##  ProForm slots
|插槽名|数据|描述|
|------|------|------|
|default | - | 默认插槽。用于完全自定义渲染。|
|form-{name}| - | 用于单个表单项自定义渲染。 |
| footer | - | 自定义提交。|
| actions | - | 默认提交情况下，其余的功能扩展。|