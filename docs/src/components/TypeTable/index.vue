<script setup lang="tsx">
import 'md-editor-v3/lib/style.css';

const props = defineProps<{data: any[], title: string, id: string}>();

const columns = [
    { colKey: 'name', title: '名称' },
    { colKey: 'type', title: '类型' },
    { colKey: 'description', title: '描述' },
]
</script>

<template>
    <t-card style="margin-top: 24px;">
        <t-typography-title level="h3"><span :id="props.id">{{ props.title }}</span></t-typography-title>
        <t-base-table row-key="index" :data="props.data" :columns="columns"></t-base-table>
    </t-card>
</template>