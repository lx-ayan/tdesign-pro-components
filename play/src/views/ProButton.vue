<script setup lang='tsx'>
import Button from './components/ProButton/Button.vue';
//@ts-ignore
import ApiMarkdown from '../markdown/ProButton/Api.md?raw';
import useTabActiveKey, { tabList } from '../utils/useTabActiveKey';
import {API_TABLE_COLUMNS} from '../common/const';
const header = {
    title: () => <t-typography-title>ProButton 高级按钮</t-typography-title>
}

const { tabActiveKey, tabChange } = useTabActiveKey('1');


</script>

<template>
    <div>
        <PageContainer :tabActiveKey="tabActiveKey" :tabList @tab-change="tabChange" :header>
            <template #description>
                <t-typography-paragraph>
                    <t-typography-text>
                        ProButton 也是一个高频使用的组件，这个组件将弹窗/弹出层与按钮和连接进行结合。如表单提交时的提示可以使用，删除数据时可以使用。
                    </t-typography-text>
                </t-typography-paragraph>
            </template>
            <Button v-if="tabActiveKey === '1'" />
            <div v-else>
                <MdPreview id="ButtonApi" :modelValue="ApiMarkdown" />
            </div>
        </PageContainer>
    </div>
</template>

<style lang='scss'></style>