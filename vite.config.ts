import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { resolve } from "path";
import {
  ElementPlusResolver,
  AntDesignVueResolver,
} from "unplugin-vue-components/resolvers";
import { FileSystemIconLoader } from "unplugin-icons/loaders";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),
      AutoImport({
        imports: ["vue", "vue-router"],
        dts: "src/auto-imports.d.ts",
        resolvers: [ElementPlusResolver()],
      }),
      Icons({
        compiler: "vue3",
        customCollections: {
          custom: FileSystemIconLoader("./src/assets/icons", (svg) =>
            svg.replace(/^<svg /, '<svg fill="currentColor" '),
          ),
          ant: FileSystemIconLoader("src/assets/ant-icons", (svg) =>
            svg.replace(/^<svg /, '<svg fill="currentColor" '),
          ),
        },
        autoInstall: true,
      }),
      Components({
        dts: true,
        resolvers: [
          ElementPlusResolver(),
          AntDesignVueResolver({
            importStyle: "less",
          }),
          IconsResolver({
            prefix: "i",
            enabledCollections: ["ant", "custom"],
          }),
        ],
      }),
    ],
    server: {
      proxy: {
        "/zjapi": {
          target: "https://data.zjzwfw.gov.cn/jdop_front/interfaces",
          changeOrigin: true,
          pathRewrite: { "^/zjapi": "" },
        },
        "/ai": {
          target: "https://chat.zju.edu.cn/api/",
          changeOrigin: true,
          pathRewrite: { "^/ai": "" },
        }
      },
    },
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
        "~": resolve(__dirname),
      },
    },
    esbuild: {
      drop: command === "build" ? ["debugger", "console"] : [],
    },
    build: {
      chunkSizeWarningLimit: 1024,
    },
  };
});
