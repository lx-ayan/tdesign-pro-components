<script setup lang="tsx">
import { ProLayout } from 'tdesign-pro-component';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();

const headerRender = () => <div style="height: 100%; display: flex; align-items: center; padding: 0 24px;">
  Tdesign-pro-component
</div>

function handleMenuChange(path: string) {
  router.push(path);
}

</script>

<template>
  <ProLayout :headerRender>
    <template #actions>
     <t-head-menu :defaultValue="route.fullPath" @change="handleMenuChange">
      <t-menu-item value="/">首页</t-menu-item>
      <t-menu-item value="/home">文档</t-menu-item>
      <t-menu-item value="/components">组件</t-menu-item>
     </t-head-menu>
    </template>
    <div style="padding: 0 24px;">
      <router-view />
    </div>
  </ProLayout>
</template>

<style>
*::-webkit-scrollbar {
  display: none;
}
</style>
