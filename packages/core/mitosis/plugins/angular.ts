import { MitosisPlugin } from "../types";

interface CustomAngularPluginProps {
  attributes: string[];
}

export function CustomAngularPlugin({ attributes }: CustomAngularPluginProps) {
  return function (): MitosisPlugin {
    return {
      code: {
        pre: (code: string) => {
          let newCode = code;

          newCode = newCode.replace(
            new RegExp(`(import \\S+ from ".\\/avatars\\/avatar-\\S+)";`, "gm"),
            `$1.component";`
          );

          return newCode;
        },
        post: (code: string) => {
          let newCode = code;

          newCode = newCode.replace(
            new RegExp(`(import \\S+ from ".\\/avatars\\/avatar-\\S+)";`, "gm"),
            `$1.component";`
          );

          newCode = newCode.replace(new RegExp("\\\\`", "gm"), `\\'`);

          return newCode;
        },
      },
    };
  };
}
