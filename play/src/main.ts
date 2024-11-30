import { createApp } from 'vue'
import App from './AppPageContainer.vue'
import './style.css';
import TDesign from 'tdesign-vue-next';
// 引入组件库的少量全局样式变量
import 'tdesign-vue-next/es/style/index.css';
import ProComponents from 'tdesign-pro-component';
// import 'tdesign-pro-component/index.css';

const app = createApp(App);

app.use(TDesign);
app.use(ProComponents);
app.mount('#app');
