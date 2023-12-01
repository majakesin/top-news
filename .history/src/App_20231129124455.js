import React, {useState} from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { THEMES_TYPES }  from 'src/utils/enums';
import { RouterProvider } from 'react-router-dom';

import Header from 'src/layout/Header'
import Footer from 'src/layout/Footer';

import router from './router';
import './App.css';
import themes from './themes'


function App() {
  const [activeTheme, setActiveTheme] = useState(themes[THEMES_TYPES.LIGHT]);

  return (
  <ThemeProvider }>
    <Header />
      <RouterProvider router={router}/>
    <Footer/>
  </ThemeProvider>
  );
}

export default App;
