<script setup lang="tsx">
import MarkdownContent from './index.md?raw';
import { MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import type { OptionData } from 'tdesign-vue-next';
import { ref } from 'vue';

const data = [{ label: '男', value: '1' }, { label: '女', value: '2', render: (current: OptionData) => <span style={{ color: 'orange' }}>{current.label}</span> }];

const demoValue = ref('');

</script>

<template>
    <t-card style="margin-top: 36px;">
        <t-typography-title level="h3"><span id="ProFormSelectDataSetting">ProFormSelect Data
                自定义渲染</span></t-typography-title>
        <t-typography-paragraph>
            自定义渲染支持两种方式，第一种 render 函数，第二种插槽。
        </t-typography-paragraph>
        <div>
            <t-typography-title level="h4">render 函数</t-typography-title>
            <ProFormSelect :data v-model="demoValue" label="render 函数" name="basic" />

            <t-typography-title level="h4">插槽</t-typography-title>
            <t-typography-paragraph>
                插槽是使用动态插槽形式进行处理，所以需要按照规定的规则来使用，使用方式 <t-typography-text code>
                    option-{item.value}
                </t-typography-text>
            </t-typography-paragraph>
            <ProFormSelect :data v-model="demoValue" label="插槽" name="basic">
                <template #option-1="{ option }">
                    <span style="color: blue;">{{ option.label }}</span>
                </template>
            </ProFormSelect>
            <MdPreview id="pro-form-text-label" v-model="MarkdownContent" :preview="true" />
        </div>
    </t-card>
</template>