<script setup lang='tsx'>
import { ref } from 'vue';
import AppVue from './App.vue';
const header = {
    title: () => <div>asdasdaaaaaaaaaaaasd</div>,
    breadcrumb: {
        items: [
            { title: '首页', path: '/', icon: <t-icon name="home"></t-icon>},
            { title: '系统管理', path: '/sys' },
            { title: '日志处理', path: '/sys/log' }
        ]
    }
}

const tabList = ref([
    { value: '1', label: '栏目一' },
    { value: '2', label: () => <div>'栏目二'</div> }
]);

const tabBarExtraContent = <div style="height: 49px; display:flex; align-items: center;">
    <t-button onClick={handleAddTag}>添加标签</t-button>
</div>

const content = () => <div>content</div>

function handleAddTag() {
    tabList.value.push({
        value: tabList.value.length + 1 + '',
        label: Math.random() + ''
    })
}

function handleTabsChange(v: string) {
    alert(v);
}

</script>

<template>
    <div style="height: 100vh; background-color: #f5f7fa;">
        <PageContainer :content :tabsProps="{ theme: 'normal' }" @tabChange="handleTabsChange" :tabBarExtraContent tabActiveKey="1" :tabList  :header="header">
            <template #actions>
                <div>
                    <t-button>操作</t-button>
                </div>
            </template>
            <template #footer>
                <div>Footer</div>
            </template>
            <div>
                <AppVue />
            </div>
        </PageContainer>
    </div>
</template>

<style lang='scss'></style>