const { CustomAngularPlugin } = require("./mitosis/plugins/angular");
const { CustomVue3Plugin } = require("./mitosis/plugins/vue3");
const { CustomVue2Plugin } = require("./mitosis/plugins/vue2");
const { CustomSveltePlugin } = require("./mitosis/plugins/svelte");
const { CustomReactPlugin } = require("./mitosis/plugins/react");
const { CustomSolidPlugin } = require("./mitosis/plugins/solid");
const { CustomQwikPlugin } = require("./mitosis/plugins/qwik");
const { CustomStencilPlugin } = require("./mitosis/plugins/stencil");
const { CustomCommonPlugin } = require("./mitosis/plugins/common");

module.exports = {
  prettier: false,
  files: "src/**/*",
  targets: [
    "solid",
    "vue3",
    "vue2",
    "svelte",
    "react",
    "angular",
    "stencil",
    "qwik",
  ],
  options: {
    stencil: {
      // prettier: false,
      typescript: true,
      plugins: [CustomStencilPlugin],
    },
    solid: {
      typescript: true,
      plugins: [CustomCommonPlugin, CustomSolidPlugin],
    },
    vue3: {
      typescript: true,
      prettier: false,
      plugins: [CustomCommonPlugin, CustomVue3Plugin],
    },
    vue2: {
      typescript: false,
      prettier: false,
      plugins: [CustomCommonPlugin, CustomVue2Plugin],
    },
    react: {
      typescript: true,
      plugins: [CustomCommonPlugin, CustomReactPlugin],
    },
    svelte: {
      // typescript: true,
      plugins: [CustomCommonPlugin, CustomSveltePlugin],
    },
    angular: {
      typescript: true,
      // prettier: false,
      plugins: [CustomCommonPlugin, CustomAngularPlugin({})],
    },
    qwik: {
      typescript: true,
      // prettier: false,
      plugins: [CustomCommonPlugin, CustomQwikPlugin],
    },
  },
};
