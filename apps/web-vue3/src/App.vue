<script setup lang="ts">
import { ref } from "vue";
import { Avatar } from "@boringer-avatars/vue3";

import {
  VariantSelector,
  SizeSelector,
  PaletteSelector,
  ShapeSelector,
  LightDarkToggle,
  LibraryLinks,
  exampleNames,
} from "@demo/vue3";

const variant = ref("beam");
const isSquare = ref(false);
const size = ref("40px");
const colors = ref(["#FFAD08", "#EDD75A", "#73B06F", "#0C8F8F", "#405059"]);
const theme = ref("light");

const onVariantChange = (newVariant: any) => {
  console.log({ newVariant });
  variant.value = newVariant;
};

const onColorsChange = (newColors: string[]) => {
  console.log({
    newColors,
  });
  colors.value = newColors;
};

const onShapeChange = (newShape: string) => {
  console.log({ newShape });
  isSquare.value = newShape === "square";
};

const onSizeChange = (newSize: string) => {
  size.value = newSize;
};

const onThemeChange = (newTheme: string) => {
  theme.value = newTheme;
};
</script>

<template>
  <div :class="`content ${theme}`">
    <div class="row">
      <div class="row">
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
            githubUrl="https://github.com/cmgriffing/boringer-avatars/packages/lib-svelte"
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
