<template>
  <template v-if="checkedVariant === `bauhaus`">
    <avatar-bauhaus
      v-bind="defaultAvatarProps"
      :colors="colors"
      :name="name"
      :square="square"
      :title="title"
      :size="size"
    ></avatar-bauhaus>
  </template>

  <template v-if="checkedVariant === `beam`">
    <avatar-beam
      v-bind="defaultAvatarProps"
      :colors="colors"
      :name="name"
      :square="square"
      :title="title"
      :size="size"
    ></avatar-beam>
  </template>

  <template v-if="checkedVariant === `marble`">
    <avatar-marble
      v-bind="defaultAvatarProps"
      :colors="colors"
      :name="name"
      :square="square"
      :title="title"
      :size="size"
    ></avatar-marble>
  </template>

  <template v-if="checkedVariant === `pixel`">
    <avatar-pixel
      v-bind="defaultAvatarProps"
      :colors="colors"
      :name="name"
      :square="square"
      :title="title"
      :size="size"
    ></avatar-pixel>
  </template>

  <template v-if="checkedVariant === `ring`">
    <avatar-ring
      v-bind="defaultAvatarProps"
      :colors="colors"
      :name="name"
      :square="square"
      :title="title"
      :size="size"
    ></avatar-ring>
  </template>

  <template v-if="checkedVariant === `sunset`">
    <avatar-sunset
      v-bind="defaultAvatarProps"
      :colors="colors"
      :name="name"
      :square="square"
      :title="title"
      :size="size"
    ></avatar-sunset>
  </template>
</template>

<script lang="ts">
import { coerceVariant, defaultAvatarProps } from "./avatar.utils";
import AvatarBauhaus from "./avatars/avatar-bauhaus.vue";
import AvatarBeam from "./avatars/avatar-beam.vue";
import AvatarMarble from "./avatars/avatar-marble.vue";
import AvatarPixel from "./avatars/avatar-pixel.vue";
import AvatarRing from "./avatars/avatar-ring.vue";
import AvatarSunset from "./avatars/avatar-sunset.vue";

export default {
  name: "avatar",
  components: {
    "avatar-bauhaus": AvatarBauhaus,
    "avatar-beam": AvatarBeam,
    "avatar-marble": AvatarMarble,
    "avatar-pixel": AvatarPixel,
    "avatar-ring": AvatarRing,
    "avatar-sunset": AvatarSunset,
  },
  props: ["variant", "colors", "name", "square", "title", "size"],

  data: () => ({ checkedVariant: "beam", defaultAvatarProps }),

  mounted() {
    (this as any).checkedVariant = coerceVariant((this as any).variant) || "beam";
  },

  watch: {
    onUpdateHook0() {
      (this as any).checkedVariant = coerceVariant((this as any).variant) || "beam";
    },
  },

  computed: {
    onUpdateHook0() {
      return {
        0: (this as any).variant,
      };
    },
  },
};
</script>
