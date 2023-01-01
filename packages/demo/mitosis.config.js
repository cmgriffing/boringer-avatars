const { CustomAngularPlugin } = require("./mitosis/plugins/angular");
const { CustomVue3Plugin } = require("./mitosis/plugins/vue3");
const { CustomSveltePlugin } = require("./mitosis/plugins/svelte");
const { CustomReactPlugin } = require("./mitosis/plugins/react");
const { CustomSolidPlugin } = require("./mitosis/plugins/solid");

module.exports = {
  prettier: false,
  files: "src/**/*",
  targets: [
    // "solid",
    "vue3",
    "svelte",
    "react",
    //  "angular"
  ],
  options: {
    solid: {
      typescript: true,
      plugins: [CustomSolidPlugin],
    },
    vue3: {
      typescript: true,
      prettier: false,
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
    // angular: {
    //   typescript: true,
    //   // prettier: false,
    //   plugins: [CustomAngularPlugin({})],
    // },
  },
};
