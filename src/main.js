import "./app.css";
import App from "./App.svelte";
import { setupIonicSvelte } from "$ionic/svelte";

setupIonicSvelte();

const app = new App({
  target: document.getElementById("app"),
});

export default app;
