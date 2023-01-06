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
      id="mask__sunset"
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
    <g mask="url(#mask__sunset)">
      <path d="M0 0h80v40H0z" :fill="getPaintFill0()"></path>
      <path d="M0 40h80v40H0z" :fill="getPaintFill1()"></path>
    </g>
    <defs>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        :id="getPaintId0()"
        :x1="SIZE / 2"
        :y1="0"
        :x2="SIZE / 2"
        :y2="SIZE / 2"
      >
        <stop :stop-color="sunsetColors(name, colors)[0]"></stop>
        <stop :offset="1" :stop-color="sunsetColors(name, colors)[1]"></stop>
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        :id="getPaintId1()"
        :x1="SIZE / 2"
        :y1="SIZE / 2"
        :x2="SIZE / 2"
        :y2="SIZE"
      >
        <stop :stop-color="sunsetColors(name, colors)[2]"></stop>
        <stop :offset="1" :stop-color="sunsetColors(name, colors)[3]"></stop>
      </linearGradient>
    </defs>
  </svg>
</template>

<script>
import { generateColors, SIZE } from "./avatar-sunset.utils";

export default {
  name: "avatar-sunset",

  props: ["name", "size", "title", "square", "colors"],

  data: () => ({ SIZE }),

  computed: {
    formattedName() {
      return this.name.replace(/\s/g, "");
    },
  },

  methods: {
    sunsetColors(name, colors) {
      return generateColors(name, colors);
    },
    getPaintFill0() {
      return "url(#gradient_paint0_linear_" + this.formattedName + ")";
    },
    getPaintFill1() {
      return "url(#gradient_paint1_linear_" + this.formattedName + ")";
    },
    getPaintId0() {
      return "gradient_paint0_linear_" + this.formattedName;
    },
    getPaintId1() {
      return "gradient_paint1_linear_" + this.formattedName;
    },
  },
};
</script>