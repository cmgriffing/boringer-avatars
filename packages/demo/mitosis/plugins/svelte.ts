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
        let newCode = code;

        newCode = newCode.replace(
          new RegExp("\\.\\.\\.props", "gm"),
          "...$$$$props"
        );

        return newCode;
      },
    },
  };
}
