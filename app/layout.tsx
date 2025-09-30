"use client"
import React, { Fragment, ReactNode, useState } from 'react'
import "./globals.scss";
import { Provider } from 'react-redux'
import { Initialload } from '@/shared/contextapi';
import store from '@/shared/redux/store';

interface RootLayoutProps {
  children: ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {

  const [pageloading, setpageloading] = useState(false);

  return (
    <Fragment>
      <Provider store={store}>
        <Initialload.Provider value={{ pageloading, setpageloading }}>
          {children}
        </Initialload.Provider>
      </Provider>
    </Fragment>
  )
}

export default RootLayout;