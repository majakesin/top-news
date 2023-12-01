import React from 'react';

import styles from './index.module.css';

const CarouselCard = (props) => {
    const {title, imageUrl} = {props};

    return (
        <div className={styles.card}>
            <img src={imageUrl} alt={title} />
            <p className={styles.title}><b>{title}</b></p>
        </div>
    )
}