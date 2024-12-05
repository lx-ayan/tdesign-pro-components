<script setup lang='ts'>
import ProFormOne from './One.vue';
//@ts-ignore
import BasicFormMarkdown from '../../../markdown/ProForm/BasicFormMarkdown.md?raw';
//@ts-ignore
import Two from '../../../markdown/ProForm/Two.md?raw';
//@ts-ignore
import Three from '../../../markdown/ProForm/Three.md?raw';
//@ts-ignore
import Four from '../../../markdown/ProForm/Four.md?raw';
//@ts-ignore
import Five from '../../../markdown/ProForm/Five.md?raw';
//@ts-ignore
import Six from '../../../markdown/ProForm/Six.md?raw';
//@ts-ignore
import Seven from '../../../markdown/ProForm/Seven.md?raw';
//@ts-ignore
import Eight from '../../../markdown/ProForm/Eight.md?raw';
import ProFormTwo from './Two.vue';
import ProFormThree from './Three.vue';
import ProFormFour from './Four.vue';
import ProFormFive from './Five.vue';
import ProFormSix from './Six.vue';
import ProFormSeven from './Seven.vue';
import ProFormEight from './Eight.vue';

</script>

<template>
    <div>
        <t-typography-title level="h3"><span id="pro-form-one">基本使用</span></t-typography-title>

        <ProFormOne />
        <MdPreview id="ProFormOne" :modelValue="BasicFormMarkdown" />

        <t-typography-title level="h3"><span id="pro-form-two">默认值</span></t-typography-title>
        <t-typography-title level="h4"><span>方式一: 直接设置</span></t-typography-title>
        <t-typography-paragraph>
            <t-typography-text>
                直接设置默认值方式，通过每个配置项中的 initalValue 方式进行默认。
            </t-typography-text>
        </t-typography-paragraph>

        <ProFormTwo />
        <MdPreview id="Two" :modelValue="Two" />

        <t-typography-title level="h4"><span>方式二: 通过请求的方式</span></t-typography-title>

        <ProFormThree />
        <MdPreview id="Three" :modelValue="Three" />

        <t-typography-title level="h3"><span id="pro-form-three">表单验证</span></t-typography-title>
        <ProFormFour />
        <MdPreview id="Four" :modelValue="Four" />

        <t-typography-title level="h3"><span id="pro-form-four">自定义渲染</span></t-typography-title>
        <t-typography-paragraph>
            <t-typography-text>
                自定义渲染是根据你渲染的 key 进行动态渲染，插槽名为
                <t-typography-text code>
                    `form-${key}`
                </t-typography-text>
                。这个插槽是作用域插槽，会帮当前选项的配置项统一返回，并把组件内部的响应式数据 `form` 返回。
            </t-typography-text>
        </t-typography-paragraph>

        <ProFormFive />

        <MdPreview id="Five" :modelValue="Five" />

        <t-typography-title level="h3"><span id="pro-form-five">完全自定义渲染</span></t-typography-title>
        <t-typography-paragraph>
            完全自定义渲染，如果ProForm 中出现了默认插槽（作用域插槽），将停止对 option 处理，form内部的数据完全交由开发者处理。ProForm 仅仅处理提交时的验证，重置，默认值操作。
        </t-typography-paragraph>
        <ProFormSix />
        <MdPreview id="Six" :modelValue="Six" />

        <t-typography-title level="h3"><span id="pro-form-six">手动设置值</span></t-typography-title>
        <ProFormSeven />
        <MdPreview id="Seven" :modelValue="Seven" />

        <t-typography-title level="h3"><span id="pro-form-seven">关联表单</span></t-typography-title>
        <ProFormEight />
        <MdPreview id="Eight" :modelValue="Eight" />

    </div>
</template>

<style lang='scss'></style>