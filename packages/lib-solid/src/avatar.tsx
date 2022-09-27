import { Show, onMount, on, createEffect, createSignal } from "solid-js";

import { css } from "solid-styled-components";

import AvatarBauhaus from "./avatars/avatar-bauhaus";
import { coerceVariant, defaultAvatarProps } from "./avatar.utils";

function Avatar(props) {
  const [checkedVariant, setCheckedVariant] = createSignal("bauhaus");

  onMount(() => {
    setCheckedVariant(coerceVariant(props.variant) || "marble");
  });

  function onUpdateFn_0() {
    setCheckedVariant(coerceVariant(props.variant) || "marble");
  }
  createEffect(on(() => [props.variant], onUpdateFn_0));

  return (
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
  );
}

export default Avatar;
