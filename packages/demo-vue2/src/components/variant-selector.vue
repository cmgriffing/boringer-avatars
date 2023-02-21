<template>
  <div class="variant-selector widget-wrapper">
    <label
      v-for="(variantOption, index) in variants"
      :class="_classStringToObject(getLabelClass(variantOption))"
      :for="getInputId(variantOption)"
      :key="index"
    >
      <input
        type="radio"
        class="radio-item sr-only"
        name="variant-option"
        :id="getInputId(variantOption)"
        :value="variantOption"
        @input="handleChange($event)"
      />
      {{ variantOption }}
    </label>
  </div>
</template>

<script>
import { coerceVariant, AvatarVariant, variants } from "../utils/common.utils";

export default {
  name: "variant-selector",

  props: ["onChange", "variant"],

  data() {
    return { selectedVariant: "beam", variants };
  },

  mounted() {
    this.selectedVariant = coerceVariant(this.variant) || "beam";
  },

  watch: {
    onUpdateHook0: {
      handler() {
        this.selectedVariant = coerceVariant(this.variant) || "beam";
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

  methods: {
    handleChange(event) {
      const newVariant = event?.target?.value || AvatarVariant.Marble;
      this.selectedVariant = newVariant;
      this.onChange(newVariant);
    },
    getLabelClass(variantOption) {
      return `radio-label ${
        variantOption === this.selectedVariant ? "selected" : ""
      }`;
    },
    getInputId(variantOption) {
      return `radio-${variantOption}`;
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