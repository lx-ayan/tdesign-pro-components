import { createApp } from 'vue'
// import App from './AppPageContainer.vue'
import App from './App.vue';
import './style.css';
import TDesign from 'tdesign-vue-next';
// 引入组件库的少量全局样式变量
import 'tdesign-vue-next/es/style/index.css';
import ProComponents from 'tdesign-pro-component';
import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import 'tdesign-pro-component/index.css';

import router from './router';


const app = createApp(App);
app.use(router);
app.use(TDesign);
app.use(MdEditor)
app.use(ProComponents);
// app.use(mavonEditor);
app.mount('#app');