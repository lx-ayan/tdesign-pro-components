<script setup lang='tsx'>
import { ref } from 'vue';

const HeaderRender = () => <div>啊萨达萨达</div>
const LogoRender = () => <div style={{ background: 'red' }}>lOGO</div>
const AsideRender = () => <div style={{ width: '220px' }}>菜单</div>;
const FooterRender = () => <div style={{ width: '220px' }}>菜单</div>;

const coll = ref(false);

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

function handleMenuClick(path: string) {
    console.log('path', path);
}

</script>

<template>
    <ProLayout @menuClick="handleMenuClick" routeGroup menuTheme="dark" :footerRender="FooterRender"
        v-model:collapsed="coll" :routes :headerRender="HeaderRender" :logoRender="LogoRender"
        :asideRender="AsideRender">
        <div>
            Hello 我是内容
        </div>
        <t-button @click="() => coll = !coll">展开{{ coll }}</t-button>

        <template #footer>
            <div>Footer</div>
        </template>
    </ProLayout>
</template>

<style lang='scss'></style>