import AvatarBauhaus from "./avatars/avatar-bauhaus.lite";
import { coerceVariant, defaultAvatarProps } from "./avatar.utils";
import { useStore, onMount, onUpdate, Show } from "@builder.io/mitosis";
// import AvatarRing from "./avatar-ring.lite";
// import AvatarPixel from "./avatar-pixel.lite";
// import AvatarBeam from "./avatar-beam.lite";
// import AvatarSunset from "./avatar-sunset.lite";
// import AvatarMarble from "./avatar-marble.lite";

export default function Avatar(props: {
  variant: string;
  colors: string[];
  name: string;
  square: boolean;
  title: boolean;
  size: number;
}) {
  const state = useStore({
    checkedVariant: "bauhaus",
  });

  onMount(() => {
    state.checkedVariant = coerceVariant(props.variant);
  });

  onUpdate(() => {
    state.checkedVariant = coerceVariant(props.variant);
  }, [props.variant]);

  return (
    <Show when={state.checkedVariant === `bauhaus`}>
      <AvatarBauhaus {...defaultAvatarProps} {...props} />
    </Show>
  );
}
