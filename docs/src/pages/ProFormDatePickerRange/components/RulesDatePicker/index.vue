<script setup lang="tsx">
import { ref } from 'vue';
import MarkdownContent from './index.md?raw';
import { MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
const date = ref([]);

const rules = [
    {required: true, message: '请选择日期', trigger: 'blur'}
]
</script>

<template>
    <t-card style="margin-top: 24px;">
        <t-typography-title level="h3"><span id="RulesDatePicker">表单验证</span></t-typography-title>
        <t-form>
            <ProFormDatePickerRange :rules="rules" v-model="date" name="date" label="表单验证"></ProFormDatePickerRange>
            <t-button type="submit">提交</t-button>
        </t-form>
        <MdPreview id="pro-form-text-password" v-model="MarkdownContent" :preview="true" />
    </t-card>
</template>