import React, { useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import topNewsLogo from 'src/assets/images/logo.jpg'
import { HOMEPAGE, CATEGORIES } from 'src/utils/routes'
import NewsStore from 'src/stores/NewsStore'

import styles from './index.module.css'
import { debounce } from '@mui/material'

const DEBOUNCE_TIME = 250

const Header = () => {
    const onCountryChange = useCallback((event) => {
        NewsStore.setActiveCountry(event?.target?.value)
    }, [])
    //There was option to search with q param with api call, but I noticed it to late..
    const onSearchChange = useCallback(
        debounce(
            (event) => {
                NewsStore.updateSearchedList(event.target.value)
            },
            [DEBOUNCE_TIME]
        ),
        []
    )
    const showSearch = window.location.pathname === '/'

    const searchElement = useMemo(() => {
        if (!showSearch) {
            return null
        }
        return (
            <input
                className={styles.input}
                onChange={onSearchChange}
                placeholder={'Search...'}
            />
        )
    }, [showSearch])

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
            </div>
            {searchElement}
            <select className={styles.select} onChange={onCountryChange}>
                <option>US</option>
                <option>GB</option>
            </select>
        </div>
    )
}

export default Header
