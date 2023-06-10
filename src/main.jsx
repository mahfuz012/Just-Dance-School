import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './RouteAllFiles/MainFiles'
import AuthProviderPro from './AuthProviderFiles/AuthProviderPro'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'










const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  
<React.StrictMode>
<QueryClientProvider client={queryClient}>
<AuthProviderPro>



<div className='max-w-screen-2xl '>
 <RouterProvider router={router} />
 </div>



 </AuthProviderPro>
</QueryClientProvider>
</React.StrictMode>,
)
