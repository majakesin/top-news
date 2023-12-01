import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

const NewsCard = (props) => {
    const { title, imageUrl, shortDescription } = props

    return (
        <div className={styles.card}>
         <img src={imageUrl} alt={title} />
         <div className={styles.content}>
            <p>{title}</p>
            <p>{shortDescription</p>
         </div>
        </div>
    )
}

NewsCard.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
}

export default NewsListItem
