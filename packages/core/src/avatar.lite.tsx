import AvatarBauhaus from "./avatars/avatar-bauhaus";
import { coerceVariant, defaultAvatarProps } from "./avatar.utils";
import type { Variant } from "./avatar.utils";
import { useStore, onMount, onUpdate, Show } from "@builder.io/mitosis";
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

export default function Avatar(props: Partial<AvatarProps>) {
  const state = useStore({
    checkedVariant: "bauhaus",
  });

  onMount(() => {
    state.checkedVariant = coerceVariant(props.variant) || "marble";
  });

  onUpdate(() => {
    state.checkedVariant = coerceVariant(props.variant) || "marble";
  }, [props.variant]);

  return (
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
  );
}
