import React, { useMemo } from 'react'
import NewsStore from 'src/stores/NewsStore'

import styles from './index.module.css'

const NewsDetails = () => {
    const index = window.location.pathname.split('/')[2]
    const detailedHedline = NewsStore.getDetailedHeadline(index)

    const imageElement = useMemo(() => {
        if (!detailedHedline.urlToImage) {
            return null
        }
        return (
            <img src={detailedHedline.urlToImage} alt={detailedHedline.title} />
        )
    }, [])

    return (
        <div className={styles.root}>
                        <p>{detailedHedline.title}</p>
            {imageElement}

            <p>{detailedHedline.content}</p>
        </div>
    )
}

export default NewsDetails
