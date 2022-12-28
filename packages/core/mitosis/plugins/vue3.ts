import { MitosisPlugin } from "../types";
import type { MitosisComponent } from "@builder.io/mitosis";

export function CustomVue3Plugin(): MitosisPlugin {
  return {
    code: {
      post: (code: string) => {
        let newCode = code.replace(
          new RegExp(`(import \\S+ from ".\\/avatars\\/avatar-\\S+)";`, "gm"),
          `$1.vue";`
        );

        newCode = newCode.replace(
          new RegExp(`this\\.props`, "gm"),
          `this.$props`
        );

        newCode = newCode.replace(
          `props: ["variant"],`,
          `props: ["variant", "name", "colors", "size", "title", "square"],`
        );

        return newCode;
      },
    },
  };
}
