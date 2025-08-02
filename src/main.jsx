import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/main.scss";
// Import all of Bootstrap’s JS
import * as bootstrap from "bootstrap";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
