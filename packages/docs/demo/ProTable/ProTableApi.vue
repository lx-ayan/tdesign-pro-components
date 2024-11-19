<script setup lang='tsx'>
const columns = [
    {
        key: 'propName',
        title: '属性名'
    },
    {
        key: 'type',
        title: '类型'
    },
    {
        key: 'defaultValue',
        title: '默认值'
    },
    {
        key: 'description',
        title: '描述'
    },
    {
        key: 'required',
        title: '必传'
    }
]

const data = [
    {
        propName: 'options',
        type: 'Array | ProTableOption[]',
        defaultValue: '[]',
        description: '表格配置项，根据条件渲染'
    }
]
</script>

<template>
    <div>
        <t-table :bordered="false" :data="data" :columns="columns">
        </t-table>
    </div>
</template>

<style lang='scss'></style>