import { createApp } from "vue";
import App from "./App.vue";
import components from "./components/UI";
import router from "./router/router";
const app = createApp(App);

//Set global components from ui
components.forEach((component) => {
  app.component(component.name, component);
});

app.use(router).mount("#app");
