<script setup lang='tsx'>
import Button from './components/ProButton/Button.vue';
const header = {
    title: () => <t-typography-title>ProButton 高级按钮</t-typography-title>
}
</script>

<template>
    <div>
        <PageContainer :header>
            <template #description>
                <t-typography-paragraph>
                    <t-typography-text>
                        ProButton 也是一个高频使用的组件，这个组件将弹窗/弹出层与按钮和连接进行结合。如表单提交时的提示可以使用，删除数据时可以使用。
                    </t-typography-text>
                </t-typography-paragraph>
            </template>
            <Button />
        </PageContainer>
    </div>
</template>

<style lang='scss'></style>