import { MitosisPlugin } from "../types";

export function CustomReactPlugin(): MitosisPlugin {
  return {
    code: {
      post: (code: string) => {
        let newCode = code.replace(
          new RegExp(
            `const state = useLocalObservable\\(\\(\\) => \\((.+)\\)\\)\\;`,
            "gm"
          ),
          `const state = $1;`
        );

        newCode = newCode.replace(
          new RegExp(`checkedVariant: "beam"`, "gm"),
          `checkedVariant: coerceVariant(props.variant) || "beam"`
        );

        newCode = newCode.replace(
          new RegExp(`useEffect\\(.+\\s*.+\\s*.+`, "gm"),
          ""
        );

        return newCode;
      },
    },
  };
}
