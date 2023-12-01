import React, {useMemo} from 'react';
import { observer } from 'mobx-react';
import NewsStore from 'src/stores/NewsStore';
import NewsCard from 'src/components/NewsCard';


const Category = () => {
    const category = window.location.pathname.split('/')[2];
    const {top5CategoryHeadlinesList} = NewsStore;
    const newsToDisplay = top5CategoryHeadlinesList[category];

    const newsCards = useMemo(() => {
        newsToDisplay.map((news, index) => (
            <NewsCard key={index} title={news.title} shortDescription={news.description} imageUrl={news.url} />
        ))
    },[newsToDisplay]);

    return (
     <div>
         {newsCards}
     </div>
    )

};

export default observer(Category);