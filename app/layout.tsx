"use client"
import React, { Fragment, ReactNode, useState } from 'react'
import "./globals.scss";
import { Provider } from 'react-redux'
import { Initialload } from '@/shared/contextapi';
import { TenantProvider } from '@/shared/contextapi/TenantContext';
import { UserProvider } from '@/shared/contextapi/UserContext';
import { DateRangeProvider } from '@/shared/contextapi/DateRangeContext';
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
          <UserProvider>
            <TenantProvider>
              <DateRangeProvider>
                {children}
              </DateRangeProvider>
            </TenantProvider>
          </UserProvider>
        </Initialload.Provider>
      </Provider>
    </Fragment>
  )
}

export default RootLayout;