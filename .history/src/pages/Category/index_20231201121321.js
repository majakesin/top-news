import React, {useEffect, useMemo} from 'react';
import { observer } from 'mobx-react';
import NewsStore from 'src/stores/NewsStore';
import NewsCard from 'src/components/NewsCard';

import styles from './index.module.css';

const Category = () => {
    const category = window.location.pathname.split('/')[2];
    const {top5CategoryHeadlinesList, activeCountry} = NewsStore;

    useEffect(() => {
        NewsStore.getTop5CategoryHeadlinesList();
    },[activeCountry])
    
    const newsToDisplay = top5CategoryHeadlinesList[category];

    const newsCards = useMemo(() => (
        newsToDisplay.map((news, index) => (
            <NewsCard key={index} title={news.title} shortDescription={news.description} imageUrl={news.urlToImage} />
        ))
    ),[newsToDisplay]);

    return (
     <div className={styles.root}>
         {newsCards}
     </div>
    )

};

export default observer(Category);