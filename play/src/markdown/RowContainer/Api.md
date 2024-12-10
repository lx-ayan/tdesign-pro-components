## RowContainerProps

|属性名|类型|默认值|描述|必填|
|------|--|------|------|------|
|image| string / Object / Function / `VNode`/`TNode`/`() => (VNode / TNode)` |  - | 图片，`注意: 字符串时 imageView 生效` | FALSE |
| title | string / Object / Function / `VNode`/`TNode`/`() => (VNode / TNode)` | - | 标题 | FALSE |
| actions | Object / Function / `VNode`/`TNode`/`() => (VNode / TNode)` | - | 操作 | FALSE |
| description | string / Object / Function / `VNode`/`TNode`/`() => (VNode / TNode)`| - | 描述 | FALSE |
| footer | string / Object / Function / `VNode`/`TNode`/`() => (VNode / TNode)` | - | 脚步区域 | FALSE |
| imageAlign | string / `left` / `right` | left | 图片位置 | FALSE |
| imageStyle | Object /`ImageProps` | - | 图片样式 | FALSE |
| imageWidth | string  | 260px | 图片宽度 | FALSE |
| imageView | boolean | false | 开启图片预览模式,`注意：当 image 属性传递字符串即一个地址时该属性生效。`| FALSE |
| imageHeight | string | - | 图片高度 | FALSE |

## Slots

```typescript
export type WithFalse<T extends any = any> = T | false;

export type VueNode = VNode | VNodeChild | (() => VNode);

export interface RowContainerSlots {
    image?: WithFalse<VueNode>; // 图片区域
    title?: WithFalse<VueNode>; // 标题区域
    actions?: WithFalse<VueNode>; // 操作区域
    description?: WithFalse<VueNode>; // 描述区域
    footer?: WithFalse<VueNode>; // 底部区域
}
```