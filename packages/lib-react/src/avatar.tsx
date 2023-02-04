import * as React from "react";
import type { AvatarProps } from "./avatar.utils";
import { coerceVariant, defaultAvatarProps } from "./avatar.utils";
import AvatarBauhaus from "./avatars/avatar-bauhaus";
import AvatarBeam from "./avatars/avatar-beam";
import AvatarMarble from "./avatars/avatar-marble";
import AvatarPixel from "./avatars/avatar-pixel";
import AvatarRing from "./avatars/avatar-ring";
import AvatarSunset from "./avatars/avatar-sunset";

export default function Avatar(props: Partial<AvatarProps>) {
  return (
    <div>
      {props.variant === `bauhaus` ? (
        <>
          <AvatarBauhaus
            colors={props.colors || defaultAvatarProps.colors}
            name={props.name || defaultAvatarProps.name}
            square={props.square || defaultAvatarProps.square}
            hasTitle={props.hasTitle || defaultAvatarProps.hasTitle}
            size={props.size || defaultAvatarProps.size}
          />
        </>
      ) : null}

      {props.variant === `beam` ? (
        <>
          <AvatarBeam
            colors={props.colors || defaultAvatarProps.colors}
            name={props.name || defaultAvatarProps.name}
            square={props.square || defaultAvatarProps.square}
            hasTitle={props.hasTitle || defaultAvatarProps.hasTitle}
            size={props.size || defaultAvatarProps.size}
          />
        </>
      ) : null}

      {props.variant === `marble` ? (
        <>
          <AvatarMarble
            colors={props.colors || defaultAvatarProps.colors}
            name={props.name || defaultAvatarProps.name}
            square={props.square || defaultAvatarProps.square}
            hasTitle={props.hasTitle || defaultAvatarProps.hasTitle}
            size={props.size || defaultAvatarProps.size}
          />
        </>
      ) : null}

      {props.variant === `pixel` ? (
        <>
          <AvatarPixel
            colors={props.colors || defaultAvatarProps.colors}
            name={props.name || defaultAvatarProps.name}
            square={props.square || defaultAvatarProps.square}
            hasTitle={props.hasTitle || defaultAvatarProps.hasTitle}
            size={props.size || defaultAvatarProps.size}
          />
        </>
      ) : null}

      {props.variant === `ring` ? (
        <>
          <AvatarRing
            colors={props.colors || defaultAvatarProps.colors}
            name={props.name || defaultAvatarProps.name}
            square={props.square || defaultAvatarProps.square}
            hasTitle={props.hasTitle || defaultAvatarProps.hasTitle}
            size={props.size || defaultAvatarProps.size}
          />
        </>
      ) : null}

      {props.variant === `sunset` ? (
        <>
          <AvatarSunset
            colors={props.colors || defaultAvatarProps.colors}
            name={props.name || defaultAvatarProps.name}
            square={props.square || defaultAvatarProps.square}
            hasTitle={props.hasTitle || defaultAvatarProps.hasTitle}
            size={props.size || defaultAvatarProps.size}
          />
        </>
      ) : null}
    </div>
  );
}
