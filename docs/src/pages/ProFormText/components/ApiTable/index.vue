<script setup lang="tsx">
import { ref } from 'vue';
import 'md-editor-v3/lib/style.css';
import CodeContainer from '../../../../components/CodeContainer/index.vue';
import MyLink from '../../../../components/MyLink/index.vue';
const dataSource = ref([
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
        defaultValue: '请输入',
        description: '输入框描述内容'
    },
    {
        name: 'type',
        type: 'String',
        required: 'N',
        description: <span>输入框类型，<MyLink href="https://tdesign.tencent.com/vue-next/components/input?tab=api">详细使用</MyLink></span>,
        defaultValue: '-'
    },
    {
        name: 'prepend',
        type: <span>String | Object | Function， <CodeContainer>TS: VueNode</CodeContainer></span>,
        required: 'N',
        defaultValue: '-',
        description: '输入框前置装饰器, 注意：推荐直接使用字符串，如果使用插槽或 JSX 形式，可能会导致布局奇怪，缺少边框等问题。TDesign 官方问题。'
    },
    {
        name: 'append',
        type: <span>String | Object | Function， <CodeContainer>TS: VueNode</CodeContainer></span>,
        required: 'N',
        defaultValue: '-',
        description: '输入框后置装饰器, 注意：推荐直接使用字符串，如果使用插槽或 JSX 形式，可能会导致布局奇怪，缺少边框等问题。TDesign 官方问题。'
    },
    {
        name: 'suffix',
        type: <span>String | Object | Function， <CodeContainer>TS: VueNode</CodeContainer></span>,
        required: 'N',
        defaultValue: '-',
        description: '输入框后缀'
    },
    {
        name: 'inputLabel',
        type: <span>String | Object | Function， <CodeContainer>TS: VueNode</CodeContainer></span>,
        required: 'N',
        defaultValue: '-',
        description: '输入框前缀'
    },
    {
        name: 'suffixIcon',
        type: <span>String | Object | Function， <CodeContainer>TS: VueNode</CodeContainer></span>,
        required: 'N',
        defaultValue: '-',
        description: '输入框后缀图标'
    },
    {
        name: 'clearable',
        type: <span>Boolean</span>,
        required: 'N',
        defaultValue: '-',
        description: '输入框内容是否可清空'
    },
    {
        name: 'disabled',
        type: <span>Boolean</span>,
        required: 'N',
        defaultValue: '-',
        description: '输入框内容是否禁用'
    },
    {
        name: 'readonly',
        type: <span>Boolean</span>,
        required: 'N',
        defaultValue: '-',
        description: '输入框内容是否只读'
    },
    {
        name: 'borderless',
        type: <span>Boolean</span>,
        required: 'N',
        defaultValue: '-',
        description: '无边框模式'
    },
    {
        name: 'inputProps',
        type: <span>Object, <CodeContainer>TS: InputProps</CodeContainer></span>,
        required: 'N',
        defaultValue: '-',
        description: '输入框其他属性'
    }
]);
const columns = [
    { colKey: 'name', title: '名称' },
    { colKey: 'type', title: '类型' },
    { colKey: 'defaultValue', title: '默认值', width: '150' },
    { colKey: 'description', title: '描述' },
    { colKey: 'required', title: '必传' }
]
</script>

<template>
    <t-card style="margin-top: 24px;">
        <t-typography-title level="h3"><span id="api">API</span></t-typography-title>
        <t-base-table row-key="index" :data="dataSource" :columns="columns"></t-base-table>
    </t-card>
</template>