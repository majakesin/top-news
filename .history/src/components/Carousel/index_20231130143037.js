import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './index.module.css'

const Carousel = (props) => {
    const { category, list } = props
    return (
        <div>
            <div className={styles.header}>
                <p>{category}</p>
                <Link>Show more</Link>
            </div>
            <div className={styles.carousel}>lists...</div>
        </div>
    )
}

Carousel.propTypes = {
    category: PropTypes.string,
    list: PropTypes.array,
}

export default Carousel
