<template>
  <div class="shape-selector widget-wrapper">
    <label
      for="radio-circle"
      :class="_classStringToObject(getLabelClass(AvatarShape.Circle))"
    >
      <input
        id="radio-circle"
        type="radio"
        class="sr-only radio-item"
        value="circle"
        name="shape-option"
        @input="handleChange($event)"
      />
      <svg width="13" height="13" fill="none">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.07 6.837C6.242 7.603 5.5 9.187 5.5 13h-5c0-4.187.759-7.603 3.18-9.837C6.05.973 9.415.5 13 .5v5c-3.416 0-5.051.527-5.93 1.337z"
          fill="currentColor"
        ></path>
      </svg>
    </label>

    <label
      for="radio-square"
      :class="_classStringToObject(getLabelClass(AvatarShape.Square))"
    >
      <input
        id="radio-square"
        type="radio"
        class="sr-only radio-item"
        value="square"
        name="shape-option"
        @input="handleChange($event)"
      />
      <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.5 0.5H13V5.5H5.5V13H0.5V0.5Z"
          fill="currentColor"
        ></path>
      </svg>
    </label>
  </div>
</template>

<script lang="ts">
import type { ShapeSelectorProps } from "./shape-selector.utils";

import { AvatarShape, shapes } from "../utils/common.utils";

export default {
  name: "shape-selector",

  props: ["onChange", "shape"],

  data: () => ({ AvatarShape: AvatarShape, selectedShape: AvatarShape.Circle }),

  mounted() {
    this.selectedShape = this.shape || AvatarShape.Circle;
  },

  watch: {
    onUpdateHook0: {
      handler() {
        this.selectedShape = this.shape || AvatarShape.Circle;
      },
      immediate: true,
    },
  },

  computed: {
    onUpdateHook0() {
      return {
        0: this.shape,
      };
    },
  },

  methods: {
    handleChange(event) {
      this.onChange(event?.target?.value || AvatarShape.Circle);
    },
    getLabelClass(avatarShape) {
      return `radio-label ${
        avatarShape === this.selectedShape ? 'selected' : ''
      }`;
    },
    _classStringToObject(str) {
      const obj = {};
      if (typeof str !== "string") {
        return obj;
      }
      const classNames = str.trim().split(/\s+/);
      for (const name of classNames) {
        obj[name] = true;
      }
      return obj;
    },
  },
};
</script>