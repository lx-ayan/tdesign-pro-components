<script setup lang="tsx">
import ProFormSelectLabel from './components/ProFormSelectLabel/index.vue';
import ProFormSelectPanel from './components/ProFormSelectPanel/index.vue';
import ProFormSelectData from './components/ProFormSelectData/index.vue';
import ProFormSelectFilter from './components/ProFormSelectFilter/index.vue';
import ProFormSelectDataSetting from './components/ProFormSelectDataSetting/index.vue';
import ProFormSelectCollapsed from './components/ProFormSelectCollapsed/index.vue';
import ProFormSelectDataLabelValueSetting from './components/ProFormSelectDataLabelValueSetting/index.vue';
import ProFormSelectSearch from './components/ProFormSelectSearch/index.vue';
import ProFormSelectRules from './components/ProFormSelectRules/index.vue';
import ApiTable from '../../components/ApiTable/index.vue';
import MyLink from '../../components/MyLink/index.vue';
import CodeContainer from '../../components/CodeContainer/index.vue';

const dataSource = [
    {
        name: 'name',
        type: 'String',
        defaultValue: '-',
        description: '表单元素名称',
        required: 'Y'
    },
    {
        name: 'modelValue(v-model)',
        type: 'String',
        defaultValue: '-',
        description: '数据双向绑定',
        required: 'Y'
    },
    {
        name: 'data',
        type: <span>Array | Function, <CodeContainer>TS: OptionData</CodeContainer></span>,
        defaultValue: '-',
        description: '选项数据',
        required: 'Y'
    },
    {
        name: 'labelName',
        defaultValue: 'label',
        type: 'String',
        required: 'N',
        description: '自定义键属性名，会自动映射到 data 中的字段'
    },
    {
        name: 'valueName',
        defaultValue: 'value',
        type: 'String',
        required: 'N',
        description: '自定义值属性名，会自动映射到 data 中的字段'
    },
    {
        name: 'label',
        type: <span>String | Object | Function， <CodeContainer>TS: VueNode</CodeContainer></span>,
        defaultValue: '-',
        description: '表单项描述',
        required: 'N'
    },
    {
        name: 'rules',
        type: 'Array, TS: Array<FormRule>',
        defaultValue: '-',
        required: 'N',
        description: <span>表单验证，<MyLink href="https://tdesign.tencent.com/vue-next/components/form?tab=api#formitem-props">详细使用</MyLink></span>
    },
    {
        name: 'formItemProps',
        type: <span>Object, <CodeContainer>TS: FormItemProps</CodeContainer></span>,
        required: 'N',
        defaultValue: '-',
        description: <span>表单项其他属性，<MyLink href="https://tdesign.tencent.com/vue-next/components/form?tab=api#formitem-props">详细使用</MyLink></span>
    },
    {
        name: 'placeholder',
        type: 'String',
        required: 'N',
        defaultValue: '请选择',
        description: '选择框描述内容'
    },
    {
        name: 'clearable',
        type: <span>Boolean</span>,
        required: 'N',
        defaultValue: '-',
        description: '选择框内容是否可清空'
    },
    {
        name: 'disabled',
        type: <span>Boolean</span>,
        required: 'N',
        defaultValue: '-',
        description: '选择框内容是否禁用'
    },
    {
        name: 'readonly',
        type: <span>Boolean</span>,
        required: 'N',
        defaultValue: '-',
        description: '选择框内容是否只读'
    },
    {
        name: 'borderless',
        type: <span>Boolean</span>,
        required: 'N',
        defaultValue: '-',
        description: '无边框模式'
    },
    {
        name: 'multiple',
        type: <span>Boolean</span>,
        required: 'N',
        defaultValue: '-',
        description: '选择框内容是否多选'
    },
    {
        name: 'filter',
        type: <span>Function, <CodeContainer>TS: SelectProps['filter']</CodeContainer></span>,
        required: 'N',
        defaultValue: '-',
        description: '过滤函数'
    },
    {
        name: 'onSearch',
        type: <span>Function, <CodeContainer>TS: SelectProps['onSearch']</CodeContainer></span>,
        required: 'N',
        defaultValue: '-',
        description: '搜索函数'
    },
    {
        name: 'panelTopContent',
        type: <span>String | Object | Function， <CodeContainer>TS: VueNode</CodeContainer></span>,
        defaultValue: '-',
        description: '自定义下拉面板上部分',
        required: 'N'
    },
    {
        name: 'panelBottomContent',
        type: <span>String | Object | Function， <CodeContainer>TS: VueNode</CodeContainer></span>,
        defaultValue: '-',
        description: '自定义下拉面板下部分',
        required: 'N'
    },
    {
        name: 'collapsedItems',
        type: <span>String | Object | Function， <CodeContainer>TS: VueNode</CodeContainer></span>,
        defaultValue: '-',
        description: '自定义选择项折叠',
        required: 'N'
    },
    {
        name: 'prefixIcon',
        type: <span>String | Object | Function， <CodeContainer>TS: VueNode</CodeContainer></span>,
        defaultValue: '-',
        description: '选择器前置图标',
        required: 'N'
    },
    {
        name: 'selectProps',
        type: <span>Object， <CodeContainer>TS: SelectProps</CodeContainer></span>,
        defaultValue: '-',
        description: '选择器其他属性',
        required: 'N'
    },
];

</script>

<template>
    <div style="padding: 0 20px; padding-bottom: 80px;">
        <t-typography-title>ProFormSelect 表单选择器</t-typography-title>
        <t-typography-paragraph>
            <t-typography-text code>
                ProFormSelect
            </t-typography-text> 由 FormItem 和 Select 组合而成，将两者功能结合成一个组件，同时具备原有 TDesign 的 FormItem 和 Select 功能，简化 t-form
            中多余的代码，新增 Pro 功能，配置项可以通过手动配置，也可以通过请求，自动帮你请求数据。
            <t-typography-text strong>注意：这里未实现分组功能，如果需要使用到分组功能请使用原生的组件。</t-typography-text>
        </t-typography-paragraph>

        <ProFormSelectLabel />
        <ProFormSelectData />
        <ProFormSelectDataSetting />
        <ProFormSelectDataLabelValueSetting />
        <ProFormSelectPanel />
        <ProFormSelectCollapsed />
        <ProFormSelectFilter />
        <ProFormSelectSearch />
        <ProFormSelectRules />
        <ApiTable :data="dataSource" />
        <div style="position: fixed; top: 320px; right: 20px;">
            <t-anchor>
                <t-anchor-item href="#ProFormSelectLabel" title="自定义label" />
                <t-anchor-item href="#ProFormSelectData" title="选项数据" />
                <t-anchor-item href="#ProFormSelectDataSetting" title="数据自定义渲染" />
                <t-anchor-item href="#ProFormSelectDataLabelValueSetting" title="自定义属性名" />
                <t-anchor-item href="#ProFormSelectPanel" title="自定义选择器面板" />
                <t-anchor-item href="#ProFormSelectCollapsed" title="自定义折叠中的选择器(多选)" />
                <t-anchor-item href="#ProFormSelectFilter" title="可过滤的选择器" />
                <t-anchor-item href="#ProFormSelectSearch" title="远程搜索" />
                <t-anchor-item href="#ProFormSelectRules" title="表单验证" />
                <t-anchor-item href="#api" title="API" />
            </t-anchor>
        </div>

    </div>
</template>