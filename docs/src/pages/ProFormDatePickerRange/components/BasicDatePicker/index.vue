<script setup lang="ts">
import { ref } from 'vue';
import MarkdownContent from './index.md?raw';
import { MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

const data = ref([])

const clearable = ref(false);

const borderless = ref(false);

const disabled = ref(false);

const readonly = ref(false);

</script>

<template>
    <t-card style="margin-top: 24px;">
        <t-typography-title level="h3"><span id="BasicDatePicker">基本使用</span></t-typography-title>
        <div style="display: flex;">
            <div style="width: 80%">
                <ProFormDatePickerRange v-model="data" :disabled="disabled" :readonly="readonly" :borderless="borderless" :clearable="clearable" name="date" label="日期选择器"></ProFormDatePickerRange>
            </div>
            <div style="flex: 1; padding: 24px">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
                    <div>可清除</div>
                    <t-switch v-model="clearable"></t-switch>
                </div>

                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
                    <div>无边框</div>
                    <t-switch v-model="borderless"></t-switch>
                </div>

                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
                    <div>禁用</div>
                    <t-switch v-model="disabled"></t-switch>
                </div>

                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
                    <div>只读</div>
                    <t-switch v-model="readonly"></t-switch>
                </div>
            </div>
        </div>
        <MdPreview id="pro-form-text-password" v-model="MarkdownContent" :preview="true" />
    </t-card>
</template>