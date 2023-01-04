import { Show, onMount, on, createEffect, createSignal } from "solid-js";

import { coerceVariant, defaultAvatarProps } from "./avatar.utils";
import AvatarBauhaus from "./avatars/avatar-bauhaus";
import AvatarBeam from "./avatars/avatar-beam";
import AvatarMarble from "./avatars/avatar-marble";
import AvatarPixel from "./avatars/avatar-pixel";
import AvatarRing from "./avatars/avatar-ring";
import AvatarSunset from "./avatars/avatar-sunset";

function Avatar(props) {
  const [checkedVariant, setCheckedVariant] = createSignal(
    defaultAvatarProps.variant || "beam"
  );

  const [size_, setSize_] = createSignal(defaultAvatarProps.size || 40);

  const [colors_, setColors_] = createSignal(defaultAvatarProps.colors || []);

  const [square_, setSquare_] = createSignal(
    defaultAvatarProps.square || false
  );

  const [name_, setName_] = createSignal(defaultAvatarProps.name || "");

  const [title_, setTitle_] = createSignal(defaultAvatarProps.title || false);

  onMount(() => {
    setCheckedVariant(coerceVariant(props.variant) || "beam");
    setSize_(props.size || defaultAvatarProps.size || 40);
    setColors_(props.colors || defaultAvatarProps.colors || []);
    setSquare_(props.square || defaultAvatarProps.square || false);
    setName_(props.name || defaultAvatarProps.name || "");
    setTitle_(props.title || defaultAvatarProps.title || false);
  });

  function onUpdateFn_0() {
    setCheckedVariant(coerceVariant(props.variant) || "beam");
    setSize_(props.size || defaultAvatarProps.size || 40);
    setColors_(props.colors || defaultAvatarProps.colors || []);
    setSquare_(props.square || defaultAvatarProps.square || false);
    setName_(props.name || defaultAvatarProps.name || "");
    setTitle_(props.title || defaultAvatarProps.title || false);
  }
  createEffect(
    on(
      () => [
        props.variant,
        props.size,
        props.colors,
        props.square,
        props.name,
        props.title,
      ],
      onUpdateFn_0
    )
  );

  return (
    <>
      <Show when={checkedVariant() === `bauhaus`}>
        <AvatarBauhaus
          colors={colors_()}
          name={name_()}
          square={square_()}
          title={title_()}
          size={size_()}
        ></AvatarBauhaus>
      </Show>
      <Show when={checkedVariant() === `beam`}>
        <AvatarBeam
          colors={colors_()}
          name={name_()}
          square={square_()}
          title={title_()}
          size={size_()}
        ></AvatarBeam>
      </Show>
      <Show when={checkedVariant() === `marble`}>
        <AvatarMarble
          colors={colors_()}
          name={name_()}
          square={square_()}
          title={title_()}
          size={size_()}
        ></AvatarMarble>
      </Show>
      <Show when={checkedVariant() === `pixel`}>
        <AvatarPixel
          colors={colors_()}
          name={name_()}
          square={square_()}
          title={title_()}
          size={size_()}
        ></AvatarPixel>
      </Show>
      <Show when={checkedVariant() === `ring`}>
        <AvatarRing
          colors={colors_()}
          name={name_()}
          square={square_()}
          title={title_()}
          size={size_()}
        ></AvatarRing>
      </Show>
      <Show when={checkedVariant() === `sunset`}>
        <AvatarSunset
          colors={colors_()}
          name={name_()}
          square={square_()}
          title={title_()}
          size={size_()}
        ></AvatarSunset>
      </Show>
    </>
  );
}

export default Avatar;
