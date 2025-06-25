<script setup lang="tsx">
import { ref } from 'vue';
import MarkdownContent from './index.md?raw';
import { MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
const date= ref([]);

const datePickerLabel = <t-icon name="user"></t-icon>;
</script>

<template>
    <t-card style="margin-top: 24px;">
        <t-typography-title level="h3"><span id="LabelDatePicker">描述文本</span></t-typography-title>
        <ProFormDatePickerRange v-model="date" name="date" datePickerLabel="文本" label="正常使用">
        </ProFormDatePickerRange>
        <ProFormDatePickerRange v-model="date" name="date" label="插槽">
            <template #datePickerLabel>
                插槽
            </template>
        </ProFormDatePickerRange>
        <ProFormDatePickerRange v-model="date" :datePickerLabel="datePickerLabel" name="date" label="jsx">
        </ProFormDatePickerRange>
        <MdPreview id="pro-form-text-password" v-model="MarkdownContent" :preview="true" />
    </t-card>
</template>