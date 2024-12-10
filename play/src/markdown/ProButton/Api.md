## ProButtonProps

|属性名|类型|默认值|描述|必填|
|------|--|------|------|------|
|theme| string / `button` / `link` |  button | 按钮类型，是按钮样式还是连接样式| FALSE |
| action | string / `dialog` / `popup` | dialog | 操作类型，弹窗或弹出层 | FALSE |
| content | string / Object / Function / `VNode`/`TNode`/`() => (VNode / TNode)` | - | 弹窗内容/弹出层内容| FALSE |
| title | string / Object / Function / `VNode`/`TNode`/`() => (VNode / TNode)`| - | 弹窗标题, `注意: 弹出层此属性无效` | FALSE |
| dialogProps | Object / `DialogProps` | - | 弹窗其他属性，[详细信息](https://tdesign.tencent.com/vue-next/components/dialog?tab=api "DialogProps") | FALSE |
| popupProps | Object / `PopconfirmProps` | - | 弹出层其他属性，[详细信息](https://tdesign.tencent.com/vue-next/components/popconfirm?tab=api "PopconfirmProps") | FALSE |
| confirmBtn | string / Object / Function / `VNode`/`TNode`/`() => (VNode / TNode)` | - | 确认按钮 | FALSE |
| cancelBtn | string / Object / Function / `VNode`/`TNode`/`() => (VNode / TNode)` | - | 取消按钮 | FALSE |
| buttonProps | Object / `ButtonProps` | - | 按钮其他属性，[详细信息](https://tdesign.tencent.com/vue-next/components/button?tab=api "PopconfirmProps")。| FALSE |
| linkProps | Object / `LinkProps` | - | 连接其他属性，[详细信息](https://tdesign.tencent.com/vue-next/components/link?tab=api "PopconfirmProps")。| FALSE |
| colorTheme | string | 'primary' | 按钮/连接，主题样式，参考 ButtonTheme | FALSE |
| linkHover | string | color | 连接鼠标悬浮样式，按钮无效 | FALSE |
| size | string / `small` / `medium` / `large` | - | 按钮大小 | FALSE |
| visible | boolean | - | 弹窗,弹出层显隐状态, 支持 v-model:visible| FALSE |
## Event

```typescript
export interface ProButtonEmits {
    (e: 'click'): void; // 按钮，连接点击事件
    (e: 'open', visible?: boolean): void; // 弹窗，弹出层打开事件
    (e: 'close', visible?: boolean): void; // 弹窗，弹出层关闭事件
    (e: 'confirm'): void; // 点击确认按钮，确认事件
    (e: 'cancel'): void; // 点击取消按钮，取消事件
}
```

## Slots

```typescript
export type WithFalse<T extends any = any> = T | false;

export type VueNode = VNode | VNodeChild | (() => VNode);

export interface ProButtonSlots {
    default?: WithFalse<VueNode>; // 按钮，连接文本区域
    content?: WithFalse<VueNode>; // 弹窗，弹出层内容区域
    title?: WithFalse<VueNode>; // 弹窗头部区域
    confirmBtn?: WithFalse<VueNode>; // 确认按钮
    cancelBtn?: WithFalse<VueNode>; // 取消按钮
    icon?: WithFalse<VueNode>; // 按钮，连接图标
    suffixIcon?: WithFalse<VueNode>; // 连接后置图标，按钮无效
}
```

## Expose
```typescript
export interface ProButtonRef {
    open: () => void; // 打开弹窗
    close: () => void; // 关闭弹窗
}
```