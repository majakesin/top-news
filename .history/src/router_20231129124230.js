import { createBrowserRouter } from 'react-router-dom'
import Homepage from 'src/pages/Homepage'

const router = createBrowserRouter([
    { 
      path: '/',
      element: <Homepage/>
    }
]);

export default router;