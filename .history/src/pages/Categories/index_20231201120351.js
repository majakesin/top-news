import React, { useEffect, useMemo } from 'react'
import Carousel from 'src/components/Carousel'
import { observer } from 'mobx-react';
import NewsStore from 'src/stores/NewsStore'

import styles from './index.module.css';


const Categories = () => {
    const { top5CategoryHeadlinesList, ativeCountry } = NewsStore
    useEffect(() => {
        NewsStore.getTop5CategoryHeadlinesList()
    }, [])

    const catogoriesCarousels = useMemo(() => {
        return Object.entries(top5CategoryHeadlinesList).map(([key, value]) => (
            <Carousel key={key} category={key} list={value} />
        ))
    }, [top5CategoryHeadlinesList])

    return <div className={styles.root}>{catogoriesCarousels}</div>
}

export default observer(Categories);
