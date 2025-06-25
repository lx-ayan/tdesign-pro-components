```vue
<script setup lang="tsx">
import { ref } from 'vue';
import { ProFormOption } from 'tdesign-pro-component';

const proFormRef = ref();

const options = ref<ProFormOption[]>([
    {
        name: 'username',
        label: '用户名',
        type: 'text',
        span: 12,
        rules: [{ required: true, message: '请输入用户名' }]
    },
    {
        name: 'password',
        label: '密码',
        type: 'text',
        textProps: {
            type: 'password',
        },
        span: 12,
        rules: [{ required: true, message: '请输入密码' }]
    }
]);

async function handleSubmit(data: any) {
    console.log('data', data);
    return true
}

const action = {
    submit: () => {
        proFormRef.value.validate().then(res => {
            console.log('res',res);
            proFormRef.value.submit()
        })
    },
    reset: () => {
        proFormRef.value.reset()
    },
    validate: () => {
        proFormRef.value.validate()
    }
}

</script>

<template>
    <t-typography-title level="h3"><span id="ProFormSettingSubmit">自定义提交</span></t-typography-title>

    <t-card title="登录表单">
        <ProForm ref="proFormRef" @submit="handleSubmit" :options="options">
            <template #footer>
                <t-space>
                    <t-button @click="action.submit">提交</t-button>
                    <t-button @click="action.reset">重置</t-button>
                    <t-button @click="action.validate">校验</t-button>
                </t-space>
            </template>
        </ProForm>
    </t-card>
</template>

```
