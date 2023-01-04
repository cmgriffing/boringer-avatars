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
  export let square;
  export let name;
  export let title;

  let checkedVariant = defaultAvatarProps.variant || "beam";
  let size_ = defaultAvatarProps.size || 40;
  let colors_ = defaultAvatarProps.colors || [];
  let square_ = defaultAvatarProps.square || false;
  let name_ = defaultAvatarProps.name || "";
  let title_ = defaultAvatarProps.title || false;

  onMount(() => {
    checkedVariant = coerceVariant(variant) || "beam";
    size_ = size || defaultAvatarProps.size || 40;
    colors_ = colors || defaultAvatarProps.colors || [];
    square_ = square || defaultAvatarProps.square || false;
    name_ = name || defaultAvatarProps.name || "";
    title_ = title || defaultAvatarProps.title || false;
  });

  function onUpdateFn_0() {
    checkedVariant = coerceVariant(variant) || "beam";
    size_ = size || defaultAvatarProps.size || 40;
    colors_ = colors || defaultAvatarProps.colors || [];
    square_ = square || defaultAvatarProps.square || false;
    name_ = name || defaultAvatarProps.name || "";
    title_ = title || defaultAvatarProps.title || false;
  }
  $: onUpdateFn_0(...[variant, size, colors, square, name, title]);
</script>

{#if checkedVariant === `bauhaus`}
  <AvatarBauhaus
    colors={colors_}
    name={name_}
    square={square_}
    title={title_}
    size={size_}
  />
{/if}

{#if checkedVariant === `beam`}
  <AvatarBeam
    colors={colors_}
    name={name_}
    square={square_}
    title={title_}
    size={size_}
  />
{/if}

{#if checkedVariant === `marble`}
  <AvatarMarble
    colors={colors_}
    name={name_}
    square={square_}
    title={title_}
    size={size_}
  />
{/if}

{#if checkedVariant === `pixel`}
  <AvatarPixel
    colors={colors_}
    name={name_}
    square={square_}
    title={title_}
    size={size_}
  />
{/if}

{#if checkedVariant === `ring`}
  <AvatarRing
    colors={colors_}
    name={name_}
    square={square_}
    title={title_}
    size={size_}
  />
{/if}

{#if checkedVariant === `sunset`}
  <AvatarSunset
    colors={colors_}
    name={name_}
    square={square_}
    title={title_}
    size={size_}
  />
{/if}