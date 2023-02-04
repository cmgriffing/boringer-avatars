import { coerceVariant, defaultAvatarProps } from "./avatar.utils";
import type { AvatarProps } from "./avatar.utils";
import { useStore, onMount, onUpdate, Show } from "@builder.io/mitosis";
import AvatarBauhaus from "./avatars/avatar-bauhaus";
import AvatarBeam from "./avatars/avatar-beam";
import AvatarMarble from "./avatars/avatar-marble";
import AvatarPixel from "./avatars/avatar-pixel";
import AvatarRing from "./avatars/avatar-ring";
import AvatarSunset from "./avatars/avatar-sunset";

export default function Avatar(props: Partial<AvatarProps>) {
  return (
    <div>
      <Show when={props.variant === `bauhaus`}>
        <AvatarBauhaus
          colors={props.colors || defaultAvatarProps.colors}
          name={props.name || defaultAvatarProps.name}
          square={props.square || defaultAvatarProps.square}
          hasTitle={props.hasTitle || defaultAvatarProps.hasTitle}
          size={props.size || defaultAvatarProps.size}
        />
      </Show>
      <Show when={props.variant === `beam`}>
        <AvatarBeam
          colors={props.colors || defaultAvatarProps.colors}
          name={props.name || defaultAvatarProps.name}
          square={props.square || defaultAvatarProps.square}
          hasTitle={props.hasTitle || defaultAvatarProps.hasTitle}
          size={props.size || defaultAvatarProps.size}
        />
      </Show>

      <Show when={props.variant === `marble`}>
        <AvatarMarble
          colors={props.colors || defaultAvatarProps.colors}
          name={props.name || defaultAvatarProps.name}
          square={props.square || defaultAvatarProps.square}
          hasTitle={props.hasTitle || defaultAvatarProps.hasTitle}
          size={props.size || defaultAvatarProps.size}
        />
      </Show>

      <Show when={props.variant === `pixel`}>
        <AvatarPixel
          colors={props.colors || defaultAvatarProps.colors}
          name={props.name || defaultAvatarProps.name}
          square={props.square || defaultAvatarProps.square}
          hasTitle={props.hasTitle || defaultAvatarProps.hasTitle}
          size={props.size || defaultAvatarProps.size}
        />
      </Show>

      <Show when={props.variant === `ring`}>
        <AvatarRing
          colors={props.colors || defaultAvatarProps.colors}
          name={props.name || defaultAvatarProps.name}
          square={props.square || defaultAvatarProps.square}
          hasTitle={props.hasTitle || defaultAvatarProps.hasTitle}
          size={props.size || defaultAvatarProps.size}
        />
      </Show>

      <Show when={props.variant === `sunset`}>
        <AvatarSunset
          colors={props.colors || defaultAvatarProps.colors}
          name={props.name || defaultAvatarProps.name}
          square={props.square || defaultAvatarProps.square}
          hasTitle={props.hasTitle || defaultAvatarProps.hasTitle}
          size={props.size || defaultAvatarProps.size}
        />
      </Show>
    </div>
  );
}
