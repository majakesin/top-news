import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

//FYI: I wanted to use basic css, 
// but I didn't want to loose time for finding free images, that's why I added only here mui element

import styles from './index.module.css'
import CarouselCard from '../CarouselCard'

const Carousel = (props) => {
    const { category, list } = props
    const displayFirst5 = list.slice(0, 5)

    //FYI: I know using index for list is not good practice, but I don't have ids and this is for testing purpouse
    const carouselsCards = useMemo(() => {
        displayFirst5.map((news, index) => (
            <CarouselCard
                key={index}
                title={news.title}
                imageUrl={news.urlToImage}
            />
        ))
    }, [])

    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <p>
                    <b>{category.toUpperCase()}</b>
                </p>
                <Link className={styles.showMore}>Show more</Link>
            </div>
            <div className={styles.carousel}>
                <button className={styles.arrows}>
                    <NavigateBeforeIcon />
                </button>
                {carouselsCards}
                <button className={styles.arrows}>
                    <NavigateNextIcon />
                </button>
                test
            </div>
        </div>
    )
}

Carousel.propTypes = {
    category: PropTypes.string,
    list: PropTypes.array,
}

export default Carousel
