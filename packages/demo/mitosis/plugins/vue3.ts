import { MitosisPlugin } from "../types";

export function CustomVue3Plugin(): MitosisPlugin {
  return {
    code: {
      pre: (code: string) => {
        let newCode = code;

        // newCode = newCode.replace(
        //   new RegExp(`(import \\S+ from ".\\/avatars\\/avatar-\\S+)";`, "gm"),
        //   `$1.vue";`
        // );

        // newCode = newCode.replace(
        //   new RegExp(`this\\.props`, "gm"),
        //   `this.$props`
        // );

        //TODO: "selected" : "" -> 'selected' : ''
        // newCode = newCode.replace(
        //   new RegExp(`\\"selected\\" \\: \\"\\"`, "gm"),
        //   `'selected' : ''`
        // );

        // newCode = newCode.replace(
        //   `props: ["variant"],`,
        //   `props: ["variant", "name", "colors", "size", "title", "square"],`
        // );

        return newCode;
      },
      post: (code: string) => {
        let newCode = code;

        // newCode = newCode.replace(
        //   new RegExp(`(import \\S+ from ".\\/avatars\\/avatar-\\S+)";`, "gm"),
        //   `$1.vue";`
        // );

        newCode = newCode.replace(
          new RegExp(`this\\.props`, "gm"),
          `this.$props`
        );

        //TODO: "selected" : "" -> 'selected' : ''

        console.log("before: ", newCode);

        newCode = newCode.replace(
          new RegExp(`\\"selected\\" \\: \\"\\"`, "gm"),
          `'selected' : ''`
        );

        console.log("after: ", newCode);

        // newCode = newCode.replace(
        //   `props: ["variant"],`,
        //   `props: ["variant", "name", "colors", "size", "title", "square"],`
        // );

        return newCode;
      },
    },
  };
}
