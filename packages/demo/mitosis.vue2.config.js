const { CustomVue2Plugin } = require("./mitosis/plugins/vue2");

module.exports = {
  prettier: false,
  files: "src/**/*",
  targets: ["vue2"],
  options: {
    vue2: {
      typescript: true,
      plugins: [CustomVue2Plugin],
    },
  },
};
