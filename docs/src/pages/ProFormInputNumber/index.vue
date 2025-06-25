<script setup lang="tsx">
import ProFormLabel from './components/ProFormTextLabel/index.vue';
import ProFormTextRules from './components/ProFormTextRules/index.vue';
import ProFormTextDecorator from './components/ProFormTextDecorator/index.vue';
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
];
</script>

<template>
    <div style="padding: 0 20px; padding-bottom: 80px;">
        <t-typography-title>ProFormText 表单输入框</t-typography-title>
        <t-typography-paragraph>
            <t-typography-text code>
                ProFormText
            </t-typography-text> 由 FormItem 和 Input 组合而成，将两者功能结合成一个组件，同时具备原有 TDesign 的 FormItem 和 Input 功能，简化 t-form
            中多余的代码
        </t-typography-paragraph>
        <ProFormLabel />
        <ProFormTextRules />
        <ProFormTextDecorator />
        <ApiTable :data="dataSource" />
        <div style="position: fixed; top: 320px; right: 20px;">
            <t-anchor>
                <t-anchor-item href="#ProFormLabel" title="自定义label" />
                <t-anchor-item href="#ProFormInputNumberRules" title="表单验证" />
                <t-anchor-item href="#ProFormInputNumberDecorator" title="表单装饰器" />
                <t-anchor-item href="#api" title="API" />
            </t-anchor>
        </div>

    </div>
</template>


<style></style>