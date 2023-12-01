import React, { useEffect } from 'react'
import NewsStore from 'src/stores/NewsStore'

const Categories = () => {
    const { top5CategoryHeadlinesList } = NewsStore
 
    useEffect(() => {
        NewsStore.getTop5CategoryHeadlinesList()
    }, [])

    const catogoriesCarousels = useMemo(() => {


    },[top5CategoryHeadlinesList]);

    return <div></div>
}

export default Categories
