import React from 'react'
import PropTypes from 'prop-types'

import styles from './index.module.css'

const CarouselCard = (props) => {
    const { title, imageUrl } = { props }

    return (
        <div className={styles.card}>
            <img src={imageUrl} alt={title} />
            <p className={styles.title}>
                <b>{title}</b>
            </p>
        </div>
    )
}

CarouselCard.propTypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.string,
}

export default CarouselCard
