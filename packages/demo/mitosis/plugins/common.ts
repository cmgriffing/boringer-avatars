import { MitosisPlugin } from "../types";

export function CustomCommonPlugin(): MitosisPlugin {
  return {
    code: {
      post: (code: string) => {
        let newCode = code;

        return newCode;
      },
    },
  };
}
