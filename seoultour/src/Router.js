// Router.js
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RestaurantDetailPage from "./pages/RestaurantDetailPage";
import EventDetailPage from "./pages/EventDetailPage";
import FavoritePage from "./pages/FavoritePage";
import App from "./App";
import { HeaderBar } from "./components/HeaderBar";
import { BottomBar } from "./components/BottomBar";

function Router({ style }) {
  return (
    <BrowserRouter>
      <Routes style={style}>
        <Route
          path="/"
          element={
            <React.StrictMode>
              <HeaderBar />
              <div id="appContents">
                <App />
              </div>
              <BottomBar />
            </React.StrictMode>
          }
        />
        <Route path="/event_detail" element={<EventDetailPage />} />
        <Route path="/restaurants_detail" element={<RestaurantDetailPage />} />
        <Route path="/bookmark" element={<FavoritePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
