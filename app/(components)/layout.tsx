"use client"

// app layout 

import React, { Fragment, useEffect, useState, useContext, ReactNode, } from 'react'
import { LocalStorageBackup } from '@/shared/data/switcherdata/switcherdata';
import { data$, getState } from '@/shared/layouts-components/services/switcherServices';
import { Initialload } from '@/shared/contextapi';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
});

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {

    const [localVariable, setLocalVariable] = useState(getState());

    const customstyles: React.CSSProperties & Record<`--${string}`, string> = {
        ...(localVariable.colorPrimaryRgb !== '' && { '--primary-rgb': localVariable.colorPrimaryRgb }),
        ...(localVariable.bodyBg !== '' && { '--body-bg-rgb': localVariable.bodyBg }),
        ...(localVariable.bodyBg2 !== '' && { '--body-bg-rgb2': localVariable.bodyBg2 }),
        ...(localVariable.lightRgb !== '' && { '--light-rgb': localVariable.lightRgb }),
        ...(localVariable.formControlBg !== '' && { '--form-control-bg': localVariable.formControlBg }),
        ...(localVariable.gray !== '' && { '--gray-3': localVariable.gray }),
        ...(localVariable.inputBorder !== '' && { '--input-border': localVariable.inputBorder }),
    };

    useEffect(() => {
        const subscription = data$.subscribe((e) => {
            setLocalVariable(e);
        });

        return () => subscription.unsubscribe();
    }, []);

    const theme = useContext(Initialload);
    useEffect(() => {
        if (typeof window !== 'undefined' && !theme.pageloading) {
            LocalStorageBackup(theme.setpageloading);
        }
    }, []);

    return (
        <Fragment>
            <html className={poppins.className}
                suppressHydrationWarning={true}
                lang={localVariable.lang || undefined}
                dir={localVariable.dir || undefined}
                data-theme-mode={localVariable.dataThemeMode || undefined}
                data-header-styles={localVariable.dataHeaderStyles || undefined}
                data-vertical-style={localVariable.dataVerticalStyle || undefined}
                data-nav-layout={localVariable.dataNavLayout || undefined}
                data-menu-styles={localVariable.dataMenuStyles || undefined}
                data-toggled={localVariable.toggled || undefined}
                data-nav-style={localVariable.dataNavStyle || undefined}
                hor-style={localVariable.horStyle || undefined}
                data-page-style={localVariable.dataPageStyle || undefined}
                data-width={localVariable.dataWidth || undefined}
                data-menu-position={localVariable.dataMenuPosition || undefined}
                data-header-position={localVariable.dataHeaderPosition || undefined}
                data-icon-overlay={localVariable.iconOverlay || undefined}
                data-bg-img={localVariable.bgImg || undefined}
                icon-text={localVariable.iconText || undefined}
                style={customstyles}
            >
                <head>
                    <title>Zeno NextJs App-Router Typescript React Bootstrap Admin Dashboard Template</title>
                    <meta name="keywords" content="admin dashboard design, dashboard admin template, dashboard nextjs, dashboard template, dashboard ui design, next js admin panel, next js dashboard, next js template, next js ts, next js typescript, next js ui framework, nextjs dashboard template, nextjs styled components, nextjs ui, typescript template" />
                </head>
                <body className={`${localVariable.body ? localVariable.body : ''}`} >
                    {theme.pageloading && children}
                </body>
            </html>
        </Fragment>
    );
}

export default Layout;
