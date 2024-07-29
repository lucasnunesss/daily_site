import React from 'react'
import ReactDOM from 'react-dom/client'
import AddTask from './AddTask.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Load from './Load.jsx'
import { TaskContextProvider } from './context/TaskContext.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <AddTask />,
  },
  {
    path: "/load",
    element: <Load />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskContextProvider>
    <RouterProvider router={router} />
    </TaskContextProvider>
   
  </React.StrictMode>,
)
