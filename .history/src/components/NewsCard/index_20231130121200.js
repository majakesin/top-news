import React, { useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import noImage from 'src/assets/images/no-image.png'

import styles from './index.module.css'

const NewsCard = (props) => {
    const { title, imageUrl, shortDescription, index } = props

    const displayedImage = useMemo(() => imageUrl ?? noImage, [imageUrl])
    const imageClasses = classNames(styles.image, { [styles.noImage] : !imageUrl })

    const onShowMoreClick = useCallback(() => {}, [])

    return (
        <div className={styles.card}>
            <img src={displayedImage} className={imageClasses} alt={title} />
            <div className={styles.content}>
                <p className={styles.title}>{title}</p>
                <p className={styles.description}>{shortDescription}</p>
                <Link to={`details/${id}`} className={styles.showMore} onClick={onShowMoreClick}>
                    Show more
                </Link>
            </div>
        </div>
    )
}

NewsCard.propTypes = {
    index: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
}

export default NewsCard
