import React from 'react'
import { Link } from 'react-router-dom'
import topNewsLogo from 'src/assets/images/logo.jpg'
import { HOMEPAGE, CATEGORIES } from 'src/utils/routes'

import styles from './index.module.css'

const menuItems = []

const Header = () => {
    return (
        <div className={styles.navigation}>
        <div className={styles.menu}>
            <Link>
                <img className={styles.logo} src={topNewsLogo} alt="Top News" />
            </Link>
            <Link to={CATEGORIES}>
                Categories
            </Link>
            <input className={} placeholder={"Search..."}/>
            </div>
        <div className={styles.categories}>

        </div>
        </div>
    )
}

export default Header
