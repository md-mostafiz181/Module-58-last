import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Header from './components/Header/Header.jsx';
import Contact from './components/Contact/Contact.jsx';
import About from './components/About/About.jsx';
import First from './components/First/First.jsx';
import Friends from './components/Friends/Friends.jsx';
import FriendDetail from './components/FriendDetail/FriendDetail.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>This is Mostafizur Rahman</div>,
//   },
//   {
//     path:"/about",
//     element: <div>This is about page</div>,
//   },
//   {
//     path:"/contact",
//     element:<div>This is contact page</div>
//   }
// ]);

const router=createBrowserRouter([
  {
    path:"/",
    element:<Home></Home>,
    children:[
      {
        path:"/",
        element:<First></First>

      },
      {
        path:"/friends",
        element:<Friends></Friends>,
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users')
      

      },
      {
        path:"freind/:friendId",
        element:<FriendDetail></FriendDetail>

      },
      {
        path:"/contact",
        element:<Contact></Contact>,
      },
      {
        path:"/about",
        element:<About></About>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
