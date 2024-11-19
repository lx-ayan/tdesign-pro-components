// .vitepress/theme/index.ts
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import ProComponents from 'tdesign-pro-component';
import TDesign from 'tdesign-vue-next';
import 'tdesign-vue-next/es/style/index.css';
// import 'tdesign-pro-component/index.css';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义全局组件
    app.use(TDesign);
    app.use(ProComponents);
  },
} satisfies Theme