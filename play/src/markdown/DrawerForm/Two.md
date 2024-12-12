```typescript
<script setup lang='tsx'>
import { ref } from 'vue';
import {MessagePlugin} from 'tdesign-vue-next';

const options = ref<ProFormOption[]>([
    {
        name: 'title',
        initalValue: '',
        label: '备忘标题',
        type: 'text',
        span: 6,
        rules: [
            { required: true, message: '请输备忘标题', trigger: 'blur' }
        ]
    },
    {
        name: 'date',
        label: '备忘日程',
        type: 'datepicker',
        span: 6,
        datepickerProps: {
           style: 'width: 100%',
        },
        rules: [
            { required: true, message: '请输入备忘日程', trigger: 'blur'  }
        ]
    },
    {
        name: 'how',
        label: '何时提醒',
        type: 'select',
        span: 6,
        data: [
            {label: '30分钟前', value: '1'},
            {label: '1小时前', value: '2'}
        ]
    },
    {
        name: 'remark',
        label: '备忘内容',
        span: 12,
        type: 'textarea',
        rules: [
            { required: true, message: '请输入备忘内容', trigger: 'blur'  }
        ]
    }
]);

const visible = ref(false);

const header = <div>备忘录</div>;

const loading = ref(false);

function handleSubmit(value: any) {
    MessagePlugin.success('提交成功');
}
</script>

<template>
    <div>
        <t-button @click="visible = true">备忘登记</t-button>
        <ModalForm autoClose  width="800px" v-model:loading="loading" @submit="handleSubmit" :header v-model:visible="visible" :options="options">

        </ModalForm>
    </div>
</template>

<style lang='scss'></style>
```