import React from 'react';
import errorPage from 'src/assets/images/errorPage.png';

import styles from './index.module.css';

const ErrorPage = () => (
    <div>
      <img src={errorPage} alt="Error Image" />
      <p>This page doesn't exists. Try again. :) </p>
    </div>
);

export default ErrorPage;