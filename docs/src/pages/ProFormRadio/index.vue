<script setup lang="tsx">
import BasicRadio from './components/BasicRadio/index.vue'
import RequestData from './components/RequestData/index.vue'
import ButtonRadio from './components/ButtonRadio/index.vue'
import CardRadio from './components/CardRadio/index.vue'
import ColumRenderRadio from './components/ColumRenderRadio/index.vue'
import ApiTable from '../../components/ApiTable/index.vue';
import SlotTable from '../../components/SlotTable/index.vue';
import TypeTable from '../../components/TypeTable/index.vue';
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
        type: <span>String</span>,
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
        name: 'theme',
        type: <span>String, <CodeContainer>TS: 'default' | 'button' | 'tag'</CodeContainer></span>,
        defaultValue: 'default',
        description: '单选呈现形式，可选默认，按钮，标签',
        required: 'N'
    },
    {
        name: 'direction',
        type: <span>String, <CodeContainer>TS: 'vertical' | 'horizontal'</CodeContainer></span>,
        defaultValue: 'horizontal',
        description: '布局形式，注意：纵向布局按钮不生效',
        required: 'N'
    },
    {
        name: 'loadingText',
        type: 'String, slot, Function',
        defaultValue: '数据加载中，请稍后...',
        required: 'N',
        description: 'data 为请求时，数据加载提示'
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
        name: 'radioProps',
        type: <span>Object, <CodeContainer>TS: RadioProps | TagRadioProps</CodeContainer></span>,
        description: <span>单选按钮其他属性，<MyLink href="https://tdesign.tencent.com/vue-next/components/radio?tab=api#radio-props">详细使用</MyLink></span>,
        required: 'N',
        defaultValue: '-'
    }
];

const typeData = [
    {
        name: 'direction',
        description: '选项布局',
        type:<span>String, <CodeContainer>TS: vertical | horizontal </CodeContainer></span>
    },
    {
        name: 'gap',
        type: 'String',
        description: '间隙，注意：横向布局只控制 margin-right, 纵向布局控制 margin-bottom'
    },
    {
        name: 'fill',
        type: 'Boolean',
        description: '选中时是否开启背景填充'
    },
    {
        name: 'updateColor',
        type: 'Boolean',
        description: '选中时是否开启文字颜色填充'
    }
]

const slotData = [
    {
        name: <span>option-<CodeContainer>{'{name}'}</CodeContainer></span>,
        description: '每一项配置的插槽，参数：当前数据 {option}'
    },
    {
        name: <span>label</span>,
        description: '表单描述项'
    },
    {
        name: <span>loadingText</span>,
        description: '加载提示内容'
    }
]

</script>

<template>
    <div style="padding: 0 20px; padding-bottom: 80px;">
        <t-typography-title>ProFormRadio 表单单选框</t-typography-title>
        <t-typography-paragraph>
            <t-typography-text code>
                ProFormRadio
            </t-typography-text> 由 FormItem 和 Radio 组合而成，将两者功能结合成一个组件，同时具备原有 TDesign 的 FormItem 和 radio 功能，简化 t-form
            中多余的代码
        </t-typography-paragraph>
        <t-typography-paragraph>
            <t-typography-text strong>
                这里就不展示 label 用法了，label 用法请查看 <t-typography-text code>
                    ProFormText
                </t-typography-text>
                <t-typography-text code>
                    ProFormSelect
                </t-typography-text>
            </t-typography-text>
        </t-typography-paragraph>
        <BasicRadio />
        <RequestData />
        <ButtonRadio />
        <CardRadio />
        <ColumRenderRadio />
        <ApiTable :data="dataSource" />
        <SlotTable :data="slotData"/>
        <TypeTable id="TagRadioProps" title="TagRadioProps" :data="typeData"/>
        <div style="position: fixed; top: 320px; right: 20px;">
            <t-anchor>
                <t-anchor-item href="#BasicRadio" title="基本使用" />
                <t-anchor-item href="#RequestData" title="请求数据" />
                <t-anchor-item href="#ButtonRadio" title="按钮样式" />
                <t-anchor-item href="#TagRadio" title="标签样式" />
                <t-anchor-item href="#ColumnRender" title="自定义渲染（纵向布局）" />
                <t-anchor-item href="#api" title="API" />
                <t-anchor-item href="#slots" title="slots" />
                <t-anchor-item href="#TagRadioProps" title="TagRadioProps" />
            </t-anchor>
        </div>
    </div>
</template>