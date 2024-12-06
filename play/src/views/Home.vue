<script setup lang='ts'>
import { ref } from 'vue';
//@ts-ignore
import InfoMarkdown from '../markdown/Info.md?raw';
//@ts-ignore
import StartMarkdown from '../markdown/Start.md?raw';
const defaultValue = ref('info');
const markdownContent = ref(InfoMarkdown);

function changeHandler(path: string) {
    defaultValue.value = path;
    markdownContent.value = path === 'info'? InfoMarkdown: StartMarkdown;
}

</script>

<template>
    <div>
        <t-row>
            <t-col :span="2">
                <t-aside style="height: 94vh;">
                    <t-menu @change="changeHandler" :defaultValue>
                        <t-menu-item value="info">简介</t-menu-item>
                        <t-menu-item value="start">快速开始</t-menu-item>
                    </t-menu>
                </t-aside>
            </t-col>
            <t-col :span="7">
                <div style="height: 94vh; overflow-y: auto;">
                    <MdPreview id="BasicForm" :modelValue="markdownContent" />
                </div>
            </t-col>
            <t-col :span="3"></t-col>
        </t-row>
    </div>
</template>

<style lang='scss'></style>