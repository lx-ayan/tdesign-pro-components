<script setup lang='tsx'>
import { PageContainer, PageContainerProps } from 'tdesign-pro-component';
import PageContainerOne from './components/PageContainer/One.vue';
//@ts-ignore
import ApiMarkdown from '../markdown/PageContainer/Api.md?raw'
//@ts-ignore
import One from '../markdown/PageContainer/One.md?raw'
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
    title: () => <t-typography-title>PageContainer 组件</t-typography-title>
}

</script>

<template>
    <div>
        <PageContainer :tabList :tabActiveKey :header @tab-change="handleTabChange">
            <template #description>
                <t-typography-paragraph>
                    <t-typography-text>
                        PageContainer 组件 提供一个页面布局，包含面包屑，标题，描述，操作，以及 tab 标签栏处理。帮您快速搭建一个页面。
                    </t-typography-text>
                </t-typography-paragraph>
            </template>
            <div v-if="tabActiveKey === '1'">
                <PageContainerOne />
                <MdPreview id="BasicForm" :modelValue="One" />
            </div>
            <div v-else>
                <MdPreview id="BasicForm" :modelValue="ApiMarkdown" />
            </div>
        </PageContainer>
    </div>
</template>

<style lang='scss'></style>