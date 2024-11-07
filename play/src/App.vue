<script setup lang="tsx">
import { onMounted, ref } from 'vue';
import { ProFormOption } from 'tdesign-pro-components';
const inputValue = ref('');
const options: ProFormOption[] = [
  {
    name: 'username',
    initalValue: 'admin',
    label: '用户名',
    type: 'text',
    rules: [
      { required: true, message: '请输入用户名' }
    ]
  },
  {
    name: 'password',
    label: '密码',
    type: 'text',
    initalValue: '',
    textProps: {
      type: 'password',
    },
  },
  {
    name: 'url',
    label: '域名',
    type: 'select',
    initalValue: '',
    data: [
      { label: '胖砸IT社区', value: 'https://pangzablog.cn' },
      { label: '百度', value: 'https://www.baidu.com' }
    ]
  },
  {
    name: 'payMethod',
    label: '支付方式',
    type: 'radio',
    initalValue: '',
    data: [
      { label: '支付宝', value: '1' },
      { label: '微信', value: '2' }
    ]
  },
  {
    name: 'payOther',
    label: '附加条款',
    type: 'checkbox',
    rules: [
      { required: true, message: '请输入用户名' }
    ],
    initalValue: [],
    data: [
      { label: '车贷', value: '1' },
      { label: '房贷', value: '2' }
    ]
  },
  {
    name: 'submitDate',
    label: '交款日期',
    type: 'datepicker',
    initalValue: new Date(),
    datepickerProps: {
      datepickerProps: {
        style: {
          width: '100%'
        }
      }
    }
  },
  {
    name: 'money',
    label: '交付金额',
    type: 'number',
    initalValue: '',
    numberProps: {
      inputNumberProps: {
        style: {
          width: '100%'
        }
      }
    }
  },
  {
    name: 'address',
    label: '地区',
    type: 'treeSelect',
    initalValue: '',
    valueName: 'valueName',
    data: [{
      label: '广东省',
      valueName: 'guangdong',
      children: [{
        label: '广州市',
        valueName: 'guangzhou',
      }, {
        label: '深圳市',
        valueName: 'shenzhen',
      }],
    }, {
      label: '江苏省',
      valueName: 'jiangsu',
      children: [{
        label: '南京市',
        valueName: 'nanjing',
      }, {
        label: '苏州市',
        valueName: 'suzhou',
      }],
    }]
  },
  {
    name: 'description',
    label: '备注',
    type: 'textarea',
    span: 12,
    initalValue: ''
  }
];

function request() {
  return Promise.resolve({
    password: '',
    username: 'requestAdmin'
  })
}
</script>

<template>
  <h1>登记信息</h1>
  <ProForm :options="options">

    <template #form-username="{ form, rules, requiredMark }">
      <ProFormText :rules="rules" name="username" label="用户名" v-model="form.username" />
    </template>

  </ProForm>
</template>

<style scoped></style>
