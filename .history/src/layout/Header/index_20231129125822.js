import React from 'react';
import { AppBar, Container } from '@mui/material';

import topNewsLogo from 'src/assets/images/logo.jpg';


const menuItems = [];

const Header = () => {

    return (
    <AppBar position="static">
     <Container maxWidth="xl">
        <a>
            <img src={topNewsLogo} alt="Top News" />
        </a>
     </Container>
    </AppBar>
    )
};

export default Header;
