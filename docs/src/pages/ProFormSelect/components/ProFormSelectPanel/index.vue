<script setup lang="tsx">
import MarkdownContent from './index.md?raw';
import { MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import { MessagePlugin } from 'tdesign-vue-next';
import { ref } from 'vue';

const data = [{ label: '男', value: '1' }, { label: '女', value: '2' }];

const demoValue = ref('');

const search = ref('');

const onSearch = () => {
    MessagePlugin.success('搜索');
};

function jsxChange(value: string) {
    search.value = value;
}

const panelTopContent = () => <div style="padding: 6px 6px 0 6px">
    <t-textarea value={search.value} placeholder="请输入关键词搜索" onChange={jsxChange} />
</div>

const panelBottomContent = () => <div style="padding: 6px 6px 0 6px">
    <t-button theme="primary" variant="text" block>新增选项</t-button>
</div>

</script>

<template>
    <t-card style="margin-top: 36px;">
        <t-typography-title level="h3"><span id="ProFormSelectPanel">自定义选择器面板</span></t-typography-title>
        <div>
            <ProFormSelect :data v-model="demoValue" label="插槽" name="basic">
                <template #panelTopContent>
                    <div style="padding: 6px 6px 0 6px">
                        <t-textarea v-model="search" placeholder="请输入关键词搜索" @change="onSearch" />
                    </div>
                </template>
            </ProFormSelect>

            <ProFormSelect :panelTopContent :data v-model="demoValue" label="JSX" name="basic">
            </ProFormSelect>

            <ProFormSelect :data v-model="demoValue" label="插槽" name="basic">
                <template #panelBottomContent>
                    <t-button theme="primary" variant="text" block>新增选项</t-button>
                </template>
            </ProFormSelect>

            <ProFormSelect :panelBottomContent :data v-model="demoValue" label="JSX" name="basic">
            </ProFormSelect>
            

            <MdPreview id="pro-form-text-label" v-model="MarkdownContent" :preview="true" />
        </div>
    </t-card>
</template>