import {
    createBrowserRouter,
} from "react-router-dom";
import Customer from "./views/Customer";
import Home from "./views/Home";
import MainLayout from "./views/MainLayout";
import Order from "./views/Order";
import Payments from "./views/Payments";

const routes = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/order",
                element: <Order />,
            },
            {
                path: "/payments",
                element: <Payments />,
            },
            {
                path: "/customers",
                element: <Customer />,
            },
            {
                path: "*",
                element: <h3>oops</h3>,
            },

        ],
    },
]);

export default routes;