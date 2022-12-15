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
      <path
        d="M0 0h80v40H0z"
        :fill="'url(#gradient_paint0_linear_' + formattedName + ')'"
      ></path>
      <path
        d="M0 40h80v40H0z"
        :fill="'url(#gradient_paint1_linear_' + formattedName + ')'"
      ></path>
    </g>
    <defs>
      <linear-gradient
        gradientUnits="userSpaceOnUse"
        :id="'gradient_paint0_linear_' + formattedName"
        :x1="SIZE / 2"
        :y1="0"
        :x2="SIZE / 2"
        :y2="SIZE / 2"
      >
        <stop :stop-color="sunsetColors[0]"></stop>
        <stop :offset="1" :stop-color="sunsetColors[1]"></stop>
      </linear-gradient>
      <linear-gradient
        gradientUnits="userSpaceOnUse"
        :id="'gradient_paint1_linear_' + formattedName"
        :x1="SIZE / 2"
        :y1="SIZE / 2"
        :x2="SIZE / 2"
        :y2="SIZE"
      >
        <stop :stop-color="sunsetColors[2]"></stop>
        <stop :offset="1" :stop-color="sunsetColors[3]"></stop>
      </linear-gradient>
    </defs>
  </svg>
</template>

<script lang="ts">
import type { AvatarProps } from "../avatar.utils";

import { defaultAvatarProps } from "../avatar.utils";
import { generateColors, SIZE } from "./avatar-sunset.utils";

export default {
  name: "avatar-sunset",

  props: ["name", "colors", "size", "title", "square"],

  data: () => ({ SIZE }),

  computed: {
    formattedName() {
      return this.name.replace(/\s/g, "");
    },
    sunsetColors() {
      return generateColors(this.name, this.colors);
    },
  },
};
</script>