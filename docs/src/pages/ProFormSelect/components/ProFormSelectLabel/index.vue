<script setup lang="tsx">
import MarkdownContent from './index.md?raw';
import { MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import { ref } from 'vue';

const data = [{ label: '男', value: '1' }, { label: '女', value: '2' }];

const LabelJSX = <span>JSX Label </span>;

const LabelJSXFunction = () => <span>JSX Function </span>;

const demoValue = ref('');

</script>

<template>
    <t-card>
        <t-typography-title level="h3"><span id="ProFormSelectLabel">ProFormSelect Label 属性</span></t-typography-title>
        <div>
            <ProFormSelect :data v-model="demoValue" label="正常使用" name="basic" />
            <ProFormSelect :data v-model="demoValue" :label="LabelJSX" name="JSX Label" />
            <ProFormSelect :data v-model="demoValue" :label="LabelJSXFunction" name="JSX Label Function" />
            <ProFormSelect :data v-model="demoValue" name="slot label">
                <template #label>
                    <span>插槽 label</span>
                </template>
            </ProFormSelect>
            <MdPreview id="pro-form-text-label" v-model="MarkdownContent" :preview="true" />
        </div>
    </t-card>
</template>