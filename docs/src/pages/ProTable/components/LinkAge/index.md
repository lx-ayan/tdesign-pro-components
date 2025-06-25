```vue
<script setup lang="tsx">
import { ProFormRadio, type ProTableOption, type ProTableRef } from 'tdesign-pro-component';
import { computed, ref, useTemplateRef } from 'vue';
const selectData = ref<number[]>([]);

const proTableRef = useTemplateRef<ProTableRef>('proTableRef')

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
        render: ({row}) => <t-avatar image={row.avatar}/>
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

// 可以通过请求获取你想要的数据
const currentData = computed(() => {
    return proTableRef.value?.getTableData().value.filter(item => selectData.value.includes(item.id)).map(item => ({
        ...item,
        render: () => <div style="padding: 4px 8px">
            <t-avatar image={item.avatar}></t-avatar> <span style="margin-left:8px;">{item.username}</span>（{item.phone}）
        </div>
    }));
})

</script>

<template>
    <ProTable ref="proTableRef" v-model:selectData="selectData" selectAble selectType="multiple" :request :options="options">
            <template v-if="currentData?.length" #dataActions>
                <div class="user-card">
                    <ProFormRadio gap="12" :radio-props="{gap: '12px'}" theme="tag" vertical="col" name="user" :data="currentData" labelName="username" value-name="id">
                        
                    </ProFormRadio>
                </div>
            </template>
        </ProTable>
</template>


<style>
.user-card {
    height: 620px;
    overflow-y: auto;
    width: 320px;
    margin-left: 24px;
}


</style>
```