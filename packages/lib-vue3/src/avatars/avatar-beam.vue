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
      id="mask__beam"
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
    <g mask="url(#mask__beam)">
      <rect
        :width="SIZE"
        :height="SIZE"
        :fill="data(name, colors).backgroundColor"
      ></rect>
      <rect
        x="0"
        y="0"
        :width="SIZE"
        :height="SIZE"
        :transform="getRectTransform()"
        :fill="data(name, colors).wrapperColor"
        :rx="data(name, colors).isCircle ? SIZE : SIZE / 6"
      ></rect>
      <g :transform="getGroupTransform()">
        <template v-if="data(name, colors).isMouthOpen">
          <path
            fill="none"
            strokeLinecap="round"
            :d="getOpenMouthData()"
            :stroke="data(name, colors).faceColor"
          ></path>
        </template>

        <template v-else>
          <path
            :d="getClosedMouthData()"
            :fill="data(name, colors).faceColor"
          ></path>
        </template>

        <rect
          stroke="none"
          :x="14 - data(name, colors).eyeSpread"
          :y="14"
          :width="1.5"
          :height="2"
          :rx="1"
          :fill="data(name, colors).faceColor"
        ></rect>
        <rect
          stroke="none"
          :x="20 + data(name, colors).eyeSpread"
          :y="14"
          :width="1.5"
          :height="2"
          :rx="1"
          :fill="data(name, colors).faceColor"
        ></rect>
      </g>
    </g>
  </svg>
</template>

<script>
import { generateData, SIZE } from "./avatar-beam.utils";

export default {
  name: "avatar-beam",

  props: ["name", "colors", "size", "hasTitle", "square"],

  data() {
    return { SIZE };
  },

  methods: {
    data(name, colors) {
      return generateData(name, colors);
    },
    getRectTransform() {
      return (
        "translate(" +
        this.data(this.name, this.colors).wrapperTranslateX +
        " " +
        this.data(this.name, this.colors).wrapperTranslateY +
        ") rotate(" +
        this.data(this.name, this.colors).wrapperRotate +
        " " +
        SIZE / 2 +
        " " +
        SIZE / 2 +
        ") scale(" +
        this.data(this.name, this.colors).wrapperScale +
        ")"
      );
    },
    getGroupTransform() {
      return (
        "translate(" +
        this.data(this.name, this.colors).faceTranslateX +
        " " +
        this.data(this.name, this.colors).faceTranslateY +
        ") rotate(" +
        this.data(this.name, this.colors).faceRotate +
        " " +
        SIZE / 2 +
        " " +
        SIZE / 2 +
        ")"
      );
    },
    getOpenMouthData() {
      return (
        "M15 " +
        (19 + this.data(this.name, this.colors).mouthSpread) +
        "c2 1 4 1 6 0"
      );
    },
    getClosedMouthData() {
      return (
        "M13," +
        (19 + this.data(this.name, this.colors).mouthSpread) +
        " a1,0.75 0 0,0 10,0"
      );
    },
  },
};
</script>