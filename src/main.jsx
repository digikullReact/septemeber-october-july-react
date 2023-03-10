import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import About from './components/About';
import Mycompany from './components/Mycompany';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[

      ]
    },

    {
        path: "/mycompany",
        element: <Mycompany/>,
        children:[
  
        ]
      },
    

    

    {
        path: "/about",
        element: <About/>,
        children:[
            {
                path:"mycompany",
                element:<Mycompany/>
            },
            {
                path:"ourfounder",
                element:<Mycompany/>
            }
          
          
        ]
      },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={router} />
   
)
