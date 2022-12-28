<script>
  import { onMount } from "svelte";

  import { coerceVariant, defaultAvatarProps } from "./avatar.utils";
  import AvatarBauhaus from "./avatars/avatar-bauhaus.svelte";
  import AvatarBeam from "./avatars/avatar-beam.svelte";
  import AvatarMarble from "./avatars/avatar-marble.svelte";
  import AvatarPixel from "./avatars/avatar-pixel.svelte";
  import AvatarRing from "./avatars/avatar-ring.svelte";
  import AvatarSunset from "./avatars/avatar-sunset.svelte";

  export let variant;
  export let size;
  export let colors;
  export let name;
  export let square;
  export let title;

  let checkedVariant = "beam";
  let coercedProps = defaultAvatarProps;

  onMount(() => {
    checkedVariant = coerceVariant(variant) || "beam";
    coercedProps = { ...defaultAvatarProps, ...$$props };
  });

  function onUpdateFn_0() {
    checkedVariant = coerceVariant(variant) || "beam";
    coercedProps = { ...defaultAvatarProps, ...$$props };
  }
  $: onUpdateFn_0(...[variant, size, colors, name, square, title]);
</script>

{#if checkedVariant === `bauhaus`}
  <AvatarBauhaus
    colors={coercedProps.colors}
    name={coercedProps.name}
    square={coercedProps.square}
    title={coercedProps.title}
    size={coercedProps.size}
  />
{/if}

{#if checkedVariant === `beam`}
  <AvatarBeam
    colors={coercedProps.colors}
    name={coercedProps.name}
    square={coercedProps.square}
    title={coercedProps.title}
    size={coercedProps.size}
  />
{/if}

{#if checkedVariant === `marble`}
  <AvatarMarble
    colors={coercedProps.colors}
    name={coercedProps.name}
    square={coercedProps.square}
    title={coercedProps.title}
    size={coercedProps.size}
  />
{/if}

{#if checkedVariant === `pixel`}
  <AvatarPixel
    colors={coercedProps.colors}
    name={coercedProps.name}
    square={coercedProps.square}
    title={coercedProps.title}
    size={coercedProps.size}
  />
{/if}

{#if checkedVariant === `ring`}
  <AvatarRing
    colors={coercedProps.colors}
    name={coercedProps.name}
    square={coercedProps.square}
    title={coercedProps.title}
    size={coercedProps.size}
  />
{/if}

{#if checkedVariant === `sunset`}
  <AvatarSunset
    colors={coercedProps.colors}
    name={coercedProps.name}
    square={coercedProps.square}
    title={coercedProps.title}
    size={coercedProps.size}
  />
{/if}