import React, { useMemo } from 'react'
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom'
import { observer } from 'mobx-react'
import NewsStore from 'src/stores/NewsStore'
import { displayDate } from 'src/utils/helpers'

import styles from './index.module.css'

//I've multipled content just to get how it would look like with more than 260characters..

const NewsDetails = (props) => {

    const history = useHistory();
    const news = {props};
    cons

    const imageElement = useMemo(() => {
        if (!news?.urlToImage) {
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
                    {displayDate(news?.publishedAt)}
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
            <button className={styles.goBack} onClick={onGoBack} />
                Go back
            </button>
        </div>
    )
}

export default observer(NewsDetails);
