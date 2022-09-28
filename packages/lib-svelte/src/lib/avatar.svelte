<script>
  import { afterUpdate, onMount } from "svelte";

  import { coerceVariant, defaultAvatarProps } from "./avatar.utils";
  import AvatarBauhaus from "./avatars/avatar-bauhaus.svelte";
  import AvatarBeam from "./avatars/avatar-beam.svelte";
  import AvatarMarble from "./avatars/avatar-marble.svelte";
  import AvatarPixel from "./avatars/avatar-pixel.svelte";
  import AvatarRing from "./avatars/avatar-ring.svelte";
  import AvatarSunset from "./avatars/avatar-sunset.svelte";

  import onChange from "on-change";
  export let colors;
  export let name;
  export let square;
  export let title;
  export let size;
  export let variant;

  checkedVariant = "beam";

  onMount(() => {
    checkedVariant = coerceVariant(variant) || "beam";
  });

  function onUpdateFn_0() {
    checkedVariant = coerceVariant(variant) || "beam";
  }
  $: onUpdateFn_0(...[variant]);
</script>

{#if checkedVariant === `bauhaus`}
  <AvatarBauhaus
    {...defaultAvatarProps}
    {colors}
    {name}
    {square}
    {title}
    {size}
  />
{/if}

{#if checkedVariant === `beam`}
  <AvatarBeam {...defaultAvatarProps} {colors} {name} {square} {title} {size} />
{/if}

{#if checkedVariant === `marble`}
  <AvatarMarble
    {...defaultAvatarProps}
    {colors}
    {name}
    {square}
    {title}
    {size}
  />
{/if}

{#if checkedVariant === `pixel`}
  <AvatarPixel
    {...defaultAvatarProps}
    {colors}
    {name}
    {square}
    {title}
    {size}
  />
{/if}

{#if checkedVariant === `ring`}
  <AvatarRing {...defaultAvatarProps} {colors} {name} {square} {title} {size} />
{/if}

{#if checkedVariant === `sunset`}
  <AvatarSunset
    {...defaultAvatarProps}
    {colors}
    {name}
    {square}
    {title}
    {size}
  />
{/if}
