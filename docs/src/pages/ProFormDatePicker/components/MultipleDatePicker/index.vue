<script setup lang="ts">
import { ref } from 'vue';
import MarkdownContent from './index.md?raw';
import { MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
const dates= ref([]);
</script>

<template>
    <t-card style="margin-top: 24px;">
        <t-typography-title level="h3"><span id="MultipleDatePicker">多选日期</span></t-typography-title>
        <ProFormDatePicker v-model="dates" multiple name="date" label="日期选择器"></ProFormDatePicker>
        <MdPreview id="pro-form-text-password" v-model="MarkdownContent" :preview="true" />
    </t-card>
</template>