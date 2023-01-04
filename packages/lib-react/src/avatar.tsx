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
  const [checkedVariant, setCheckedVariant] = useState(
    () => defaultAvatarProps.variant || "beam"
  );

  const [size_, setSize_] = useState(() => defaultAvatarProps.size || 40);

  const [colors_, setColors_] = useState(() => defaultAvatarProps.colors || []);

  const [square_, setSquare_] = useState(
    () => defaultAvatarProps.square || false
  );

  const [name_, setName_] = useState(() => defaultAvatarProps.name || "");

  const [title_, setTitle_] = useState(() => defaultAvatarProps.title || false);

  useEffect(() => {
    setCheckedVariant(coerceVariant(props.variant) || "beam");
    setSize_(props.size || defaultAvatarProps.size || 40);
    setColors_(props.colors || defaultAvatarProps.colors || []);
    setSquare_(props.square || defaultAvatarProps.square || false);
    setName_(props.name || defaultAvatarProps.name || "");
    setTitle_(props.title || defaultAvatarProps.title || false);
  }, []);

  useEffect(() => {
    setCheckedVariant(coerceVariant(props.variant) || "beam");
    setSize_(props.size || defaultAvatarProps.size || 40);
    setColors_(props.colors || defaultAvatarProps.colors || []);
    setSquare_(props.square || defaultAvatarProps.square || false);
    setName_(props.name || defaultAvatarProps.name || "");
    setTitle_(props.title || defaultAvatarProps.title || false);
  }, [
    props.variant,
    props.size,
    props.colors,
    props.square,
    props.name,
    props.title,
  ]);

  return (
    <>
      {checkedVariant === `bauhaus` ? (
        <>
          <AvatarBauhaus
            colors={colors_}
            name={name_}
            square={square_}
            title={title_}
            size={size_}
          />
        </>
      ) : null}

      {checkedVariant === `beam` ? (
        <>
          <AvatarBeam
            colors={colors_}
            name={name_}
            square={square_}
            title={title_}
            size={size_}
          />
        </>
      ) : null}

      {checkedVariant === `marble` ? (
        <>
          <AvatarMarble
            colors={colors_}
            name={name_}
            square={square_}
            title={title_}
            size={size_}
          />
        </>
      ) : null}

      {checkedVariant === `pixel` ? (
        <>
          <AvatarPixel
            colors={colors_}
            name={name_}
            square={square_}
            title={title_}
            size={size_}
          />
        </>
      ) : null}

      {checkedVariant === `ring` ? (
        <>
          <AvatarRing
            colors={colors_}
            name={name_}
            square={square_}
            title={title_}
            size={size_}
          />
        </>
      ) : null}

      {checkedVariant === `sunset` ? (
        <>
          <AvatarSunset
            colors={colors_}
            name={name_}
            square={square_}
            title={title_}
            size={size_}
          />
        </>
      ) : null}
    </>
  );
}
