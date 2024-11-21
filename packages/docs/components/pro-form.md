<script setup lang="ts">
import BasicForm from'../demo/ProForm/BasicProForm.vue';
import DefaultValueForm from'../demo/ProForm/DefaultValueForm.vue';
import RequestDefaultValueForm from'../demo/ProForm/RequestDefaultValueForm.vue';
import FormRulesForm from'../demo/ProForm/FormRulesForm.vue';
import MyRenderOne from'../demo/ProForm/MyRenderOne.vue';
import MyRenderTwo from'../demo/ProForm/MyRenderTwo.vue';
import SetFormItem from'../demo/ProForm/SetFormItem.vue';
import LinkageForm from'../demo/ProForm/LinkageForm.vue';
</script>
# 表单组件
ProForm 在原来的 Form 的基础上增加了一些语法糖和更多的布局设置，帮助我们快速地开发一个表单，同时添加了一些默认行为，让我们的表单默认好用。
## 基本使用
<BasicForm/>

<details>
  <summary>
    点击查看代码
  </summary>

```vue
<script setup lang="tsx">
import { ref } from 'vue';
import { ProFormOption } from 'tdesign-pro-component';
const options = ref<ProFormOption[]>([
    {
        name: 'username',
        initalValue: '',
        label: '用户名',
        type: 'text',
    },
    {
        name: 'password',
        label: '密码',
        type: 'text',
        textProps: {
            type: 'password',
        },
    },
    {
        name: 'url',
        label: '域名',
        type: 'select',
        data: [
            { label: '胖砸IT社区', value: 'https://pangzablog.cn' },
            { label: '百度', value: 'https://www.baidu.com' }
        ]
    },
    {
        name: 'payMethod',
        label: '支付方式',
        type: 'radio',
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
        data: [
            { label: '车贷', value: '1' },
            { label: '房贷', value: '2' }
        ]
    },
    {
        name: 'submitDate',
        label: '交款日期',
        type: 'datepicker',
        initalValue: '',
        datepickerProps: {
            format: 'YYYY-MM-DD',
            style: {
                width: '100%'
            }
        }
    },
    {
        name: 'money',
        label: '交付金额',
        type: 'number',
        numberProps: {
            style: {
                width: '100%'
            }
        }
    },
    {
        name: 'address',
        label: '地区',
        type: 'treeSelect',
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
    },
    {
        name: 'upload',
        label: '附件上传',
        type: 'upload',
        hidden: false,
        uploadProps: {
            theme: 'image',
            action: "https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo",
            tips: "单张图片文件上传（上传成功状态演示）",
            multiple: true,
            locale: {
                triggerUploadText: {
                    image: '请选择图片',
                },
            }
        }
    }
]);

function handleSubmit(value) {
    console.log('value', value);
}

function request() {
    return Promise.resolve({
        password: '',
        username: 'requestAdmin'
    })
}
</script>

<template>
    <ProForm labelAlign="top" :marginY="20" @submit="handleSubmit" :options="options">
        <template #form-username="{ form, rules, requiredMark }">
            <ProFormText :rules="rules" name="username" label="用户名" v-model="form.username" />
        </template>
    </ProForm>
</template>

<style scoped></style>

```
</details>

## 默认值表单
### 方式一: 自定义初始值

<DefaultValueForm/>

<details>
  <summary>
    点击查看代码
  </summary>

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { ProFormOption } from 'tdesign-pro-component';
const options = ref<ProFormOption[]>([
    {
        name: 'username',
        initalValue: 'admin',
        label: '用户名',
        type: 'text',
    },
    {
        name: 'password',
        label: '密码',
        initalValue: 'admin',
        type: 'text',
        textProps: {
            type: 'password',
        },
    },
    {
        name: 'url',
        label: '域名',
        type: 'select',
        initalValue: 'https://pangzablog.cn',
        data: [
            { label: '胖砸IT社区', value: 'https://pangzablog.cn' },
            { label: '百度', value: 'https://www.baidu.com' }
        ]
    },
    {
        name: 'payMethod',
        label: '支付方式',
        initalValue: '1',
        type: 'radio',
        data: [
            { label: '支付宝', value: '1' },
            { label: '微信', value: '2' }
        ]
    },
    {
        name: 'payOther',
        label: '附加条款',
        type: 'checkbox',
        initalValue: ['1', '2'],
        data: [
            { label: '车贷', value: '1' },
            { label: '房贷', value: '2' }
        ]
    },
    {
        name: 'submitDate',
        label: '交款日期',
        type: 'datepicker',
        initalValue: '2024-11-21',
        datepickerProps: {
            format: 'YYYY-MM-DD',
            style: {
                width: '100%'
            }
        }
    },
    {
        name: 'money',
        label: '交付金额',
        type: 'number',
        initalValue: 100,
        numberProps: {
            style: {
                width: '100%'
            }
        }
    },
    {
        name: 'address',
        label: '地区',
        type: 'treeSelect',
        valueName: 'valueName',
        initalValue: 'guangdong',
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
        initalValue: '备注信息'
    },
    {
        name: 'upload',
        label: '附件上传',
        type: 'upload',
        hidden: false,
        initalValue: 'https://images.unsplash.com/photo-1485797460056-2310c82d1213?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        uploadProps: {
            theme: 'image',
            action: "https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo",
            tips: "单张图片文件上传（上传成功状态演示）",
            multiple: true,
            locale: {
                triggerUploadText: {
                    image: '请选择图片',
                },
            }
        }
    }
]);

