<script setup lang="ts">
import { ref } from 'vue';
import { ProFormOption, ProFormRef } from 'tdesign-pro-component';

const proFormRef = ref<ProFormRef>();

const options = ref<ProFormOption[]>([
    {
        name: 'username',
        initalValue: '',
        label: '用户名',
        type: 'text',
        span: 12,
        rules: [
            {required: true, message: '请输入用户名'}
        ]
    },
    {
        name: 'password',
        label: '密码',
        type: 'text',
        span: 12,
        textProps: {
            type: 'password',
        },
        rules: [
            {required: true, message: '请输入密码'}
        ]
    }
]);

function handleSubmit(value) {
    console.log('value', value);
}

function handleSet() {
    proFormRef.value?.setItem('username', 'hello hello')
}
</script>

<template>
    <ProForm ref="proFormRef" labelAlign="top" :marginY="20" @submit="handleSubmit" :options="options">
        <template #extra>
            <t-button @click="handleSet" style="margin-left: 12px;">手动设置用户名</t-button>
        </template>
    </ProForm>
</template>

<style scoped></style>
