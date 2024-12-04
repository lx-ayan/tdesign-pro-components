<script setup lang='ts'>

</script>

<template>
    <PageContainer :header="{ title: '我的标题' }">
        <template #description>
            描述111
        </template>

        <template #actions>
            <t-button>Hello</t-button>
        </template>

        <div>
            内容区间
        </div>
    </PageContainer>
</template>

<style lang='scss'></style>