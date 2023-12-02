import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Router from "./Router";
import AppBar from "./components/AppBar";
import BottomBar from "./components/BottomBar";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppBar />
    <Router />
    <BottomBar />
  </React.StrictMode>
);
