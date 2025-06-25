<script setup lang="tsx">
import LoginForm from './components/LoginForm/index.vue';
import Builder from './components/Builder/index.vue';
import Linkage from './components/Linkage/index.vue';
import ExtralForm from './components/ExtralForm/index.vue';
import SettingSubmit from './components/SettingSubmit/index.vue';
import ApiTable from '../../components/ApiTable/index.vue';
import MyLink from '../../components/MyLink/index.vue';
import CodeContainer from '../../components/CodeContainer/index.vue';
import TypeTable from '../../components/TypeTable/index.vue';
import SlotTable from '../../components/SlotTable/index.vue';
import EventTable from '../../components/EventTable/index.vue';

const dataSource = [
    {
        name: 'options',
        type: <span>String <CodeContainer>ProFormOption[]</CodeContainer></span>,
        defaultValue: '[]',
        description: '表单配置',
        required: 'N'
    },
    {
        name: 'request',
        type: <span>Function <CodeContainer>{`TS: () => Promise<Any>`}</CodeContainer></span>,
        defaultValue: '-',
        description: '请求数据函数，优先级高于 initalData',
        required: 'N'
    },
    {
        name: 'initalData',
        type: <span>Object <CodeContainer>{`TS: any`}</CodeContainer></span>,
        defaultValue: '-',
        description: '初始化的数据，没有 request 时，使用该数据',
        required: 'N'
    },
    {
        name: 'onSubmit',
        type: <span>Function <CodeContainer>{`TS: () => Promise<any>`}</CodeContainer></span>,
        defaultValue: '-',
        description: '提交函数，表单提交时触发',
        required: 'N'
    },
    {
        name: 'footer',
        type: <span>String, Function <CodeContainer>TS: VueNode</CodeContainer></span>,
        defaultValue: '-',
        description: '提交区域渲染',
        required: 'N'
    },
    {
        name: 'onSuccess',
        type: <span>Function</span>,
        defaultValue: '-',
        description: '提交表单成功后回调',
        required: 'N'
    },
    {
        name: 'onFail',
        type: <span>Function</span>,
        defaultValue: '-',
        description: '提交表单失败后回调',
        required: 'N'
    },
    {
        name: 'increment',
        type: 'Boolean',
        defaultValue: '-',
        description: '表单增量提交',
        required: 'N'
    },
    {
        name: 'filterEmptyStr',
        type: 'Boolean',
        defaultValue: '-',
        description: '过滤空字符串，会过滤null,undefined,空字符串，提交时不会带上这个参数',
        required: 'N'
    },
    {
        name: 'filterEmptyArray',
        type: 'Boolean',
        defaultValue: '-',
        description: '过滤空数组，提交时不会带上这个参数',
        required: 'N'
    },
    {
        name: 'readonly',
        type: 'Boolean',
        defaultValue: '-',
        description: '只读表单',
        required: 'N'
    },
    {
        name: 'disabled',
        type: 'Boolean',
        defaultValue: '-',
        description: '禁用表单',
        required: 'N'
    },
    {
        name: 'submitText',
        type: 'String',
        defaultValue: '提交',
        description: '提交按钮文本',
        required: 'N'
    },
    {
        name: 'resetText',
        type: 'String',
        defaultValue: '重置',
        description: '重置按钮文本',
        required: 'N'
    },
    {
        name: 'hideReset',
        type: 'Boolean',
        defaultValue: '-',
        description: '隐藏重置按钮',
        required: 'N'
    },
    {
        name: 'extral',
        type: <span>String, Function <CodeContainer>TS: VueNode</CodeContainer></span>,
        defaultValue: '-',
        description: '提交旁的操作区域',
        required: 'N'
    },
    {
        name: 'formProps',
        type: <span>Object <CodeContainer>TS: FormProps</CodeContainer></span>,
        defaultValue: '-',
        description: <span>form 表单其他属性，<MyLink href='https://tdesign.tencent.com/vue-next/components/form?tab=api#form-props'>详细使用</MyLink></span>,
        required: 'N'
    },
    {
        name: 'labelAlign',
        type: <span>String <CodeContainer>TS: FormProps['labelAlign']</CodeContainer></span>,
        defaultValue: '-',
        description: <span>描述对齐方式</span>,
        required: 'N'
    },
    {
        name: 'rules',
        type: <span>Object <CodeContainer>TS: FormProps['rules']</CodeContainer></span>,
        defaultValue: '-',
        description: <span>表单校验</span>,
        required: 'N'
    },
    {
        name: 'footerAlign',
        type: <span>String <CodeContainer>left | center | right</CodeContainer></span>,
        defaultValue: '-',
        description: <span>操作区域对齐方式</span>,
        required: 'N'
    }
];

