import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import Homepage from 'src/pages/Homepage'
import Layout from 'src/layout/index'
import ErrorPage from 'src/pages/ErrorPage'
import Categories from 'src/pages/Categories'
import TopHeadlinesDetails from 'src/pages/TopHeadlineDetails'
import Category from 'src/pages/Category'

const router = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <Homepage /> },
            { path: '/details/:id', element: <TopHeadlineDetails /> },
            { path: '/categories', element: <Categories /> },
            { path: '/categories/:category', element: <Category /> },
        ],
    },
])

export default router
