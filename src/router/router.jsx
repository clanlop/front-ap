import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import {Cities} from '../pages/Cities';
import Details from '../pages/Details';
import Register from "../pages/Register";
import Login from "../pages/Login";
import Main from'../layouts/Main';
import ProtectedRoute from "./ProtectedRoute";
const router = createBrowserRouter([
{
    path:'/',
    element:<Main/>,
    children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/Cities',
            element:<Cities/>
        },
        {
            path:'/Cities/:id',
            element:<Details/>
        },
        {
            path:'/Register',
            element:<Register/>
        },
        {
            path:'/Login',
            element:(<ProtectedRoute path='/'>
            <Login />
        </ProtectedRoute>)
        },
        {
            path: '/404',
            element: <h1 className="text-3xl">Pagina de ERROR</h1>
        },
    ]

    },
    

]);
export default router;