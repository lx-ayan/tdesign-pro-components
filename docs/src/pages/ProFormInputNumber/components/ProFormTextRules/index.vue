<script setup lang="ts">
import {ref} from 'vue';
import MarkdownContent from './index.md?raw';
import { MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
const password = ref<undefined | number>();
</script>

<template>
    <t-card style="margin-top: 24px;">
        <t-typography-title level="h3"><span id="ProFormInputNumberRules">表单验证</span></t-typography-title>
        <ProFormInputNumber label="label" :rules="[{required: true, message: '请输入label'}]" v-model="password" name="password"/>
        <MdPreview id="pro-form-text-password" v-model="MarkdownContent" :preview="true"/>
    </t-card>
</template>