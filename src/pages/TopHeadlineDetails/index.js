import React from 'react';
import NewsStore from 'src/stores/NewsStore';
import NewsDetails from 'src/components/NewsDetails';



const TopHeadlineDetails = () => {

    const index = window.location.pathname.split('/')[2]
    const detailedHedline = NewsStore.getDetailedHeadline(index)


    return (<NewsDetails news={detailedHedline} />)


};

export default TopHeadlineDetails;