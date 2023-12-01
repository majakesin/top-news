import React, {useMemo} from 'react'
import PropTypes from 'prop-types'
import noImage from 'src/assets/images/no-image.png';
import styles from './index.module.css'

const CarouselCard = (props) => {
    const { title, imageUrl } = props

    const imageSource = useMemo(() =>  imageUrl ?? )

    return (
        <div className={styles.card}>
            <img className={styles.image} src={imageUrl} alt={title} />
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
