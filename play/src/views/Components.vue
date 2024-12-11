<script setup lang='ts'>
import {useRouter, useRoute} from 'vue-router';
const router = useRouter();
const route = useRoute();
function changeHandler(path: string) {
    router.push(path);
}
</script>

<template>
    <div>
        <t-row>
            <t-col :span="2">
                <div style="margin-top: 24px">
                    <t-menu  @change="changeHandler" :default-value="route.fullPath">
                        <t-menu-item key="/pro-table" value="/pro-table">ProTable 表格组件</t-menu-item>
                        <t-menu-item key="/pro-form" value="/pro-form">ProForm 表单组件</t-menu-item>
                        <t-menu-item key="/pro-layout" value="/pro-layout">ProLayout 布局组件</t-menu-item>
                        <t-menu-item key="/page-container" value="/page-container">PageContainer 页容器组件</t-menu-item>
                        <t-menu-item key="/pro-button" value="/pro-button">ProButton 操作按钮组件</t-menu-item>
                        <t-menu-item key="/row-container" value="/row-container">RowContainer 行容器</t-menu-item>
                        <t-menu-item key="/modal-form" value="/modal-form">ModalForm 弹窗表单组件</t-menu-item>
                    </t-menu>
                </div>
            </t-col>
            <t-col :span="8">
                <div class="my-container">
                    <router-view />
                </div>
            </t-col>
            <t-col :span="2">
            </t-col>
        </t-row>
    </div>
</template>

<style lang='scss'>
.my-container {
    height: 94vh;
    overflow-y: auto;
}

.my-container::-webkit-scrollbar {
  display: none;
}
</style>