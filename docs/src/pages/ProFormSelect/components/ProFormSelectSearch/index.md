```vue
<script setup lang="tsx">
import type { ProFormSelectRef } from 'tdesign-pro-component';
import { ref } from 'vue';

const sexOptions = [{ label: '男', value: '1' }, { label: '女', value: '2' }];
const data = ref(sexOptions);
const requestParam = ref('');
const proFormSelectRef = ref<ProFormSelectRef>();

function requestData() {
    return new Promise((resolve) => {
        if (requestParam.value) {
            resolve([{label: requestParam.value, value: '1'}])
        } else {
            resolve(sexOptions);
        }
    })
}

const demoValue = ref('');

function handleSearch(search: string) {
    if (!search) {
        data.value = sexOptions;
    } else {
        data.value = [{ label: search, value: '1' }];
    }
}

function requestSearch(search: string) {
    requestParam.value = search;
    proFormSelectRef.value?.reset();
}

</script>

<template>
    <t-card style="margin-top: 36px;">
        <t-typography-title level="h3"><span id="ProFormSelectSearch">远程搜索</span></t-typography-title>
        <div>
            <ProFormSelect @search="handleSearch" filterable :data v-model="demoValue" label="普通数组" name="basic" />
            <ProFormSelect ref="proFormSelectRef" @search="requestSearch" filterable :data="requestData" v-model="demoValue" label="普通数组" name="basic" />
        </div>
    </t-card>
</template>
```