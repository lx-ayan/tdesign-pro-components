<script setup lang='tsx'>
import DrawerFormVue from './components/DrawerForm/DrawerForm.vue';
//@ts-ignore
import ApiMarkdown from '../markdown/DrawerForm/Api.md?raw';
import useTabActiveKey, { tabList } from '../utils/useTabActiveKey';
const header = {
    title: () => <t-typography-title>DrawerForm 弹窗表单</t-typography-title>
}

const { tabActiveKey, tabChange } = useTabActiveKey('1');

</script>

<template>
    <div>
        <PageContainer :tabActiveKey="tabActiveKey" :tabList @tab-change="tabChange" :header>
            <template #description>
                <t-typography-paragraph>
                    <t-typography-text>
                        DrawerForm 将 ProForm 与 Drawer 组件进行结合，通过配置项可以快速完成一个弹窗表单。
                    </t-typography-text>
                </t-typography-paragraph>
            </template>
            <DrawerFormVue v-if="tabActiveKey === '1'" />
            <div v-else>
                <MdPreview id="ButtonApi" :modelValue="ApiMarkdown" />
            </div>
        </PageContainer>
    </div>
</template>

<style lang='scss'></style>