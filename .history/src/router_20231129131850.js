import React from 'react';
import { createBrowserRouter } from 'react-router-dom'
import Homepage from 'src/pages/Homepage'

const router = createBrowserRouter([
    { 
      element: <Layout/>
    }
]);

export default router;