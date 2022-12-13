<template>
  <template v-if="checkedVariant === `bauhaus`">
    <avatar-bauhaus
      :colors="coercedProps.colors"
      :name="coercedProps.name"
      :square="coercedProps.square"
      :title="coercedProps.title"
      :size="coercedProps.size"
    ></avatar-bauhaus>
  </template>

  <template v-if="checkedVariant === `beam`">
    <avatar-beam
      :colors="coercedProps.colors"
      :name="coercedProps.name"
      :square="coercedProps.square"
      :title="coercedProps.title"
      :size="coercedProps.size"
    ></avatar-beam>
  </template>

  <template v-if="checkedVariant === `marble`">
    <avatar-marble
      :colors="coercedProps.colors"
      :name="coercedProps.name"
      :square="coercedProps.square"
      :title="coercedProps.title"
      :size="coercedProps.size"
    ></avatar-marble>
  </template>

  <template v-if="checkedVariant === `pixel`">
    <avatar-pixel
      :colors="coercedProps.colors"
      :name="coercedProps.name"
      :square="coercedProps.square"
      :title="coercedProps.title"
      :size="coercedProps.size"
    ></avatar-pixel>
  </template>

  <template v-if="checkedVariant === `ring`">
    <avatar-ring
      :colors="coercedProps.colors"
      :name="coercedProps.name"
      :square="coercedProps.square"
      :title="coercedProps.title"
      :size="coercedProps.size"
    ></avatar-ring>
  </template>

  <template v-if="checkedVariant === `sunset`">
    <avatar-sunset
      :colors="coercedProps.colors"
      :name="coercedProps.name"
      :square="coercedProps.square"
      :title="coercedProps.title"
      :size="coercedProps.size"
    ></avatar-sunset>
  </template>
</template>

<script>
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
  props: ["variant"],

  data: () => ({ checkedVariant: "beam", coercedProps: defaultAvatarProps }),

  mounted() {
    this.checkedVariant = coerceVariant(this.variant) || "beam";
    this.coercedProps = { ...defaultAvatarProps, ...this.props };
  },

  watch: {
    onUpdateHook0: {
      handler() {
        this.checkedVariant = coerceVariant(this.variant) || "beam";
        this.coercedProps = { ...defaultAvatarProps, ...this.props };
      },
      immediate: true,
    },
  },

  computed: {
    onUpdateHook0() {
      return {
        0: this.variant,
      };
    },
  },
};
</script>