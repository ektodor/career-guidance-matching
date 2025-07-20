import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/main.scss";
// import * as bootstrap from "bootstrap";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
