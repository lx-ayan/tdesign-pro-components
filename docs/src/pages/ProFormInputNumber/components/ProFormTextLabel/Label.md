```vue
<script setup lang="tsx">
import { ref } from 'vue';
const LabelJSX = <span>JSX Label </span>;

const LabelJSXFunction = () => <span>JSX Function </span>;

const demoValue= ref();

</script>

<template>
            <ProFormInputNumber v-model="demoValue" label="正常使用" name="basic"/>
            <ProFormInputNumber v-model="demoValue" :label="LabelJSX" name="JSX Label"/>
            <ProFormInputNumber v-model="demoValue" :label="LabelJSXFunction" name="JSX Label Function" />
            <ProFormInputNumber v-model="demoValue" name="slot label">
                <template #label>
                    <span>插槽 label</span>
                </template>
            </ProFormInputNumber>
</template>
```