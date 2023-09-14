import React from 'react'
import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import UserDetails from "./Components/UserDetails"
import CreateUser from "./Components/CreateUser"
import EditUser from "./Components/EditUser"
import UserProfile from './Components/UserProfile';
import NoPage from './Components/NoPage';

const App = () => {
const router = createBrowserRouter([
    {
        path: "/",
        element: <UserDetails />
    },
    {
        path: "/create/user",
        element: <CreateUser />
    },
    {
        path: "/edit/user/:id",
        element: <EditUser />
    },
    {
        path: "/profile/:id",
        element: <UserProfile />
    },
    {
        path: "*",
        element: <NoPage />
    }
]);
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}

export default App
