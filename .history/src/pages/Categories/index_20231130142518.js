import React, { useEffect, useMemo } from 'react'
import Carousel from 'src/components/Carousel'
import NewsStore from 'src/stores/NewsStore'

const Categories = () => {
    const { top5CategoryHeadlinesList } = NewsStore
 
    useEffect(() => {
        NewsStore.getTop5CategoryHeadlinesList()
    }, [])

    const catogoriesCarousels = useMemo(() => {
    return Object.entries(catogoriesCarousels).map(([key, value]) => <Carousel key={key} category={key} list={value} />)

    },[top5CategoryHeadlinesList]);

    return <div></div>
}

export default Categories
