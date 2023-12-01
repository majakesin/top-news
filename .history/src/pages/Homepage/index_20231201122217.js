import React, { useMemo, useEffect } from 'react'
import { observer } from 'mobx-react'

import NewsCard from 'src/components/NewsCard'

import styles from './index.module.css'
import NewsStore from 'src/stores/NewsStore'
import NewsCardLoading from 'src/components/NewsCardLoader'


const Homepage = () => {
    const { searchedTopHeadlinesList, activeCountry, loadingTopHeadlines } = NewsStore

    useEffect(() => {
        NewsStore.getTopHeadlinesList()
    }, [activeCountry])

    const loadingTopHeadlines = useMemo(() => {
        if(!loadingTopHeadlines) {
            return null;
        }

        return Array(10).map(() => (
            <NewsCardLoading />
        ))
    })

    const topHeadlinesListElement = useMemo(
        () =>
        searchedTopHeadlinesList.map((headline, index) => (
                <NewsCard
                    index={index}
                    key={headline.id}
                    title={headline.title}
                    shortDescription={headline.description}
                    imageUrl={headline.urlToImage}
                />
            )),
        [searchedTopHeadlinesList]
    )

    return <div className={styles.root}>{topHeadlinesListElement}</div>
}

export default observer(Homepage)
