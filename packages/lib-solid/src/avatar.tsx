import { Show } from "solid-js";

import type { AvatarProps } from "./avatar.utils";

import { coerceVariant, defaultAvatarProps } from "./avatar.utils";
import AvatarBauhaus from "./avatars/avatar-bauhaus";
import AvatarBeam from "./avatars/avatar-beam";
import AvatarMarble from "./avatars/avatar-marble";
import AvatarPixel from "./avatars/avatar-pixel";
import AvatarRing from "./avatars/avatar-ring";
import AvatarSunset from "./avatars/avatar-sunset";

function Avatar(props: Partial<AvatarProps>) {
  return (
    <div>
      <Show when={props.variant === `bauhaus`}>
        <AvatarBauhaus
          colors={props.colors || defaultAvatarProps.colors}
          name={props.name || defaultAvatarProps.name}
          square={props.square || defaultAvatarProps.square}
          hasTitle={props.hasTitle || defaultAvatarProps.hasTitle}
          size={props.size || defaultAvatarProps.size}
        ></AvatarBauhaus>
      </Show>
      <Show when={props.variant === `beam`}>
        <AvatarBeam
          colors={props.colors || defaultAvatarProps.colors}
          name={props.name || defaultAvatarProps.name}
          square={props.square || defaultAvatarProps.square}
          hasTitle={props.hasTitle || defaultAvatarProps.hasTitle}
          size={props.size || defaultAvatarProps.size}
        ></AvatarBeam>
      </Show>
      <Show when={props.variant === `marble`}>
        <AvatarMarble
          colors={props.colors || defaultAvatarProps.colors}
          name={props.name || defaultAvatarProps.name}
          square={props.square || defaultAvatarProps.square}
          hasTitle={props.hasTitle || defaultAvatarProps.hasTitle}
          size={props.size || defaultAvatarProps.size}
        ></AvatarMarble>
      </Show>
      <Show when={props.variant === `pixel`}>
        <AvatarPixel
          colors={props.colors || defaultAvatarProps.colors}
          name={props.name || defaultAvatarProps.name}
          square={props.square || defaultAvatarProps.square}
          hasTitle={props.hasTitle || defaultAvatarProps.hasTitle}
          size={props.size || defaultAvatarProps.size}
        ></AvatarPixel>
      </Show>
      <Show when={props.variant === `ring`}>
        <AvatarRing
          colors={props.colors || defaultAvatarProps.colors}
          name={props.name || defaultAvatarProps.name}
          square={props.square || defaultAvatarProps.square}
          hasTitle={props.hasTitle || defaultAvatarProps.hasTitle}
          size={props.size || defaultAvatarProps.size}
        ></AvatarRing>
      </Show>
      <Show when={props.variant === `sunset`}>
        <AvatarSunset
          colors={props.colors || defaultAvatarProps.colors}
          name={props.name || defaultAvatarProps.name}
          square={props.square || defaultAvatarProps.square}
          hasTitle={props.hasTitle || defaultAvatarProps.hasTitle}
          size={props.size || defaultAvatarProps.size}
        ></AvatarSunset>
      </Show>
    </div>
  );
}

export default Avatar;
