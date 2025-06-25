```vue
<script setup lang="tsx">
import { ref } from 'vue';

const data = [{ label: '男', value: '1' }, { label: '女', value: '2' }];

function requestData() {
    return new Promise((resolve) => {
        resolve([{ label: '请求数据1', value: '1' }, { label: '请求数据2', value: '2' }]);
    })
}

const demoValue = ref('');

</script>

<template>
    <t-card>
        <div>
            <ProFormSelect :data v-model="demoValue" label="普通数组" name="basic" />
            <ProFormSelect :data="requestData" v-model="demoValue" label="请求函数" name="basic" />
        </div>
    </t-card>
</template>
```