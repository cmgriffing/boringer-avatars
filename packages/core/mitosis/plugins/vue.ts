import { MitosisPlugin } from "../types";
import type { MitosisComponent } from "@builder.io/mitosis";

export function CustomVuePlugin(): MitosisPlugin {
  return {
    code: {
      post: (code: string) => {
        let newCode = code.replace(
          new RegExp("\\<script\\>", "gm"),
          '<script lang="ts">'
        );

        newCode = newCode.replace(
          new RegExp("this\\.", "gm"),
          "(this as any)."
        );

        newCode = newCode.replace(
          new RegExp(`v-bind="props"`, "gm"),
          `v-bind="$props"`
        );

        newCode = newCode.replace(
          new RegExp(`(import \\S+ from ".\\/avatars\\/avatar-\\S+)";`, "gm"),
          `$1.vue";`
        );

        return newCode;
      },
    },
  };
}
