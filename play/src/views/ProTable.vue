<script setup lang='tsx'>

import { PageContainerHeaderProps, PageContainerProps } from 'tdesign-pro-component';
import { PageContainer } from 'tdesign-pro-component';
import { ref } from 'vue';
import Table from './components/ProTable/Table.vue';
//@ts-ignore
import ApiMarkdown from '../markdown/ProTable/Api.md?raw'

const tabActiveKey = ref('1');

const header: PageContainerHeaderProps = {
    title: () => <t-typography-title>ProTable 组件</t-typography-title>
}

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

function handleTabChange(value: string) {
    tabActiveKey.value = value;
}

</script>

<template>
    <div>
        <PageContainer @tabChange="handleTabChange" :tabActiveKey="tabActiveKey" :tabList :header
            :loading="{ status: false }">
            <template #description>
                <t-typography-paragraph>
                    <t-typography-text>
                        ProTable 的诞生是为了解决项目中需要写很多 table
                        的样板代码的问题，所以在其中做了封装了很多常用的逻辑。这些封装可以简单的分类为预设行为与预设逻辑。当你的表格需要与服务端进行交互或者需要多种单元格样式时，ProTable 是不二选择。
                    </t-typography-text>
                </t-typography-paragraph>
                <t-typography-paragraph>
                    <t-typography-text>
                        ProTable 在 TDesign 的 table 上进行了一层封装，支持了一些预设，并且封装了一些行为。这里只列出与 TDesign Table 不同的 API。
                    </t-typography-text>
                </t-typography-paragraph>
                <t-typography-paragraph>
                    <t-typography-text>
                        request: request 是 ProTable 最重要的 API，request 会接收一个对象。对象中必须要有 list 如果需要手动分页 total 也是必需的。request
                        会接管 loading 的设置，同时在查询表单查询时和 params 参数发生修改时重新执行。同时查询表单的值和 params
                        参数也会带入。如果参数不满足开发者对接接口需求时，可以自定义参数。
                    </t-typography-text>
                </t-typography-paragraph>
                <t-typography-paragraph>
                    <t-typography-text>
                        options: options 是 ProTable 最重要的 API，options 会接收一个对象数组。通过这些配置可以将你的页面渲染出来。以下是具体使用：
                    </t-typography-text>
                </t-typography-paragraph>
            </template>
            <Table v-if="tabActiveKey === '1'" />
            <div v-else>
                <MdPreview id="BasicTable" :modelValue="ApiMarkdown" />
            </div>
        </PageContainer>
    </div>
</template>

<style lang='scss'></style>