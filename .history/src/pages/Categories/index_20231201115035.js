import React, { useEffect, useMemo } from 'react'
import Carousel from 'src/components/Carousel'
import NewsStore from 'src/stores/NewsStore'

import styles from './index.module.css';


const Categories = () => {
    const { top5CategoryHeadlinesList } = NewsStore

    useEffect(() => {
        NewsStore.getTop5CategoryHeadlinesList()
    }, [])

    const catogoriesCarousels = useMemo(() => {
        return Object.entries(mockData).map(([key, value]) => (
            <Carousel key={key} category={key} list={value} />
        ))
    }, [mockData])

    return <div className={styles.root}>{catogoriesCarousels}</div>
}

export default Categories
