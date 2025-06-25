<script setup lang="tsx">
import { ref } from 'vue';
import { type ProFormOption } from 'tdesign-pro-component';
import MarkdownContent from './index.md?raw';
import { MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

const reasonData = [{ label: '年假', value: '1' }, { label: '事假', value: '2' }, { label: '病假', value: '3' }];
const reasonData2 = [{ label: '事假', value: '1' }, { label: '事假', value: '2' }, { label: '事假', value: '3' }];

const proFormRef = ref();

const options = ref<ProFormOption[]>([
    {
        name: 'name',
        label: '申请人',
        type: 'text',
        span: 6,
        rules: [{ required: true, message: '请输入用户名' }]
    },
    {
        name: 'date',
        label: '申请日期',
        type: 'date-range',
        span: 3,
        rules: [{ required: true, message: '请选择请假日期' }],
        onChange: () => {
            proFormRef.value.setItem('dateNum', 7)
            proFormRef.value.setItem('mydate', new Date())
        }
    },
    {
        name: 'dateNum',
        label: '请假天数',
        type: 'number',
        span: 3,
    },
    {
        name: 'reason',
        label: '原因',
        type: 'radio',
        span: 6,
        rules: [{ required: true, message: '请选择请假原因' }],
        data: reasonData,
        onChange: (v) => {
            if(v == 1) {
                options.value[4].hidden = true;
                options.value[5].hidden = true;
            } else if(v==2) {
                options.value[4].hidden = false;
                options.value[5].hidden = true;
            } else {
                options.value[4].hidden = true;
                options.value[5].hidden = false;
            }
        }
    },
    {
        name: 'leave',
        label: '事原',
        type: 'select',
        span: 6,
        rules: [{ required: true, message: '请选择请假原因' }],
        data: reasonData2,
        hidden: true,
    },
    {
        name: 'description',
        label: '病假描述',
        span: 12,
        rules: [{ required: true, message: '请选择请假原因' }],
        type: 'textarea',
        hidden: true,
    }
]);

async function handleSubmit(data: any) {
    console.log('data',data);
    return true
}

</script>

<template>
    <t-typography-title level="h3"><span id="ProFormLinkage">表单联动</span></t-typography-title>

    <t-card title="表单联动">
        <ProForm ref="proFormRef" @submit="handleSubmit" :options="options">
            
        </ProForm>
        <MdPreview style="margin-top: 24px;" id="pro-form-text-password" v-model="MarkdownContent" :preview="true" />
    </t-card>
</template>
