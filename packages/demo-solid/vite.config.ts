import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [
    solidPlugin({ solid: { generate: "ssr", hydratable: true } }),
    dts({
      insertTypesEntry: true,
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "DemoSolid",
      // the proper extensions will be added
      fileName: "demo.solid",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["solid"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          solid: "Solid",
        },
      },
    },
  },
});
