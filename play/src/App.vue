<script setup lang="ts">
import { onMounted, ref } from 'vue';
const form = ref({
  school: '',
  name: '',
  sex: '',
  likes: [],
  createtime: '',
  count: 100
});

const iptRef = ref();

onMounted(() => {
  // iptRef.value.focus();
})

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
    <ProFormInput v-model="form.name" name="name" label="姓名">

    </ProFormInput>
    <ProFormSelect :data="requestData" v-model="form.school" name="school" label="学校">

    </ProFormSelect>

    <ProFormRadio v-model="form.sex" :data="requestSexData" label="性别" name="sex" />

    <ProFormCheckbox name="likes" label="喜好" :data="requestSexData" v-model="form.likes" />

    <ProFormDatepicker  name="createtime" label="发布时间" v-model="form.createtime">

    </ProFormDatepicker>

    <ProFormInputNumber ref="iptRef" autoWidth label="库存" name="count" v-model="form.count" />

  </t-form>
</template>

<style scoped>
</style>
