import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import EventPage from "./EventPage/EventPage";
import EventDetailPage from "./EventDetailPage";
import RestaurantPage from "./RestaurantPage/RestaurantPage";
import RestaurantDetailPage from "./RestaurantDetailPage";
import SeoulCongestionPage from "./SeoulCongestionPage/SeoulCongestionPage";
// Router.js

import FavoritePage from "./FavoritePage";
import HeaderBar from "../components/HeaderBar";
import BottomBar from "../components/BottomBar";
import FavoriteEventDetailPage from "../pages/FavoriteEventDetailPage";
const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          index: true,
          element: (
            <>
              {" "}
              <HeaderBar />
              <EventPage />
              <BottomBar />
            </>
          ),
        },
        {
          path: "/event",
          element: (
            <>
              <HeaderBar />
              <EventPage />
              <BottomBar />
            </>
          ),
        },
        {
          path: "/event-detail", // 나경 확인 필요
          element: (
            <>
              <HeaderBar />
              <EventDetailPage />
              <BottomBar />,
            </>
          ),
        },
        {
          path: "/favorite-event-detail", // 나경 확인 필요
          element: (
            <>
              <HeaderBar />
              <FavoriteEventDetailPage />
              <BottomBar />,
            </>
          ),
        },
        {
          path: "/restaurant",
          element: (
            <>
              <HeaderBar />
              <RestaurantPage />
              <BottomBar />
            </>
          ),
        },
        {
          path: "/restaurant-detail", // 나경 확인 필요
          element: (
            <>
              <HeaderBar />
              <RestaurantDetailPage />
              <BottomBar />
            </>
          ),
        },
        {
          path: "/congestion",
          element: (
            <>
              <HeaderBar />
              <SeoulCongestionPage />
              <BottomBar />
            </>
          ),
        },
        {
          path: "/bookmark",
          element: (
            <>
              <HeaderBar />
              <FavoritePage />
              <BottomBar />
            </>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
