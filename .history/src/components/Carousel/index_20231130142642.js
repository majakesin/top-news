import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

import styles from './index.module.css';


const Carousel = (props) => {
    const {category, list} = props;
    return (
        <div>
            <div className={styles.header}>
                <title>
                    {category}
                </title>
               <Link>Show more</Link>
            </div>
         <div className={styles.carousel}>
            lists...
         </div>
        </div>
    )

};

export default Carousel;