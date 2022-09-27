<script>
  import { afterUpdate, onMount } from "svelte";

  import AvatarBauhaus from "./avatars/avatar-bauhaus.svelte";
  import { coerceVariant, defaultAvatarProps } from "./avatar.utils";

  import onChange from "on-change";
  export let colors;
  export let name;
  export let square;
  export let title;
  export let size;
  export let variant;

  let checkedVariant = "bauhaus";

  onMount(() => {
    checkedVariant = coerceVariant(variant) || "marble";
  });

  function onUpdateFn_0() {
    checkedVariant = coerceVariant(variant) || "marble";
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
