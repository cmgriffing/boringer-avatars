import { MitosisPlugin } from "../types";

export function CustomQwikPlugin(): MitosisPlugin {
  return {
    code: {
      post: (code: string) => {
        let newCode = code;

        newCode = newCode.replace(
          new RegExp(`props\\.onChange`, "gm"),
          "props.onChange$$"
        );

        newCode = newCode.replace(new RegExp(`htmlFor`, "gm"), "for");

        return newCode;
      },
    },
  };
}
