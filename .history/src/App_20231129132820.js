import React, { useState } from 'react';
import { RouterProvider } from 'react-router-dom';


import router from './router';
import './App.css';
import themes from './themes'


function App() {
  const [activeTheme, setActiveTheme] = useState(themes[THEMES_TYPES.LIGHT]);

  return <RouterProvider router={router}/>

}

export default App;
