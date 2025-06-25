```vue
<script setup lang="tsx">
import { onMounted, ref } from 'vue';
import { type ProFormOption, useDrawerForm, useModalForm } from 'tdesign-pro-component';

const visible = ref(false);
const visible2 = ref(false);

interface LoginRequest {
  username: string;
  password: string
}

const options = ref<ProFormOption<LoginRequest>[]>([
  {
    name: 'username',
    label: '用户名',
    type: 'text',
    span: 12,
    rules: [{ required: true, message: '请输入用户名' }]
  },
  {
    name: 'password',
    label: '密码',
    type: 'text',
    textProps: {
      type: 'password',
    },
    span: 12,
    rules: [{ required: true, message: '请输入密码' }]
  }
]);

// @ts-ignore
const [modalOpen, _modalClose] = useModalForm<LoginRequest>(options.value, { title: '新增用户' });
const [drawerOpen, _drawerClose] = useDrawerForm<LoginRequest>(options.value, { title: '新增用户' });


async function handleConfirm(data: LoginRequest) {
  console.log('data', data);
  return true
}

async function request() {
  return {
    username: 'admin1111',
    password: '123456'
  }
}

</script>

<template>
  <div>
    <t-button @click="visible = !visible">弹窗</t-button>
    <t-button @click="visible2 = !visible2">弹窗2</t-button>
    <t-button @click="modalOpen">使用 hooks 打开弹窗</t-button>
    <t-button @click="drawerOpen">使用 hooks 打开抽屉</t-button>
    <ModalForm title="标题" @confirm="handleConfirm" :options v-model:visible="visible" :request>
    </ModalForm>
    <DrawerForm title="标题" width="500" @confirm="handleConfirm" :options v-model:visible="visible2" :request>
      <template #footer>
        ---------------------------------------------------------
      </template>
      <template #title>
        ---------------------------------------------------------
      </template>
    </DrawerForm>
  </div>
</template>


<style></style>
```