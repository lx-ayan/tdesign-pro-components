<script setup lang="ts">
import { ref } from 'vue';

const data = [{label: '淮北职业技术学院', value: '1'}, {label: '淮北师范大学', value: '2'}]

const modelValue = ref('1');
</script>

<template>
  <h1>登记信息</h1>
  <t-button>Hello</t-button>
  <ProFormSelect multiple v-model="modelValue" :data name="school" label="学校"/>
</template>

<style scoped>

</style>
