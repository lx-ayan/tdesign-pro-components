```vue
<script setup lang="tsx">
import type { OptionData } from 'tdesign-vue-next';
import { ref } from 'vue';

const data = [{ label: '男', value: '1' }, { label: '女', value: '2', render: (current: OptionData) => <span style={{ color: 'orange' }}>{current.label}</span> }];

const demoValue = ref('');

</script>

<template>
    <t-card style="margin-top: 36px;">
        <div>
            <ProFormSelect :data v-model="demoValue" label="render 函数" name="basic" />
            <ProFormSelect :data v-model="demoValue" label="普通数组" name="basic">
                <template #option-1="{ option }">
                    <span style="color: blue;">{{ option.label }}</span>
                </template>
            </ProFormSelect>
        </div>
    </t-card>
</template>
```