<template>
  <div class="row">
    <div class="color-inputs">
      <template :key="index" v-for="(colorOption, index) in selectedPalette">
        <div>
          <label class="sr-only" :for="getInputId(index)">
            Color Input {{ index }}
          </label>
          <input
            type="color"
            class="color-input"
            :value="colorOption"
            :id="getInputId(index)"
            @input="handleChange(index, $event)"
          />
        </div>
      </template>
    </div>
    <div class="spacer"></div>

    <button
      class="random-palette widget-wrapper radio-label"
      @click="randomizePalette()"
    >
      Random Palette
    </button>
  </div>
</template>

<script lang="ts">
import type { PaletteSelectorProps } from "./palette-selector.utils";

export default {
  name: "palette-selector",

  props: ["onChange", "colors"],

  data() {
    return {
      selectedPalette: ["#FFAD08", "#EDD75A", "#73B06F", "#0C8F8F", "#405059"],
    };
  },

  mounted() {
    this.selectedPalette = this.colors;
  },

  watch: {
    onUpdateHook0: {
      handler() {
        this.selectedPalette = this.colors;
      },
      immediate: true,
    },
  },

  computed: {
    onUpdateHook0() {
      return {
        0: this.colors,
      };
    },
  },

  methods: {
    handleChange(index, event) {
      const newColors = [...this.selectedPalette];
      newColors[index] = event.target.value;
      this.selectedPalette = newColors;
      this.onChange(newColors);
    },
    randomizePalette() {
      const newColors = this.selectedPalette.map(() => {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      });
      this.selectedPalette = newColors;
      this.onChange(newColors);
    },
    getInputId(index) {
      return `color-input-${index}`;
    },
  },
};
</script>