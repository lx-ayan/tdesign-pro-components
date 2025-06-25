<script setup lang="tsx">
import { ref } from 'vue';
import MarkdownContent from './index.md?raw';
import { MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
const date= ref([]);

const prefixIcon = <t-icon name="user"></t-icon>;
</script>

<template>
    <t-card style="margin-top: 24px;">
        <t-typography-title level="h3"><span id="PrefixIconDatePicker">前置图标</span></t-typography-title>
        <ProFormDatePickerRange v-model="date" name="date" label="插槽">
            <template #prefixIcon>
                <t-icon name="user"></t-icon>
            </template>
        </ProFormDatePickerRange>
        <ProFormDatePickerRange :prefixIcon="prefixIcon" v-model="date" name="date" label="jsx"></ProFormDatePickerRange>
        <MdPreview id="pro-form-text-password" v-model="MarkdownContent" :preview="true" />
    </t-card>
</template>