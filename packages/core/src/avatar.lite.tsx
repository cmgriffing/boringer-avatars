import { coerceVariant, defaultAvatarProps } from "./avatar.utils";
import type { Variant } from "./avatar.utils";
import { useStore, onMount, onUpdate, Show } from "@builder.io/mitosis";
import AvatarBauhaus from "./avatars/avatar-bauhaus";
import AvatarBeam from "./avatars/avatar-beam";
import AvatarMarble from "./avatars/avatar-marble";
import AvatarPixel from "./avatars/avatar-pixel";
import AvatarRing from "./avatars/avatar-ring";
import AvatarSunset from "./avatars/avatar-sunset";

interface AvatarProps {
  variant: Variant;
  colors: string[];
  name: string;
  square: boolean;
  title: boolean;
  size: number;
}

export default function Avatar(props: Partial<AvatarProps>) {
  const state = useStore({
    checkedVariant: "beam",
  });

  onMount(() => {
    state.checkedVariant = coerceVariant(props.variant) || "beam";
  });

  onUpdate(() => {
    state.checkedVariant = coerceVariant(props.variant) || "beam";
  }, [props.variant]);

  return (
    <>
      <Show when={state.checkedVariant === `bauhaus`}>
        <AvatarBauhaus
          {...defaultAvatarProps}
          colors={props.colors}
          name={props.name}
          square={props.square}
          title={props.title}
          size={props.size}
        />
      </Show>
      <Show when={state.checkedVariant === `beam`}>
        <AvatarBeam
          {...defaultAvatarProps}
          colors={props.colors}
          name={props.name}
          square={props.square}
          title={props.title}
          size={props.size}
        />
      </Show>

      <Show when={state.checkedVariant === `marble`}>
        <AvatarMarble
          {...defaultAvatarProps}
          colors={props.colors}
          name={props.name}
          square={props.square}
          title={props.title}
          size={props.size}
        />
      </Show>

      <Show when={state.checkedVariant === `pixel`}>
        <AvatarPixel
          {...defaultAvatarProps}
          colors={props.colors}
          name={props.name}
          square={props.square}
          title={props.title}
          size={props.size}
        />
      </Show>

      <Show when={state.checkedVariant === `ring`}>
        <AvatarRing
          {...defaultAvatarProps}
          colors={props.colors}
          name={props.name}
          square={props.square}
          title={props.title}
          size={props.size}
        />
      </Show>

      <Show when={state.checkedVariant === `sunset`}>
        <AvatarSunset
          {...defaultAvatarProps}
          colors={props.colors}
          name={props.name}
          square={props.square}
          title={props.title}
          size={props.size}
        />
      </Show>
    </>
  );
}
