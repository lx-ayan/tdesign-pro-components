<script setup lang="tsx">
import 'md-editor-v3/lib/style.css';

const props = defineProps<{data: any[]}>();

const columns = [
    { colKey: 'name', title: '名称' },
    { colKey: 'description', title: '描述' }
]
</script>

<template>
    <t-card style="margin-top: 24px;">
        <t-typography-title level="h3"><span id="slots">slots</span></t-typography-title>
        <t-base-table row-key="index" :data="props.data" :columns="columns"></t-base-table>
    </t-card>
</template>