<script setup lang="ts">
import {ref} from 'vue';
import MarkdownContent from './index.md?raw';
import { MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
const taste = ref(['2']);
const data = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([{label: '甜的', value: '1'}, {label: '咸的', value: '2'}])
        }, 2000)
    })
}
</script>

<template>
    <t-card style="margin-top: 24px;">
        <t-typography-title level="h3"><span id="RequestData">请求数据</span></t-typography-title>
        <ProFormCheckbox :data="data" label="豆腐脑吃甜的还是咸的" name="taste" v-model="taste"/>
        <MdPreview id="pro-form-text-password" v-model="MarkdownContent" :preview="true"/>
    </t-card>
</template>