```vue
<script setup lang="tsx">
import { ref } from 'vue';
const date = ref('');

const rules = [
    {required: true, message: '请选择日期', trigger: 'blur'}
]
</script>

<template>
        <t-form>
            <ProFormDatePicker :rules="rules" v-model="date" name="date" label="表单验证"></ProFormDatePicker>
            <t-button type="submit">提交</t-button>
        </t-form>
</template>
```