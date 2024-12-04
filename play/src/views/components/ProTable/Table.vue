<script setup lang='ts'>
import BasicTable from './BasicTable.vue';
import MyRenderOne from './MyRenderOne.vue';
import MyRenderTwo from './MyRenderTwo.vue';
import MyRenderHeader from './MyRenderHeader.vue';
import TableActions from './TableActions.vue';

import { nextTick, ref } from 'vue';
//@ts-ignore
import BasicTableMarkdown from '../../../markdown/ProTable/BasicTableMarkdown.md?raw';
//@ts-ignore
import MyRenderOneMarkdown from '../../../markdown/ProTable/MyRenderOne.md?raw';
//@ts-ignore
import MyRenderTwoMarkdown from '../../../markdown/ProTable/MyRenderTwo.md?raw';
//@ts-ignore
import MyRenderHeaderMarkdown from '../../../markdown/ProTable/MyRenderHeader.md?raw';
//@ts-ignore
import TableActionsMarkdown from '../../../markdown/ProTable/TableActions.md?raw';
</script>

<template>
    <div>
        <t-typography-title level="h3"><span id="basicTable">基本使用</span></t-typography-title>
        <BasicTable />
        <MdPreview id="BasicTable" :modelValue="BasicTableMarkdown" />

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
                JSX 方式不需要 <t-typography-text code>isSlot: true</t-typography-text>,直接使用 <t-typography-text code>render
                </t-typography-text> 函数即可。
            </t-typography-text>
        </t-typography-paragraph>
        <MyRenderTwo />
        <MdPreview id="MyRenderOne" :modelValue="MyRenderTwoMarkdown" />

        <t-typography-title level="h3"><span id="MyRenderHeader">自定义头部</span></t-typography-title>
        <MyRenderHeader />
        <MdPreview id="MyRenderHeader" :modelValue="MyRenderHeaderMarkdown" />

        <t-typography-title level="h3"><span id="TableActions">表格操作区域</span></t-typography-title>
        <TableActions />
        <MdPreview id="TableActions" :modelValue="TableActionsMarkdown" />
    </div>
</template>

<style lang='scss'></style>