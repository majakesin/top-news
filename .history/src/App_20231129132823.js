import React, { useState } from 'react';
import { RouterProvider } from 'react-router-dom';


import router from './router';
import './App.css';
import themes from './themes'


function App() {
  return <RouterProvider router={router}/>

}

export default App;
