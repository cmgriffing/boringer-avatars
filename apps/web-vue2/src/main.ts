import { Avatar } from "@boringer-avatars/vue2";
/** Vue main script */
import Vue from "vue";
import "./style.css";

import App from "@/App.vue";

Vue.config.productionTip = false;

const app = new Vue({
  components: {
    avatar: Avatar,
  },
  render: (h) => h(App),
});

app.$mount("#app");
