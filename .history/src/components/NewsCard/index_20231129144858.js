import React, {useCallback} from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

const NewsCard = (props) => {
    const { title, imageUrl, shortDescription } = props

    const onShowMoreClick = useCallback(() => {

    },[]);

    return (
        <div className={styles.card}>
         <img src={imageUrl} alt={title} />
         <div className={styles.content}>
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{shortDescription}</p>
            <button>Show more</button>
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
