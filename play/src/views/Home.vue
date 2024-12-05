<script setup lang='tsx'>
const header = { title: () => (<t-typography-title > tdesign-pro-component</t-typography-title>) }
</script>

<template>
    <t-row>
        <t-col :span="2"></t-col>
        <t-col :span="7">
            <PageContainer :header>
                <template #description>

                    <t-typography-title level="h3">为什么开发 tdesign-pro-component</t-typography-title>
                    <t-typography-paragraph>
                        原因很简单，起初我是在合肥一家房地产互联网公司做开发，开发使用的是 React + Umi + Typescript 开发。其中使用到了阿里团队开发的 ProComponents
                        组件库，发现功能挺好用的。就想开发一套这样的组件库了。一开始只是在自己的项目中引入使用，后面发现独乐乐不如众乐乐就发布到 NPM 中去了。
                    </t-typography-paragraph>

                    <t-typography-title level="h3">为什么是 Vue 而不是 React?</t-typography-title>
                    <t-typography-paragraph>
                        因为作者个人是比较喜欢 Vue 框架的，当然 React 也会。所以出于个人喜好，想在 Vue 框架里面开发一套这样的组件库。
                    </t-typography-paragraph>

                </template>

                <div>
                    内容区间
                </div>
            </PageContainer>
        </t-col>
        <t-col :span="2"></t-col>
    </t-row>
</template>

<style lang='scss'></style>