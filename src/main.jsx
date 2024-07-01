import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./i18n/i18n.js";
import { HelmetProvider } from "react-helmet-async";
import GlobalStyles from "./GlobalStyles.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <React.Suspense fallback="loading...">
      <HelmetProvider>
        <GlobalStyles />
        <App />
      </HelmetProvider>
    </React.Suspense>
  </React.StrictMode>
);
