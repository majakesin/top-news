import React from 'react';
import { Link } from 'react-router-dom';
import topNewsLogo from 'src/assets/images/logo.jpg';

import styles from './index.module.css';

const menuItems = [];

const Header = () => {

    return (
        <div>
            <Link>
            <img className={styles.logo} src={topNewsLogo} alt="Top News" />
        </Link>
</div>
    )
};

export default Header;
