<script setup lang='tsx'>
import { Input } from 'tdesign-vue-next';
import ProTable from '../../packages/components/ProTable/ProTable.vue';
import { ProTableOption, ProTableRequest, ProTableResult } from '../../packages/components/ProTable/types';
import { ref } from 'vue';

const dataSource = ref<{username: string, sex: any}[]>([]);

const options: ProTableOption<{ username: string, sex: string }>[] = [
  {
    key: 'username',
    title: '用户名',
    edit: {
      component: Input,
    }
  },
  {
    key: 'sex',
    title: '性别',
    type: 'select',
    data: [
      { label: '男', value: '1' },
      { label: '女', value: '2' }
    ]
  },
  {
    key: 'sex2',
    title: '性别',
    type: 'select',
    data: [
      { label: '男', value: '1' },
      { label: '女', value: '2' }
    ]
  },
  {
    key: 'sex3',
    title: '性别',
    type: 'select',
    data: [
      { label: '男', value: '1' },
      { label: '女', value: '2' }
    ]
  },
  {
    key: 'sex4',
    title: '性别',
    type: 'select',
    data: [
      { label: '男', value: '1' },
      { label: '女', value: '2' }
    ]
  },
  {
    key: 'sex5',
    title: '性别',
    type: 'select',
    data: [
      { label: '男', value: '1' },
      { label: '女', value: '2' }
    ]
  }
];

const selectData = ref({});

function request(data: ProTableRequest<any>): ProTableResult<any> {
  return {
    list: [{ id: 1, username: '1', sex: '1' }, { id: 2, username: '2', sex: '2' }],
    total: 10
  };
}

</script>
<template>
  {{ selectData }}
  <ProTable v-model:select-data="selectData" v-model:data-source="dataSource" :drag-able="true" select-type="multiple" :select-able="true" :request="request" :options="options">
    <template #username="{row}">
        {{ row.username }}
    </template>
  </ProTable>
</template>