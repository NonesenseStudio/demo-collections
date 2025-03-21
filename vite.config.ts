import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { resolve } from "path";
import {
  ElementPlusResolver,
  AntDesignVueResolver,
} from "unplugin-vue-components/resolvers";

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
      Components({
        dts: true,
        dirs: ["src/components"],
        resolvers: [
          ElementPlusResolver(),
          AntDesignVueResolver({
            importStyle: "less", // 可选：启用Less样式
          }),
        ],
      }),
    ],
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
