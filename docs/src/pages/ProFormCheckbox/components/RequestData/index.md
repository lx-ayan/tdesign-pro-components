```vue
<script setup lang="ts">
import {ref} from 'vue';
const taste = ref(['2']);
const data = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([{label: '甜的', value: '1'}, {label: '咸的', value: '2'}])
        }, 2000)
    })
}
</script>

<template>
    <t-card style="margin-top: 24px;">
        <t-typography-title level="h3"><span id="RequestData">请求数据</span></t-typography-title>
        <ProFormCheckbox :data="data" label="豆腐脑吃甜的还是咸的" name="taste" v-model="taste"/>
    </t-card>
</template>
```