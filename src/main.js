import "./app.css";
import App from "./App.svelte";
import { setupIonicSvelte } from "$ionic/svelte";
import { defineCustomElements } from "@ionic/pwa-elements/loader";
// Call the element loader after the app has been rendered the first time
defineCustomElements(window);

setupIonicSvelte();

const app = new App({
  target: document.getElementById("app"),
});

export default app;
