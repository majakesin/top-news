import React, {useState} from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { THEMES_TYPES }  from 'utils/enums';
import { RouterProvider } from 'react-router-dom';

import router from './router';
import './App.css';
import themes from './themes'



function App() {
  const [activeTheme, setActiveTheme] = useState(themes[THEMES_TYPES.LIGHT]);

  return (
  <RouterProvider router={router} >
  <ThemeProvider theme={activeTheme}>
    <div>
      ..Testing
    </div>
  </ThemeProvider>
  </RouterProvider>
  );
}

export default App;
