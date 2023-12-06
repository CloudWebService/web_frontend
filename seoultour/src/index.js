import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Router from "./pages";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div id="appContents">
      <App />
    </div>
  </React.StrictMode>
);
