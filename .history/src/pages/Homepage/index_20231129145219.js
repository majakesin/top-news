import React, { useMemo } from 'react'

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

const Homepage = () => {
    const newsList = useMemo(() => {
        mockData.map((news) => {
            ;<NewsCard {...news} />
        })
    }, [])

    return <div className={styles.root}>{newsList}</div>
}

export default Homepage
