const { CustomAngularPlugin } = require("./mitosis/plugins/angular");
const { CustomVue3Plugin } = require("./mitosis/plugins/vue3");
const { CustomSveltePlugin } = require("./mitosis/plugins/svelte");
const { CustomReactPlugin } = require("./mitosis/plugins/react");
const { CustomStencilPlugin } = require("./mitosis/plugins/stencil");

module.exports = {
  prettier: false,
  files: "src/**/*",
  targets: [
    "vue3",
    "solid",
    "svelte",
    "react",
    "angular",
    "qwik",
    "stencil",
    // "lit",
  ],
  options: {
    stencil: {
      // prettier: false,
      typescript: true,
      plugins: [CustomStencilPlugin],
    },
    lit: {
      prettier: false,
      typescript: false,
    },
    alpine: {
      prettier: false,
    },
    marko: {
      prettier: false,
    },
    solid: {
      typescript: true,
      // plugins: [CustomVuePlugin],
    },
    vue3: {
      // typescript: true,
      plugins: [CustomVue3Plugin],
    },
    react: {
      typescript: true,
      plugins: [CustomReactPlugin],
    },
    svelte: {
      // typescript: true,
      plugins: [CustomSveltePlugin],
    },
    angular: {
      typescript: true,
      // prettier: false,
      plugins: [CustomAngularPlugin({})],
    },
  },
};
