<script setup lang="tsx">
import { ref } from 'vue';
import MarkdownContent from './index.md?raw';
import { MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import type { OptionData } from 'tdesign-vue-next';
const taste = ref(['2']);
const data = [{ label: '甜的', value: '1', render: (item: OptionData) => <div>必须{item.label}</div> }, { label: '咸的', value: '2', render: (item: OptionData) => <div>必须{item.label}</div> }];
const data2 = [{ label: '甜的', value: '1' }, { label: '咸的', value: '2' }];
const rules = [
    { required: true, message: '请选择味道', trigger: 'blur' }
]

const rules2 = [
    { required: true, message: '请选择味道', trigger: 'blur' }
]
const formData = ref({
    taste: [],
    taste2: []
})

</script>

<template>
    <t-card style="margin-top: 24px;">
        <t-typography-title level="h3"><span id="ColumnRender">纵向（自定义渲染）布局</span></t-typography-title>
        <div>
            纵向布局对按钮单选框不生效
        </div>
        <div style="margin-top: 28px; font-size: 19px; margin-bottom: 14px; font-weight: bold;">
            渲染函数
        </div>
        <ProFormCheckbox vertical="column" :data="data" label="豆腐脑吃甜的还是咸的" name="taste" v-model="taste" />
        <ProFormCheckbox vertical="column" :checkbox-props="{ gap: '12px' }" theme="tag" :data="data" label="豆腐脑吃甜的还是咸的"
            name="taste" v-model="taste" />

        <div style="margin-top: 28px; font-size: 19px; margin-bottom: 14px; font-weight: bold;">
            插槽（表单校验）
        </div>

        <t-form :data="formData" labelAlign="top">
            <ProFormCheckbox :rules="rules" vertical="column" :data="data2" label="豆腐脑吃甜的还是咸的" name="taste"
                v-model="formData.taste">
                <template #option-1="{ option }">
                    <div>
                        {{ JSON.stringify(option) }}
                    </div>
                </template>
            </ProFormCheckbox>

            <ProFormCheckbox :rules="rules2" vertical="column"  :checkbox-props="{ gap: '8px' }" theme="tag" :data="data2" label="豆腐脑吃甜的还是咸的"
                name="taste2" v-model="formData.taste2">
                <template #option-2="{ option }">
                    <div>
                        {{ JSON.stringify(option) }}
                    </div>
                </template>
            </ProFormCheckbox>
            
            <t-button style="margin-top: 33px;" type="submit">校验</t-button>
        </t-form>
        <MdPreview id="pro-form-text-password" v-model="MarkdownContent" :preview="true" />
    </t-card>
</template>