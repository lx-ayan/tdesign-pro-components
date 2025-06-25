<script setup lang="tsx">
import { ref } from 'vue';
import type { ProFormOption } from 'tdesign-pro-component';
import MarkdownContent from './index.md?raw';
import { MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

const proFormRef = ref();

const options = ref<ProFormOption[]>([
    {
        name: 'username',
        label: '用户名',
        type: 'text',
        span: 12,
        rules: [{ required: true, message: '请输入用户名' }]
    },
    {
        name: 'password',
        label: '密码',
        type: 'text',
        textProps: {
            type: 'password',
        },
        span: 12,
        rules: [{ required: true, message: '请输入密码' }]
    }
]);

async function handleSubmit(data: any) {
    console.log('data', data);
    return true
}

const action = {
    submit: () => {
        proFormRef.value.validate().then(() => {
            proFormRef.value.submit()
        })
    },
    reset: () => {
        proFormRef.value.reset()
    },
    validate: () => {
        proFormRef.value.validate()
    }
}

</script>

<template>
    <t-typography-title level="h3"><span id="ProFormSettingSubmit">自定义提交</span></t-typography-title>

    <t-card title="登录表单">
        <ProForm ref="proFormRef" @submit="handleSubmit" :options="options">
            <template #footer>
                <t-space>
                    <t-button @click="action.submit">提交</t-button>
                    <t-button @click="action.reset">重置</t-button>
                    <t-button @click="action.validate">校验</t-button>
                </t-space>
            </template>
        </ProForm>
        <MdPreview style="margin-top: 24px;"  id="pro-form-text-password" v-model="MarkdownContent" :preview="true" />
    </t-card>
</template>
