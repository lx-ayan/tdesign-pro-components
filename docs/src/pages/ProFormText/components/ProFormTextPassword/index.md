```vue
<script setup lang="ts">
import {ref} from 'vue';
const password = ref('');
</script>

<template>
    <t-card style="margin-top: 24px;">
        <t-typography-title level="h3">密码框</t-typography-title>
        <ProFormText type="password" v-model="password" name="password" placeholder="请输入密码"/>
    </t-card>
</template>
```