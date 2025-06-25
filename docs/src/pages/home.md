## tdesign-pro-component

### 快速开始

#### 1. 安装 TDesign

```javascript
npm install tdesign-vue-next
```

#### 2. 使用 TDesign

```javascript
import { createApp } from 'vue';
import TDesign from 'tdesign-vue-next';
import App from './app.vue';

// 引入组件库的少量全局样式变量
import 'tdesign-vue-next/es/style/index.css';

const app = createApp(App);
app.use(TDesign);
```

#### 3. 安装 tdesign-pro-component

```javascript
npm install tdesign-pro-component
```

#### 4. 使用 tdesign-pro-component

```javascript
import { createApp } from 'vue'
import TDesign from 'tdesign-vue-next';

// 引入组件库的少量全局样式变量
import 'tdesign-vue-next/es/style/index.css';
import App from './App.vue'
import ProComponents from 'tdesign-pro-component';
import 'tdesign-pro-component/index.css';
import router from './router';
createApp(App).use(router).use(TDesign).use(ProComponents).mount('#app')

```