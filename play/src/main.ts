import { createApp } from 'vue'
import App from './App.vue'
import ElementProComponent from 'element-pro-component';
console.log(ElementProComponent)

const app = createApp(App);
app.use(ElementProComponent);
app.mount('#app');
