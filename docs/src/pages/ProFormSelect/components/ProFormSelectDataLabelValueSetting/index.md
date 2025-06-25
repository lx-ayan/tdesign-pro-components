```vue
<script setup lang="tsx">
import { ref } from 'vue';

const data = [{ description: '男', code: '1' }, { description: '女', code: '2' }];

const demoValue = ref('');

</script>

<template>
    <t-card style="margin-top: 36px;">
        <t-typography-title level="h3"><span id="ProFormSelectDataLabelValueSetting">ProFormSelect Data
                自定义属性名</span></t-typography-title>
        <div>
            <ProFormSelect labelName="description" valueName="code" :data v-model="demoValue" label="自定义属性名"
                name="basic" />
        </div>
    </t-card>
</template>
```