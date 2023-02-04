<script>
  import { defaultAvatarProps } from "./avatar.utils";
  import AvatarBauhaus from "./avatars/avatar-bauhaus.svelte";
  import AvatarBeam from "./avatars/avatar-beam.svelte";
  import AvatarMarble from "./avatars/avatar-marble.svelte";
  import AvatarPixel from "./avatars/avatar-pixel.svelte";
  import AvatarRing from "./avatars/avatar-ring.svelte";
  import AvatarSunset from "./avatars/avatar-sunset.svelte";

  export let variant;
  export let colors;
  export let name;
  export let square;
  export let hasTitle;
  export let size;
</script>

<div>
  {#if variant === `bauhaus`}
    <AvatarBauhaus
      colors={colors || defaultAvatarProps.colors}
      name={name || defaultAvatarProps.name}
      square={square || defaultAvatarProps.square}
      hasTitle={hasTitle || defaultAvatarProps.hasTitle}
      size={size || defaultAvatarProps.size}
    />
  {/if}

  {#if variant === `beam`}
    <AvatarBeam
      colors={colors || defaultAvatarProps.colors}
      name={name || defaultAvatarProps.name}
      square={square || defaultAvatarProps.square}
      hasTitle={hasTitle || defaultAvatarProps.hasTitle}
      size={size || defaultAvatarProps.size}
    />
  {/if}

  {#if variant === `marble`}
    <AvatarMarble
      colors={colors || defaultAvatarProps.colors}
      name={name || defaultAvatarProps.name}
      square={square || defaultAvatarProps.square}
      hasTitle={hasTitle || defaultAvatarProps.hasTitle}
      size={size || defaultAvatarProps.size}
    />
  {/if}

  {#if variant === `pixel`}
    <AvatarPixel
      colors={colors || defaultAvatarProps.colors}
      name={name || defaultAvatarProps.name}
      square={square || defaultAvatarProps.square}
      hasTitle={hasTitle || defaultAvatarProps.hasTitle}
      size={size || defaultAvatarProps.size}
    />
  {/if}

  {#if variant === `ring`}
    <AvatarRing
      colors={colors || defaultAvatarProps.colors}
      name={name || defaultAvatarProps.name}
      square={square || defaultAvatarProps.square}
      hasTitle={hasTitle || defaultAvatarProps.hasTitle}
      size={size || defaultAvatarProps.size}
    />
  {/if}

  {#if variant === `sunset`}
    <AvatarSunset
      colors={colors || defaultAvatarProps.colors}
      name={name || defaultAvatarProps.name}
      square={square || defaultAvatarProps.square}
      hasTitle={hasTitle || defaultAvatarProps.hasTitle}
      size={size || defaultAvatarProps.size}
    />
  {/if}
</div>