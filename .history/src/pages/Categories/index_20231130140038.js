import React, { useEffect } from 'react'
import NewsStore from 'src/stores/NewsStore'

const Categories = () => {
    const { top5CategoryHeadlinesList } = NewsStore
    console.log('top5CategoryHeadlinesList',top5CategoryHeadlinesList);
    useEffect(() => {
        NewsStore.getTop5CategoryHeadlinesList()
    }, [])

    return <div>Categories..</div>
}

export default Categories
