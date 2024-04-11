import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import lectures from "./lectures.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App lectures={lectures} />
  </React.StrictMode>
);
