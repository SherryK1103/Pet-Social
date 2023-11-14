import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';

import App from './App.jsx';
import NotFound from '../pages/NotFound.jsx';
import Login from '../pages/Login.jsx';
import Signup from '../pages/Signup.jsx';
import FrontPage from '../pages/FrontPage.jsx';
//edit the paths and create the pages to import
const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <NotFound />,

      children: [
        {
          index: true,
          element: <FrontPage />
        },
        {
        path: '/login',
        element: <Login />
        }, 
        {
        path: '/signup',
        element: <Signup />
        },
      ],
    },
  ]);
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );
  