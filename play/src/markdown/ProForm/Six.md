```typescript
<script setup lang="ts">
import { ref, watch } from 'vue';
import { ProFormOption, ProFormRef } from 'tdesign-pro-component';

const formRef = ref<ProFormRef>();


const options = ref<ProFormOption[]>([
    {
        name: 'username',
        initalValue: '',
        label: '用户名',
        type: 'text',
        span: 12,
        rules: [
            { required: true, message: '请输入用户名' }
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
            { required: true, message: '请输入密码' }
        ]
    }
]);


function handleSubmit(value) {
    console.log('value', value);
}

const rules = {
    username: [
        {required: true, message: '请输入用户名'}
    ],
    password: [
        {required: true, message: '请输入密码'}
    ],
}

</script>

<template>
    <ProForm :rules ref="formRef" labelAlign="top" :marginY="20" 
        @submit="handleSubmit" :options="options">
        <template #default="{form}">
            <t-form-item label="用户名" name="username">
                <t-input v-model="form.username" placeholder="请输入用户名"></t-input>
            </t-form-item>

            <ProFormText labelAlign="top" type="password" name="password" label="密码" v-model="form.password"></ProFormText>

            <t-form-item>
                <t-space size="small">
                    <t-button theme="primary" type="submit">提交</t-button>
                    <t-button theme="default" variant="base" type="reset">重置</t-button>
                </t-space>
            </t-form-item>
        </template>
    </ProForm>
</template>

<style scoped></style>

```