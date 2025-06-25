```vue
<script setup lang="tsx">
import { ref } from 'vue';

const data = [{ label: '男', value: '1' }, { label: '女', value: '2' }];

const LabelJSX = <span>JSX Label </span>;

const LabelJSXFunction = () => <span>JSX Function </span>;

const demoValue = ref('');

</script>

<template>
    <t-card>
        <div>
            <ProFormSelect :data v-model="demoValue" label="正常使用" name="basic" />
            <ProFormSelect :data v-model="demoValue" :label="LabelJSX" name="JSX Label" />
            <ProFormSelect :data v-model="demoValue" :label="LabelJSXFunction" name="JSX Label Function" />
            <ProFormSelect :data v-model="demoValue" name="slot label">
                <template #label>
                    <span>插槽 label</span>
                </template>
            </ProFormSelect>
        </div>
    </t-card>
</template>
```