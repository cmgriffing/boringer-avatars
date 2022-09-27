const { CustomAngularPlugin } = require("./mitosis/plugins/angular");
const { CustomVuePlugin } = require("./mitosis/plugins/vue");
const { CustomSveltePlugin } = require("./mitosis/plugins/svelte");

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
    svelte: {
      plugins: [CustomSveltePlugin],
    },
    angular: {
      plugins: [
        CustomAngularPlugin({
          attributes: [
            "fill",
            "x",
            "y",
            "width",
            "height",
            "viewBox",
            "rx",
            "transform",
            "cx",
            "cy",
            "r",
            "x1",
            "y1",
            "x2",
            "y2",
            "strokeWidth",
            "stroke",
          ],
        }),
      ],
    },
  },
};
