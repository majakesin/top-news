import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './index.module.css'

const Carousel = (props) => {
    const { category, list } = props
    const displayFirst5 = list.slice(0,5);
    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <p>{category}</p>
                <Link className={styles.}>Show more</Link>
            </div>
            <div className={styles.carousel}>{displayFirst5}</div>
        </div>
    )
}

Carousel.propTypes = {
    category: PropTypes.string,
    list: PropTypes.array,
}

export default Carousel
