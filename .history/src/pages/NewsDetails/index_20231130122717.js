import React from 'react';
import NewsStore from 'src/stores/NewsStore';

import styles from './index.module.css';

const NewsDetails = () => {
    const index = window.location.pathname.split('/')[2];
    const detailedHedline = NewsStore.getDetailedHeadline(index);
    
    return (
        <div className={styles.root}>
         {detailedHedline}
        </div>
    )



};

export default NewsDetails;