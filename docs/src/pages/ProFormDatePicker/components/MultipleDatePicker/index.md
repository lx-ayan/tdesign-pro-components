```vue
<script setup lang="ts">
import { ref } from 'vue';
const dates= ref([]);
</script>

<template>
    <ProFormDatePicker v-model="dates" multiple name="date" label="日期选择器"></ProFormDatePicker>
</template>
```