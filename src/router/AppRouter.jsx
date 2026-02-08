import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from '../layout/MainLayout'
import Home from '../screens/Home'
import About from '../screens/About'
import Contact from '../screens/Contact'
import Auth from '../layout/Auth'
import Login from '../components/Login'
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";


const AppRouter = () => {

    let router = createBrowserRouter([
        {
            path: '/',
            element: (<PublicRoute>
                <Auth />
            </PublicRoute>)
        },
        {
            path: '/home',
            element: (
                <ProtectedRoute>
                    <MainLayout />
                </ProtectedRoute>
            ),
            children: [
                {
                    path: '',
                    element: <Home />
                },
                {
                    path: 'about',
                    element: <About />
                },
                {
                    path: 'contact',
                    element: <Contact />
                },
                {
                    path: 'logout',
                    element: <Login />
                }
            ]
        }
    ])

    return <RouterProvider router={router} />
}

export default AppRouter