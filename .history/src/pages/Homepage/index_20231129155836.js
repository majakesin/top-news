import React, { useMemo } from 'react';
import {observer} from 'mobx-react-lite';

import NewsCard from 'src/components/NewsCard';

import styles from './index.module.css'

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
    const newsList = useMemo(() => (
        mockData.map((news, index) => <NewsCard key={index} {...news} />)
    ), [])

    return <div className={styles.root}>{newsList}</div>
}

export default observer(Homepage);
