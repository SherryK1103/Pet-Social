import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import NotFound from '../pages/NotFound.jsx';
import Welcome from '../pages/Welcome.jsx';
import Home from '../pages/Home.jsx';
//edit the paths and create the pages to import
const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <NotFound />,

      children: [
        {
          index: true,
          element: <Welcome />
        },
        // {
        //   index: true,
        //   element: <Home />
        // },
        {
          path: '/login',
          element: <insertpathhere />
        }, {
          path: '/matchup/:id',
          element: <Vote />
        },
      ],
    },
  ]);
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );
  