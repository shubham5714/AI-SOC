"use client"
import Backtotop from '@/shared/layouts-components/backtotop/backtotop';
import LandingSwitcher from '@/shared/layouts-components/switcher/landing-switcher';
import React, { Fragment, ReactNode, useEffect, useRef } from 'react'

interface childrenPrpss {
  children: ReactNode
}

const Layout: React.FC<childrenPrpss> = ({ children }) => {

  const bodyRef = useRef<any>(null);



  useEffect(() => {
    bodyRef.current = document.body

    bodyRef.current?.classList.add('landing-body')
    return () => {
      bodyRef.current?.classList.remove('landing-body')
    }
  }, []);

  const getDocumentElement = (): HTMLElement => {
    return document.documentElement;
  };

  useEffect(() => {
    const html = getDocumentElement()

    // Remove the attribute on mount
    html.removeAttribute('data-bg-img');

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "data-bg-img") {
          html.removeAttribute('data-bg-img'); // Force remove it again
          html.removeAttribute('style');
        }
      });
    });

    observer.observe(html, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Fragment>
      <div>
        <LandingSwitcher />
        {children}
      </div>
      <Backtotop />
    </Fragment>
  )
}

export default Layout;