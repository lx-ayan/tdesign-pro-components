<script setup lang='ts'>

</script>

<template>
    <div>
        <t-row>
            <t-col :span="2">
                <div style="margin-top: 24px">
                    <t-menu>
                        <t-menu-item>ProTable 表格组件</t-menu-item>
                    </t-menu>
                </div>
            </t-col>
            <t-col :span="8">
                <router-view />
            </t-col>
            <t-col :span="2">

            </t-col>
        </t-row>
    </div>
</template>

<style lang='scss'></style>