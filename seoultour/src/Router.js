import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RestaurantDetailPage from "./pages/RestaurantDetailPage";
import EventDetailPage from "./pages/EventDetailPage";
import App from "./App";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/event_detail" element={<EventDetailPage />}></Route>
        <Route
          path="/restaurants_detail"
          element={<RestaurantDetailPage />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
