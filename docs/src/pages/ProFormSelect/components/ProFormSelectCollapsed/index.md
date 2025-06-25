```vue
<script setup lang="tsx">
import { ref } from 'vue';

const data = [{ label: 'vue', value: 'vue' }, { label: 'react', value: 'react' }, { label: 'angular', value: 'angular' }, { label: 'ts', value: 'ts' }, { label: 'vite', value: 'vite' }];

const demoValue = ref([]);
const minCollapsedNum = ref(1);

const collapsedItems = ({ value }: { value: string[] }) => {
    return <t-tag>
        已折叠（{value.length - 1}）项
    </t-tag>
}

</script>

<template>
    <t-card style="margin-top: 36px;">
        <div>
            <ProFormSelect :selectProps="{ minCollapsedNum: minCollapsedNum }" multiple :data v-model="demoValue"
                label="插槽" name="basic">
                <template #collapsedItems="{ value: v }">
                    <t-tag>
                        已折叠（{{ v.length - 1 }}）项
                    </t-tag>
                </template>
            </ProFormSelect>

            <ProFormSelect :collapsedItems :selectProps="{ minCollapsedNum: minCollapsedNum }" multiple :data v-model="demoValue"
                label="jsx" name="basic">
            </ProFormSelect>
        </div>
    </t-card>
</template>
```