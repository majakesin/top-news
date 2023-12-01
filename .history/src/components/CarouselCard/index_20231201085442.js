import React from 'react';



const CarouselCard = (props) => {
    const {title, imageUrl} = {props};

    return (
        <div className={styles.card}>
            <img src={imageUrl} alt={title} />
            <p>title</p>
        </div>
    )
}