<template>
  <svg
    fill="none"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="'0 0 ' + SIZE + ' ' + SIZE"
    :width="size"
    :height="size"
  >
    <template v-if="hasTitle">
      <title>{{ name }}</title>
    </template>

    <mask
      id="mask__marble"
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
    <g mask="url(#mask__marble)">
      <rect
        :width="SIZE"
        :height="SIZE"
        :fill="properties(name, colors)[0].color"
      ></rect>
      <path
        filter="url(#prefix__filter0_f)"
        d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
        :fill="properties(name, colors)[1].color"
        :transform="getPathOneTransform()"
      ></path>
      <path
        filter="url(#prefix__filter0_f)"
        d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
        :style="{
          mixBlendMode: 'overlay',
        }"
        :fill="properties(name, colors)[2].color"
        :transform="getPathTwoTransform()"
      ></path>
    </g>
    <defs>
      <filter
        id="prefix__filter0_f"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood result="BackgroundImageFix" :floodOpacity="0"></feFlood>
        <feBlend
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        ></feBlend>
        <feGaussianBlur
          result="effect1_foregroundBlur"
          :stdDeviation="7"
        ></feGaussianBlur>
      </filter>
    </defs>
  </svg>
</template>

<script>
import { SIZE, generateColors } from "./avatar-marble.utils";

export default {
  name: "avatar-marble",

  props: ["name", "colors", "size", "hasTitle", "square"],

  data() {
    return { SIZE };
  },

  methods: {
    properties(name, colors) {
      return generateColors(name, colors);
    },
    getPathOneTransform() {
      return (
        "translate(" +
        this.properties(this.name, this.colors)[1].translateX +
        " " +
        this.properties(this.name, this.colors)[1].translateY +
        ") rotate(" +
        this.properties(this.name, this.colors)[1].rotate +
        " " +
        SIZE / 2 +
        " " +
        SIZE / 2 +
        ") scale(" +
        this.properties(this.name, this.colors)[2].scale +
        ")"
      );
    },
    getPathTwoTransform() {
      return (
        "translate(" +
        this.properties(this.name, this.colors)[2].translateX +
        " " +
        this.properties(this.name, this.colors)[2].translateY +
        ") rotate(" +
        this.properties(this.name, this.colors)[2].rotate +
        " " +
        SIZE / 2 +
        " " +
        SIZE / 2 +
        ") scale(" +
        this.properties(this.name, this.colors)[2].scale +
        ")"
      );
    },
  },
};
</script>