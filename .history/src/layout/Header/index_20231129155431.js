import React from 'react'
import { Link } from 'react-router-dom'
import topNewsLogo from 'src/assets/images/logo.jpg'
import { HOMEPAGE, CATEGORIES } from 'src/utils/routes'

import styles from './index.module.css'

const Header = () => {
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
                <option>GBS</option>
            </select>
        </div>
    )
}

export default Header
