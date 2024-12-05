```typescript
<script setup lang="ts">
import { ref } from 'vue';
import { ProFormOption } from 'tdesign-pro-component';
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

function request() {
    return Promise.resolve({
        password: '',
        username: 'requestAdmin'
    })
}
</script>

<template>
    <ProForm labelAlign="top" :marginY="20" @submit="handleSubmit" :options="options">
        <template #form-username="{form, rules, name}">
            <ProFormText label="用户名" :rules v-model="form.username" name="username">
                <template #prefixIcon>
                    <div>user:</div>
                </template>
            </ProFormText>
        </template>
    </ProForm>
</template>

<style scoped></style>

```