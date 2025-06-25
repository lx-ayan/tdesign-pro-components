<script setup lang="tsx">
import { ref } from 'vue';
import MarkdownContent from './index.md?raw';
import { MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import CodeContainer from '../../components/CodeContainer/index.vue';
import ApiTable from '../../components/ApiTable/index.vue';
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

const dataSource = [
  {
    name: 'title',
    type: <span>String | Function <CodeContainer>TS: VueNode</CodeContainer></span>,
    defaultValue: '-',
    description: '弹窗/抽屉标题',
    required: 'N'
  },
  {
    name: 'visible',
    type: <span>Boolean <CodeContainer>TS: boolean</CodeContainer></span>,
    defaultValue: '-',
    description: '展示隐藏，支持 v-model:visible',
    required: 'N'
  },
  {
    name: 'options',
    type: <span>Array <CodeContainer>{`TS: Array<ProFormOption<T>>`}</CodeContainer></span>,
    defaultValue: '-',
    description: '表单配置',
    required: 'N'
  },
  {
    name: 'request',
    type: <span>Function <CodeContainer>{`TS: () => Promise<any>`}</CodeContainer></span>,
    defaultValue: '-',
    description: '请求函数',
    required: 'N'
  },
  {
    name: 'formProps',
    type: <span>Object <CodeContainer>{`TS: ProFormProps<any>`}</CodeContainer></span>,
    defaultValue: '-',
    description: 'ProForm 表单属性，请查看本站 ProForm 文档',
    required: 'N'
  },
  {
    name: 'dialogProps/drawerProps',
    type: <span>Object <CodeContainer>{`TS: DialogProps | DrawerProps`}</CodeContainer></span>,
    defaultValue: '-',
    description: '弹窗/抽屉其他属性，请查看 TDesing 官方文档',
    required: 'N',
  },
  {
    name: 'width',
    type: <span>String, Number</span>,
    defaultValue: '-',
    description: '弹窗/表格尺寸大小',
    required: 'N',
  },


];


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
    <MdPreview style="margin-top: 24px;" id="pro-form-text-password" v-model="MarkdownContent" :preview="true" />

    <ApiTable :data="dataSource" />

  </div>
</template>


<style></style>