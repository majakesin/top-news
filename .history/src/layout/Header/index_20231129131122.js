import React from 'react';
import { AppBar, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import topNewsLogo from 'src/assets/images/logo.jpg';

import styles from './index.module.css';

const menuItems = [];

const Header = () => {

    return (
    <AppBar position="static">
     <Container maxWidth="xl">
        <Link to="/">
            <img className={styles.logo} src={topNewsLogo} alt="Top News" />
        </Link>
     </Container>
    </AppBar>
    )
};

export default Header;
