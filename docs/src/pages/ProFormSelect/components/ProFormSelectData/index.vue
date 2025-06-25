<script setup lang="tsx">
import MarkdownContent from './index.md?raw';
import { MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import { ref } from 'vue';

const data = [{ label: '男', value: '1' }, { label: '女', value: '2' }];

function requestData() {
    return new Promise((resolve) => {
        resolve([{ label: '请求数据1', value: '1' }, { label: '请求数据2', value: '2' }]);
    })
}

const demoValue = ref('');

</script>

<template>
    <t-card style="margin-top: 36px;">
        <t-typography-title level="h3"><span id="ProFormSelectData">ProFormSelect Data 属性</span></t-typography-title>
        <t-typography-paragraph>
            data 属性支持普通数组和 Promise 函数两种方式，非 promise 函数不生效。
        </t-typography-paragraph>
        <div>
            <t-typography-title level="h4">使用普通数组</t-typography-title>
            <ProFormSelect :data v-model="demoValue" label="普通数组" name="basic" />
            <t-typography-title level="h4">使用请求函数</t-typography-title>
            <ProFormSelect :data="requestData" v-model="demoValue" label="请求函数" name="basic" />
            <MdPreview id="pro-form-text-label" v-model="MarkdownContent" :preview="true" />
        </div>
    </t-card>
</template>