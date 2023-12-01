import React, {useMemo } from 'react';
import NewsStore from 'src/stores/NewsStore';

import styles from './index.module.css';

const NewsDetails = () => {
    const index = window.location.pathname.split('/')[2];
    const detailedHedline = NewsStore.getDetailedHeadline(index);

    const imageElement = useMemo(() => {
        if(!detailedHedline.urlToImage) {
            return null;
        }
        return 
    }, [])
    
    return (
        <div className={styles.root}>
         {detailedHedline}
        </div>
    )



};

export default NewsDetails;