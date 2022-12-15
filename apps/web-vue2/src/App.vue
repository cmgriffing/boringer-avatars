<template>
  <div id="app">
    <avatar
      :title="false"
      :size="420"
      variant="sunset"
      name="FOOOOOBAAARRRR"
      :square="false"
      :colors="['#FFAD08', '#EDD75A', '#73B06F', '#0C8F8F', '#405059']"
    />

    <avatar
      :title="false"
      :size="420"
      variant="beam"
      name="FOOOOOBAAARRRR"
      :square="false"
      :colors="['#FFAD08', '#EDD75A', '#73B06F', '#0C8F8F', '#405059']"
    />

    <avatar
      :title="false"
      :size="420"
      variant="bauhaus"
      name="FOOOOOBAAARRRR"
      :square="false"
      :colors="['#FFAD08', '#EDD75A', '#73B06F', '#0C8F8F', '#405059']"
    />

    <avatar
      :title="false"
      :size="420"
      variant="marble"
      name="FOOOOOBAAARRRR"
      :square="false"
      :colors="['#FFAD08', '#EDD75A', '#73B06F', '#0C8F8F', '#405059']"
    />

    <avatar
      :title="false"
      :size="420"
      variant="pixel"
      name="FOOOOOBAAARRRR"
      :square="false"
      :colors="['#FFAD08', '#EDD75A', '#73B06F', '#0C8F8F', '#405059']"
    />

    <avatar
      :title="false"
      :size="420"
      variant="ring"
      name="FOOOOOBAAARRRR"
      :square="false"
      :colors="['#FFAD08', '#EDD75A', '#73B06F', '#0C8F8F', '#405059']"
    />

    <avatar
      :title="false"
      :size="420"
      variant="sunset"
      name="FOOOOOBAAARRRR"
      :square="false"
      :colors="['#FFAD08', '#EDD75A', '#73B06F', '#0C8F8F', '#405059']"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, type SetupContext } from "vue";
import { Avatar } from "@boringer-avatars/vue2";

/** App Component */
export default defineComponent({
  setup(_props, _context: SetupContext) {
    document.title = "Vite Vue2 Application";

    return {};
  },
  components: {
    avatar: Avatar,
  },
});
</script>
