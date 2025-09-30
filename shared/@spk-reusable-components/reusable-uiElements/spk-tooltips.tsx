"use client"

import React, { ReactNode } from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { OverlayTriggerType } from 'react-bootstrap/esm/OverlayTrigger';

interface SpkTooltipsProps {
    title: string;
    id?: string;
    children: ReactNode;
    tooltipClass?: string;
    trigger?: OverlayTriggerType | OverlayTriggerType[];
    placement?: 'top' | 'bottom' | 'left' | 'right'; //make placement optional 
}

const SpkTooltips: React.FC<SpkTooltipsProps> = (
    {
        title,
        id,
        children,
        tooltipClass,
        trigger,
        placement
    }
) => {

    return (
        <OverlayTrigger placement={placement} trigger={trigger} overlay={<Tooltip id={id} className={tooltipClass} >{title}</Tooltip>} >
            {children}
        </OverlayTrigger>
    )
}

export default SpkTooltips