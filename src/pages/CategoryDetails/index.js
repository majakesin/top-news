import React from 'react';
import NewsDetails from 'src/components/NewsDetails';
import NewsStore from 'src/stores/NewsStore';


const CategoryDetails = () => {

    const pathArray = window.location.pathname.split('/');
    const category = pathArray[2];
    const index = pathArray[3];

    const detailedCategory = NewsStore.top5CategoryHeadlinesList[category][index];

    return (<NewsDetails news={detailedCategory}/>)
};

export default CategoryDetails;