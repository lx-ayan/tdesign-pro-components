<script setup lang='ts'>
import { ref } from 'vue';

const form = ref({
    username: '',
    password: ''
})
</script>

<template>
    <div>
        <t-form :form>
            <ProFormText label="用户名" v-model="form.username" name="username"/>
            <ProFormText label="密码" v-model="form.password" name="password" type="password"/>
        </t-form>
    </div>
</template>

<style lang='scss'></style>