const typeData = [
    {
        name: 'name',
        description: '名称, 要求唯一',
        type: <span>String</span>
    },
    {
        name: 'hidden',
        type: 'Boolean',
        description: '隐藏'
    },
    {
        name: 'type',
        type: <span>String <CodeContainer>TS: 'text' | 'tree-select' | 'number' | 'textarea' | 'select' | 'radio' | 'checkbox' | 'date' | 'upload' | 'date-range'</CodeContainer></span>,
        description: '组件类型 '
    },
    {
        name: 'placeholder',
        type: 'String',
        description: '提示内容'
    },
    {
        name: 'label',
        type: <span>String, Function <CodeContainer>TS: VueNode</CodeContainer></span>,
        description: '标签'
    },
    {
        name: 'data',
        type: <span>Array | Function, <CodeContainer>TS: OptionData</CodeContainer></span>,
        description: 'radio, select, checkbox 的数据'
    },
    {
        name: 'disabled',
        type: <span>Boolean</span>,
        description: '该项禁用，Form 的禁用优先级更高'
    },
    {
        name: 'readonly',
        type: <span>Boolean</span>,
        description: '该项只读，Form 的只读优先级更高'
    },
    {
        name: 'rules',
        type: <span>Array</span>,
        description: '表单验证'
    },
    {
        name: 'checkboxProps',
        type: <span>Object</span>,
        description: '复选按钮其他属性，请参考本站 ProFormCheckbox'
    },
    {
        name: 'radioProps',
        type: <span>Object</span>,
        description: '单选按钮其他属性，请参考本站 ProFormRadio'
    },
    {
        name: 'textProps',
        type: <span>Object</span>,
        description: '文本框其他属性，请参考本站 ProFormText'
    },
    {
        name: 'numberProps',
        type: <span>Object</span>,
        description: '数字输入框其他属性，请参考本站 ProFormInputNumber'
    },
    {
        name: 'textareaProps',
        type: <span>Object</span>,
        description: '文本域输入框其他属性，请参考本站 ProFormTextarea'
    },
    {
        name: 'selectProps',
        type: <span>Object</span>,
        description: '下拉选择器其他属性，请参考本站 ProFormSelect'
    },
    {
        name: 'datePickerProps',
        type: <span>Object</span>,
        description: '日期选择器其他属性，请参考本站 ProFormDatePicker'
    },
    {
        name: 'datePickerRangeProps',
        type: <span>Object</span>,
        description: '日期范围选择器其他属性，请参考本站 ProFormDatePickerRange'
    },
    {
        name: 'uploadProps',
        type: <span>Object</span>,
        description: '上传其他属性，参考 TDesign 官网'
    },
    {
        name: 'span',
        type: 'Number',
        description: '表单项占据的空间大小，最大12，默认6'
    },
    {
        name: 'formItemProps',
        type: <span>Object</span>,
        description: '表单项其他属性'
    },
    {
        name: 'urlName',
        type: 'String',
        description: '上传会先的路径字段，默认 url'
    },
    {
        name: 'onChange',
        type: 'Function',
        description: '值改变函数'
    }
]

const slotData = [
    {
        name: <span><CodeContainer>{'{option.name}'}</CodeContainer></span>,
        description: '每一项配置的插槽，参数：当前数据 {option}'
    },
    {
        name: <span>footer</span>,
        description: '自定义提交内容'
    },
    {
        name: <span>extral</span>,
        description: '提交按钮左侧，扩展操作'
    }
]

const eventData = [
    {
        name: <span>setItem</span>,
        description: <span>手动给表单项中的数据设置值，<CodeContainer>{`TS: (key: keyof typeof innerFormData.value, value: any) => void`}</CodeContainer></span>
    },
    {
        name: <span>getItem</span>,
        description: <span>获取表单中的任意一项值，<CodeContainer>{`TS: (key: keyof typeof innerFormData.value) => any`}</CodeContainer></span>
    },
    {
        name: <span>resetRequest</span>,
        description: '重置数据'
    },
    {
        name: <span>validate</span>,
        description: <span>手动校验, <CodeContainer>{`TS: () => void`}</CodeContainer></span>
    },
    {
        name: <span>submit</span>,
        description: <span>手动提交, <CodeContainer>{`TS: () => void`}</CodeContainer></span>
    },
    {
        name: <span>reset</span>,
        description: <span>手动重置, <CodeContainer>{`TS: () => void`}</CodeContainer></span>
    },
    {
        name: <span>getFormInstance</span>,
        description: <span>获取 TDesign 表单实例, <CodeContainer>{`TS: () => FormInstanceFunctions`}</CodeContainer></span>
    }
]
</script>

<template>
    <div style="padding: 0 20px; padding-bottom: 80px;">
        <t-typography-title>ProForm 表单</t-typography-title>
        <t-typography-paragraph>
            <t-typography-text code>
                ProForm
            </t-typography-text>，是本套组件中核心组件之一，业务使用最多的组件，它将多个 ProFormItem
            控件进行组合，通过配置可快速完成一个表单页面。而且可以通过请求函数自动触发请求获取数据，减少一定的代码量。不仅如此，<t-typography-text code>
                ProForm
            </t-typography-text>表单还支持空值过滤，还有增量提交等功能。
        </t-typography-paragraph>
        <LoginForm />
        <Builder />
        <Linkage />
        <ExtralForm />
        <SettingSubmit />
        <ApiTable :data="dataSource" />
        <TypeTable title="ProFormOption" id="ProFormOption" :data="typeData" />
        <SlotTable :data="slotData" />
        <EventTable :data="eventData"/>
        <div style="position: fixed; top: 320px; right: 20px;">
            <t-anchor>
                <t-anchor-item href="#ProFormBasic" title="基本使用" />
                <t-anchor-item href="#ProFormBuilder" title="构建者模式" />
                <t-anchor-item href="#ProFormLinkage" title="表单联动" />
                <t-anchor-item href="#ProFormExtral" title="自定义操作区域" />
                <t-anchor-item href="#ProFormSettingSubmit" title="自定义提交" />
                <t-anchor-item href="#api" title="API" />
                <t-anchor-item href="#ProFormOption" title="ProFormOption" />
                <t-anchor-item href="#slots" title="slots" />
                <t-anchor-item href="#event" title="event" />
            </t-anchor>
        </div>

    </div>
</template>
