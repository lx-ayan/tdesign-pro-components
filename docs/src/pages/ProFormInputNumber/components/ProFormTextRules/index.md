```vue
<script setup lang="ts">
import {ref} from 'vue';
const password = ref<undefined | number>();
</script>

<template>
        <ProFormInputNumber label="label" :rules="[{required: true, message: '请输入label'}]" v-model="password" name="password"/>
</template>
```