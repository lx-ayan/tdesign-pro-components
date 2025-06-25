```vue
<script setup lang="ts">
import {ref} from 'vue';
const taste = ref('2');
const data = [{label: '甜的', value: '1'}, {label: '咸的', value: '2'}]
const data2 = [{label: '甜的', value: '1'}, {label: '咸的', value: '2'}, {label: '咸豆腐脑加营养快线', value: '3', disabled: true}]
</script>

<template>
    <t-card style="margin-top: 24px;">
        <t-typography-title level="h3"><span id="BasicRadio">基本使用</span></t-typography-title>
        <div>
            正常
        </div>
        <ProFormRadio :data="data" label="豆腐脑吃甜的还是咸的" name="taste" v-model="taste"/>
        <div>
            只读
        </div>
        <ProFormRadio readonly :data="data" label="豆腐脑吃甜的还是咸的" name="taste" v-model="taste"/>

        <div>
            禁用
        </div>
        <ProFormRadio disabled :data="data" label="豆腐脑吃甜的还是咸的" name="taste" v-model="taste"/>

        <div>
            局部禁用
        </div>
        <ProFormRadio :data="data2" label="豆腐脑吃甜的还是咸的" name="taste" v-model="taste"/>
    </t-card>
</template>
```