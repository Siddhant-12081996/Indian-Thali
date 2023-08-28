import App from "./App";
import React from "react";
import Checkout from './pages/Checkout'


const Routes=[
    {
        path: "/",
        element: <App />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
]

export default Routes