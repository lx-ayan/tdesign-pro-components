<script setup lang="ts">
import { ref } from 'vue';
import { ProFormOption, ProFormRef } from 'tdesign-pro-component';

const proFormRef = ref<ProFormRef>();

const infoObj = {
    actor: [
        {label: '汤姆·哈迪', value: 'Tom Hardy'},
        {label: '刘德华', value: 'Andy Lau'},
        {label: '成龙', value: 'Jack Chen'}
    ],
    singer: [
        {label: '薛之谦', value: 'Joker Xue'},
        {label: '毛不易', value: 'Maobu Yi'},
        {label: '亚当·兰伯特', value: 'Adam Lambert'}
    ],
    film: [
        {label: '毒液3：最后一舞', value: '1'},
        {label: '天下无贼', value: '2'},
        {label: '警察故事', value: '3'}
    ]
}

const options = ref<ProFormOption[]>([
    {
        name: 'type',
        initalValue: '',
        label: '类型',
        type: 'radio',
        span: 12,
        data: [
            {label: '演员', value: 'actor'},
            {label: '歌手', value: 'singer'},
            {label: '电影', value: 'film'}
        ],
        onChange: (value) => {
            options.value[1].data = infoObj[value]
        }
    },
    {
        name: 'password',
        label: '密码',
        type: 'radio',
        span: 12,
        textProps: {
            type: 'password',
        },
        data: []
    }
]);

function handleSubmit(value) {
    console.log('value', value);
}

function handleSet() {
    proFormRef.value?.setItem('username', 'hello hello')
}
</script>

<template>
    <ProForm ref="proFormRef" labelAlign="top" :marginY="20" @submit="handleSubmit" :options="options">
        <template #extra>
            <t-button @click="handleSet" style="margin-left: 12px;">手动设置用户名</t-button>
        </template>
    </ProForm>
</template>

<style scoped></style>
