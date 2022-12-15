<template>
  <svg
    fill="none"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="'0 0 ' + SIZE + ' ' + SIZE"
    :width="size"
    :height="size"
  >
    <template v-if="title">
      <title>{{ name }}</title>
    </template>

    <mask
      id="mask__bauhaus"
      maskUnits="userSpaceOnUse"
      :x="0"
      :y="0"
      :width="SIZE"
      :height="SIZE"
    >
      <rect
        fill="#FFFFFF"
        :width="SIZE"
        :height="SIZE"
        :rx="square ? undefined : SIZE * 2"
      ></rect>
    </mask>
    <g mask="url(#mask__bauhaus)">
      <rect :width="SIZE" :height="SIZE" :fill="properties?.[0]?.color"></rect>
      <rect
        :x="(SIZE - 60) / 2"
        :y="(SIZE - 20) / 2"
        :width="SIZE"
        :height="properties?.[1]?.isSquare ? SIZE : SIZE / 8"
        :fill="properties?.[1]?.color"
        :transform="
          'translate(' +
          properties?.[1]?.translateX +
          ' ' +
          properties?.[1]?.translateY +
          ') rotate(' +
          properties?.[1]?.rotate +
          ' ' +
          SIZE / 2 +
          ' ' +
          SIZE / 2 +
          ')'
        "
      ></rect>
      <circle
        :cx="SIZE / 2"
        :cy="SIZE / 2"
        :fill="properties?.[2]?.color"
        :r="SIZE / 5"
        :transform="
          'translate(' +
          properties?.[2]?.translateX +
          ' ' +
          properties?.[2]?.translateY +
          ')'
        "
      ></circle>
      <line
        :x1="0"
        :y1="SIZE / 2"
        :x2="SIZE"
        :y2="SIZE / 2"
        :strokeWidth="2"
        :stroke="properties?.[3]?.color"
        :transform="
          'translate(' +
          properties?.[3]?.translateX +
          ' ' +
          properties?.[3]?.translateY +
          ') rotate(' +
          properties?.[3]?.rotate +
          ' ' +
          SIZE / 2 +
          ' ' +
          SIZE / 2 +
          ')'
        "
      ></line>
    </g>
  </svg>
</template>

<script>
import { generateColors, SIZE } from "./avatar-bauhaus.utils";

export default {
  name: "avatar-bauhaus",

  props: ["name", "colors", "size", "title", "square"],

  data: () => ({ SIZE }),

  computed: {
    properties() {
      return generateColors(this.name, this.colors);
    },
  },
};
</script>