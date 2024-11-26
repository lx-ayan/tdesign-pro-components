<script setup lang="ts">
import BasicLayout from '../demo/ProLayout/BasicLayout.vue';


</script>

# ProLayout 布局组件
ProLayout 可以提供一个标准又不失灵活的中后台标准布局。与 PageContainer 配合使用可以自动生成面包屑、页面标题，并且提供低成本方案接入页脚工具栏。

## 使用

<BasicLayout/>

```vue
<script setup lang='tsx'>
import { ref } from 'vue';
import {ProLayoutRoute} from 'tdesign-pro-component';
const HeaderRender = () => <div style="padding: 0 12px;">
    <t-input borderless placeholder="请输入搜索内容"></t-input>
</div>
const LogoRender = () => <div >
    <img style="height: 45px; width: 100%; border-radius: 12px;" src="https://images.unsplash.com/photo-1517471305133-eebd52130784?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
</div>
const AsideRender = () => <div style={{ width: '220px' }}>菜单</div>;
const FooterRender = () => <div style={{ width: '220px' }}>菜单</div>;

const ActionsRender = () => <div>
    <t-dropdown
    options={[{ content: '操作一', value: 1 }, { content: '操作二', value: 2 }]}
  >
    <t-button>更多...</t-button>
  </t-dropdown>
</div>

const coll = ref(false);

const contenText = ref('首页')

const routes = [
    {
        title: () => <div>Hello Home</div>,
        path: '/home',
        icon: 'add'
    },
    {
        title: () => <div>控制台</div>,
        path: '/board',
        icon: 'home',
        disabled: true
    },
    {
        title: '系统管理',
        icon: () => <t-icon name="user"></t-icon>,
        path: '/sys',
        children: [
            {
                title: '日志管理',
                path: '/sys/log'
            },
            {
                title: '菜单管理',
                path: '/sys/menu'
            }
        ]
    }
]

function handleMenuClick(path: string, route: ProLayoutRoute) {
    console.log('path', path);
    contenText.value = typeof route.title === 'string'? route.title : '其他页面';
}

</script>

<template>
    <div style="width: 60vw; height: 500px;">
        <ProLayout @menuClick="handleMenuClick" menuTheme="dark" :footerRender="FooterRender"
            :headerRender="HeaderRender" :actionsRender="ActionsRender" v-model:collapsed="coll" :routes
            :logoRender="LogoRender" :asideRender="AsideRender">
            <div>
                {{ contenText }}
            </div>
            <t-button @click="() => coll = !coll">展开{{ coll }}</t-button>
        </ProLayout>
    </div>
</template>
```

## API

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