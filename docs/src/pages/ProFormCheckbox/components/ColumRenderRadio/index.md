```vue
<script setup lang="tsx">
import {ref} from 'vue';
import type { OptionData } from 'tdesign-vue-next';
const taste = ref('2');
const themeValue = ref('default')
const data = [{label: '甜的', value: '1', render: (item: OptionData) => <div>必须{item.label}</div>}, {label: '咸的', value: '2', render: (item: OptionData) => <div>必须{item.label}</div>}];
const data2 = [{label: '甜的', value: '1'}, {label: '咸的', value: '2'}];

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
        <ProFormRadio vertical="column" :data="data" label="豆腐脑吃甜的还是咸的" name="taste" v-model="taste"/>
        <ProFormRadio vertical="column" :radio-props="{ gap: '12px' }"  theme="tag" :data="data" label="豆腐脑吃甜的还是咸的" name="taste" v-model="taste"/>

        <div style="margin-top: 28px; font-size: 19px; margin-bottom: 14px; font-weight: bold;">
            插槽
        </div>
        <ProFormRadio vertical="column" :data="data2" label="豆腐脑吃甜的还是咸的" name="taste" v-model="taste">
            <template #option-1="{option}">
                <div>
                    {{ JSON.stringify(option) }}
                </div>
            </template>
        </ProFormRadio>
        <ProFormRadio vertical="column" :radio-props="{ gap: '12px' }"  theme="tag" :data="data2" label="豆腐脑吃甜的还是咸的" name="taste" v-model="taste">
            <template #option-2="{option}">
                <div>
                    {{ JSON.stringify(option) }}
                </div>
            </template>
        </ProFormRadio>
    </t-card>
</template>
```