function handleSubmit(value) {
    console.log('value', value);
}

</script>

<template>
    <div style="margin-top: 12px;">
        <ProForm labelAlign="top" :marginY="20" @submit="handleSubmit" :options="options">
            <template #form-username="{ form, rules, requiredMark }">
                <ProFormText :rules="rules" name="username" label="用户名" v-model="form.username" />
            </template>
        </ProForm>
    </div>
</template>

<style scoped></style>

```
</details>

### 方式二：基于请求的默认值（推荐）
<RequestDefaultValueForm/>

<details>
  <summary>
    点击查看代码
  </summary>

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { ProFormOption } from 'tdesign-pro-component';
const options = ref<ProFormOption[]>([
    {
        name: 'username',
        label: '用户名',
        type: 'text',
    },
    {
        name: 'password',
        label: '密码',
        type: 'text',
        textProps: {
            type: 'password',
        },
    },
    {
        name: 'url',
        label: '域名',
        type: 'select',
        initalValue: 'https://pangzablog.cn',
        data: [
            { label: '胖砸IT社区', value: 'https://pangzablog.cn' },
            { label: '百度', value: 'https://www.baidu.com' }
        ]
    },
    {
        name: 'payMethod',
        label: '支付方式',
        type: 'radio',
        data: [
            { label: '支付宝', value: '1' },
            { label: '微信', value: '2' }
        ]
    },
    {
        name: 'payOther',
        label: '附加条款',
        type: 'checkbox',
        data: [
            { label: '车贷', value: '1' },
            { label: '房贷', value: '2' }
        ]
    },
    {
        name: 'submitDate',
        label: '交款日期',
        type: 'datepicker',
        initalValue: '2024-11-21',
        datepickerProps: {
            format: 'YYYY-MM-DD',
            style: {
                width: '100%'
            }
        }
    },
    {
        name: 'money',
        label: '交付金额',
        type: 'number',
        numberProps: {
            style: {
                width: '100%'
            },
            inputNumberProps: {
                suffix: '元',
            }
        }
    },
    {
        name: 'address',
        label: '地区',
        type: 'treeSelect',
        valueName: 'valueName',
        initalValue: 'guangdong',
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
        span: 12
    },
    {
        name: 'upload',
        label: '附件上传',
        type: 'upload',
        hidden: false,
        uploadProps: {
            theme: 'image',
            action: "https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo",
            tips: "单张图片文件上传（上传成功状态演示）",
            multiple: true,
            locale: {
                triggerUploadText: {
                    image: '请选择图片',
                },
            }
        }
    }
]);

function handleSubmit(value) {
    console.log('value', value);
}

function request() {
    return Promise.resolve({
        username: 'admin',
        password: 'admin',
        url: 'https://pangzablog.cn',
        payMethod: '1',
        payOther: ['1', '2'],
        submitDate: '2024-11-21',
        money: 100,
        description: '欢迎使用 tdesign-pro-component',
        upload: 'https://images.unsplash.com/photo-1485797460056-2310c82d1213?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    })
}

</script>

<template>
    <div style="margin-top: 12px;">
        <ProForm :request labelAlign="top" :marginY="20" @submit="handleSubmit" :options="options">
            <template #form-username="{ form, rules, requiredMark }">
                <ProFormText :rules="rules" name="username" label="用户名" v-model="form.username" />
            </template>
        </ProForm>
    </div>
</template>

<style scoped></style>

```
</details>

## 表单验证

<FormRulesForm/>

