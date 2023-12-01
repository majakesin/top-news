import React, { useMemo } from 'react';

import NewsCard from 'src/components/NewsCard';

import styles from './index.module.css'

const mockData = [
    { title: 'tiiitle', url: 'testiing', description: 'testiiing' },
    { title: 'tiiitle', url: 'testiing', description: 'testiiing' },
    { title: 'tiiitle', url: 'testiing', description: 'testiiing' },
    { title: 'tiiitle', url: 'testiing', description: 'testiiing' },
    { title: 'tiiitle', url: 'testiing', description: 'testiiing' },
    { title: 'tiiitle', url: 'testiing', description: 'testiiing' },
    { title: 'tiiitle', url: 'testiing', description: 'testiiing' },
    { title: 'tiiitle', url: 'testiing', description: 'testiiing' },
    { title: 'tiiitle', url: 'testiing', description: 'testiiing' },
    { title: 'tiiitle', url: 'testiing', description: 'testiiing' },
    { title: 'tiiitle', url: 'testiing', description: 'testiiing' },
    { title: 'tiiitle', url: 'testiing', description: 'testiiing' },
]
//TODO: FIX INDEX KEY ==> NEVER GOOD OPTION
const Homepage = () => {
    const newsList = useMemo(() => {
        mockData.map((news, index) => <NewsCard key={index} {...news} />)
    }, [])

    return <div className={styles.root}>{newsList}</div>
}

export default Homepage
