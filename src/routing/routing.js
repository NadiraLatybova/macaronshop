import Root from "../components/Root/Root";
import Catalog from "../pages/Catalog/Catalog";
import Register from "../pages/Register/Register";
import NotFound from "../pages/NotFound/NotFound";
import OneProduct from "../pages/OneProduct/OneProduct";
import Cart from "../pages/Cart/Cart";
import Set from "../pages/Set/Set";
import News from "../pages/News/News";
import Contacts from "../pages/Contacts/Contacts";
import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home/Home";
import Delivery from "../pages/Delivery/Delivery";
import Policy from "../pages/Policy/Policy";
import Login from "../pages/Login/Login";
import Discounts from "../pages/Discount/Discount";
import CategoryCatalog from "../pages/CategoryCatalog/CategoryCatalog";
import Favorites from "../pages/Favorites/Favorites";
import Print from "../pages/Print/Print";
import Warranty from "../pages/Warranty/Warranty";
import Categories from "../components/Categories/CategoryPage";
import CheckOut from "../pages/CheckOut/CheckOut";
import Sweet from "../pages/Sweet/Sweet";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [

            {
                path: '',
                element: <Home/>
            },
            {
                path: 'catalog',
                element: <Catalog/>
            },
            {
                path: 'sales-week',
                element: <Discounts/>
            },
            {
                path: 'register',
                element: <Register/>
            },
            {
                path: '*',
                element: <NotFound/>
            },
            {
                path: 'guarantee',
                element: <Warranty/>
            },
            {
                path: 'delivery',
                element: <Delivery/>
            },

            {
                path: 'product/:id',
                element: <OneProduct/>
            },
            {
                path: 'cart',
                element: <Cart/>
            },
            {
                path: 'set',
                element: <Set/>
            },
            {
                path: 'privacy-policy',
                element: <Policy/>
            },
            {
                path: 'news',
                element: <News/>
            }
            ,
            {
                path: 'contacts',
                element: <Contacts/>
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'category',
                element: <CategoryCatalog/>
            },
            {
                path: 'print',
                element: <Print/>
            },
            {
                path: "/category/:categoryName",
                element: <Categories/>
            },
            {
                path: 'favourite',
                element: <Favorites/>
            },
            {
                path: 'checkout',
                element: <CheckOut/>
            },
            {
                path: 'desert',
                element: <Sweet/>
            },



        ]
    }
])

export default router