```vue
<script setup lang="tsx">
import { ref } from 'vue';
import { ProFormOption } from 'tdesign-pro-component';

const dataList = [
    {id: 1, username: 'admin', password: '123456'},
    {id: 2, username: 'user', password: '123456'}
];

let userId = 1;

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

async function request() {
    return dataList.find(item => item.id == userId)
}

function getData() {
    userId = userId == 1? 2: 1;
    proFormRef.value.resetRequest();
}

</script>

<template>
    <t-card title="登录表单">
        <ProForm ref="proFormRef" :request @submit="handleSubmit" :options="options">
            <template #extral>
                <t-button @click="getData" theme="success">获取数据</t-button>
            </template>
        </ProForm>
    </t-card>
</template>

```
