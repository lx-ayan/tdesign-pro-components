<script setup lang="ts">
import { ref } from 'vue';
import type { ProTableOption, ProTableRequest, ProTableResult } from 'tdesign-pro-component';
import { ProTable } from 'tdesign-pro-component';
const page = ref({ pageNum: 1, pageSize: 10, total: 10 });

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
        key: 'author',
        title: '作者'
    }
];

function request(data: ProTableRequest<any>) {
    return Promise.resolve({
        total: 10,
        list: [{ id: 1, title: '标题1', author: 'Tom Hardy' }, { id: 2, title: '标题2', author: 'Tom Hardy' }, { id: 3, title: '标题3', author: 'Tom Hardy' }, { id: 4, title: '标题4', author: 'Tom Hardy' }, { id: 5, title: '标题', author: 'Tom Hardy' }]
    } as ProTableResult)
}
</script>

<template>
    <div>
        <div>
            <ProTable  rowKey="id"  :request :options>
            </ProTable>
        </div>
    </div>
</template>

<style scoped></style>
