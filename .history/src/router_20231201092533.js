import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import Homepage from 'src/pages/Homepage'
import Layout from 'src/layout/index'
import ErrorPage from 'src/pages/ErrorPage'
import Categories from 'src/pages/Categories'
import NewsDetails from 'src/pages/NewsDetails';

const router = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <Homepage /> },
            { path: '/categories', element: <Categories /> },
            {path: '/categories/:category', element: <Category/>},
            {path: '/details/:id', element: <NewsDetails />}
        ],
    },
])

export default router
