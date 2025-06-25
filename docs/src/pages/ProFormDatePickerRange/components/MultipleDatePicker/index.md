```vue
<script setup lang="ts">
import { ref } from 'vue';
const dates= ref([]);
</script>

<template>
        <ProFormDatePickerRange v-model="dates" name="date" label="日期选择器"></ProFormDatePickerRange>
</template>
```