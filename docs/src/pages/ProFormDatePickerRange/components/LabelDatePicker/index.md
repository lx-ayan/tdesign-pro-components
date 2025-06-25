```vue
<script setup lang="tsx">
import { ref } from 'vue';
const date= ref([]);

const datePickerLabel = <t-icon name="user"></t-icon>;
</script>

<template>
        <ProFormDatePickerRange v-model="date" name="date" datePickerLabel="文本" label="正常使用">
        </ProFormDatePickerRange>
        <ProFormDatePickerRange v-model="date" name="date" label="插槽">
            <template #datePickerLabel>
                插槽
            </template>
        </ProFormDatePickerRange>
        <ProFormDatePickerRange v-model="date" :datePickerLabel="datePickerLabel" name="date" label="jsx">
        </ProFormDatePickerRange>
</template>
```