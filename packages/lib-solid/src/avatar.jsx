import { Show, onMount, on, createEffect, createSignal } from "solid-js";

import { coerceVariant, defaultAvatarProps } from "./avatar.utils";
import AvatarBauhaus from "./avatars/avatar-bauhaus";
import AvatarBeam from "./avatars/avatar-beam";
import AvatarMarble from "./avatars/avatar-marble";
import AvatarPixel from "./avatars/avatar-pixel";
import AvatarRing from "./avatars/avatar-ring";
import AvatarSunset from "./avatars/avatar-sunset";

function Avatar(props) {
  const [checkedVariant, setCheckedVariant] = createSignal("beam");

  const [coercedProps, setCoercedProps] = createSignal(defaultAvatarProps);

  onMount(() => {
    setCheckedVariant(coerceVariant(props.variant) || "beam");
    setCoercedProps({ ...defaultAvatarProps, ...props });
  });

  // function onUpdateFn_0() {
  //   console.log("updating: ", props.variant);
  //   setCheckedVariant(props.variant);
  //   const newProps = { ...defaultAvatarProps, ...props };
  //   setCoercedProps(newProps);
  //   console.log({ newProps });
  // }
  // createEffect(() => {
  console.log("updating: ", props.variant);
  setCheckedVariant(props.variant);
  const newProps = { ...defaultAvatarProps, ...props };
  setCoercedProps(newProps);
  console.log({ newProps });
  // });

  setInterval(() => {
    const newSize = parseInt(coercedProps().size, 10) + 10;
    setCoercedProps({
      ...coercedProps(),
      size: newSize,
    });
  }, 3000);

  return (
    <>
      {checkedVariant()}
      {props.size}
      {coercedProps().size}
      <Show when={checkedVariant() === `bauhaus`}>
        <AvatarBauhaus
          colors={coercedProps().colors}
          name={coercedProps().name}
          square={coercedProps().square}
          title={coercedProps().title}
          size={coercedProps().size}
        ></AvatarBauhaus>
      </Show>
      <Show when={checkedVariant() === `beam`}>
        <AvatarBeam
          colors={coercedProps().colors}
          name={coercedProps().name}
          square={coercedProps().square}
          title={coercedProps().title}
          size={coercedProps().size}
        ></AvatarBeam>
      </Show>
      <Show when={checkedVariant() === `marble`}>
        <AvatarMarble
          colors={coercedProps().colors}
          name={coercedProps().name}
          square={coercedProps().square}
          title={coercedProps().title}
          size={coercedProps().size}
        ></AvatarMarble>
      </Show>
      <Show when={checkedVariant() === `pixel`}>
        <AvatarPixel
          colors={coercedProps().colors}
          name={coercedProps().name}
          square={coercedProps().square}
          title={coercedProps().title}
          size={coercedProps().size}
        ></AvatarPixel>
      </Show>
      <Show when={checkedVariant() === `ring`}>
        <AvatarRing
          colors={coercedProps().colors}
          name={coercedProps().name}
          square={coercedProps().square}
          title={coercedProps().title}
          size={coercedProps().size}
        ></AvatarRing>
      </Show>
      <Show when={checkedVariant() === `sunset`}>
        <AvatarSunset
          colors={coercedProps().colors}
          name={coercedProps().name}
          square={coercedProps().square}
          title={coercedProps().title}
          size={coercedProps().size}
        ></AvatarSunset>
      </Show>
    </>
  );
}

export default Avatar;
