import * as React from "react";
import { useEffect } from "react";
import { useLocalObservable } from "mobx-react-lite";
import type { Variant } from "./avatar.utils";
interface AvatarProps {
  variant: Variant;
  colors: string[];
  name: string;
  square: boolean;
  title: boolean;
  size: number;
}

import { coerceVariant, defaultAvatarProps } from "./avatar.utils";
import AvatarBauhaus from "./avatars/avatar-bauhaus";
import AvatarBeam from "./avatars/avatar-beam";
import AvatarMarble from "./avatars/avatar-marble";
import AvatarPixel from "./avatars/avatar-pixel";
import AvatarRing from "./avatars/avatar-ring";
import AvatarSunset from "./avatars/avatar-sunset";

export default function Avatar(props: Partial<AvatarProps>) {
  const state = { checkedVariant: coerceVariant(props.variant) || "beam" };

  

  

  return (
    <>
      {state.checkedVariant === `bauhaus` ? (
        <>
          <AvatarBauhaus
            {...defaultAvatarProps}
            colors={props.colors}
            name={props.name}
            square={props.square}
            title={props.title}
            size={props.size}
          />
        </>
      ) : null}

      {state.checkedVariant === `beam` ? (
        <>
          <AvatarBeam
            {...defaultAvatarProps}
            colors={props.colors}
            name={props.name}
            square={props.square}
            title={props.title}
            size={props.size}
          />
        </>
      ) : null}

      {state.checkedVariant === `marble` ? (
        <>
          <AvatarMarble
            {...defaultAvatarProps}
            colors={props.colors}
            name={props.name}
            square={props.square}
            title={props.title}
            size={props.size}
          />
        </>
      ) : null}

      {state.checkedVariant === `pixel` ? (
        <>
          <AvatarPixel
            {...defaultAvatarProps}
            colors={props.colors}
            name={props.name}
            square={props.square}
            title={props.title}
            size={props.size}
          />
        </>
      ) : null}

      {state.checkedVariant === `ring` ? (
        <>
          <AvatarRing
            {...defaultAvatarProps}
            colors={props.colors}
            name={props.name}
            square={props.square}
            title={props.title}
            size={props.size}
          />
        </>
      ) : null}

      {state.checkedVariant === `sunset` ? (
        <>
          <AvatarSunset
            {...defaultAvatarProps}
            colors={props.colors}
            name={props.name}
            square={props.square}
            title={props.title}
            size={props.size}
          />
        </>
      ) : null}
    </>
  );
}
