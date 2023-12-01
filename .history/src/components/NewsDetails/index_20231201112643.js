import React, { useMemo } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'
import NewsStore from 'src/stores/NewsStore'
import { displayDate } from 'src/utils/helpers'

import styles from './index.module.css'

//I've multipled content just to get how it would look like with more than 260characters..

const NewsDetails = (props) => {
    const news = {props};
    const index = window.location.pathname.split('/')[2]
    const detailedHedline = NewsStore.getDetailedHeadline(index)

    const imageElement = useMemo(() => {
        if (!detailedHedline?.urlToImage) {
            return null
        }
        return (
            <img
                className={styles.image}
                src={news.urlToImage}
                alt={news.title}
            />
        )
    }, [])

    return (
        <div className={styles.wrapper}>
            <div className={styles.root}>
                <p className={styles.title}>{news?.title}</p>
                {imageElement}
                <p className={styles.author}>
                    <b>By Author:</b> {news?.author} -{' '}
                    {displayDate(detailedHedline?.publishedAt)}
                </p>
                <p className={styles.content}>
                    {news?.content}
                    {news?.content}
                    {news?.content}
                    {news?.content}
                    {news?.content}
                    {news?.content}
                    {news?.content}
                    {news?.content}
                </p>
            </div>
            <Link className={styles.goBack} to={'/'}>
                Go back
            </Link>
        </div>
    )
}

export default observer(NewsDetails);
