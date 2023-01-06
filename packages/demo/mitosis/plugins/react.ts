import { MitosisPlugin } from "../types";

export function CustomReactPlugin(): MitosisPlugin {
  return {
    code: {
      post: (code: string) => {
        let newCode = code;

        newCode = newCode.replace(new RegExp("\\-rule", "gm"), "Rule");
        newCode = newCode.replace(
          new RegExp("stroke\\-width", "gm"),
          "strokeWidth"
        );

        return newCode;
      },
    },
  };
}
