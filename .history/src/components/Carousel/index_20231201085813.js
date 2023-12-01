import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import styles from './index.module.css'
import CarouselCard from '../CarouselCard';

const Carousel = (props) => {
    const { category, list } = props
    const displayFirst5 = list.slice(0,5);

    const carouselsCards = useMemo(() => {
        displayFirst5.map((news) => (
            <CarouselCard  title={news.title} imageUrl={news.urlToImage} />            }
        ))

    }, []);

    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <p><b>{category.toUpperCase()}</b></p>
                <Link className={styles.showMore}>Show more</Link>
            </div>
            <div className={styles.carousel}>
                <button><NavigateBeforeIcon/></button>

                <button><NavigateNextIcon/></button>
                test</div>
        </div>
    )
}

Carousel.propTypes = {
    category: PropTypes.string,
    list: PropTypes.array,
}

export default Carousel
