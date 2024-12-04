```typescript
<script setup lang="ts">
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
        key: 'author',
        title: '作者'
    }
];

function request(data: ProTableRequest<any>) {
    return Promise.resolve({
        total: 10,
        list: [{ id: 1, title: '标题1', author: 'Tom Hardy' }, { id: 2, title: '标题2', author: 'Tom Hardy' }, { id: 3, title: '标题3', author: 'Tom Hardy' }, { id: 4, title: '标题4', author: 'Tom Hardy' }, { id: 5, title: '标题', author: 'Tom Hardy' }]
    })
}

</script>

<template>
    <div>
        <ProTable rowKey="id" v-model:page="page" :request :options>
            <template #header>
                <t-tabs :default-value="1">
                    <t-tab-panel :value="1" label="选项卡1">
                    </t-tab-panel>
                    <t-tab-panel :value="2" label="选项卡2">
                    </t-tab-panel>
                    <t-tab-panel :value="3" label="选项卡3">
                    </t-tab-panel>
                </t-tabs>
            </template>
        </ProTable>
    </div>
</template>

<style scoped></style>

```