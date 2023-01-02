<template>
  <div class="variant-selector widget-wrapper">
    <template :key="index" v-for="(variantOption, index) in variants">
      <label
        :class="_classStringToObject(getLabelClass(variantOption))"
        :for="getInputId(variantOption)"
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
    </template>
  </div>
</template>

<script lang="ts">
import type { VariantSelectorProps } from "./variant-selector.utils";

import { coerceVariant, AvatarVariant, variants } from "../utils/common.utils";

export default {
  name: "variant-selector",

  props: ["onChange", "variant"],

  data: () => ({ selectedVariant: "beam", variants }),

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
        variantOption === this.selectedVariant ? 'selected' : ''
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