<script setup lang="tsx">
import MarkdownContent from './Label.md?raw';
import { MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import { ref } from 'vue';
const LabelJSX = <span>JSX Label </span>;

const LabelJSXFunction = () => <span>JSX Function </span>;

const demoValue= ref();

</script>

<template>
    <t-card>
        <t-typography-title level="h3"><span id="ProFormLabel">ProFormInputNumber Label 属性</span></t-typography-title>
        <div>
            <ProFormInputNumber v-model="demoValue" label="正常使用" name="basic"/>
            <ProFormInputNumber v-model="demoValue" :label="LabelJSX" name="JSX Label"/>
            <ProFormInputNumber v-model="demoValue" :label="LabelJSXFunction" name="JSX Label Function" />
            <ProFormInputNumber v-model="demoValue" name="slot label">
                <template #label>
                    <span>插槽 label</span>
                </template>
            </ProFormInputNumber>
            <MdPreview id="pro-form-text-label" v-model="MarkdownContent" :preview="true"/>
        </div>
    </t-card>
</template>