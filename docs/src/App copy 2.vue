<script setup lang='tsx'>
import { computed, ref, useTemplateRef } from 'vue';
import ProForm from '../../packages/components/ProForm/ProForm.vue';
import { ProFormOption } from '../../packages/components/ProForm/types';

const formData = ref<any>({});

const formRef = useTemplateRef('formRef')

const options = computed<ProFormOption[]>(() => ([
  {
    name: 'username',
    type: 'text',
    label: '用户名',
    rules: [
      { required: true, message: '请输入用户名', trigger: 'blur' }
    ],
    props: {
      inputProps: {
        prepend: 'http://'
      },
    }
  },
  {
    name: 'select',
    type: 'select',
    label: '选项',
    hidden: formData.value.username === 'admin',
    onClick() {
      console.log('点击了')
    },
    onChange() {
      console.log('改变了')
    },
    data: () => Promise.resolve([{ label: '-----1', value: '1' }, { label: '2', value: '2' }])
  },
  {
    name: 'other.car',
    type: 'text',
    label: '车',
    rules: [
      { required: true, message: '请输入用户名', trigger: 'blur' }
    ]
  },
  {
    name: 'other.description',
    type: 'textarea',
    label: '备注'
  }
]));

function request() {
  return {
    username: '用户名',
    select: '1',
  }
}

function handleSubmit(data) {
}

setTimeout(() => {
  formRef.value?.setItem('other.car', '奥迪 A6')
}, 3000)

</script>
<template>
  <ProForm @submit="handleSubmit" ref="formRef" v-model="formData" :request="request" :options="options">

  </ProForm>
</template>