import * as React from "react";
import { useEffect } from "react";
import { useLocalObservable } from "mobx-react-lite";
import type { Variant } from "./avatar.utils";
// import AvatarRing from "./avatar-ring.lite";
// import AvatarPixel from "./avatar-pixel.lite";
// import AvatarBeam from "./avatar-beam.lite";
// import AvatarSunset from "./avatar-sunset.lite";
// import AvatarMarble from "./avatar-marble.lite";
interface AvatarProps {
  variant: Variant;
  colors: string[];
  name: string;
  square: boolean;
  title: boolean;
  size: number;
}

import AvatarBauhaus from "./avatars/avatar-bauhaus";
import { coerceVariant, defaultAvatarProps } from "./avatar.utils";

export default function Avatar(props: Partial<AvatarProps>) {
  const state = useLocalObservable(() => ({ checkedVariant: "bauhaus" }));

  useEffect(() => {
    state.checkedVariant = coerceVariant(props.variant) || "marble";
  }, []);

  useEffect(() => {
    state.checkedVariant = coerceVariant(props.variant) || "marble";
  }, [props.variant]);

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
    </>
  );
}
