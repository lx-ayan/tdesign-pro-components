<script setup lang="tsx">
import MarkdownContent from './index.md?raw';
import { MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import { Icon, MessagePlugin } from 'tdesign-vue-next';
const suffixIcon = () => <Icon style={{ cursor: 'pointer' }} onClick={handleClick} name="search"></Icon>;
const prepend = 'https://';
const append = <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', border: '1px solid #ddd'}}>.com</div>

function handleClick() {
    MessagePlugin.success('搜索')
}
</script>

<template>
    <t-card style="margin-top: 24px;">
        <t-typography-title level="h3"><span id="ProFormInputNumberDecorator">表单装饰器</span></t-typography-title>
        <ProFormInputNumber inputLabel="价格" suffix="$" name="password1" />
        <ProFormInputNumber :suffixIcon="suffixIcon" name="password2" />
        <ProFormInputNumber :prepend="prepend" :append="append" name="password3" />
        <MdPreview id="pro-form-text-password" v-model="MarkdownContent" :preview="true"/>
    </t-card>
</template>