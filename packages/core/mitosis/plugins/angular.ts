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
            new RegExp(
              `import (\\S+) from '\\.\\/avatars\\/avatar-(\\S+)';`,
              "gm"
            ),
            `import { $1Module } from './avatars/avatar-$2';`
          );

          newCode = newCode.replace(
            new RegExp(
              `import \\{ AvatarProps \\} from '\\.\\./avatar\\.utils';`,
              "gm"
            ),
            `import { AvatarProps, defaultAvatarProps } from '../avatar.utils';`
          );

          return newCode;
        },
        post: (code: string) => {
          let newCode = code;

          newCode = newCode.replace(
            new RegExp(`import (\\S+) from '\\.\\/avatars/avatar-\\S+';`, "gm"),
            `import { $1Module } from './avatars/avatar-$2';`
          );

          newCode = newCode.replace(
            /@Input\(\) (\S+): Omit<AvatarProps, \S+;$/gm,
            `@Input() $1: Omit<AvatarProps, 'variant'>['$1'] = defaultAvatarProps['$1'];`
          );

          newCode = newCode.replace(new RegExp("\\\\`", "gm"), `\\'`);

          return newCode;
        },
      },
    };
  };
}
