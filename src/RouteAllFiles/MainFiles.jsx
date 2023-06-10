import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../PagesFiles/HomePage';
import MyRegister from '../firebaseFunction/RegisterFiles/MyRegister';
import Login from '../firebaseFunction/Login/Login';
import Home from '../Component/Home/Home';
import Dashboard from '../DashboardFiles/Dashboard';
import ManageUser from '../DashboardFiles/ADMIN/ManageUser';


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
            element: <Dashboard></Dashboard>,
            children:[
              {
                
                  path: "/dashboard/manageuser",
                  element: <ManageUser />
           
              }



            ]
          },








          ]
        },
      ]);








   
    

export default router;