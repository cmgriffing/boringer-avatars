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

        return newCode;
      },
    },
  };
}
