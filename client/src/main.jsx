// main.jsx
// This is the FIRST file that runs when the app starts.
// We put BrowserRouter here so the whole app uses routing from one place.

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./App.css"; // your global css (Tailwind / App styles)

ReactDOM.createRoot(document.getElementById("root")).render(
  // Put BrowserRouter here only — do not place another BrowserRouter inside App.jsx
  <BrowserRouter>
    <App />
  </BrowserRouter>
);