import React, { useMemo, useEffect } from 'react'
import { observer } from 'mobx-react'

import NewsCard from 'src/components/NewsCard'

import styles from './index.module.css'
import NewsStore from 'src/stores/NewsStore'

const mockData = [
    { title: 'tiiitle', imageUrl: 'testiing', shortDescription: 'testiiing' },
    { title: 'tiiitle', imageUrl: 'testiing', shortDescription: 'testiiing' },
    { title: 'tiiitle', imageUrl: 'testiing', shortDescription: 'testiiing' },
    { title: 'tiiitle', imageUrl: 'testiing', shortDescription: 'testiiing' },
    { title: 'tiiitle', imageUrl: 'testiing', shortDescription: 'testiiing' },
    { title: 'tiiitle', imageUrl: 'testiing', shortDescription: 'testiiing' },
    { title: 'tiiitle', imageUrl: 'testiing', shortDescription: 'testiiing' },
    { title: 'tiiitle', imageUrl: 'testiing', shortDescription: 'testiiing' },
    { title: 'tiiitle', imageUrl: 'testiing', shortDescription: 'testiiing' },
    { title: 'tiiitle', imageUrl: 'testiing', shortDescription: 'testiiing' },
    { title: 'tiiitle', imageUrl: 'testiing', shortDescription: 'testiiing' },
    { title: 'tiiitle', imageUrl: 'testiing', shortDescription: 'testiiing' },
]
//TODO: FIX INDEX KEY ==> NEVER GOOD OPTION
const Homepage = () => {
    const { topHeadlinesList } = NewsStore
    console.log('topHeadlinesList',topHeadlinesList )

    useEffect(() => {
        NewsStore.getTopHeadlinesList()
    }, [])

    const topHeadlinesListElement = useMemo(
        () =>
            topHeadlinesList.map((headline) => (
                <NewsCard
                    key={id}
                    title={headline.title}
                    shortDescription={headline.description}
                    imageUrl={headline.urlToImage}
                />
            )),
        []
    )

    return <div className={styles.root}>{topHeadlinesListElement}</div>
}

export default observer(Homepage)
