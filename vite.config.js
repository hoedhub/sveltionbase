import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import routify from "@roxi/routify/vite-plugin";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), routify({})],
  resolve: {
    alias: {
      $lib: resolve("./src/lib"),
      $components: resolve("./src/components"),
      $services: resolve("./src/services"),
      $routes: resolve("./src/routes"),
      $static: resolve("./src/static"),
      $ionic: resolve("./src/lib/ionic"),
    },
  },
});
