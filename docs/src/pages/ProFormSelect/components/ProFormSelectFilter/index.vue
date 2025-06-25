<script setup lang="tsx">
import type { ParamType } from '@tdesign-pro-component/utils';
import MarkdownContent from './index.md?raw';
import { MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import { ref } from 'vue';
import type { SelectProps } from 'tdesign-vue-next';


const data = async () => await [{ label: '男', value: '1' }, { label: '女', value: '2' }];

function filterFn(search: ParamType<SelectProps['filter']>[0], option: ParamType<SelectProps['filter']>[1]) {
    return option.label.indexOf(search) !== -1;
}

const demoValue = ref('');

</script>

<template>
    <t-card style="margin-top: 36px;">
        <t-typography-title level="h3"><span id="ProFormSelectFilter">可过滤选择器</span></t-typography-title>
        <div>
            <ProFormSelect :data v-model="demoValue" filterable label="普通数组" name="basic" />
            <ProFormSelect :filter="filterFn" filterable :data v-model="demoValue"  label="普通数组" name="basic"/>
            <MdPreview id="pro-form-text-label" v-model="MarkdownContent" :preview="true" />
        </div>
    </t-card>
</template>