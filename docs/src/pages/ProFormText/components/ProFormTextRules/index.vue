<script setup lang="ts">
import {ref} from 'vue';
import MarkdownContent from './index.md?raw';
import { MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
const password = ref('');
</script>

<template>
    <t-card style="margin-top: 24px;">
        <t-typography-title level="h3"><span id="ProFormTextRules">表单验证</span></t-typography-title>
        <ProFormText label="密码" :rules="[{required: true, message: '请输入密码'}]" type="password" v-model="password" name="password" placeholder="请输入密码"/>
        <MdPreview id="pro-form-text-password" v-model="MarkdownContent" :preview="true"/>
    </t-card>
</template>