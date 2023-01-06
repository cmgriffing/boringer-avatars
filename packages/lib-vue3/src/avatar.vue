<template>
  <div>
    <template v-if="variant === `bauhaus`">
      <avatar-bauhaus
        :colors="colors || defaultAvatarProps.colors"
        :name="name || defaultAvatarProps.name"
        :square="square || defaultAvatarProps.square"
        :title="title || defaultAvatarProps.title"
        :size="size || defaultAvatarProps.size"
      ></avatar-bauhaus>
    </template>

    <template v-if="variant === `beam`">
      <avatar-beam
        :colors="colors || defaultAvatarProps.colors"
        :name="name || defaultAvatarProps.name"
        :square="square || defaultAvatarProps.square"
        :title="title || defaultAvatarProps.title"
        :size="size || defaultAvatarProps.size"
      ></avatar-beam>
    </template>

    <template v-if="variant === `marble`">
      <avatar-marble
        :colors="colors || defaultAvatarProps.colors"
        :name="name || defaultAvatarProps.name"
        :square="square || defaultAvatarProps.square"
        :title="title || defaultAvatarProps.title"
        :size="size || defaultAvatarProps.size"
      ></avatar-marble>
    </template>

    <template v-if="variant === `pixel`">
      <avatar-pixel
        :colors="colors || defaultAvatarProps.colors"
        :name="name || defaultAvatarProps.name"
        :square="square || defaultAvatarProps.square"
        :title="title || defaultAvatarProps.title"
        :size="size || defaultAvatarProps.size"
      ></avatar-pixel>
    </template>

    <template v-if="variant === `ring`">
      <avatar-ring
        :colors="colors || defaultAvatarProps.colors"
        :name="name || defaultAvatarProps.name"
        :square="square || defaultAvatarProps.square"
        :title="title || defaultAvatarProps.title"
        :size="size || defaultAvatarProps.size"
      ></avatar-ring>
    </template>

    <template v-if="variant === `sunset`">
      <avatar-sunset
        :colors="colors || defaultAvatarProps.colors"
        :name="name || defaultAvatarProps.name"
        :square="square || defaultAvatarProps.square"
        :title="title || defaultAvatarProps.title"
        :size="size || defaultAvatarProps.size"
      ></avatar-sunset>
    </template>
  </div>
</template>

<script>
import { defaultAvatarProps } from "./avatar.utils";
import AvatarBauhaus from "./avatars/avatar-bauhaus.vue";
import AvatarBeam from "./avatars/avatar-beam.vue";
import AvatarMarble from "./avatars/avatar-marble.vue";
import AvatarPixel from "./avatars/avatar-pixel.vue";
import AvatarRing from "./avatars/avatar-ring.vue";
import AvatarSunset from "./avatars/avatar-sunset.vue";

export default {
  name: "avatar",
  components: {
    AvatarBauhaus: AvatarBauhaus,
    AvatarBeam: AvatarBeam,
    AvatarMarble: AvatarMarble,
    AvatarPixel: AvatarPixel,
    AvatarRing: AvatarRing,
    AvatarSunset: AvatarSunset,
  },
  props: ["variant", "colors", "name", "square", "title", "size"],

  data: () => ({ defaultAvatarProps }),
};
</script>