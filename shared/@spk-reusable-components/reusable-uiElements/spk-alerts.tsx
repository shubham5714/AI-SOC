"use client"

import React, { Fragment, ReactNode } from 'react'
import { Alert } from 'react-bootstrap'

interface Alerttypes {
  CustomClass?: string;
  children?: ReactNode;
  Id?: string;
  variant?: string;
  Dismiss?: boolean;
  show?: boolean;
  Closebutton?: string;
}
const SpkAlerts: React.FC<Alerttypes> = ({ CustomClass, children, Id, variant, Dismiss, Closebutton, show, ...rest }) => {
  return (
    <Fragment>
      <Alert variant={variant} className={CustomClass} role="alert" id={Id} dismissible={Dismiss} closeLabel={Closebutton} show={show} {...rest}>
        {children}
      </Alert>
    </Fragment>
  )

}

export default SpkAlerts;