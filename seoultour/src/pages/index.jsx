import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import EventPage from "./EventPage/EventPage";
import EventDetailPage from "./EventDetailPage";
import RestaurantPage from "./RestaurantPage/RestaurantPage";
import RestaurantDetailPage from "./RestaurantDetailPage";
import SeoulCongestionPage from "./SeoulCongestionPage/SeoulCongestionPage";

const Router = () => {
    const router = createBrowserRouter([
      {
        path: "/",
        children: [
        //   {
        //     index: true,
        //     element: <Home />,
        //   },
          {
            path: "/event",
            element: <EventPage />,
          },
          {
            path: "/event/:eventId",  // 나경 확인 필요
            element: <EventDetailPage />,
          },
          {
            path: "/restaurant",
            element: <RestaurantPage />,
          },
          {
            path: "/restaurant/:restaurantId",  // 나경 확인 필요
            element: <RestaurantDetailPage />,
          },
          {
            path: "/congestion",
            element: <SeoulCongestionPage />,
          },
        ],
      },
    ]);
  
    return <RouterProvider router={router} />;
  };
  
  export default Router;
  