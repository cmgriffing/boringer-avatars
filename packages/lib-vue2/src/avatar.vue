<template>
  <div>
    <template v-if="checkedVariant === `bauhaus`">
      <avatar-bauhaus
        :colors="colors_"
        :name="name_"
        :square="square_"
        :title="title_"
        :size="size_"
      ></avatar-bauhaus>
    </template>

    <template v-if="checkedVariant === `beam`">
      <avatar-beam
        :colors="colors_"
        :name="name_"
        :square="square_"
        :title="title_"
        :size="size_"
      ></avatar-beam>
    </template>

    <template v-if="checkedVariant === `marble`">
      <avatar-marble
        :colors="colors_"
        :name="name_"
        :square="square_"
        :title="title_"
        :size="size_"
      ></avatar-marble>
    </template>

    <template v-if="checkedVariant === `pixel`">
      <avatar-pixel
        :colors="colors_"
        :name="name_"
        :square="square_"
        :title="title_"
        :size="size_"
      ></avatar-pixel>
    </template>

    <template v-if="checkedVariant === `ring`">
      <avatar-ring
        :colors="colors_"
        :name="name_"
        :square="square_"
        :title="title_"
        :size="size_"
      ></avatar-ring>
    </template>

    <template v-if="checkedVariant === `sunset`">
      <avatar-sunset
        :colors="colors_"
        :name="name_"
        :square="square_"
        :title="title_"
        :size="size_"
      ></avatar-sunset>
    </template>
  </div>
</template>

<script lang="ts">
import type { AvatarProps } from "./avatar.utils";

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
    AvatarBauhaus: AvatarBauhaus,
    AvatarBeam: AvatarBeam,
    AvatarMarble: AvatarMarble,
    AvatarPixel: AvatarPixel,
    AvatarRing: AvatarRing,
    AvatarSunset: AvatarSunset,
  },
  props: ["variant", "size", "colors", "square", "name", "title"],

  data: () => ({
    checkedVariant: defaultAvatarProps.variant || "beam",
    size_: defaultAvatarProps.size || 40,
    colors_: defaultAvatarProps.colors || [],
    square_: defaultAvatarProps.square || false,
    name_: defaultAvatarProps.name || "",
    title_: defaultAvatarProps.title || false,
  }),

  mounted() {
    this.checkedVariant = coerceVariant(this.variant) || "beam";
    this.size_ = this.size || defaultAvatarProps.size || 40;
    this.colors_ = this.colors || defaultAvatarProps.colors || [];
    this.square_ = this.square || defaultAvatarProps.square || false;
    this.name_ = this.name || defaultAvatarProps.name || "";
    this.title_ = this.title || defaultAvatarProps.title || false;
  },

  watch: {
    onUpdateHook0: {
      handler() {
        this.checkedVariant = coerceVariant(this.variant) || "beam";
        this.size_ = this.size || defaultAvatarProps.size || 40;
        this.colors_ = this.colors || defaultAvatarProps.colors || [];
        this.square_ = this.square || defaultAvatarProps.square || false;
        this.name_ = this.name || defaultAvatarProps.name || "";
        this.title_ = this.title || defaultAvatarProps.title || false;
      },
      immediate: true,
    },
  },

  computed: {
    onUpdateHook0() {
      return {
        0: this.variant,
        1: this.size,
        2: this.colors,
        3: this.square,
        4: this.name,
        5: this.title,
      };
    },
  },
};
</script>