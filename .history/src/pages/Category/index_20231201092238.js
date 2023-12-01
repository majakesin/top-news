import React, {useMemo} from 'react';
import { observer } from 'mobx-react';
import NewsStore from 'src/stores/NewsStore';


const Category = () => {
    const category = window.location.pathname.split('/')[2];
    const {top5CategoryHeadlinesList} = NewsStore;
    const newsToDisplay = top5CategoryHeadlinesList[category];

    const newsCards = useMemo(() => {

    },[newsToDisplay]);

    return (
     <div>

     </div>
    )

};

export default observer(Category);