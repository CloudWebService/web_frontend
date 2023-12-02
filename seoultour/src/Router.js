// Router.js
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RestaurantDetailPage from "./pages/RestaurantDetailPage";
import EventDetailPage from "./pages/EventDetailPage";
import App from "./App";

function Router({ style }) {
  return (
    <BrowserRouter>
      <Routes style={style}>
        <Route path="/" element={<App />} />
        <Route path="/event_detail" element={<EventDetailPage />} />
        <Route path="/restaurants_detail" element={<RestaurantDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
