"use client"

import React, { Fragment, ReactNode } from 'react'
import { Badge } from 'react-bootstrap'

interface Badgetypes {
  bsPrefix?: string;
  as?: React.ElementType;
  variant?: string;
  Buttontype?: 'button' | 'reset' | 'submit' | undefined;
  Customclass?: string;
  Text?: string;
  children?: ReactNode;
  Pill?: boolean;
  Id?: string;
  Onclickfun?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const SpkBadge: React.FC<Badgetypes> = ({ children, Customclass = '', variant, Pill, Text, bsPrefix, Id, as, Onclickfun }) => {
  return (
    <Fragment>
      <Badge bg={variant} className={`${Customclass}`} pill={Pill} text={Text} as={as} bsPrefix={bsPrefix} id={Id} onClick={Onclickfun}>
        {children}
      </Badge>
    </Fragment>
  )
}

export default SpkBadge