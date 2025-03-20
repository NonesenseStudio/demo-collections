import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import AutoImport from "unplugin-auto-import/vite";
import * as process from "process";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  base: "./",
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router"],
      dts: "src/auto-imports.d.ts",
    }),
    Components({
      dts: true,
      resolvers: [
        AntDesignVueResolver({
          importStyle: "less",
          resolveIcons: true,
        }),
      ],
      dirs: ["src/components"],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "src"),
      "~": path.resolve(process.cwd()),
    },
  },
});
