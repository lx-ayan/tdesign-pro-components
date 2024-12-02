<script setup lang='ts'>

</script>

<template>
    <div>
        <t-row>
            <t-col :span="2">
                组件
            </t-col>
            <t-col :span="8">
                <router-view/>
            </t-col>
            <t-col :span="2">

            </t-col>
        </t-row>
    </div>
</template>

<style lang='scss'></style>