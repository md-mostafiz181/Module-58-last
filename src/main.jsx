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
import Posts from './components/Posts/Posts.jsx';
import PostDetails from './components/PostDetails/PostDetails.jsx';
import Error from './components/Error/Error.jsx';
import Photos from './components/Photos/Photos.jsx';
import PhotosDetails from './components/PhotosDetails/PhotosDetails.jsx';
import Todos from './components/Todos/Todos.jsx';
import TodosDetails from './components/TodosDetails/TodosDetails.jsx';

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
        element:<FriendDetail></FriendDetail>,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)

      },
      {
        path:"/contact",
        element:<Contact></Contact>,
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/posts",
        element:<Posts></Posts>,
        loader:()=>fetch("https://jsonplaceholder.typicode.com/posts")
      },
      {
        path:"post/:postId",
        element:<PostDetails></PostDetails>,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)

      },
      {
        path:"photos",
        element:<Photos></Photos>,
        loader:()=>fetch('https://jsonplaceholder.typicode.com/photos'),

      },
      {
        path:"photos/:photosId",
        element:<PhotosDetails></PhotosDetails>,
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/photos/${params.photosId}`)


      },
      {
        path:"todos",
        element:<Todos></Todos>,
        loader:()=>fetch('https://jsonplaceholder.typicode.com/todos'),

      },
      {
        path:"todos/:todosId",
        element: <TodosDetails></TodosDetails>,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/todos/${params.todosId}`)

      },
      {
        path: "*",
        element: <Error></Error>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
