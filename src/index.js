import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
