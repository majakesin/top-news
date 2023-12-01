import React, { Fragment } from 'react';
import { Outlet } from "react-router-dom";

import Header from 'src/layout/Header'
import Footer from 'src/layout/Footer';

const Layout = () => (
    <Fragment>
        <Header/>
        <Outlet/>
        <Footer/>
    </Fragment>
);

export default Layout;
