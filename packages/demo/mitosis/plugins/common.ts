import { MitosisPlugin } from "../types";

export function CustomCommonPlugin(): MitosisPlugin {
  return {
    code: {
      post: (code: string) => {
        let newCode = code;

        newCode = newCode.replace(
          "getLabelClass(Circle)",
          "getLabelClass(AvatarShape.Circle)"
        );

        newCode = newCode.replace(
          "getLabelClass(Square)",
          "getLabelClass(AvatarShape.Square)"
        );

        return newCode;
      },
    },
  };
}
