import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import ProviderRedux from "./utils/ProviderRedux";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProviderRedux>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProviderRedux>
);

reportWebVitals();
