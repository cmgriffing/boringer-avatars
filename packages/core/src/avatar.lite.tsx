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
  const state = useStore({
    checkedVariant: "beam",
    coercedProps: defaultAvatarProps,
  });

  onMount(() => {
    state.checkedVariant = coerceVariant(props.variant) || "beam";
    state.coercedProps = {
      ...defaultAvatarProps,
      ...props,
    };
  });

  onUpdate(() => {
    state.checkedVariant = coerceVariant(props.variant) || "beam";
    state.coercedProps = {
      ...defaultAvatarProps,
      ...props,
    };
  }, [props.variant]);

  return (
    <div>
      <Show when={state.checkedVariant === `bauhaus`}>
        <AvatarBauhaus
          colors={state.coercedProps.colors}
          name={state.coercedProps.name}
          square={state.coercedProps.square}
          title={state.coercedProps.title}
          size={state.coercedProps.size}
        />
      </Show>
      <Show when={state.checkedVariant === `beam`}>
        <AvatarBeam
          colors={state.coercedProps.colors}
          name={state.coercedProps.name}
          square={state.coercedProps.square}
          title={state.coercedProps.title}
          size={state.coercedProps.size}
        />
      </Show>

      <Show when={state.checkedVariant === `marble`}>
        <AvatarMarble
          colors={state.coercedProps.colors}
          name={state.coercedProps.name}
          square={state.coercedProps.square}
          title={state.coercedProps.title}
          size={state.coercedProps.size}
        />
      </Show>

      <Show when={state.checkedVariant === `pixel`}>
        <AvatarPixel
          colors={state.coercedProps.colors}
          name={state.coercedProps.name}
          square={state.coercedProps.square}
          title={state.coercedProps.title}
          size={state.coercedProps.size}
        />
      </Show>

      <Show when={state.checkedVariant === `ring`}>
        <AvatarRing
          colors={state.coercedProps.colors}
          name={state.coercedProps.name}
          square={state.coercedProps.square}
          title={state.coercedProps.title}
          size={state.coercedProps.size}
        />
      </Show>

      <Show when={state.checkedVariant === `sunset`}>
        <AvatarSunset
          colors={state.coercedProps.colors}
          name={state.coercedProps.name}
          square={state.coercedProps.square}
          title={state.coercedProps.title}
          size={state.coercedProps.size}
        />
      </Show>
    </div>
  );
}
