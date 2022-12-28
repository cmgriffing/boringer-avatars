import * as React from "react";
import { useState, useEffect } from "react";
import type { AvatarProps } from "./avatar.utils";
import { coerceVariant, defaultAvatarProps } from "./avatar.utils";
import AvatarBauhaus from "./avatars/avatar-bauhaus";
import AvatarBeam from "./avatars/avatar-beam";
import AvatarMarble from "./avatars/avatar-marble";
import AvatarPixel from "./avatars/avatar-pixel";
import AvatarRing from "./avatars/avatar-ring";
import AvatarSunset from "./avatars/avatar-sunset";

export default function Avatar(props: Partial<AvatarProps>) {
  const [checkedVariant, setCheckedVariant] = useState(() => "beam");

  const [coercedProps, setCoercedProps] = useState(() => defaultAvatarProps);

  useEffect(() => {
    setCheckedVariant(coerceVariant(props.variant) || "beam");
    setCoercedProps({ ...defaultAvatarProps, ...props });
  }, []);

  useEffect(() => {
    setCheckedVariant(coerceVariant(props.variant) || "beam");
    setCoercedProps({ ...defaultAvatarProps, ...props });
  }, [
    props.variant,
    props.size,
    props.colors,
    props.name,
    props.square,
    props.title,
  ]);

  return (
    <>
      {checkedVariant === `bauhaus` ? (
        <>
          <AvatarBauhaus
            colors={coercedProps.colors}
            name={coercedProps.name}
            square={coercedProps.square}
            title={coercedProps.title}
            size={coercedProps.size}
          />
        </>
      ) : null}

      {checkedVariant === `beam` ? (
        <>
          <AvatarBeam
            colors={coercedProps.colors}
            name={coercedProps.name}
            square={coercedProps.square}
            title={coercedProps.title}
            size={coercedProps.size}
          />
        </>
      ) : null}

      {checkedVariant === `marble` ? (
        <>
          <AvatarMarble
            colors={coercedProps.colors}
            name={coercedProps.name}
            square={coercedProps.square}
            title={coercedProps.title}
            size={coercedProps.size}
          />
        </>
      ) : null}

      {checkedVariant === `pixel` ? (
        <>
          <AvatarPixel
            colors={coercedProps.colors}
            name={coercedProps.name}
            square={coercedProps.square}
            title={coercedProps.title}
            size={coercedProps.size}
          />
        </>
      ) : null}

      {checkedVariant === `ring` ? (
        <>
          <AvatarRing
            colors={coercedProps.colors}
            name={coercedProps.name}
            square={coercedProps.square}
            title={coercedProps.title}
            size={coercedProps.size}
          />
        </>
      ) : null}

      {checkedVariant === `sunset` ? (
        <>
          <AvatarSunset
            colors={coercedProps.colors}
            name={coercedProps.name}
            square={coercedProps.square}
            title={coercedProps.title}
            size={coercedProps.size}
          />
        </>
      ) : null}
    </>
  );
}
