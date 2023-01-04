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
    checkedVariant: defaultAvatarProps.variant || "beam",
    size_: defaultAvatarProps.size || 40,
    colors_: defaultAvatarProps.colors || [],
    square_: defaultAvatarProps.square || false,
    name_: defaultAvatarProps.name || "",
    title_: defaultAvatarProps.title || false,
  });

  onMount(() => {
    state.checkedVariant = coerceVariant(props.variant) || "beam";
    state.size_= props.size || defaultAvatarProps.size || 40;
    state.colors_ = props.colors || defaultAvatarProps.colors || [];
    state.square_  = props.square || defaultAvatarProps.square || false;
    state.name_ = props.name || defaultAvatarProps.name || "";
    state.title_ = props.title || defaultAvatarProps.title || false;
  });

  onUpdate(() => {
    state.checkedVariant = coerceVariant(props.variant) || "beam";
    state.size_= props.size || defaultAvatarProps.size || 40;
    state.colors_ = props.colors || defaultAvatarProps.colors || [];
    state.square_  = props.square || defaultAvatarProps.square || false;
    state.name_ = props.name || defaultAvatarProps.name || "";
    state.title_ = props.title || defaultAvatarProps.title || false;
  }, [
    props.variant,
    props.size,
    props.colors,
    props.square,
    props.name,
    props.title,
  ]);

  return (
    <div>
      <Show when={state.checkedVariant === `bauhaus`}>
        <AvatarBauhaus
          colors={state.colors_}
          name={state.name_}
          square={state.square_ }
          title={state.title_}
          size={state.size_}
        />
      </Show>
      <Show when={state.checkedVariant === `beam`}>
        <AvatarBeam
          colors={state.colors_}
          name={state.name_}
          square={state.square_ }
          title={state.title_}
          size={state.size_}
        />
      </Show>

      <Show when={state.checkedVariant === `marble`}>
        <AvatarMarble
          colors={state.colors_}
          name={state.name_}
          square={state.square_ }
          title={state.title_}
          size={state.size_}
        />
      </Show>

      <Show when={state.checkedVariant === `pixel`}>
        <AvatarPixel
          colors={state.colors_}
          name={state.name_}
          square={state.square_ }
          title={state.title_}
          size={state.size_}
        />
      </Show>

      <Show when={state.checkedVariant === `ring`}>
        <AvatarRing
          colors={state.colors_}
          name={state.name_}
          square={state.square_ }
          title={state.title_}
          size={state.size_}
        />
      </Show>

      <Show when={state.checkedVariant === `sunset`}>
        <AvatarSunset
          colors={state.colors_}
          name={state.name_}
          square={state.square_ }
          title={state.title_}
          size={state.size_}
        />
      </Show>
    </div>
  );
}
