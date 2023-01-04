<script lang="ts">
import { defineComponent, type SetupContext } from "vue";
import { Avatar } from "@boringer-avatars/vue2";
import {
  VariantSelector,
  SizeSelector,
  PaletteSelector,
  ShapeSelector,
  LightDarkToggle,
  LibraryLinks,
  exampleNames,
} from "@demo/vue2";
export default defineComponent({
  setup(_props, _context: SetupContext) {
    document.title = "Vite Vue2 Application";

    return {};
  },
  data: function () {
    return {
      variant: "beam",
      isSquare: false,
      size: "40px",
      colors: ["#FFAD08", "#EDD75A", "#73B06F", "#0C8F8F", "#405059"],
      theme: "light",
      exampleNames,
    };
  },
  components: {
    Avatar,
    VariantSelector,
    SizeSelector,
    PaletteSelector,
    ShapeSelector,
    LightDarkToggle,
    LibraryLinks,
  },
  methods: {
    onVariantChange: function (newVariant: any) {
      console.log({ newVariant });
      this.variant = newVariant;
    },

    onColorsChange: function (newColors: string[]) {
      console.log({
        newColors,
      });
      this.colors = newColors;
    },

    onShapeChange: function (newShape: string) {
      console.log({ newShape });
      this.isSquare = newShape === "square";
    },

    onSizeChange: function (newSize: string) {
      this.size = newSize;
    },

    onThemeChange: function (newTheme: string) {
      this.theme = newTheme;
    },
  },
});
</script>

<template>
  <div :class="`content ${theme}`">
    <div class="row">
      <div class="row">
        {{ variant }}
        <VariantSelector :variant="variant" :onChange="onVariantChange" />
      </div>
      <PaletteSelector :colors="colors" :onChange="onColorsChange" />
      <div class="row">
        <div class="inner-row">
          <ShapeSelector
            :shape="isSquare ? 'square' : 'circle'"
            :onChange="onShapeChange"
          />
          <SizeSelector :size="size" :onChange="onSizeChange" />
          <LightDarkToggle :theme="theme" :onChange="onThemeChange" />
        </div>
        <div class="inner-row">
          <LibraryLinks
            githubUrl="https://github.com/cmgriffing/boringer-avatars/packages/lib-vue2"
          />
        </div>
      </div>
    </div>
    <div class="avatar-list">
      <div class="avatar-list-item" v-for="name in exampleNames">
        <Avatar
          :title="false"
          :size="size"
          :variant="variant"
          :name="name"
          :square="isSquare"
          :colors="colors"
        />
        <div class="avatar-list-item-name">{{ name }}</div>
      </div>
    </div>
  </div>
</template>
