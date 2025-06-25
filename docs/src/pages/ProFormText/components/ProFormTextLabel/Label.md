```vue
<script setup lang="tsx">
import { MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import { ref } from 'vue';
const LabelJSX = <span>JSX Label </span>;

const LabelJSXFunction = () => <span>JSX Function </span>;

const demoValue= ref('Hello World');

</script>

<template>
    <t-card>
        <div>
            <ProFormText v-model="demoValue" label="正常使用" name="basic"/>
            <ProFormText v-model="demoValue" :label="LabelJSX" name="JSX Label"/>
            <ProFormText v-model="demoValue" :label="LabelJSXFunction" name="JSX Label Function" />
            <ProFormText v-model="demoValue" name="slot label">
                <template #label>
                    <span>插槽 label</span>
                </template>
            </ProFormText>
            <MdPreview id="pro-form-text-label" v-model="MarkdownContent" :preview="true"/>
        </div>
    </t-card>
</template>
```