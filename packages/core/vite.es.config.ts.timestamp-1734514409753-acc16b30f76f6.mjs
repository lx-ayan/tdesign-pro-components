// vite.es.config.ts
import { defineConfig } from "file:///G:/%E5%88%98%E7%BB%AD/%E9%A1%B9%E7%9B%AE%E6%96%87%E4%BB%B6/%E4%B8%AA%E4%BA%BA%E9%A1%B9%E7%9B%AE/%E9%AB%98%E7%BA%A7%E7%BB%84%E4%BB%B6%E9%A1%B9%E7%9B%AE/tdesign/%E6%96%B0%E9%A1%B9%E7%9B%AE/%E9%A1%B9%E7%9B%AE%E6%BA%90%E7%A0%81/tdesign-pro-component/node_modules/.pnpm/vite@5.4.11_@types+node@22.10.1_sass@1.82.0/node_modules/vite/dist/node/index.js";
import Vue from "file:///G:/%E5%88%98%E7%BB%AD/%E9%A1%B9%E7%9B%AE%E6%96%87%E4%BB%B6/%E4%B8%AA%E4%BA%BA%E9%A1%B9%E7%9B%AE/%E9%AB%98%E7%BA%A7%E7%BB%84%E4%BB%B6%E9%A1%B9%E7%9B%AE/tdesign/%E6%96%B0%E9%A1%B9%E7%9B%AE/%E9%A1%B9%E7%9B%AE%E6%BA%90%E7%A0%81/tdesign-pro-component/node_modules/.pnpm/@vitejs+plugin-vue@5.2.1_vite@5.4.11_vue@3.5.13/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import VueJSX from "file:///G:/%E5%88%98%E7%BB%AD/%E9%A1%B9%E7%9B%AE%E6%96%87%E4%BB%B6/%E4%B8%AA%E4%BA%BA%E9%A1%B9%E7%9B%AE/%E9%AB%98%E7%BA%A7%E7%BB%84%E4%BB%B6%E9%A1%B9%E7%9B%AE/tdesign/%E6%96%B0%E9%A1%B9%E7%9B%AE/%E9%A1%B9%E7%9B%AE%E6%BA%90%E7%A0%81/tdesign-pro-component/node_modules/.pnpm/@vitejs+plugin-vue-jsx@4.1.1_vite@5.4.11_vue@3.5.13/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import { resolve } from "path";
import { readdirSync } from "fs";
import ViteDTS from "file:///G:/%E5%88%98%E7%BB%AD/%E9%A1%B9%E7%9B%AE%E6%96%87%E4%BB%B6/%E4%B8%AA%E4%BA%BA%E9%A1%B9%E7%9B%AE/%E9%AB%98%E7%BA%A7%E7%BB%84%E4%BB%B6%E9%A1%B9%E7%9B%AE/tdesign/%E6%96%B0%E9%A1%B9%E7%9B%AE/%E9%A1%B9%E7%9B%AE%E6%BA%90%E7%A0%81/tdesign-pro-component/node_modules/.pnpm/vite-plugin-dts@4.3.0_@types+node@22.10.1_typescript@5.7.2_vite@5.4.11/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "G:\\\u5218\u7EED\\\u9879\u76EE\u6587\u4EF6\\\u4E2A\u4EBA\u9879\u76EE\\\u9AD8\u7EA7\u7EC4\u4EF6\u9879\u76EE\\tdesign\\\u65B0\u9879\u76EE\\\u9879\u76EE\u6E90\u7801\\tdesign-pro-component\\packages\\core";
var getComponentsNames = (baseUrl) => {
  const diries = readdirSync(baseUrl, { withFileTypes: true });
  return diries.map((item) => item.name);
};
var vite_es_config_default = defineConfig({
  plugins: [Vue(), ViteDTS(
    {
      tsconfigPath: "../../tsconfig.build.json",
      outDir: "dist/types"
    }
  ), VueJSX()],
  build: {
    outDir: "dist/es",
    lib: {
      entry: resolve(__vite_injected_original_dirname, "./index.ts"),
      name: "tdesign-pro-component",
      fileName: "index",
      formats: ["es"]
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name == "style.css") return "index.css";
          return assetInfo.name;
        },
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            return "vendor";
          }
          if (id.includes("/packages/hooks")) {
            return "hooks";
          }
          if (id.includes("/packages/utils")) {
            return "utils";
          }
          for (const name of getComponentsNames("../components")) {
            if (id.includes(`/packages/components`)) {
              const _name = id.split("/components")[1].split("/")[1];
              if (_name === name) {
                return name;
              }
            }
          }
        }
      }
    }
  }
});
export {
  vite_es_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5lcy5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJHOlxcXFxcdTUyMThcdTdFRURcXFxcXHU5ODc5XHU3NkVFXHU2NTg3XHU0RUY2XFxcXFx1NEUyQVx1NEVCQVx1OTg3OVx1NzZFRVxcXFxcdTlBRDhcdTdFQTdcdTdFQzRcdTRFRjZcdTk4NzlcdTc2RUVcXFxcdGRlc2lnblxcXFxcdTY1QjBcdTk4NzlcdTc2RUVcXFxcXHU5ODc5XHU3NkVFXHU2RTkwXHU3ODAxXFxcXHRkZXNpZ24tcHJvLWNvbXBvbmVudFxcXFxwYWNrYWdlc1xcXFxjb3JlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJHOlxcXFxcdTUyMThcdTdFRURcXFxcXHU5ODc5XHU3NkVFXHU2NTg3XHU0RUY2XFxcXFx1NEUyQVx1NEVCQVx1OTg3OVx1NzZFRVxcXFxcdTlBRDhcdTdFQTdcdTdFQzRcdTRFRjZcdTk4NzlcdTc2RUVcXFxcdGRlc2lnblxcXFxcdTY1QjBcdTk4NzlcdTc2RUVcXFxcXHU5ODc5XHU3NkVFXHU2RTkwXHU3ODAxXFxcXHRkZXNpZ24tcHJvLWNvbXBvbmVudFxcXFxwYWNrYWdlc1xcXFxjb3JlXFxcXHZpdGUuZXMuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9HOi8lRTUlODglOTglRTclQkIlQUQvJUU5JUExJUI5JUU3JTlCJUFFJUU2JTk2JTg3JUU0JUJCJUI2LyVFNCVCOCVBQSVFNCVCQSVCQSVFOSVBMSVCOSVFNyU5QiVBRS8lRTklQUIlOTglRTclQkElQTclRTclQkIlODQlRTQlQkIlQjYlRTklQTElQjklRTclOUIlQUUvdGRlc2lnbi8lRTYlOTYlQjAlRTklQTElQjklRTclOUIlQUUvJUU5JUExJUI5JUU3JTlCJUFFJUU2JUJBJTkwJUU3JUEwJTgxL3RkZXNpZ24tcHJvLWNvbXBvbmVudC9wYWNrYWdlcy9jb3JlL3ZpdGUuZXMuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCBWdWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcclxuaW1wb3J0IFZ1ZUpTWCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4JztcclxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgeyByZWFkZGlyU3luYyB9IGZyb20gJ2ZzJztcclxuaW1wb3J0IFZpdGVEVFMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJztcclxuXHJcbmNvbnN0IGdldENvbXBvbmVudHNOYW1lcyA9IChiYXNlVXJsOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IGRpcmllcyA9IHJlYWRkaXJTeW5jKGJhc2VVcmwsIHsgd2l0aEZpbGVUeXBlczogdHJ1ZSB9KTtcclxuICAgIHJldHVybiBkaXJpZXMubWFwKGl0ZW0gPT4gaXRlbS5uYW1lKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICAgIHBsdWdpbnM6IFtWdWUoKSwgVml0ZURUUyhcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRzY29uZmlnUGF0aDogJy4uLy4uL3RzY29uZmlnLmJ1aWxkLmpzb24nLFxyXG4gICAgICAgICAgICBvdXREaXI6ICdkaXN0L3R5cGVzJ1xyXG4gICAgICAgIH1cclxuICAgICksIFZ1ZUpTWCgpXSxcclxuICAgIGJ1aWxkOiB7XHJcbiAgICAgICAgb3V0RGlyOiAnZGlzdC9lcycsXHJcbiAgICAgICAgbGliOiB7XHJcbiAgICAgICAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgJy4vaW5kZXgudHMnKSxcclxuICAgICAgICAgICAgbmFtZTogJ3RkZXNpZ24tcHJvLWNvbXBvbmVudCcsXHJcbiAgICAgICAgICAgIGZpbGVOYW1lOiAnaW5kZXgnLFxyXG4gICAgICAgICAgICBmb3JtYXRzOiBbJ2VzJ11cclxuICAgICAgICB9LFxyXG4gICAgICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgICAgICAgZXh0ZXJuYWw6IFsndnVlJ10sXHJcbiAgICAgICAgICAgIG91dHB1dDoge1xyXG4gICAgICAgICAgICAgICAgYXNzZXRGaWxlTmFtZXM6IChhc3NldEluZm86IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhc3NldEluZm8ubmFtZSA9PSAnc3R5bGUuY3NzJykgcmV0dXJuICdpbmRleC5jc3MnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhc3NldEluZm8ubmFtZSBhcyBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgbWFudWFsQ2h1bmtzOiAoaWQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ25vZGVfbW9kdWxlcycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAndmVuZG9yJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKCcvcGFja2FnZXMvaG9va3MnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2hvb2tzJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnL3BhY2thZ2VzL3V0aWxzJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICd1dGlscyc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgZ2V0Q29tcG9uZW50c05hbWVzKCcuLi9jb21wb25lbnRzJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKGAvcGFja2FnZXMvY29tcG9uZW50c2ApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBfbmFtZSA9IGlkLnNwbGl0KCcvY29tcG9uZW50cycpWzFdLnNwbGl0KCcvJylbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX25hbWUgPT09IG5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7Il0sCiAgIm1hcHBpbmdzIjogIjtBQUF1bUIsU0FBUyxvQkFBb0I7QUFDcG9CLE9BQU8sU0FBUztBQUNoQixPQUFPLFlBQVk7QUFDbkIsU0FBUyxlQUFlO0FBQ3hCLFNBQVMsbUJBQW1CO0FBQzVCLE9BQU8sYUFBYTtBQUxwQixJQUFNLG1DQUFtQztBQU96QyxJQUFNLHFCQUFxQixDQUFDLFlBQW9CO0FBQzVDLFFBQU0sU0FBUyxZQUFZLFNBQVMsRUFBRSxlQUFlLEtBQUssQ0FBQztBQUMzRCxTQUFPLE9BQU8sSUFBSSxVQUFRLEtBQUssSUFBSTtBQUN2QztBQUVBLElBQU8seUJBQVEsYUFBYTtBQUFBLEVBQ3hCLFNBQVMsQ0FBQyxJQUFJLEdBQUc7QUFBQSxJQUNiO0FBQUEsTUFDSSxjQUFjO0FBQUEsTUFDZCxRQUFRO0FBQUEsSUFDWjtBQUFBLEVBQ0osR0FBRyxPQUFPLENBQUM7QUFBQSxFQUNYLE9BQU87QUFBQSxJQUNILFFBQVE7QUFBQSxJQUNSLEtBQUs7QUFBQSxNQUNELE9BQU8sUUFBUSxrQ0FBVyxZQUFZO0FBQUEsTUFDdEMsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLE1BQ1YsU0FBUyxDQUFDLElBQUk7QUFBQSxJQUNsQjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ1gsVUFBVSxDQUFDLEtBQUs7QUFBQSxNQUNoQixRQUFRO0FBQUEsUUFDSixnQkFBZ0IsQ0FBQyxjQUFtQjtBQUNoQyxjQUFJLFVBQVUsUUFBUSxZQUFhLFFBQU87QUFDMUMsaUJBQU8sVUFBVTtBQUFBLFFBQ3JCO0FBQUEsUUFDQSxjQUFjLENBQUMsT0FBTztBQUNsQixjQUFJLEdBQUcsU0FBUyxjQUFjLEdBQUc7QUFDN0IsbUJBQU87QUFBQSxVQUNYO0FBQ0EsY0FBSSxHQUFHLFNBQVMsaUJBQWlCLEdBQUc7QUFDaEMsbUJBQU87QUFBQSxVQUNYO0FBRUEsY0FBSSxHQUFHLFNBQVMsaUJBQWlCLEdBQUc7QUFDaEMsbUJBQU87QUFBQSxVQUNYO0FBRUEscUJBQVcsUUFBUSxtQkFBbUIsZUFBZSxHQUFHO0FBQ3BELGdCQUFJLEdBQUcsU0FBUyxzQkFBc0IsR0FBRztBQUNyQyxvQkFBTSxRQUFRLEdBQUcsTUFBTSxhQUFhLEVBQUUsQ0FBQyxFQUFFLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDckQsa0JBQUksVUFBVSxNQUFNO0FBQ2hCLHVCQUFPO0FBQUEsY0FDWDtBQUFBLFlBQ0o7QUFBQSxVQUNKO0FBQUEsUUFDSjtBQUFBLE1BQ0o7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
