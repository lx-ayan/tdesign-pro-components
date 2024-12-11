<script setup lang='tsx'>
import { ref } from 'vue';

const options = ref<ProFormOption[]>([
    {
        name: 'username',
        initalValue: '',
        label: '用户名',
        type: 'text',
        span: 12,
        rules: [
            { required: true, message: '请输入用户名' }
        ]
    },
    {
        name: 'password',
        label: '密码',
        type: 'text',
        span: 12,
        textProps: {
            type: 'password',
        },
        rules: [
            { required: true, message: '请输入密码' }
        ]
    },
    {
        name: 'header',
        label: '头像',
        type: 'upload',
        labelAlign: 'left',
        uploadProps: {
            theme: 'image'
        },
        formItemProps: {
            labelAlign: 'left'
        }
    }
]);

const visible = ref(false);

const header = <div>新增表单</div>

function request() {
    return Promise.resolve({
        password: '',
        username: 'requestAdmin',
        header: 'https://images.unsplash.com/photo-1719997794492-b51b453a162e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    })
}

function handleSubmit(value: any) {
    request().then(res => {
        console.log('value', value);
    })
}
</script>

<template>
    <div>
        <t-button @click="visible = true">新增表单</t-button>
        <ModalForm @submit="handleSubmit" :header v-model:visible="visible" :options="options" :request="request">

        </ModalForm>
    </div>
</template>

<style lang='scss'></style>