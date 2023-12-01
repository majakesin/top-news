import React, { useMemo, useEffect } from 'react'
import { observer } from 'mobx-react'

import NewsCard from 'src/components/NewsCard'

import styles from './index.module.css'
import NewsStore from 'src/stores/NewsStore'

const Homepage = () => {
    const { topHeadlinesList } = NewsStore

    useEffect(() => {
        NewsStore.getTopHeadlinesList()
    }, [])

    const topHeadlinesListElement = useMemo(
        () =>
            topHeadlinesList.map((headline, index) => (
                <NewsCard
                    id={index}
                    key={headline.id}
                    title={headline.title}
                    shortDescription={headline.description}
                    imageUrl={headline.urlToImage}
                />
            )),
        [topHeadlinesList]
    )

    return <div className={styles.root}>{topHeadlinesListElement}</div>
}

export default observer(Homepage)
