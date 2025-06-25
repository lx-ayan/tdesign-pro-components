```vue
<script setup lang="tsx">
import type { ProTableOption } from 'tdesign-pro-component';
import { ref } from 'vue';
const mode = ref('none');
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
        <ProTable :request :options="options">
            <template #actions>
                <ProFormRadio v-model="mode"  name="position"
                        :data="[{ label: '自定义', value: 'card' }, { label: '表格', value: 'none' }]">

                    </ProFormRadio>
            </template>
            <template v-if="mode == 'card'" #card="{list}">
                <div v-for="item in list" :key="item.id">
                    自定渲染，这里可根据您的业务您自己渲染 {{ item }}
                </div>
            </template>
            <template #table-username="{row}">
                {{ row.username }} 自定义渲染
            </template>
        </ProTable>
    </div>
</template>


<style>

</style>

```