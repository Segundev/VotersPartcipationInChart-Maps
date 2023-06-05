import "./app.css";
import App from "./App.svelte";
import { Sidechain } from "@nprapps/sidechain";

Sidechain.registerGuest();

const app = new App({
  target: document.getElementById("app"),
});

export default app;
