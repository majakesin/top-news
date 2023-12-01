import React, { useMemo, useCallback, useRef } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

//FYI: I wanted to use basic css, 
// but I didn't want to loose time for finding free images, that's why I added only here mui element

import styles from './index.module.css'
import CarouselCard from '../CarouselCard'
import classNames from 'classnames'


const CARD_WIDTH = 300;

const Carousel = (props) => {
    const { category, list } = props
    const displayFirst5 = list.slice(0, 5)

    const rightArrowClasses = classNames(styles.arrows, styles.rightArrow);

    const carouselRef = useRef();

    const onLeftClick = useCallback(() => {
        carouselRef.current.scrollTo({
            left: carouselRef.current.scrollLeft - CARD_WIDTH,
            top: 0,
            behavior: "smooth"
        });
    }, [])
    const onRightClick = useCallback(() => {
        carouselRef.current.scrollTo({
            left: carouselRef.current.scrollLeft + CARD_WIDTH,
            top: 0,
            behavior: "smooth"
        });
    },[]);

    //FYI: I know using index for list is not good practice, but I don't have ids and this is for testing purpouse
    const carouselsCards = useMemo(() => (
       displayFirst5.map((news, index) => (
            <CarouselCard
                key={index}
                title={news.title}
                imageUrl={news.urlToImage}
            />
        ))
    ), [displayFirst5])

    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <p>
                    <b>{category.toUpperCase()}</b>
                </p>
                <Link to={`${category}`} className={styles.showMore}>Show more</Link>
            </div>
            <div className={styles.container}>
             <div ref={carouselRef} className={styles.carousel}>
                <button onClick={onLeftClick} className={styles.arrows}>
                    <NavigateBeforeIcon />
                </button>
                <button onClick={onRightClick} className={rightArrowClasses}>
                    <NavigateNextIcon />
                </button>
                {carouselsCards}
                </div>
            </div>
        </div>
    )
}

Carousel.propTypes = {
    category: PropTypes.string,
    list: PropTypes.array,
}

export default Carousel
