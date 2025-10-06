"use client"

// app layout 

import React, { Fragment, useContext, ReactNode } from 'react'
import { Initialload } from '@/shared/contextapi';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const theme = useContext(Initialload);

    return (
        <Fragment>
            {theme.pageloading && children}
        </Fragment>
    );
}

export default Layout;
