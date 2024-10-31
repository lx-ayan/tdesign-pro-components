import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import ElementProComponent from 'element-pro-component';
console.log(ElementProComponent)

const app = createApp(App);
app.use(ElementPlus)
app.use(ElementProComponent);
app.mount('#app');
