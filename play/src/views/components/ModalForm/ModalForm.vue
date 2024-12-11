<script setup lang='ts'>
import One from './One.vue';
//@ts-ignore
import OneMarkdown from '../../../markdown/ModalForm/One.md?raw';

import Two from './Two.vue';

import Three from './Three.vue';
</script>

<template>
    <div>
        <t-typography-title level="h3"><span id="basicTable">基本使用</span></t-typography-title>
        <One />
        <MdPreview :modelValue="OneMarkdown"></MdPreview>

        <t-typography-title level="h3"><span id="basicTable">提交后自动关闭</span></t-typography-title>
        <t-typography-paragraph>
            <t-typography-text>
                提交后自动关闭配置 autoClose 属性为 true 即可，该属性配置后会把 loading ，关闭逻辑自动处理。
            </t-typography-text>
        </t-typography-paragraph>
        <Two />

        <t-typography-title level="h3"><span id="basicTable">表单弹窗提示</span></t-typography-title>
        <t-typography-paragraph>
            <t-typography-text>
                表单提交验证错误时会有弹窗进行提示，通过 enableTip 为 true 可以开启，tipTheme 属性控制弹窗主题如警告、错误等。这里提示内容为 rules 中的信息，切为错误的第一条提示。
            </t-typography-text>
        </t-typography-paragraph>
        <Three />

    </div>
</template>

<style lang='scss'></style>