```vue
<script setup lang="ts">
import { ref } from 'vue';

const clearable = ref(false);

const borderless = ref(false);

const disabled = ref(false);

const readonly = ref(false);

</script>

<template>
    <t-card style="margin-top: 24px;">
        <t-typography-title level="h3"><span id="BasicRadio">基本使用</span></t-typography-title>
        <ProFormDatePicker :disabled="disabled" :readonly="readonly" :borderless="borderless" :clearable="clearable" name="date" label="日期选择器"></ProFormDatePicker>
    </t-card>
</template>
```