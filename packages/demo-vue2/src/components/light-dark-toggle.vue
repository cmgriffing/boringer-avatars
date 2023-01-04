<template>
  <div class="light-dark-toggle widget-wrapper">
    <label class="checkbox-label" for="theme-checkbox">
      <input
        id="theme-checkbox"
        type="checkbox"
        class="sr-only radio-item"
        name="theme-checkbox"
        @input="handleChange($event)"
      />
      <svg width="20" height="20" fill="none">
        <circle
          cx="10"
          cy="10"
          r="9"
          stroke="currentColor"
          stroke-width="2"
        ></circle>
        <path d="M10 0a10 10 0 000 20V0z" fill="currentColor"></path>
      </svg>
    </label>
  </div>
</template>

<script>
import { Theme } from "../utils/common.utils";

export default {
  name: "light-dark-toggle",

  props: ["onChange", "theme"],

  data: () => ({ selectedTheme: Theme.Light }),

  mounted() {
    this.selectedTheme = this.theme || Theme.Light;
  },

  watch: {
    onUpdateHook0: {
      handler() {
        this.selectedTheme = this.theme || Theme.Light;
      },
      immediate: true,
    },
  },

  computed: {
    onUpdateHook0() {
      return {
        0: this.theme,
      };
    },
  },

  methods: {
    handleChange(event) {
      const newTheme =
        this.selectedTheme === Theme.Dark ? Theme.Light : Theme.Dark;
      this.selectedTheme = newTheme;
      this.onChange(newTheme);
    },
  },
};
</script>