<script setup lang='tsx'>
import { PageContainer, PageContainerProps } from 'tdesign-pro-component';
import BasicLayout from './components/ProLayout/BasicLayout.vue';
// @ts-ignore
import One from '../markdown/ProLayout/One.md?raw'
// @ts-ignore
import ApiMarkdown from '../markdown/ProLayout/Api.md?raw'
import { ref } from 'vue';
const tabList: PageContainerProps['tabList'] = [
    {
        label: '示例',
        value: '1'
    },
    {
        label: 'API',
        value: '2'
    }
]

const tabActiveKey = ref('1');

function handleTabChange(value: string) {
    tabActiveKey.value = value;
}
const header: PageContainerProps['header'] = {
    title: () => <t-typography-title>ProLayout 组件</t-typography-title>
}
</script>

<template>
    <div>
        <PageContainer :tabList :tabActiveKey @tabChange="handleTabChange" :header>
            <template #description>
                <div>
                    <span>ProLayout 可以提供一个标准又不失灵活的中后台标准布局。与 PageContainer 配合使用可以自动生成面包屑、页面标题，并且提供低成本方案接入页脚工具栏。</span>
                    <div>
                        注意: 这里只是给了作者的一个默认布局，如果要定制化布局，需要使用 TDeisgn 自己的组件。
                    </div>
                </div>
            </template>
            <div v-if="tabActiveKey === '1'">
                <t-card>
                    <BasicLayout />
                </t-card>
                <MdPreview id="BasicForm" :modelValue="One" />
            </div>
            <MdPreview v-else id="BasicForm" :modelValue="ApiMarkdown" />
        </PageContainer>
    </div>
</template>

<style lang='scss'></style>