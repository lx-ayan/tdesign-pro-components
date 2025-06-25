<script setup lang="tsx">
import { ref } from 'vue';
import { type ProFormOption } from 'tdesign-pro-component';
import MarkdownContent from './index.md?raw';
import { MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

interface LoginRequest {
    username: string;
    password: string
}

const options = ref<ProFormOption<LoginRequest>[]>([
    {
        name: 'username',
        label: '用户名',
        type: 'text',
        span: 6,
        rules: [{ required: true, message: '请输入用户名' }]
    },
    {
        name: 'password',
        label: '密码',
        type: 'text',
        textProps: {
            type: 'password',
        },
        span: 6,
        rules: [{ required: true, message: '请输入密码' }]
    }
]);

async function handleSubmit(data: LoginRequest) {
    console.log('data', data);
    return true
}

</script>

<template>
    <t-typography-title level="h3"><span id="ProFormBasic">基本使用</span></t-typography-title>

    <t-card title="登录表单">
        <ProForm labelAlign="top" disabled @submit="handleSubmit" :options="options">

        </ProForm>
        <MdPreview style="margin-top: 24px;"  id="pro-form-text-password" v-model="MarkdownContent" :preview="true" />
    </t-card>
</template>
