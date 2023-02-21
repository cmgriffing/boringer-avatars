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

        newCode = newCode.replace(new RegExp(`export default`, "gm"), `export`);

        newCode = newCode.replace(
          new RegExp(`import (Avatar[A-Za-z]*) from`, "gm"),
          "import { $1 } from"
        );

        newCode = newCode.replace(new RegExp(`\\<\\>`, "gm"), "<Fragment>");

        newCode = newCode.replace(new RegExp(`\\<\\/\\>`, "gm"), "</Fragment>");

        return newCode;
      },
    },
  };
}
