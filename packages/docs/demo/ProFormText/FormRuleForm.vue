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
            <ProFormText :rules="[{required: true, message: '请输入用户名'}]" label="用户名" v-model="form.username" name="username"/>
            <ProFormText :rules="[{required: true, message: '请输入密码'}]" label="密码" v-model="form.password" name="password" type="password"/>
        </t-form>
    </div>
</template>

<style lang='scss'></style>