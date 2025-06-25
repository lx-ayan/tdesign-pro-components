<script setup lang="tsx">
import { ProFormBuilder } from 'tdesign-pro-component';
import MarkdownContent from './index.md?raw';
import { MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
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
        //@ts-ignore
    }]).request(() => Promise.resolve({username: 'admin', password: '123456'})).submit((data) => {
        return Promise.resolve(true)
    }).build();

</script>

<template>
    <t-typography-title level="h3"><span id="ProFormBuilder">构建者模式创建表单（实验性质，后续不确定是否删除）</span></t-typography-title>
    <span >这种方式可以抽离出一些业务逻辑，构建好表单之后单独引入使用，需要注意这种方式对双向数据绑定以及联动表单不太友好，如果需要联动这种方式可以不用考虑。</span>
    <t-card style="margin-top: 24px;" title="构建者模式">
        <MyProForm />
        <MdPreview style="margin-top: 24px;" id="pro-form-text-password" v-model="MarkdownContent" :preview="true" />
    </t-card>
</template>
