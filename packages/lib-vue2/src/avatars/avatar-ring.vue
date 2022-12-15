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
      id="mask__ring"
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
    <g mask="url(#mask__ring)">
      <path d="M0 0h90v45H0z" :fill="ringColors[0]"></path>
      <path d="M0 45h90v45H0z" :fill="ringColors[1]"></path>
      <path d="M83 45a38 38 0 00-76 0h76z" :fill="ringColors[2]"></path>
      <path d="M83 45a38 38 0 01-76 0h76z" :fill="ringColors[3]"></path>
      <path d="M77 45a32 32 0 10-64 0h64z" :fill="ringColors[4]"></path>
      <path d="M77 45a32 32 0 11-64 0h64z" :fill="ringColors[5]"></path>
      <path d="M71 45a26 26 0 00-52 0h52z" :fill="ringColors[6]"></path>
      <path d="M71 45a26 26 0 01-52 0h52z" :fill="ringColors[7]"></path>
      <circle :cx="45" :cy="45" :r="23" :fill="ringColors[8]"></circle>
    </g>
  </svg>
</template>

<script>
import { generateColors, SIZE } from "./avatar-ring.utils";

export default {
  name: "avatar-ring",

  props: ["colors", "name", "size", "title", "square"],

  data: () => ({ SIZE }),

  computed: {
    ringColors() {
      return generateColors(this.colors, this.name);
    },
  },
};
</script>