<script setup lang='tsx'>
import BasicTable from './components/ProTable/BasicTable.vue';
import MyRenderOne from './components/ProTable/MyRenderOne.vue';
import MyRenderTwo from './components/ProTable/MyRenderTwo.vue';
import { nextTick, ref } from 'vue';
//@ts-ignore
import BasicTableMarkdown from '../markdown/ProTable/BasicTableMarkdown.md?raw';
//@ts-ignore
import MyRenderOneMarkdown from '../markdown/ProTable/MyRenderOne.md?raw';
//@ts-ignore
import MyRenderTwoMarkdown from '../markdown/ProTable/MyRenderTwo.md?raw';
import { PageContainerHeaderProps } from 'tdesign-pro-component';
import { PageContainer, ProTable } from 'tdesign-pro-component';
const text = ref(BasicTableMarkdown);

const header: PageContainerHeaderProps = {
    title: () => <t-typography-title>ProTable 组件</t-typography-title>
}

</script>

<template>
    <div>
        <PageContainer :header :loading="{ status: false }">
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
            <t-typography-title level="h3"><span id="basicTable">基本使用</span></t-typography-title>
            <BasicTable />
            <MdPreview id="BasicTable" :modelValue="text" />

            <t-typography-title level="h3"><span id="MyRender">自定义渲染列数据</span></t-typography-title>
            <t-typography-paragraph>
                <t-typography-text>
                    自定义渲染数据，也是高需求之一，所以 ProTable 用两种形式进行了处理自定义渲染。分别是插槽方式与jsx 方式。
                </t-typography-text>
            </t-typography-paragraph>
            <t-typography-title level="h4"><span id="MyRenderBySlot">方式一：插槽方式</span></t-typography-title>
            <t-typography-paragraph>
                <t-typography-text>
                    在想要自定义的配置项中配置 `isSlot: true`, 然后再 ProTable 添加插槽，插槽名称为 `#table-配置项的 key`。这是一个作用域插槽，里面可以结构 `row` 对象，这个
                    row
                    就是你想要的数据
                </t-typography-text>
            </t-typography-paragraph>

            <MyRenderOne />
            <MdPreview id="MyRenderOne" :modelValue="MyRenderOneMarkdown" />

            <t-typography-title level="h4"><span id="MyRenderByRender">方式二：JSX 方式</span></t-typography-title>
            <t-typography-paragraph>
                <t-typography-text>
                    JSX 方式不需要 <t-typography-text code>isSlot: true</t-typography-text>,直接使用  <t-typography-text code>render </t-typography-text> 函数即可。
                </t-typography-text>
            </t-typography-paragraph>
            <MyRenderTwo />
            <MdPreview id="MyRenderOne" :modelValue="MyRenderTwoMarkdown" />

        </PageContainer>
    </div>
</template>

<style lang='scss'></style>