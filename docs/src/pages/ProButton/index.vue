<script setup lang='tsx'>
import MarkdownContent from './index.md?raw';
import { MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
const content = () => <div>我是弹出层</div>
</script>

<template>
        <div style="display: flex; justify-content: space-around;">
            <ProButton :content action="popup">
                弹出层按钮
            </ProButton>

            <ProButton>
                <template #icon>
                    <t-icon name="delete"></t-icon>
                </template>
                <template #content>
                    我是弹窗
                </template>
                <template #title>
                    系统提示
                </template>
                弹窗按钮
            </ProButton>

            <ProButton theme="link" :content action="popup">
                弹出层连接
            </ProButton>

            <ProButton theme="link">
                <template #icon>
                    <t-icon name="delete"></t-icon>
                </template>
                <template #content>
                    我是弹窗
                </template>
                <template #title>
                    系统提示
                </template>
                弹窗连接
            </ProButton>
        </div>
        <MdPreview style="margin-top: 24px;" id="pro-form-text-password" v-model="MarkdownContent" :preview="true" />
        <img src="https://pic4.zhimg.com/v2-9948cca1ab359b68b17635ba75b9c639_r.jpg" alt=""/>
        <img src="https://picx.zhimg.com/v2-dc38de76856c610862ca869f116757cd_r.jpg" alt=""/>
        <img src="https://pic4.zhimg.com/v2-71d8a30577b0ca8846bbb067e09c1203_r.jpg" alt="">
</template>

<style lang='scss'></style>