<script setup lang='ts'>
import One from './One.vue';
//@ts-ignore
import OneMarkdown from '../../../markdown/DrawerForm/One.md?raw';

import Two from './Two.vue';
//@ts-ignore
import TwoMarkdown from '../../../markdown/DrawerForm/Two.md?raw';
import Three from './Three.vue';
//@ts-ignore
import ThreeMarkdown from '../../../markdown/DrawerForm/Three.md?raw';

import Four from './Four.vue';
//@ts-ignore
import FourMarkdown from '../../../markdown/DrawerForm/Four.md?raw';

import Five from './Five.vue';
//@ts-ignore
import FiveMarkdown from '../../../markdown/DrawerForm/Five.md?raw';
</script>

<template>
    <div>
        <t-typography-title level="h3"><span id="one">基本使用</span></t-typography-title>
        <One />
        <MdPreview :modelValue="OneMarkdown"></MdPreview>

        <t-typography-title level="h3"><span id="two">提交后自动关闭</span></t-typography-title>
        <t-typography-paragraph>
            <t-typography-text>
                提交后自动关闭配置 autoClose 属性为 true 即可，该属性配置后会把 loading ，关闭逻辑自动处理。
            </t-typography-text>
        </t-typography-paragraph>
        <Two />
        <MdPreview :modelValue="TwoMarkdown"></MdPreview>

        <t-typography-title level="h3"><span id="three">表单弹窗提示</span></t-typography-title>
        <t-typography-paragraph>
            <t-typography-text>
                表单提交验证错误时会有弹窗进行提示，通过 enableTip 为 true 可以开启，tipTheme 属性控制弹窗主题如警告、错误等。这里提示内容为 rules 中的信息，切为错误的第一条提示。
            </t-typography-text>
        </t-typography-paragraph>
        <Three />
        <MdPreview :modelValue="ThreeMarkdown"></MdPreview>

        <t-typography-title level="h3"><span id="four">请求数据</span></t-typography-title>
        <t-typography-paragraph>
            <t-typography-text>
                通过 request 函数获取数据。
            </t-typography-text>
        </t-typography-paragraph>
        <Four />
        <MdPreview :modelValue="FourMarkdown"></MdPreview>
        <t-typography-title level="h3"><span id="four">自定义底部（手动提交）</span></t-typography-title>
        <t-typography-paragraph>
            <t-typography-text>
                通过 DrawerForm 实例,手动提交。手动提交时会触发 submit 方法，所以 @submit 不可少。
            </t-typography-text>
        </t-typography-paragraph>
        <Five />
        <MdPreview :modelValue="FiveMarkdown"></MdPreview>
        
    </div>
</template>

<style lang='scss'></style>