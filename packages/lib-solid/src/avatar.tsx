import { Show, onMount, on, createEffect, createSignal } from "solid-js";

import { css } from "solid-styled-components";

import { coerceVariant, defaultAvatarProps } from "./avatar.utils";
import AvatarBauhaus from "./avatars/avatar-bauhaus";
import AvatarBeam from "./avatars/avatar-beam";
import AvatarMarble from "./avatars/avatar-marble";
import AvatarPixel from "./avatars/avatar-pixel";
import AvatarRing from "./avatars/avatar-ring";
import AvatarSunset from "./avatars/avatar-sunset";

function Avatar(props) {
  const [checkedVariant, setCheckedVariant] = createSignal("beam");

  onMount(() => {
    setCheckedVariant(coerceVariant(props.variant) || "beam");
  });

  function onUpdateFn_0() {
    setCheckedVariant(coerceVariant(props.variant) || "beam");
  }
  createEffect(on(() => [props.variant], onUpdateFn_0));

  return (
    <>
      <Show when={checkedVariant() === `bauhaus`}>
        <AvatarBauhaus
          {...defaultAvatarProps}
          colors={props.colors}
          name={props.name}
          square={props.square}
          title={props.title}
          size={props.size}
        ></AvatarBauhaus>
      </Show>
      <Show when={checkedVariant() === `beam`}>
        <AvatarBeam
          {...defaultAvatarProps}
          colors={props.colors}
          name={props.name}
          square={props.square}
          title={props.title}
          size={props.size}
        ></AvatarBeam>
      </Show>
      <Show when={checkedVariant() === `marble`}>
        <AvatarMarble
          {...defaultAvatarProps}
          colors={props.colors}
          name={props.name}
          square={props.square}
          title={props.title}
          size={props.size}
        ></AvatarMarble>
      </Show>
      <Show when={checkedVariant() === `pixel`}>
        <AvatarPixel
          {...defaultAvatarProps}
          colors={props.colors}
          name={props.name}
          square={props.square}
          title={props.title}
          size={props.size}
        ></AvatarPixel>
      </Show>
      <Show when={checkedVariant() === `ring`}>
        <AvatarRing
          {...defaultAvatarProps}
          colors={props.colors}
          name={props.name}
          square={props.square}
          title={props.title}
          size={props.size}
        ></AvatarRing>
      </Show>
      <Show when={checkedVariant() === `sunset`}>
        <AvatarSunset
          {...defaultAvatarProps}
          colors={props.colors}
          name={props.name}
          square={props.square}
          title={props.title}
          size={props.size}
        ></AvatarSunset>
      </Show>
    </>
  );
}

export default Avatar;
