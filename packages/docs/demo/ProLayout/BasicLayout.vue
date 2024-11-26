<script setup lang='tsx'>
import { ref } from 'vue';
import { ProLayoutRoute } from 'tdesign-pro-component';
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

const routes = ref([
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
])

function handleMenuClick(path: string, route: ProLayoutRoute) {
    console.log('path', path);
    contenText.value = typeof route.title === 'string' ? route.title : '其他页面';
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