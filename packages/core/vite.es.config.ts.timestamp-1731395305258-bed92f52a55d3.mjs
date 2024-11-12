// vite.es.config.ts
import { defineConfig } from "file:///G:/%E5%88%98%E7%BB%AD/%E9%A1%B9%E7%9B%AE%E6%96%87%E4%BB%B6/%E4%B8%AA%E4%BA%BA%E9%A1%B9%E7%9B%AE/%E9%AB%98%E7%BA%A7%E7%BB%84%E4%BB%B6%E9%A1%B9%E7%9B%AE/tdesign/%E6%96%B0%E9%A1%B9%E7%9B%AE/%E9%A1%B9%E7%9B%AE%E6%BA%90%E7%A0%81/tdesign-pro-component/node_modules/.pnpm/vite@5.4.10_@types+node@22.9.0/node_modules/vite/dist/node/index.js";
import Vue from "file:///G:/%E5%88%98%E7%BB%AD/%E9%A1%B9%E7%9B%AE%E6%96%87%E4%BB%B6/%E4%B8%AA%E4%BA%BA%E9%A1%B9%E7%9B%AE/%E9%AB%98%E7%BA%A7%E7%BB%84%E4%BB%B6%E9%A1%B9%E7%9B%AE/tdesign/%E6%96%B0%E9%A1%B9%E7%9B%AE/%E9%A1%B9%E7%9B%AE%E6%BA%90%E7%A0%81/tdesign-pro-component/node_modules/.pnpm/@vitejs+plugin-vue@5.1.4_vite@5.4.10_vue@3.5.12/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve } from "path";
import { readdirSync } from "fs";
import ViteDTS from "file:///G:/%E5%88%98%E7%BB%AD/%E9%A1%B9%E7%9B%AE%E6%96%87%E4%BB%B6/%E4%B8%AA%E4%BA%BA%E9%A1%B9%E7%9B%AE/%E9%AB%98%E7%BA%A7%E7%BB%84%E4%BB%B6%E9%A1%B9%E7%9B%AE/tdesign/%E6%96%B0%E9%A1%B9%E7%9B%AE/%E9%A1%B9%E7%9B%AE%E6%BA%90%E7%A0%81/tdesign-pro-component/node_modules/.pnpm/vite-plugin-dts@4.3.0_@types+node@22.9.0_typescript@5.6.3_vite@5.4.10/node_modules/vite-plugin-dts/dist/index.mjs";
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
  )],
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5lcy5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJHOlxcXFxcdTUyMThcdTdFRURcXFxcXHU5ODc5XHU3NkVFXHU2NTg3XHU0RUY2XFxcXFx1NEUyQVx1NEVCQVx1OTg3OVx1NzZFRVxcXFxcdTlBRDhcdTdFQTdcdTdFQzRcdTRFRjZcdTk4NzlcdTc2RUVcXFxcdGRlc2lnblxcXFxcdTY1QjBcdTk4NzlcdTc2RUVcXFxcXHU5ODc5XHU3NkVFXHU2RTkwXHU3ODAxXFxcXHRkZXNpZ24tcHJvLWNvbXBvbmVudFxcXFxwYWNrYWdlc1xcXFxjb3JlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJHOlxcXFxcdTUyMThcdTdFRURcXFxcXHU5ODc5XHU3NkVFXHU2NTg3XHU0RUY2XFxcXFx1NEUyQVx1NEVCQVx1OTg3OVx1NzZFRVxcXFxcdTlBRDhcdTdFQTdcdTdFQzRcdTRFRjZcdTk4NzlcdTc2RUVcXFxcdGRlc2lnblxcXFxcdTY1QjBcdTk4NzlcdTc2RUVcXFxcXHU5ODc5XHU3NkVFXHU2RTkwXHU3ODAxXFxcXHRkZXNpZ24tcHJvLWNvbXBvbmVudFxcXFxwYWNrYWdlc1xcXFxjb3JlXFxcXHZpdGUuZXMuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9HOi8lRTUlODglOTglRTclQkIlQUQvJUU5JUExJUI5JUU3JTlCJUFFJUU2JTk2JTg3JUU0JUJCJUI2LyVFNCVCOCVBQSVFNCVCQSVCQSVFOSVBMSVCOSVFNyU5QiVBRS8lRTklQUIlOTglRTclQkElQTclRTclQkIlODQlRTQlQkIlQjYlRTklQTElQjklRTclOUIlQUUvdGRlc2lnbi8lRTYlOTYlQjAlRTklQTElQjklRTclOUIlQUUvJUU5JUExJUI5JUU3JTlCJUFFJUU2JUJBJTkwJUU3JUEwJTgxL3RkZXNpZ24tcHJvLWNvbXBvbmVudC9wYWNrYWdlcy9jb3JlL3ZpdGUuZXMuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCBWdWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcclxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgeyByZWFkZGlyU3luYyB9IGZyb20gJ2ZzJztcclxuaW1wb3J0IFZpdGVEVFMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJztcclxuXHJcbmNvbnN0IGdldENvbXBvbmVudHNOYW1lcyA9IChiYXNlVXJsOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IGRpcmllcyA9IHJlYWRkaXJTeW5jKGJhc2VVcmwsIHsgd2l0aEZpbGVUeXBlczogdHJ1ZSB9KTtcclxuICAgIHJldHVybiBkaXJpZXMubWFwKGl0ZW0gPT4gaXRlbS5uYW1lKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICAgIHBsdWdpbnM6IFtWdWUoKSwgVml0ZURUUyhcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRzY29uZmlnUGF0aDogJy4uLy4uL3RzY29uZmlnLmJ1aWxkLmpzb24nLFxyXG4gICAgICAgICAgICBvdXREaXI6ICdkaXN0L3R5cGVzJ1xyXG4gICAgICAgIH1cclxuICAgICldLFxyXG4gICAgYnVpbGQ6IHtcclxuICAgICAgICBvdXREaXI6ICdkaXN0L2VzJyxcclxuICAgICAgICBsaWI6IHtcclxuICAgICAgICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9pbmRleC50cycpLFxyXG4gICAgICAgICAgICBuYW1lOiAndGRlc2lnbi1wcm8tY29tcG9uZW50JyxcclxuICAgICAgICAgICAgZmlsZU5hbWU6ICdpbmRleCcsXHJcbiAgICAgICAgICAgIGZvcm1hdHM6IFsnZXMnXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICAgICAgICBleHRlcm5hbDogWyd2dWUnXSxcclxuICAgICAgICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgICAgICAgICBhc3NldEZpbGVOYW1lczogKGFzc2V0SW5mbzogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFzc2V0SW5mby5uYW1lID09ICdzdHlsZS5jc3MnKSByZXR1cm4gJ2luZGV4LmNzcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFzc2V0SW5mby5uYW1lIGFzIHN0cmluZztcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBtYW51YWxDaHVua3M6IChpZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICd2ZW5kb3InO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJy9wYWNrYWdlcy9ob29rcycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnaG9va3MnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKCcvcGFja2FnZXMvdXRpbHMnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ3V0aWxzJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBnZXRDb21wb25lbnRzTmFtZXMoJy4uL2NvbXBvbmVudHMnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoYC9wYWNrYWdlcy9jb21wb25lbnRzYCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9uYW1lID0gaWQuc3BsaXQoJy9jb21wb25lbnRzJylbMV0uc3BsaXQoJy8nKVsxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfbmFtZSA9PT0gbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTsiXSwKICAibWFwcGluZ3MiOiAiO0FBQXVtQixTQUFTLG9CQUFvQjtBQUNwb0IsT0FBTyxTQUFTO0FBQ2hCLFNBQVMsZUFBZTtBQUN4QixTQUFTLG1CQUFtQjtBQUM1QixPQUFPLGFBQWE7QUFKcEIsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTSxxQkFBcUIsQ0FBQyxZQUFvQjtBQUM1QyxRQUFNLFNBQVMsWUFBWSxTQUFTLEVBQUUsZUFBZSxLQUFLLENBQUM7QUFDM0QsU0FBTyxPQUFPLElBQUksVUFBUSxLQUFLLElBQUk7QUFDdkM7QUFFQSxJQUFPLHlCQUFRLGFBQWE7QUFBQSxFQUN4QixTQUFTLENBQUMsSUFBSSxHQUFHO0FBQUEsSUFDYjtBQUFBLE1BQ0ksY0FBYztBQUFBLE1BQ2QsUUFBUTtBQUFBLElBQ1o7QUFBQSxFQUNKLENBQUM7QUFBQSxFQUNELE9BQU87QUFBQSxJQUNILFFBQVE7QUFBQSxJQUNSLEtBQUs7QUFBQSxNQUNELE9BQU8sUUFBUSxrQ0FBVyxZQUFZO0FBQUEsTUFDdEMsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLE1BQ1YsU0FBUyxDQUFDLElBQUk7QUFBQSxJQUNsQjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ1gsVUFBVSxDQUFDLEtBQUs7QUFBQSxNQUNoQixRQUFRO0FBQUEsUUFDSixnQkFBZ0IsQ0FBQyxjQUFtQjtBQUNoQyxjQUFJLFVBQVUsUUFBUSxZQUFhLFFBQU87QUFDMUMsaUJBQU8sVUFBVTtBQUFBLFFBQ3JCO0FBQUEsUUFDQSxjQUFjLENBQUMsT0FBTztBQUNsQixjQUFJLEdBQUcsU0FBUyxjQUFjLEdBQUc7QUFDN0IsbUJBQU87QUFBQSxVQUNYO0FBQ0EsY0FBSSxHQUFHLFNBQVMsaUJBQWlCLEdBQUc7QUFDaEMsbUJBQU87QUFBQSxVQUNYO0FBRUEsY0FBSSxHQUFHLFNBQVMsaUJBQWlCLEdBQUc7QUFDaEMsbUJBQU87QUFBQSxVQUNYO0FBRUEscUJBQVcsUUFBUSxtQkFBbUIsZUFBZSxHQUFHO0FBQ3BELGdCQUFJLEdBQUcsU0FBUyxzQkFBc0IsR0FBRztBQUNyQyxvQkFBTSxRQUFRLEdBQUcsTUFBTSxhQUFhLEVBQUUsQ0FBQyxFQUFFLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDckQsa0JBQUksVUFBVSxNQUFNO0FBQ2hCLHVCQUFPO0FBQUEsY0FDWDtBQUFBLFlBQ0o7QUFBQSxVQUNKO0FBQUEsUUFDSjtBQUFBLE1BQ0o7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
