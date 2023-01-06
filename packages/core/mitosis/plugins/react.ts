import { MitosisPlugin } from "../types";

export function CustomReactPlugin(): MitosisPlugin {
  return {
    code: {
      post: (code: string) => {
        let newCode = code;

        // newCode = newCode.replace(
        //   new RegExp(`checkedVariant: "beam"`, "gm"),
        //   `checkedVariant: coerceVariant(props.variant) || "beam"`
        // );

        // newCode = newCode.replace(
        //   new RegExp(`useEffect\\(.+\\s*.+\\s*.+`, "gm"),
        //   ""
        // );

        newCode = newCode.replace(
          new RegExp(`stop\\-color`, "gm"),
          "stopColor"
        );

        newCode = newCode.replace(new RegExp("-\\rule", "gm"), "Rule");
        newCode = newCode.replace(
          new RegExp("stroke\\width", "gm"),
          "strokeWidth"
        );

        return newCode;
      },
    },
  };
}
