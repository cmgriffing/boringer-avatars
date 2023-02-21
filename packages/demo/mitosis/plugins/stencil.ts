import { MitosisPlugin } from "../types";

export function CustomStencilPlugin(): MitosisPlugin {
  return {
    json: {
      post: (json) => {
        console.log(JSON.stringify(json, null, 2));
      },
    },
    code: {
      post: (code: string) => {
        let newCode = code;

        newCode = newCode.replace(new RegExp(` for=`, "gm"), " htmlFor=");

        newCode = newCode.replace(
          new RegExp(`@Prop\\(\\) onChange: any;`, "gm"),
          "@Event() onChange: any;"
        );

        newCode = newCode.replace(
          new RegExp(` } from "@stencil/core";`, "gm"),
          `, Event } from "@stencil/core";`
        );

        newCode = newCode.replace(new RegExp(`state\\.`, "gm"), `this.`);

        newCode = newCode.replace(new RegExp(`tag: "`, "gm"), `tag: "demo-`);

        newCode = newCode.replace(
          new RegExp(`this\\.onChange\\(`, "gm"),
          `this.onChange.emit(`
        );

        newCode = newCode.replace(new RegExp(`export default`, "gm"), `export`);

        // this.handleChange(

        return newCode;
      },
    },
  };
}
