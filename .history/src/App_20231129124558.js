import React, { useState, Fragment } from 'react';
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
    <Fragment>
    <Header />
      <RouterProvider router={router}/>
    <Footer/>
    </Fragment>
  );
}

export default App;
