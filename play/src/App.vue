<script setup lang="tsx">
import { onMounted, ref } from 'vue';
import { ProTableOption } from 'tdesign-pro-components';
const inputValue = ref('');
const page = ref({pageNum: 1, pageSize: 10})

const options: ProTableOption[] = [
  {
    key: 'id',
    title: '编号',
    hideInSearch: true,
  },
  {
    key: 'title',
    title: '标题',
    render: (data) => {
      console.log(data)
      return <div>自定义渲染 {data.row.title}</div>
    }
  },
  {
    key: 'author',
    title: '作者'
  },
  {
    key: 'steps',
    title: '条件',
    type: 'radio',
    data: [{ label: '近地铁', value: '1' }, { label: '设备齐全', value: '2' }],
  },
  {
    key: 'priceRange',
    title: '接受范围',
    type: 'checkbox',
    span: 9,
    data: [{ label: '1000~2000', value: '1' }, { label: '2000~4000', value: '2' }, { label: '4000~6000', value: '3' }, { label: '6000~1W', value: '4' }]
  }
]

function request() {
  console.log('request');
  return Promise.resolve({
    total: 10,
    list: [{id: 1, title: '标题', author: 'Tom Hardy'}]
  })
}

</script>

<template>
  <div style="background-color: #333; height: 100vh;">
    <ProTable v-model:page="page" :request :options>
      <template #form-title="{form}">
        <ProFormText label="标题" name="title" v-model="form.title"/>
      </template>
    </ProTable>
  </div>

</template>

<style scoped></style>
