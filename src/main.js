import { createApp } from "vue";
import App from "./App.vue";
import components from "./components/UI";

const app = createApp(App);

//Set global components from ui
components.forEach((component) => {
  app.component(component.name, component);
});

app.mount("#app");
