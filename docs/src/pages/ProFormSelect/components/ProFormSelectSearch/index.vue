<script setup lang="tsx">
import MarkdownContent from './index.md?raw';
import { MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import type { ProFormSelectRef } from 'tdesign-pro-component';
import { ref } from 'vue';
const sexOptions = [{ label: '男', value: '1' }, { label: '女', value: '2' }];
const data = ref(sexOptions);
const requestParam = ref('');
const proFormSelectRef = ref<ProFormSelectRef>();

function requestData() {
    return new Promise((resolve) => {
        if (requestParam.value) {
            resolve([{ label: requestParam.value, value: '1' }])
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
        <t-typography-paragraph>
            <ul>
                <li>data 为数组时: 需要手动处理请求，然后将请求的数据重新给 data 赋值</li>
                <li>data 为请求函数时： 只需要将搜索的内容赋值给一个参数，然后通过 ProFormSelect 实例中的 reset 方法重新请求即可。注意：接口需要后端支持搜索</li>
            </ul>
        </t-typography-paragraph>
        <div>
            <ProFormSelect @search="handleSearch" filterable :data v-model="demoValue" label="普通数组" name="basic" />
            <ProFormSelect ref="proFormSelectRef" @search="requestSearch" filterable :data="requestData"
                v-model="demoValue" label="请求函数" name="basic" />
            <MdPreview id="pro-form-text-label" v-model="MarkdownContent" :preview="true" />
        </div>
    </t-card>
</template>