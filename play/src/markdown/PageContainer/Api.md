## PageContainerProps
|属性名|类型|默认值|描述|必填|
|------|------|------|------|------|
|header|Object / `PageContainerHeaderProps`|-| 头部渲染 | TRUE |
|tabList|Array / `Array<{value: string;label: string / VueNode;closeable?: boolean;disabled?: boolean;}[]>`|-| 头部渲染 | FALSE |
|loading|Object / `PageContainerLoadingProps`|-| 内容加载 | FALSE |
|tabActiveKey|string|-| tab 标签默认值 | FALSE |
|tabBarExtraContent| Function / () => VueNode|-| tab 右侧操作区域 | FALSE |
|tabsProps|Object / `TabProps`|-| 栏目其他属性。 | FALSE |
|content| VueNode |-| 内容区域，JSX 可用 | FALSE |
|footer|Boolean/ VueNode|-| 脚部区域 | FALSE |
|bodyBordered|Boolean|-| 内容区域边框 | FALSE |



## PageContainerLoadingProps
|属性名|类型|默认值|描述|必填|
|------|------|------|------|------|
|status| Boolean |-|加载状态|FALSE|
|text|string / VueNode|-|加载文字描述|FALSE|
|loadingProps| Object / `LoadingProps` |-|加载其他属性。|FALSE|

## PageContainerBreadcrumb
|属性名|类型|默认值|描述|必填|
|------|------|------|------|------|
|path| string |-| 页面路径 | TRUE |
|title| string |-| 标题 | TRUE |
|icon| string / VueNode |-| TDesign 组件库图标。 |FALSE|
|to| Boolean |-| 开启路由跳转 |FALSE|
|disabled| Boolean |-| 禁用 |FALSE|
|target| BreadcrumbItemProps['target'] |-| 页面跳转行为 |FALSE|
|replace| Boolean |-| 路由跳转是否采用覆盖的方式（覆盖后将没有浏览器历史记录） |FALSE|


## PageContainerHeaderProps
|属性名|类型|默认值|描述|必填|
|------|------|------|------|------|
|title| string/VueNode |-| 标题 | TRUE |
|actions| VueNode |-| 操作 | FALSE |
|breadcrumb| Object / `{items: PageContainerBreadcrumb[];breadcrumbProps?: BreadcrumbItemProps;}` |-| 面包屑配置 |FALSE|
|description| string/VueNode |-| 描述 |FALSE|

## Event
```ts
{
    (e: 'tabChange', key: string): void; // tab 标签切换事件
    (e: 'breadcrumbClick', key: string, item: PageContainerBreadcrumb): void; // 面包屑点击事件
}
```

## Slots
|插槽名|描述|
|------|------|
|actions|操作区域|
| description | 描述区域|
|title | 标题区域 |
|default | 内容区域。|
|footer | 页脚区域。|