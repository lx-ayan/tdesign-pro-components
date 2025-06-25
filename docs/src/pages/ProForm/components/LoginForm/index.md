```vue
<script setup lang="tsx">
import { ref } from 'vue';
import { ProFormOption } from 'tdesign-pro-component';
const options = ref<ProFormOption[]>([
    {
        name: 'username',
        label: '用户名',
        type: 'text',
        span: 12,
        rules: [{required: true, message: '请输入用户名'}]
    },
    {
        name: 'password',
        label: '密码',
        type: 'text',
        textProps: {
            type: 'password',
        },
        span: 12,
        rules: [{required: true, message: '请输入密码'}]
    }
]);

async function handleSubmit(data: any) {
    console.log('data', data);
    return true
}

</script>

<template>
    <t-card title="登录表单">
        <ProForm @submit="handleSubmit" :options="options">

        </ProForm>
    </t-card>
</template>

```
