```vue
<script setup lang="tsx">
import { ProFormBuilder } from 'tdesign-pro-component';
const MyProForm = ProFormBuilder.builder().options([{
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
    }]).request(() => Promise.resolve({username: 'admin', password: '123456'})).submit((data) => {
        return Promise.resolve(true)
    }).build();

</script>

<template>
    <t-card title="构建者模式">
        <MyProForm />
    </t-card>
</template>

```