<script setup lang='ts'>
import { ref } from 'vue';

const form = ref({
    username: '',
    password: '',
    address: '',
    companyName: '',
    url: '',
    disabled: '',
    readonly: '',
    clearable: '',
    borderless: ''
})
</script>

<template>
    <div>
        <t-form :form>
            <ProFormText label="用户名" v-model="form.username" name="username" />
            <ProFormText label="对齐方式，状态"  :inputProps="{ status: 'error', align: 'center' }" v-model="form.password" name="password" />
            <ProFormText label="地址" :inputProps="{suffixIcon: '地址'}" v-model="form.address" name="address" />
            <ProFormText label="公司名" :inputProps="{ label: '公司名', status: 'success', maxlength: 20, showLimitNumber: true }" v-model="form.companyName" name="companyName" />
            <ProFormText label="路径" prepend="https" append=".com" v-model="form.url" name="url" />
            <ProFormText label="禁用" disabled v-model="form.disabled" name="disabled" />
            <ProFormText label="只读" readonly v-model="form.readonly" name="readonly" />
            <ProFormText label="可清空" clearable  v-model="form.clearable" name="clearable" />
            <ProFormText label="无边框模式" borderless  v-model="form.borderless" name="borderless" />
        </t-form>
    </div>
</template>

<style lang='scss'></style>