const { CustomAngularPlugin } = require("./mitosis/plugins/angular");
const { CustomReactPlugin } = require("./mitosis/plugins/react");
const { CustomSveltePlugin } = require("./mitosis/plugins/svelte");
const { CustomVuePlugin } = require("./mitosis/plugins/vue");

module.exports = {
  prettier: false,
  files: "src/**/*",
  targets: ["vue3", "solid", "svelte", "react", "angular"],
  options: {
    solid: {
      typescript: true,
      // plugins: [CustomVuePlugin],
    },
    // vue2: {
    //   typescript: true,
    //   // plugins: [CustomVuePlugin],
    // },
    vue3: {
      // typescript: true,
      plugins: [CustomVuePlugin],
    },
    react: {
      typescript: true,
      // plugins: [CustomReactPlugin],
    },
    svelte: {
      // typescript: true,
      // plugins: [CustomSveltePlugin],
    },
    angular: {
      typescript: true,
      // prettier: false,
      plugins: [
        CustomAngularPlugin({
          // attributes: [
          //   "cx",
          //   "cy",
          //   "d",
          //   "fill",
          //   "floodOpacity",
          //   "height",
          //   "offset",
          //   "r",
          //   "rx",
          //   "stdDeviation",
          //   "stop-color",
          //   "stroke",
          //   "strokeWidth",
          //   "transform",
          //   "viewBox",
          //   "width",
          //   "x",
          //   "x1",
          //   "x2",
          //   "y",
          //   "y1",
          //   "y2",
          // ],
        }),
      ],
    },
  },
};
