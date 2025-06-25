```vue
<script setup lang="tsx">
import { ref } from 'vue';
const date= ref('');

const prefixIcon = <t-icon name="user"></t-icon>;
</script>

<template>
        <ProFormDatePicker v-model="date" name="date" label="插槽">
            <template #prefixIcon>
                <t-icon name="user"></t-icon>
            </template>
        </ProFormDatePicker>
        <ProFormDatePicker :prefixIcon="prefixIcon" v-model="date" name="date" label="jsx"></ProFormDatePicker>
</template>
```