import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import devtools from "solid-devtools/vite";

export default defineConfig({
  base: "/solid/",
  plugins: [
    solidPlugin(),
    devtools({
      /* additional options */
      autoname: true, // e.g. enable autoname
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});
