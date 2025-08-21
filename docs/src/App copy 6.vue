<script setup lang='tsx'>
import { computed, ref } from 'vue';
import DrawerForm from '../../packages/components/DrawerForm/DrawerForm.vue';
import { ProFormOption } from 'tdesign-pro-component';

const visible = ref(true);

const formData = ref<any>({});

const options = computed<ProFormOption[]>(() => ([
  {
    name: 'username',
    type: 'text',
    label: '用户名',
    rules: [
      { required: true, message: '请输入用户名', trigger: 'blur' }
    ],
    colProps: {
      span: 12
    },
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
    colProps: {
      span: 6
    },
    data: () => Promise.resolve([{ label: '-----1', value: '1' }, { label: '2', value: '2' }])
  },
  {
    name: 'other.car',
    type: 'text',
    label: '车',
    colProps: {
      span: 6
    },
    rules: [
      { required: true, message: '请输入用户名', trigger: 'blur' }
    ]
  }
]));

function request() {
  return {
    other: {
      description: 'hello world'
    }
  }
}

function handleSubmit(data) {
  console.log('data =', data);
}

function error(e) {
  console.log('e =', e);
}

</script>
<template>
  <div>
    <DrawerForm size="800" @error="error" @submit="handleSubmit" :request="request" title="标题" :options="options"
      v-model:visible="visible">
    </DrawerForm>
    <t-button @click="visible = true">hello world</t-button>
  </div>
</template>