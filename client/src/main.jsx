import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';

import App from './App.jsx';
// import NotFound from '../pages/NotFound.jsx';
import LoginForm from './components/LoginForm.jsx';
import SignupForm from './components/SignupForm.jsx';
//edit the paths and create the pages to import
const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <NotFound />,

      children: [
        {
          index: true,
          element: <LoginForm />
        },
        // {
        // path: '/login',
        // element: <LoginForm />
        // }, 
        {
        path: '/signup',
        element: <SignupForm />
        },
      ],
    },
  ]);
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );
  