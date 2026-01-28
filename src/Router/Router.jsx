import { createBrowserRouter } from "react-router-dom"
import Main from "../Main/Main"
import Home from "../Pages/Home/Home"
import User from "../Pages/User/User"
import Report from "../Pages/Report/Report"
import ProductTable from "../Tables/ProductTable/ProductTable"
import CategoryTable from "../Tables/CategoryTable/CategoryTable"
import SkuTable from "../Tables/SkuTable/SkuTable"
import DesignTable from "../Tables/DesignTable/DesignTable"
import Login from "../Pages/Login/Login"

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
                path: '/login',
                element: <Login></Login>,
            },

            {
                path: '/user',
                element: <User></User>,
                children: [
                    {
                        path: 'report',
                        element: <Report></Report>,
                        children: [
                            {
                                path: 'productTable',
                                element: <ProductTable></ProductTable>,
                            },
                            {
                                path: 'categoryTable',
                                element: <CategoryTable></CategoryTable>,
                            },
                            {
                                path: 'designTable',
                                element: <DesignTable></DesignTable>,
                            },
                            {
                                path: 'skuTable',
                                element: <SkuTable></SkuTable>,
                            },
                        ]
                    },
                ]
            },
            
        ]
    }
])
export default Router