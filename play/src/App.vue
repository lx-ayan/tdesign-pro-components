<script setup lang="tsx">
import { onMounted, ref } from 'vue';
import { ProTableOption } from 'tdesign-pro-components';
const inputValue = ref('');
const options: ProTableOption[] = [
  {
    key: 'id',
    title: '编号',
  },
  {
    key: 'title',
    title: '标题',
    render: ({row}) => <div>自定义渲染 {row.title}</div>
  },
  {
    key: 'author',
    title: () => <div>'作者'</div>,
    placeholder: '请输入作者'
  },
  {
    key: 'steps',
    title: '条件',
    type: 'radio',
    data: [{ label: '近地铁', value: '1' }, { label: '设备齐全', value: '2' }],
    span: 3
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

}

</script>

<template>
  <div style="background-color: #333; height: 100vh;">
    <ProTable :request :options>

    </ProTable>
  </div>

</template>

<style scoped></style>
