## ModalFormProps

| 属性名 | 类型 | 默认值 | 是否必填 | 描述 |
| ---- | ---- | ---- | ---- | ---- |
| options | ProFormOption[] | - | TRUE | 表单选项数组 |
| visible | boolean | - | TRUE | 模态框是否可见 |
| request | PromiseFunction<any> | - | FALSE | 可选的请求函数 |
| proFormProps | Optional<ProFormProps, 'options'> | - | FALSE | 表单属性（排除 options） |
| loading | boolean | false | FALSE | 是否处于加载状态 |
| loadingText | string | - | FALSE | 加载时显示的文本 |
| loadingProps | LoadingProps | - | FALSE | 加载相关属性 |
| width | string \| number | - | FALSE | 模态框宽度 |
| theme | DialogProps['theme'] | - | FALSE | 模态框主题 |
| header | string \| WithFalse<VueNode> | - | FALSE | 模态框头部内容 |
| footer | string \| WithFalse<VueNode> | - | FALSE | 模态框底部内容 |
| content | string \| WithFalse<VueNode> | - | FALSE | 模态框主体内容 |
| dialogProps | DialogProps | - | FALSE | 对话框相关属性 |
| autoClose | boolean | false | FALSE | 是否自动关闭 |
| enableTip | boolean | false | FALSE | 是否启用提示 |
| tipTheme | MessageProps['theme'] | error | FALSE | 提示主题 |
| labelAlign | FormProps['labelAlign'] | - | FALSE | 标签对齐方式 |