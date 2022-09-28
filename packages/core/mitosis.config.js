const { CustomAngularPlugin } = require("./mitosis/plugins/angular");
const { CustomReactPlugin } = require("./mitosis/plugins/react");
const { CustomSveltePlugin } = require("./mitosis/plugins/svelte");
const { CustomVuePlugin } = require("./mitosis/plugins/vue");

module.exports = {
  files: "src/**/*",
  targets: [
    "vue3",
    "solid",
    "svelte",
    "react",
    // "angular"
  ],
  options: {
    vue3: {
      plugins: [CustomVuePlugin],
    },
    react: {
      plugins: [CustomReactPlugin],
    },
    svelte: {
      plugins: [CustomSveltePlugin],
    },
    angular: {
      plugins: [
        CustomAngularPlugin({
          attributes: [
            "cx",
            "cy",
            "d",
            "fill",
            "floodOpacity",
            "height",
            "offset",
            "r",
            "rx",
            "stdDeviation",
            "stop-color",
            "stroke",
            "strokeWidth",
            "transform",
            "viewBox",
            "width",
            "x",
            "x1",
            "x2",
            "y",
            "y1",
            "y2",
          ],
        }),
      ],
    },
  },
};
