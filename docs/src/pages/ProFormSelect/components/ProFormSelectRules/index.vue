<script setup lang="tsx">
import MarkdownContent from './index.md?raw';
import { MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import { ref } from 'vue';


function requestData() {
    return new Promise((resolve) => {
        resolve([{ label: '请求数据1', value: '1' }, { label: '请求数据2', value: '2' }]);
    })
}

const demoValue = ref('');

</script>

<template>
    <t-card style="margin-top: 36px;">
        <t-typography-title level="h3"><span id="ProFormSelectRules">ProFormSelect 表单验证</span></t-typography-title>
        <div>
            <ProFormSelect :rules="[{required: true, message: '请选择'}]" :data="requestData" v-model="demoValue" label="请求函数" name="basic" />
            <MdPreview id="pro-form-text-label" v-model="MarkdownContent" :preview="true" />
        </div>
    </t-card>
</template>