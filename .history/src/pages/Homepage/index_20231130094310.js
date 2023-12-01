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
    console.log('newsList');

    useEffect(() => {
        NewsStore.getTopHeadlinesList();
    }, [])

    const topHeadlinesListElement = useMemo(
        () => mockData.map((news, index) => <NewsCard key={index} {...news} />),
        []
    )

    return <div className={styles.root}>{newsListElement}</div>
}

export default observer(Homepage)
