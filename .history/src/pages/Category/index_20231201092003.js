import React from 'react';
import { observer } from 'mobx-react';
import NewsStore from 'src/stores/NewsStore';


const Category = () => {
    const category = window.location.pathname.split('/')[2];
    const {top5CategoryHeadlinesList} = NewsStore;
    return (

    )

};

export default observer(Category);