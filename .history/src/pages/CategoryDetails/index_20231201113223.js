import React from 'react';
import NewsStore from 'src/stores/NewsStore';


const CategoryDetails = () => {

    const pathArray = window.location.pathname.split('/');
    const category = pathArray[2];
    const index = pathArray[3];

    const detailedCategory = NewsStore.top5CategoryHeadlinesList[category][index];

};

export default CategoryDetails;