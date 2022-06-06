// main.ts
// Vue, Vue Router, VueX の設定
// bootstrap の設定
// fontawesome の設定

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";

// fontawesome の設定
// import the fontawesome core
import { library } from "@fortawesome/fontawesome-svg-core";
// import specific icons
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
// add icons to the library
library.add(faHome);
library.add(faCog);
library.add(faQuestionCircle);
library.add(faTrash);
library.add(faLink);
// import font awesome icon component
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount("#app");
