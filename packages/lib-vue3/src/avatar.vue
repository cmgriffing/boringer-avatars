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
</template>

<script lang="ts">
import AvatarBauhaus from "./avatars/avatar-bauhaus.vue";
import { coerceVariant, defaultAvatarProps } from "./avatar.utils";

export default {
  name: "avatar",
  components: { "avatar-bauhaus": AvatarBauhaus },
  props: ["variant", "colors", "name", "square", "title", "size"],

  data: () => ({ checkedVariant: "bauhaus", defaultAvatarProps }),

  mounted() {
    (this as any).checkedVariant = coerceVariant((this as any).variant) || "marble";
  },

  watch: {
    onUpdateHook0() {
      (this as any).checkedVariant = coerceVariant((this as any).variant) || "marble";
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
