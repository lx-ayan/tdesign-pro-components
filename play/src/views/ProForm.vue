<script setup lang='tsx'>
import { PageContainer, PageContainerProps } from 'tdesign-pro-component';
import FormVue from './components/ProForm/Form.vue';
//@ts-ignore
import ApiMarkdown from  '../markdown/ProForm/Api.md?raw'
import { ref } from 'vue';
const tabList: PageContainerProps['tabList'] = [
    {
        label: '示例',
        value: '1'
    },
    {
        label: 'API',
        value: '2'
    }
]

const tabActiveKey = ref('1');

function handleTabChange(value: string) {
    tabActiveKey.value = value;
}
const header: PageContainerProps['header'] = {
    title: () => <t-typography-title>ProForm 组件</t-typography-title>
}

</script>

<template>
    <div>
        <PageContainer :tabList :tabActiveKey :header @tab-change="handleTabChange">
            <template #description>
                <t-typography-paragraph>
                    <t-typography-text>
                        ProForm 在原来的 Form 的基础上增加了一些语法糖和更多的布局设置，帮助我们快速地开发一个表单，同时添加了一些默认行为，让我们的表单默认好用。
                    </t-typography-text>
                </t-typography-paragraph>
                <t-typography-paragraph>
                    <t-typography-text>
                        表单提交后会触发 onSubmit 函数，所以父组件在使用时必须使用 submit 接收一下。
                    </t-typography-text>
                </t-typography-paragraph>
                <t-typography-paragraph>
                    <t-typography-text>
                        默认值问题
                    </t-typography-text>
                    <t-typography-paragraph>
                        <ul>
                            <li>
                                设置默认值可以在配置项中的 value 进行设置，这里需要注意的是图片需要以`http://xxx.jpg,http://xxx.jpg`,逗号分开
                            </li>
                            <li>
                                通过 request 函数异步获取，这里只会渲染对应的字段，没有在 option 配置的不会显示
                            </li>
                        </ul>
                    </t-typography-paragraph>
                </t-typography-paragraph>
            </template>
            <FormVue v-if="tabActiveKey === '1'" />
            <div v-else>
                <MdPreview id="BasicForm" :modelValue="ApiMarkdown" />
            </div>
        </PageContainer>
    </div>
</template>

<style lang='scss'></style>