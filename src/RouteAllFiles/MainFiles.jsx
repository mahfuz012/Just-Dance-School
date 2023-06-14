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
import AddFiles from '../DashboardFiles/Instructor/AddFiles';
import ManageClasses from '../DashboardFiles/ADMIN/ManageClasses';
import MyClasses from '../DashboardFiles/Instructor/MyClasses';
import Feedback from '../DashboardFiles/ADMIN/Feedback';
import InstructorPage from '../PagesFiles/InstructorPage';
import ClassesPage from '../PagesFiles/ClassesPage';
import MyseletedClasses from '../DashboardFiles/Students/MyseletedClasses';
import Paymentpro from '../DashboardFiles/Students/Paymentpro';
import PaymentHistory from '../DashboardFiles/Students/PaymentHistory';
import Enrolled from '../DashboardFiles/Students/Enrolled';
import ErrorManager from '../PagesFiles/ErrorManager';
import UpdateFiles from '../DashboardFiles/Instructor/UpdateFiles';
import InstructorRoute from '../PrivateRouteMake/InstructorRoute';
import StudentRoute from '../PrivateRouteMake/StudentRoute';


 const router = createBrowserRouter([
        {
          path: "/",
          errorElement:<ErrorManager />,
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
            path: "/classess",
            element: <ClassesPage />
         },
          {
            path: "/instructorpage",
            element: <InstructorPage />
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
           
              },
              {
                
                  path: "/dashboard/addfiles",
                  element:<PrivaiteRoute>
                    <InstructorRoute>
                    <AddFiles></AddFiles> 
                    </InstructorRoute>
                    </PrivaiteRoute> 
           
              },
              {
                
                  path: "/dashboard/updatefiles/:id",
                  element: 
                  <PrivaiteRoute>
                    <InstructorRoute>
                  <UpdateFiles />
                 </InstructorRoute>
                  </PrivaiteRoute>
              },
              {
                
                  path: "/dashboard/payment/:id",
                  element: 
                  <PrivaiteRoute>
                  <Paymentpro />
                  </PrivaiteRoute>
           
              },
              {
                
                  path: "/dashboard/myclasses",
                  element:
                  <PrivaiteRoute>
                    <InstructorRoute>
                  <MyClasses />
                  </InstructorRoute>
                  </PrivaiteRoute>
           
              },
              {
                
                  path: "/dashboard/paymenthistory",
                  element:
                  <PrivaiteRoute>
                    <StudentRoute>
                  <PaymentHistory />
                  </StudentRoute>
                  </PrivaiteRoute>
           
              },
              {
                
                  path: '/dashboard/enrolledclass',
                  element: 
                  <PrivaiteRoute>
                  <Enrolled />
                  </PrivaiteRoute>
           
              },
              {
                
                  path: "/dashboard/allclass",
                  element:
                  <PrivaiteRoute>
                    <AdminRoute>
                  <ManageClasses  />
                  </AdminRoute>
                  </PrivaiteRoute>
           
              },
              {
                
                  path: `/dashboard/update/:id`,
                  element:
                  <PrivaiteRoute>
                    <AdminRoute>
                  <Feedback  />
                  </AdminRoute>
                  </PrivaiteRoute>
           
              },
              {
                
                  path: `/dashboard/myallseletedclass`,
                  element:
                  <PrivaiteRoute>
                  <MyseletedClasses />
                  </PrivaiteRoute>
           
              }



            ]
          },








          ]
        },
      ]);








   
    

export default router;