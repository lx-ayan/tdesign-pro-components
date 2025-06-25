```vue
<script setup lang="ts">
import { ref } from 'vue';

const data = ref([])

const clearable = ref(false);

const borderless = ref(false);

const disabled = ref(false);

const readonly = ref(false);

</script>

<template>
        <ProFormDatePickerRange v-model="data" :disabled="disabled" :readonly="readonly" :borderless="borderless" :clearable="clearable" name="date" label="日期选择器"></ProFormDatePickerRange>
</template>
```