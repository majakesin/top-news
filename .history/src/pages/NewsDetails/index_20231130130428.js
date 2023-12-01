import React, { Fragment, useMemo } from 'react'
import { Link } from 'react-router-dom'
import NewsStore from 'src/stores/NewsStore'
import { displayDate } from 'src/utils/helpers'

import styles from './index.module.css'

//I've multipled content just to get how it would look like with more than 260characters..

const NewsDetails = () => {
    const index = window.location.pathname.split('/')[2]
    const detailedHedline = NewsStore.getDetailedHeadline(index)

    const imageElement = useMemo(() => {
        if (!detailedHedline.urlToImage) {
            return null
        }
        return (
            <img
                className={styles.image}
                src={detailedHedline.urlToImage}
                alt={detailedHedline.title}
            />
        )
    }, [])

    return (
        <div>
            <div className={styles.root}>
                <p className={styles.title}>{detailedHedline.title}</p>
                {imageElement}
                <p className={styles.author}>
                    <b>By Author:</b> {detailedHedline.author} -{' '}
                    {displayDate(detailedHedline.publishedAt)}
                </p>
                <p className={styles.content}>
                    {detailedHedline.content}
                    {detailedHedline.content}
                    {detailedHedline.content}
                    {detailedHedline.content}
                    {detailedHedline.content}
                    {detailedHedline.content}
                    {detailedHedline.content}
                    {detailedHedline.content}
                </p>
            </div>
            <Link className={styles.goBack} to={'/'}>
                Go back
            </Link>
        </div>
    )
}

export default NewsDetails
