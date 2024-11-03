<script setup lang="ts">
import { ref } from 'vue';
const form = ref({
  school: '',
  name: ''
});

function requestData() {
  return Promise.resolve([
    { label: '淮北职业技术学院', value: '1' },
    { label: '淮北师范大学', value: '2' },
    { label: '淮北卫生学校', value: '3' },
  ])
}
</script>

<template>
  <h1>登记信息</h1>
  <t-button>Hello</t-button>
  <t-form>
    <ProFormInput v-model="form.name" name="name" label="姓名">

    </ProFormInput>
    <ProFormSelect :data="requestData" v-model="form.school" name="school" label="学校" />
  </t-form>
</template>

<style scoped></style>
