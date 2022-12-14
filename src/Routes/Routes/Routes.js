import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layouts/DashboardLayout/DashboardLayout";
import Main from "../../Layouts/Main/Main";
import About from "../../Pages/About/About";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Contact from "../../Pages/Contact/Contact";
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor";
import AllUsers from "../../Pages/Dashboard/AllUser/AllUsers";
import ManageDoctor from "../../Pages/Dashboard/ManageDoctor/ManageDoctor";
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
{
    path:'/',
    element:<Main></Main>,
    errorElement:<DisplayError/>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/appointment',
            element:<PrivateRoute><Appointment></Appointment></PrivateRoute>
        },
        {
            path:'about',
            element:<About></About>
        },
        {
            path:'/contact',
            element:<Contact></Contact>
        },
        {
            path:'/dashboard',
            element:<PrivateRoute> <DashboardLayout/></PrivateRoute>,
            errorElement:<DisplayError/>,
            children:[
                {
                    path:'/dashboard',
                    element:<MyAppointment></MyAppointment>
                },
                {
                    path:'/dashboard/allusers',
                    element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
                },
                {
                    path:'/dashboard/adddoctor',
                    element:<AdminRoute><AddDoctor/> </AdminRoute>
                },
                {
                    path:'/dashboard/manageDoctor',
                    element:<AdminRoute> <ManageDoctor/> </AdminRoute>
                },
                {
                    path:'/dashboard/payment/:id',
                    element:<Payment/>,
                    loader:({params})=>fetch(`https://y-five-tau.vercel.app/booking/${params.id}`)
                },

            ]
        }
    ]
}
])
export default router