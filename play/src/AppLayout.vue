<script setup lang='tsx'>
const HeaderRender = () => <div>啊萨达萨达</div>
const LogoRender = () => <div>lOGO</div>
</script>

<template>
    <ProLayout :headerRender="HeaderRender"  :logoRender="LogoRender">
        <div>
            Hello 我是内容
        </div>
    </ProLayout>
</template>

<style lang='scss'></style>