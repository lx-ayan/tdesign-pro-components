<script setup lang="tsx">
import type { ProTableOption } from 'tdesign-pro-component';
import { ref } from 'vue';
import MarkdownContent from './index.md?raw';
import { MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
const options = ref<ProTableOption<any>[]>([
    {
        key: 'id',
        hideInSearch: true,
        title: '编号',
        width: 60
    },
    {
        key: 'username',
        title: '用户名',
        placeholder: "请输入用户名",
    },
    {
        key: 'avatar',
        title: '头像',
        placeholder: "请输入用户名",
        hideInSearch: true,
        render: (row) => <t-avatar image={row.avatar}/>
    },
    {
        key: 'phone',
        title: '手机号',
        placeholder: "请输入手机号",
    },
    {
        key: 'position',
        title: '角色',
        placeholder: "请输入角色",
    },
    {
        key: 'address',
        title: '门店地址',
        width: 400
    },
    {
        key: 'customerCount',
        title: '客户量',
    }
]);

async function request(data: any) {
    const json = (await fetch('https://mock.mengxuegu.com/mock/682e986c916ecd1080a35bf0/tdesign-pro-component/pro-table', {method: 'POST', body: JSON.stringify(data), headers: {'content-type': 'application/json;'}})).json();
    return await json
}
</script>

<template>
    <div>
    <t-typography-title level="h3"><span id="ProTableBasic">基本使用</span></t-typography-title>
        <ProTable :request :options="options"/>
        <MdPreview style="margin-top: 24px;"  id="pro-form-text-password" v-model="MarkdownContent" :preview="true" />
    </div>
</template>


<style>

</style>