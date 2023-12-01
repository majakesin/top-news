import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Homepage from 'src/pages/Homepage'
import Layout from 'src/layout/index';
import ErrorPage from 'src/pages/ErrorPage';

const router = createBrowserRouter([
    { 
      element: <Layout/>
      ErrorPage={}
    }
]);

export default router;