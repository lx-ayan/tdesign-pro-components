<script setup lang="ts">
import {ref} from 'vue';
import MarkdownContent from './index.md?raw';
import { MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
const taste = ref('2');
const themeValue = ref('default')
const themeData = [{label: '默认样式', value: 'default'}, {label: '样式1', value: 'default-filled'}, {label: '样式2', value: 'primary-filled'}]
const data = [{label: '甜的', value: '1'}, {label: '咸的', value: '2'}];
</script>

<template>
    <t-card style="margin-top: 24px;">
        <t-typography-title level="h3"><span id="ButtonRadio">按钮样式</span></t-typography-title>
        <ProFormRadio label="样式" name="style" :data="themeData" v-model="themeValue"></ProFormRadio>
        <ProFormRadio :radio-props="{ variant: themeValue }" theme="button" :data="data" label="豆腐脑吃甜的还是咸的" name="taste" v-model="taste"/>
        <MdPreview id="pro-form-text-password" v-model="MarkdownContent" :preview="true"/>
    </t-card>
</template>