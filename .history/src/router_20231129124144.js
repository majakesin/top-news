import { createBrowserRouter } from 'react-router-dom'
import Homepage from 'src/pages/Homepage'

export default const router = createBrowserRouter([
    { 
      path: '/',
      element: <Homepage/>
    }
  ])