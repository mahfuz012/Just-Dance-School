import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../PagesFiles/HomePage';
import MyRegister from '../firebaseFunction/RegisterFiles/MyRegister';
import Login from '../firebaseFunction/Login/Login';
import Home from '../Component/Home/Home';
import Dashboard from '../DashboardFiles/Dashboard';
import ManageUser from '../DashboardFiles/ADMIN/ManageUser';
import PrivaiteRoute from '../PrivateRouteMake/PrivaiteRoute';
import AdminRoute from '../PrivateRouteMake/AdminRoute';


 const router = createBrowserRouter([
        {
          path: "/",
          element: <HomePage></HomePage>,

          children:[
            {
              path: "/",
              element: <Home />
          },

          {
            path: "/registerfiles",
            element: <MyRegister />
         },
          {
            path: "/loginfiles",
            element: <Login />
          },
          {
            path: "/dashboard",
            element:<PrivaiteRoute> <Dashboard></Dashboard></PrivaiteRoute>,
            children:[
              {
                
                  path: "/dashboard/manageuser",
                  element: <PrivaiteRoute><AdminRoute><ManageUser /></AdminRoute></PrivaiteRoute>
           
              }



            ]
          },








          ]
        },
      ]);








   
    

export default router;