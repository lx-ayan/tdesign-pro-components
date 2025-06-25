<script setup lang="tsx">
import { RouterView, useRouter } from 'vue-router';

const router = useRouter();

function handleClick(key: string) {
  router.push(key);
}

</script>

<template>
  <t-layout style="height: 100vh;">
    <t-aside>
      <t-menu @change="handleClick">
        <t-menu-item value="/"> 快速开始 </t-menu-item>
        <t-menu-group title="表单项组件">
          <t-menu-item value="/pro-form-text"> 输入框 </t-menu-item>
          <t-menu-item value="/pro-form-select"> 选择器 </t-menu-item>
          <t-menu-item value="/pro-form-radio"> 单选框 </t-menu-item>
          <t-menu-item value="/pro-form-checkbox"> 复选框 </t-menu-item>
          <t-menu-item value="/pro-form-date-picker"> 日期选择器 </t-menu-item>
          <t-menu-item value="/pro-form-date-picker-range"> 日期范围选择器 </t-menu-item>
          <t-menu-item value="/pro-form-input-number"> 数字输入框 </t-menu-item>
        </t-menu-group>
        <t-menu-group title="表单组件">
          <t-menu-item value="/pro-form">高级表单</t-menu-item>
          <t-menu-item value="/modal-form">弹窗/抽屉表单</t-menu-item>
        </t-menu-group>
        <t-menu-group title="数据组件">
          <t-menu-item value="/pro-table"> 表格组件 </t-menu-item>
        </t-menu-group>
        <t-menu-group title="布局组件">
          <t-menu-item value="/page-container"> 页面容器 </t-menu-item>
          <t-menu-item value="/row-container"> 行容器 </t-menu-item>
          <t-menu-item value="/pro-layout"> 布局组件 </t-menu-item>
        </t-menu-group>
        <t-menu-group title="操作">
          <t-menu-item value="/pro-button"> 操作按钮 </t-menu-item>
        </t-menu-group>
      </t-menu>
    </t-aside>
    <t-content style="overflow-y: auto;">
      <RouterView />
    </t-content>
  </t-layout>
</template>

<style scoped>
/* span {
  justify-content: end;
} */
</style>
