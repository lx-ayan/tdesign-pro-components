import { defineConfig } from 'vitepress'
import VueJSX from '@vitejs/plugin-vue-jsx';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "tdesign-pro-component",
  description: "基于 ElementUI 二次封装的高级组件",
  base: "/tdesign-pro-component/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/components' }
    ],

    sidebar: [
      {
        text: '组件案例',
        items: [
          { text: 'ProForm 表单', link: '/components/pro-form.md' },
          { text: 'ProTable 表格', link: '/components/pro-table.md' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lx-ayan/tdesign-pro-components' }
    ]
  },
  
  vite: {
    // 配置 Vite 插件
    plugins: [
      VueJSX()
      // 示例：使用一个 Vite 插件
      // 需要先安装对应的插件，例如：npm install --save-dev your-vite-plugin
      // 然后导入插件
      // import yourVitePlugin from 'your-vite-plugin';
      // yourVitePlugin({ options: {} })
    ]
  }
})
