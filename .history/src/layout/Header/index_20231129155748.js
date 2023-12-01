import React from 'react'
import { Link } from 'react-router-dom'
import topNewsLogo from 'src/assets/images/logo.jpg'
import { HOMEPAGE, CATEGORIES } from 'src/utils/routes'
import NewsStore from 'src/stores/NewsStore'

import styles from './index.module.css'

const Header = () => {
    const onCountryChange = useCallback((event) => {
        NewsStore.setActiveCountry(event?.target?.value);
    }, [])

    return (
        <div className={styles.navigation}>
            <div className={styles.menu}>
                <Link to={HOMEPAGE}>
                    <img
                        className={styles.logo}
                        src={topNewsLogo}
                        alt="Top News"
                    />
                </Link>
                <Link className={styles.link} to={CATEGORIES}>
                    Categories
                </Link>
                <input placeholder={'Search...'} />
            </div>
            <select className={styles.select}>
                <option>US</option>
                <option>GB</option>
            </select>
        </div>
    )
}

export default Header
