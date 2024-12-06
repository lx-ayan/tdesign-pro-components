## tdesign-pro-component

tdesign-pro-component 是基于 TDesign 而开发的模板组件，提供了更高级别的抽象支持，开箱即用。可以显著地提升制作 CRUD 页面的效率，更加专注于页面。

- PageContainer 解决布局的问题，提供开箱即用的标签和面包屑功能
- ProTable 表格模板组件，抽象网络请求和表格格式化
- ProForm 表单模板组件，预设常见布局和行为
- PageContainer 页面容器，快速完成页面布局
- ProLayout 布局组件，作者提供的默认布局
- ProButton 提供确认框按钮, 正在开发中。。。
- ProDescriptions 定义列表模板组件, 后续开发

## 注意事项

> 1. Vue 需要大于 3.2.x 版本。
> 2. 本组件仅支持 TDesign-vue-next （Vue3）版本, 不支持 Vue2 TDesign 组件，所以 Vue2 项目请绕道。
> 3. TDesign 组件库需要全部注册。

## 安装

### 1. 安装 TDesign

```javascript
npm i tdesign-vue-next
```

### 2. 使用 TDesign

```javascript
import { createApp } from 'vue';
import TDesign from 'tdesign-vue-next';
import App from './app.vue';

// 引入组件库的少量全局样式变量
import 'tdesign-vue-next/es/style/index.css';

const app = createApp(App);
app.use(TDesign);
```

### 安装 tdesign-pro-component

```javascript
npm install tdesign-pro-component
```

### 使用组件

#### 全量引入
```javascript
import { createApp } from 'vue';
import TDesign from 'tdesign-vue-next';
import App from './app.vue';
import ProComponent from 'tdesign-pro-component';
// 引入组件库的少量全局样式变量
import 'tdesign-vue-next/es/style/index.css';

// 引入样式文件
import 'tdesign-pro-component/index.css';

const app = createApp(App);
app.use(TDesign);
app.use(ProComponent);

```

#### 按需引入
```vue
<script setup>
import {PageContainer} from 'tdesign-pro-component';
const header = {
    title: '页面标题'
}
</script>

<template>
    <PageContainer :header/>
</template>

```