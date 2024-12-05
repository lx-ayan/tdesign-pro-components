## ProLayoutProps
|属性名|类型|默认值|描述|必填|
|------|------|------|------|------|
|headerRender|() => VNode / false|-| 头部渲染 | FALSE |
|logoRender|() => VNode / false|-| Logo部分渲染。如果使用了 header 插槽，这里将不生效。 | FALSE |
|actionsRender|() => VNode / false|-|操作部分渲染。如果使用了 header 插槽，这里将不生效。 | FALSE |
|asideRender|() => VNode / false|-| 菜单部分渲染。如果给了 routes 属性，这里将不生效。 | FALSE |
|footerRender|() => VNode / false|-| 脚部渲染 | FALSE |
|routes|Array / `ProLayoutRoute[]`|-| 路由菜单 | FALSE |
| routeGroup | boolean | false | 菜单是否分组 | FALSE |
| collapsed | boolean | false | 闭合菜单 | FALSE |
| menuTheme | string / `dark` / `light` | - | 菜单主题 | FALSE |
| menuProps | Object / `MenuProps` | - | 菜单其他配置。["参考详情"](https://tdesign.tencent.com/vue-next/components/menu?tab=api "MenuProps") | FALSE |

## ProLayoutRoute
|属性名|类型|默认值|描述|必填|
|------|------|------|------|------|
|title|string / `() => VNode`|-|标题|TRUE|
|path|string|-|路径|TRUE|
|icon|string  / `() => VNode`|-|图标|FALSE|
|disabled|boolean|-|禁用|FALSE|
|children|Array / `ProLayoutRoute[]`|-|子菜单|FALSE|

## Event
```ts
{
    menuClick: (path: string, route: ProLayoutRoute) => void
}
```

## Slots
|插槽名|描述|
|------|------|
|header|作用头部。headerRenders 内部将全部失效，头部由用户自定义开发|
| default | 内容区域|
|footer | 脚部区域 |
|logo | logo区域， 未开启 header 插槽时生效。|
|actions | 操作区域, 未开启 header 插槽时生效。|