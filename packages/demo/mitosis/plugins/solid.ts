import { MitosisComponent } from "@builder.io/mitosis";
import { MitosisPlugin } from "../types";

export function CustomSolidPlugin(): MitosisPlugin {
  return {
    json: {
      post: (json: MitosisComponent) => {},
    },
    code: {
      // Happens after formatting
      post: (code: string) => {
        let newCode = code;

        return newCode;
      },
    },
  };
}
