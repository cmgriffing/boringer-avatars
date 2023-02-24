import { staticAdaptor } from "@builder.io/qwik-city/adaptors/static/vite";
import { extendConfig } from "@builder.io/qwik-city/vite";
import baseConfig from "../../vite.config";

export default extendConfig(baseConfig, () => {
  return {
    base: "/boringer-avatars/qwik/",
    build: {
      ssr: true,
      rollupOptions: {
        input: ["@qwik-city-plan"],
      },
    },
    plugins: [
      staticAdaptor({
        origin: "https://cmgriffing.github.io",
      }),
    ],
  };
});
