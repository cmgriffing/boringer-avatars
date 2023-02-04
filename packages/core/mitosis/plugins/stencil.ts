import { MitosisPlugin } from "../types";

export function CustomStencilPlugin(): MitosisPlugin {
  return {
    code: {
      post: (code: string) => {
        let newCode = code;

        newCode = newCode.replace(
          new RegExp(`tag: "avatar`, "gm"),
          `tag: "boringer-avatar`
        );
        // export default

        newCode = newCode.replace(new RegExp(`export default`, "gm"), `export`);

        newCode = newCode.replace(
          new RegExp(`import (Avatar[A-Za-z]*) from`, "gm"),
          "import { $1 } from"
        );

        return newCode;
      },
    },
  };
}
