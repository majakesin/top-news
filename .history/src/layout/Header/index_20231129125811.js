import React from 'react';
import { AppBar, Container } from '@mui/material';

import topNewsLogo from 'src/assets/images/logo.jpg';


const menuItems = [];

const Header = () => {

    return (
    <AppBar position="static">
     <Container maxWidth="xl">
        <Link to={"/"}>
            <img src={topNewsLogo} alt="Top News" />
        </Link>
     </Container>
    </AppBar>
    )
};

export default Header;
