import { MitosisComponent } from "@builder.io/mitosis";
import { MitosisPlugin } from "../types";

export function CustomSveltePlugin(): MitosisPlugin {
  return {
    json: {
      post: (json: MitosisComponent) => {
        // console.log("Post children: ", JSON.stringify(json.children, null, 2));
      },
    },
    code: {
      // Happens after formatting
      post: (code: string) => {
        let newCode = code.replace(
          new RegExp("\\{\\.\\.\\.props\\}", "gm"),
          "{...$$$$props}"
        );

        newCode = newCode.replace(new RegExp("state\\.", "gm"), "");

        newCode = newCode.replace(
          new RegExp(`checkedVariant = "bauhaus";`),
          `let checkedVariant = "bauhaus";`
        );

        newCode = newCode.replace(
          new RegExp(`(import \\S+ from ".\\/avatars\\/avatar-\\S+)";`, "gm"),
          `$1.svelte";`
        );

        return newCode;
      },
    },
  };
}