<details>
  <summary>
    点击查看代码
  </summary>

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { ProFormOption } from 'tdesign-pro-component';
const options = ref<ProFormOption[]>([
    {
        name: 'username',
        initalValue: '',
        label: '用户名',
        type: 'text',
        span: 12,
        rules: [
            {required: true, message: '请输入用户名'}
        ]
    },
    {
        name: 'password',
        label: '密码',
        type: 'text',
        span: 12,
        textProps: {
            type: 'password',
        },
        rules: [
            {required: true, message: '请输入密码'}
        ]
    }
]);

function handleSubmit(value) {
    console.log('value', value);
}

function request() {
    return Promise.resolve({
        password: '',
        username: 'requestAdmin'
    })
}
</script>

<template>
    <ProForm labelAlign="top" :marginY="20" @submit="handleSubmit" :options="options">

    </ProForm>
</template>

<style scoped></style>


```
</details>

## 自定义渲染

自定义渲染是根据你渲染的 key 进行动态渲染，插槽名为 `form-${key}`。这个插槽是作用域插槽，会帮当前选项的配置项统一返回，并把组件内部的响应式数据 `form` 返回。
::: warning
所以这里数据双向绑定比较开放，开发者需要按照自己的业务需求进行对应的数据绑定。也可以通过 ProForm 实例中的 setItem 方法进行设置值。
:::

<MyRenderOne/>

<details>
  <summary>
    点击查看代码
  </summary>

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { ProFormOption } from 'tdesign-pro-component';
const options = ref<ProFormOption[]>([
    {
        name: 'username',
        initalValue: '',
        label: '用户名',
        type: 'text',
        span: 12,
        rules: [
            {required: true, message: '请输入用户名'}
        ]
    },
    {
        name: 'password',
        label: '密码',
        type: 'text',
        span: 12,
        textProps: {
            type: 'password',
        },
        rules: [
            {required: true, message: '请输入密码'}
        ]
    }
]);

function handleSubmit(value) {
    console.log('value', value);
}

function request() {
    return Promise.resolve({
        password: '',
        username: 'requestAdmin'
    })
}
</script>

<template>
    <ProForm labelAlign="top" :marginY="20" @submit="handleSubmit" :options="options">
        <template #form-username="{form, rules, name}">
            <ProFormText label="用户名" :rules v-model="form.username" name="username">
                <template #prefixIcon>
                    <div>user:</div>
                </template>
            </ProFormText>
        </template>
    </ProForm>
</template>

<style scoped></style>

```
</details>



## 完全自定义渲染

完全自定义渲染，如果ProForm 中出现了默认插槽（作用域插槽），将停止对 option 处理，form内部的数据完全交由开发者处理。ProForm 仅仅处理提交时的验证，重置，默认值操作。

<MyRenderTwo/>

<details>
  <summary>
    点击查看代码
  </summary>

```vue
<script setup lang="ts">
import { ref, watch } from 'vue';
import { ProFormOption, ProFormRef } from 'tdesign-pro-component';

const formRef = ref<ProFormRef>();


const options = ref<ProFormOption[]>([
    {
        name: 'username',
        initalValue: '',
        label: '用户名',
        type: 'text',
        span: 12,
        rules: [
            { required: true, message: '请输入用户名' }
        ]
    },
    {
        name: 'password',
        label: '密码',
        type: 'text',
        span: 12,
        textProps: {
            type: 'password',
        },
        rules: [
            { required: true, message: '请输入密码' }
        ]
    }
]);


function handleSubmit(value) {
    console.log('value', value);
}

const rules = {
    username: [
        {required: true, message: '请输入用户名'}
    ],
    password: [
        {required: true, message: '请输入密码'}
    ],
}

</script>

<template>
    <ProForm :rules ref="formRef" labelAlign="top" :marginY="20" 
        @submit="handleSubmit" :options="options">
        <template #default="{form}">
            <t-form-item label="用户名" name="username">
                <t-input v-model="form.username" placeholder="请输入用户名"></t-input>
            </t-form-item>

            <ProFormText labelAlign="top" type="password" name="password" label="密码" v-model="form.password"></ProFormText>

            <t-form-item>
                <t-space size="small">
                    <t-button theme="primary" type="submit">提交</t-button>
                    <t-button theme="default" variant="base" type="reset">重置</t-button>
                </t-space>
            </t-form-item>
        </template>
    </ProForm>
</template>

<style scoped></style>

```
</details>

## 手动设置值
通过实例组件中的 `setItem` 进行动态设置
<SetFormItem/>

## 表单联动

<LinkageForm/>

## API

## ProFormProps
|属性名|类型|默认值|描述|必填|
|------|------|------|------|------|