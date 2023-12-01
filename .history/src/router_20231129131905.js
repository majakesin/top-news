import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Homepage from 'src/pages/Homepage'
import Layout from 'src/layout/index'

const router = createBrowserRouter([
    { 
      element: <Layout/>
    }
]);

export default router;