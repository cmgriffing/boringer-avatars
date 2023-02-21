<template>
  <div class="size-selector widget-wrapper">
    <label
      v-for="(entry, index) in sizes"
      :class="_classStringToObject(getLabelClass(entry))"
      :for="getInputId(entry)"
      :key="index"
    >
      <input
        type="radio"
        class="radio-item sr-only"
        name="size-option"
        :id="getInputId(entry)"
        :value="entry[1]"
        @input="handleChange($event)"
      />
      <div :class="_classStringToObject(getSizeDotClass(entry))"></div>
    </label>
  </div>
</template>

<script>
import { AvatarSize, sizes } from "../utils/common.utils";

export default {
  name: "size-selector",

  props: ["onChange", "size"],

  data() {
    return { selectedSize: AvatarSize.Medium, sizes };
  },

  mounted() {
    this.selectedSize = this.size || AvatarSize.Medium;
  },

  watch: {
    onUpdateHook0: {
      handler() {
        this.selectedSize = this.size || AvatarSize.Medium;
      },
      immediate: true,
    },
  },

  computed: {
    onUpdateHook0() {
      return {
        0: this.size,
      };
    },
  },

  methods: {
    handleChange(event) {
      const newSize = event?.target?.value || AvatarSize.Medium;
      this.selectedSize = newSize;
      this.onChange(newSize);
    },
    getLabelClass(sizeEntry) {
      return `radio-label ${
        sizeEntry[1] === this.selectedSize ? "selected" : ""
      }`;
    },
    getInputId(sizeEntry) {
      return `radio-${sizeEntry[0].toLowerCase()}`;
    },
    getSizeDotClass(sizeEntry) {
      return `size-dot ${sizeEntry[0].toLowerCase()}`;
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