<script setup lang="ts">
import { onMounted, ref } from 'vue';
const form = ref({
  school: '',
  name: '',
  sex: '',
  likes: [],
  createtime: '',
  count: 100,
  description: '',
  address: ''
});

const iptRef = ref();

const data = [{
  label: '广东省',
  valueName: 'guangdong',
  children: [{
    label: '广州市',
    valueName: 'guangzhou',
  }, {
    label: '深圳市',
    valueName: 'shenzhen',
  }],
}, {
  label: '江苏省',
  valueName: 'jiangsu',
  children: [{
    label: '南京市',
    valueName: 'nanjing',
  }, {
    label: '苏州市',
    valueName: 'suzhou',
  }],
}]

function requestData() {
  return Promise.resolve([
    {
      group: '分组一',
      children: [
        { label: '选项一', value: 1 },
        { label: '选项二', value: 2 },
      ],
    },
    {
      group: '分组二',
      children: [
        { label: '选项三', value: 4 },
        { label: '选项四', value: 5 },
        { label: '选项五', value: 6 },
      ],
    },
    {
      group: '分组三',
      divider: true,
      children: [
        { label: '选项六', value: 7 },
        { label: '选项七', value: 8 },
        { label: '选项八', value: 9 },
      ],
    },
  ])
}

function requestSexData() {
  return Promise.resolve([{ label: '男', value: '1' }, { label: '女', value: '2' }])
}
</script>

<template>
  <h1>登记信息</h1>
  <t-form>
    <ProFormText v-model="form.name" name="name" label="姓名">

    </ProFormText>
    <ProFormSelect :data="requestData" v-model="form.school" name="school" label="学校">

    </ProFormSelect>

    <ProFormRadio v-model="form.sex" :data="requestSexData" label="性别" name="sex" />

    <ProFormCheckbox name="likes" label="喜好" :data="requestSexData" v-model="form.likes" />

    <ProFormDatepicker name="createtime" label="发布时间" v-model="form.createtime">

    </ProFormDatepicker>

    <ProFormInputNumber autoWidth label="库存" name="count" v-model="form.count" />

    <ProFormTextarea ref="iptRef" label="描述" name="description" v-model="form.description" />

    <ProFormTreeSelect valueName="valueName" :data label="地区" name="address" v-model="form.address" />
  </t-form>
</template>

<style scoped></style>
