<script setup lang="tsx">
import { ref } from 'vue';
import { ProTableOption, ProTableRequest } from 'tdesign-pro-component';
const page = ref({ pageNum: 1, pageSize: 10 });

const options: ProTableOption[] = [
    {
        key: 'id',
        title: '编号',
        hideInSearch: true,
    },
    {
        key: 'title',
        title: '标题',

    },
    {
        key: 'image',
        title: '图片',
        render: ({row}) => <img style="height: 80px" src={row.image} />
    }
];

function request(data: ProTableRequest<any>) {
    console.log('request', data);
    return Promise.resolve({
        total: 10,
        list: [
            { id: 1, title: '标题1', image: 'https://plus.unsplash.com/premium_photo-1661715304145-e686bb947289?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }, 
            { id: 2, title: '标题2', image: 'https://images.unsplash.com/photo-1516279232585-44b3f7e8bad4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }, 
            { id: 3, title: '标题3', image: 'https://images.unsplash.com/photo-1477847616630-cf9cf8815fda?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }, 
            { id: 4, title: '标题4', image: 'https://images.unsplash.com/photo-1485797460056-2310c82d1213?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }, 
            { id: 5, title: '标题', image: 'https://images.unsplash.com/photo-1605116188625-8522bf02d10f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }]
    })
}

</script>

<template>
    <div>
        <ProTable rowKey="id" v-model:page="page" :request :options>
            </ProTable>
    </div>
</template>