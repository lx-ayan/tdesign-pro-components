<script setup lang='ts'>
import BasicButton from './BasicButton.vue';
//@ts-ignore
import One from '../../../markdown/ProButton/One.md?raw';
</script>

<template>
    <div>
        <t-typography-title level="h3"><span id="basicTable">使用</span></t-typography-title>
        <BasicButton />
        <MdPreview id="BasicButton" :modelValue="One" />
    </div>
</template>

<style lang='scss'></style>