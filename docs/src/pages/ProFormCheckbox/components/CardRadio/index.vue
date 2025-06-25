<script setup lang="ts">
import {ref} from 'vue';
import MarkdownContent from './index.md?raw';
import { MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
const taste = ref(['2']);
const styleValue = ref<string[]>([]);
const data = [{label: '甜的', value: '1'}, {label: '咸的', value: '2'}]
</script>

<template>
    <t-card style="margin-top: 24px;">
        <t-typography-title level="h3"><span id="TagRadio">标签按钮</span></t-typography-title>
        <t-checkbox-group v-model="styleValue">
            <t-checkbox value="color">字体颜色</t-checkbox>
            <t-checkbox value="fill">背景填充</t-checkbox>
        </t-checkbox-group>
        <ProFormCheckbox :checkboxProps="{updateColor: styleValue.includes('color'), fill: styleValue.includes('fill')}" theme="tag" :data="data" label="豆腐脑吃甜的还是咸的" name="taste" v-model="taste"/>
        <MdPreview id="pro-form-text-password" v-model="MarkdownContent" :preview="true"/>
    </t-card>
</template>