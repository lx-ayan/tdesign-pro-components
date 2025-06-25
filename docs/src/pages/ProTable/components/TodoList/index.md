```vue
<script setup lang="tsx">
import { type ProTableOption, type ProTableRef } from 'tdesign-pro-component';
import { ref, useTemplateRef } from 'vue';
import { Input, MessagePlugin } from 'tdesign-vue-next';

interface Data {
    id?: number;
    username?: string;
    age?: number | string;
    address?: string;
}

const proTableRef = useTemplateRef<ProTableRef>('proTableRef')

const options = ref<ProTableOption<Data>[]>([
    {
        key: 'id',
        hideInSearch: true,
        hideInTable: true,
        title: '编号',
        width: 60
    },
    {
        key: 'username',
        title: '用户名',
        placeholder: "请输入用户名",
        edit: {
            component: Input
        }
    },
    {
        key: 'age',
        title: '年龄',
        edit: {
            component: Input
        }
    },
    {
        key: 'address',
        title: '住址',
        edit: {
            component: Input
        }
    },
    {
        key: 'actions',
        title: '操作',
        render: (_, rowIndex) => {
            return <t-space>
                <t-link hover="color" onClick={() => MessagePlugin.success('修改成功')} theme="primary">修改</t-link>
                <t-link hover="color" onClick={() => {
                    const tableData = proTableRef.value?.getTableData()    
                    tableData?.value.splice(rowIndex!, 1);
                }} theme="danger">删除</t-link>
            </t-space>
        }
    }
]);

async function request(data: any) {
    return {
        success: true,
        list: []
    }
}

function handleClick() {
    const tableData = proTableRef.value?.getTableData();
    tableData?.value.push({
        id: Math.random(),
        username: '我是帅哥',
        age: 18,
        address: '安徽省淮北市'
    })
}

</script>

<template>
    <div>
        <ProTable editAble hideForm hideFooter ref="proTableRef" :request :options="options">
            <template #footerActions>
                <div style="margin-top: 32px;">
                    <t-button @click="handleClick" block theme="default" variant="dashed">
                        <template #icon><t-icon name="add"></t-icon></template>
                        添加一条数据
                    </t-button>
                </div>
            </template>
        </ProTable>
    </div>
</template>
```