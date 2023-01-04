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

          return newCode;
        },
        post: (code: string) => {
          let newCode = code;

          return newCode;
        },
      },
    };
  };
}
