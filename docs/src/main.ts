import { createApp } from 'vue'
import TDesign from 'tdesign-vue-next';

// 引入组件库的少量全局样式变量
import 'tdesign-vue-next/es/style/index.css';
import App from './App.vue'
import ProComponents from 'tdesign-pro-component';
import 'tdesign-pro-component/index.css';
import router from './router';
createApp(App).use(router).use(TDesign).use(ProComponents).mount('#app')
