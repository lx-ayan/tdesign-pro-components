<script setup lang="tsx">
import BasicDatePicker from './components/BasicDatePicker/index.vue';
import MultipleDatePicker from './components/MultipleDatePicker/index.vue';
import PrefixIconDatePicker from './components/PrefixIconDatePicker/index.vue';
import LabelDatePicker from './components/LabelDatePicker/index.vue';
import RulesDatePicker from './components/RulesDatePicker/index.vue';
import ApiTable from '../../components/ApiTable/index.vue';
import SlotTable from '../../components/SlotTable/index.vue';

const dataSource = [
    {
        name: 'name',
        type: 'String',
        defaultValue: '-',
        description: '表单元素名称',
        required: 'Y'
    },
    {
        name: 'label',
        type: 'String | Function | Object (TS: VueNode)',
        defaultValue: '-',
        description: '表单项描述',
        required: 'N'
    },
    {
        name: 'rules',
        type: 'Array (TS: Array<FormRule>)',
        defaultValue: '-',
        description: '表单验证，可参考 https://tdesign.tencent.com/vue-next/components/form?tab=api#formitem-props 详细使用',
        required: 'N'
    },
    {
        name: 'formItemProps',
        type: 'Object (TS: FormItemProps)',
        defaultValue: '-',
        description: '表单项其他属性，可参考 https://tdesign.tencent.com/vue-next/components/form?tab=api#formitem-props 详细使用',
        required: 'N'
    },
    {
        name: 'modelValue',
        type: 'String | Array',
        defaultValue: '-',
        description: '数据双向绑定',
        required: 'Y'
    },
    {
        name: 'placeholder',
        type: 'String',
        defaultValue: '请选择日期',
        description: '输入框占位提示',
        required: 'N'
    },
    {
        name: 'readonly',
        type: 'Boolean',
        defaultValue: '-',
        description: '选择框内容是否只读',
        required: 'N'
    },
    {
        name: 'borderless',
        type: 'Boolean',
        defaultValue: '-',
        description: '是否无边框样式',
        required: 'N'
    },
    {
        name: 'disabled',
        type: 'Boolean',
        defaultValue: '-',
        description: '选择框内容是否禁用',
        required: 'N'
    },
    {
        name: 'enableTimePicker',
        type: 'Boolean',
        defaultValue: '-',
        description: '是否启用时间选择器',
        required: 'N'
    },
    {
        name: 'clearable',
        type: 'Boolean',
        defaultValue: '-',
        description: '是否可清除内容',
        required: 'N'
    },
    {
        name: 'multiple',
        type: 'Boolean',
        defaultValue: '-',
        description: '是否支持多选',
        required: 'N'
    },
    {
        name: 'format',
        type: 'String',
        defaultValue: 'YYYY - MM - DD',
        description: '日期格式',
        required: 'N'
    },
    {
        name: 'datePickerLabel',
        type: 'String | Function | Object (TS: VueNode)',
        defaultValue: '-',
        description: '日期选择器的标签',
        required: 'N'
    },
    {
        name: 'prefixIcon',
        type: 'Function | Object (TS: VueNode)',
        defaultValue: '-',
        description: '输入框前缀图标',
        required: 'N'
    },
    {
        name: 'datePickerProps',
        type: 'Object (TS: DatePickerProps)',
        defaultValue: '-',
        description: '日期选择器的其他属性',
        required: 'N'
    }
];

const slotData = [
    {
        name: <span>label</span>,
        description: '表单描述项'
    },
    {
        name: <span>datePickerLabel</span>,
        description: '输入框内前置文本描述'
    },
    {
        name: <span>prefixIcon</span>,
        description: '输入框内前置图标，在文本描述之前'
    }
]

</script>

<template>
    <div style="padding: 0 20px; padding-bottom: 80px;">
        <t-typography-title>ProFormDatePicker 日期选择器</t-typography-title>
        <t-typography-paragraph>
            <t-typography-text code>
                ProFormDatePicker
            </t-typography-text> 由 FormItem 和 DatePicker 组合而成，将两者功能结合成一个组件，同时具备原有 TDesign 的 FormItem 和 DatePicker 功能，简化
            t-form
            中多余的代码
        </t-typography-paragraph>
        <BasicDatePicker />
        <MultipleDatePicker />
        <PrefixIconDatePicker />
        <LabelDatePicker />
        <RulesDatePicker />
        <ApiTable :data="dataSource" />
        <SlotTable :data="slotData"/>
        <div style="position: fixed; top: 320px; right: 20px;">
            <t-anchor>
                <t-anchor-item href="#BasicDatePicker" title="基本使用" />
                <t-anchor-item href="#MultipleDatePicker" title="多选日期" />
                <t-anchor-item href="#PrefixIconDatePicker" title="前置图标" />
                <t-anchor-item href="#LabelDatePicker" title="文本描述" />
                <t-anchor-item href="#RulesDatePicker" title="表单验证" />
                <t-anchor-item href="#api" title="API" />
                <t-anchor-item href="#slots" title="slots" />
            </t-anchor>
        </div>
    </div>
</template>


<style></style>