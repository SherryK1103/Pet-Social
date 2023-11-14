import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';

import App from './App.jsx';
// import NotFound from '../pages/NotFound.jsx';
import LoginForm from './components/LoginForm.jsx';
import SignupForm from './components/SignupForm.jsx';
import Navbar from './components/Navbar.jsx';
//edit the paths and create the pages to import
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <LoginForm />
      },
      {
        path: '/signup',
        element: <SignupForm />
      },
      {
        path: '/navbar',
        element: <Navbar />
      },
    ],
  },
]);
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );
  