const { CustomVuePlugin } = require("./mitosis/plugins/vue");

module.exports = {
  prettier: false,
  files: "src/**/*",
  targets: ["vue2"],
  options: {
    vue2: {
      typescript: true,
      plugins: [CustomVuePlugin],
    },
  },
};
