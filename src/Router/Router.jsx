import { createBrowserRouter } from "react-router-dom"
import Main from "../Main/Main"
import Home from "../Pages/Home/Home"
import User from "../Pages/User/User"
import Report from "../Pages/Report/Report"

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/user',
                element: <User></User>,
                children:[
                    {
                        path: 'report',
                        element: <Report></Report>,
                    },
                ]
            },
        ]
    }
])
export default Router