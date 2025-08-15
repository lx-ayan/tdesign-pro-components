<script setup lang='tsx'>
import ProTable from '../../packages/components/ProTable/ProTable.vue';
import { ProTableOption, ProTableRequest, ProTableResult } from '../../packages/components/ProTable/types';

const options: ProTableOption<{ username: string, sex: string }>[] = [
  {
    key: 'username',
    title: '用户名',
    render: (row) => <div>{row.username}</div>
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
]



function request(data: ProTableRequest<any>): ProTableResult<any> {
  return {
    list: [{ id: 1, username: '1', sex: '1' }],
    total: 10
  };
}

</script>
<template>
  <ProTable :drag-able="true" select-type="multiple" :select-able="true" :request="request" :options="options">

  </ProTable>
</template>