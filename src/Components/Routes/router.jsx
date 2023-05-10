import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

let router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },

            {
                path: "About",
                element: <About></About>
            },
            {
                path: "Login",
                element: <Login></Login>
            },
            {
                path: "Register",
                element: <Register></Register>
            },

        ]
    }
])

export default router