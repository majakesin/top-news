import React from 'react';
import errorPage from 'src/assets/images/errorPage.png';

import styles from './index.module.css';

const ErrorPage = () => (
    <div className={styles.root}>
      <img src={errorPage} alt="Error Image" />
      <p className={styles.description}>This page doesn't exists. Try again. :) </p>
    </div>
);

export default ErrorPage;