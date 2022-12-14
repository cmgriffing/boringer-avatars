import { MitosisPlugin } from "../types";

export function CustomVue3Plugin(): MitosisPlugin {
  return {
    code: {
      post: (code: string) => {
        let newCode = code;

        newCode = newCode.replace(
          new RegExp(`this\\.props`, "gm"),
          `this.$props`
        );

        newCode = newCode.replace(
          new RegExp(`\\"selected\\" \\: \\"\\"`, "gm"),
          `'selected' : ''`
        );

        return newCode;
      },
    },
  };
}
