import {
	createBrowserRouter,
} from "react-router-dom";
import { Cart } from "../pages/Cart/Cart";
import { Catalog } from "../pages/Catalog/Catalog";
import { Login } from "../pages/Login/Login";
import { Main } from "../pages/Main/Main";
import { Product } from "../pages/Product/Product";
import { Registration } from "../pages/Registration/Registration";
import { Profile } from "../pages/Profile/Profile";


export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
	},
	{
		path: "/catalog",
		element: <Catalog />,
	},
	{
		path: "/registration",
		element: <Registration />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/cart",
		element: <Cart />,
	},
	{
		path: "/product/:id",
		element: <Product />,
	},
	{
		path: "/profile",
		element: <Profile />,
	},
]);