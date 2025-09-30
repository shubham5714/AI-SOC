import React, { Fragment } from 'react'
import { Card, Dropdown } from 'react-bootstrap'
import SpkDropdown from '../reusable-uiElements/spk-dropdown'
import { WidgetsCardType } from '@/shared/data/widgetsdata'

interface SpkWidgetsrow4CardProps {
    card: WidgetsCardType
}

const SpkWidgetsrow4Card: React.FC<SpkWidgetsrow4CardProps> = ({ card }) => {
    return (
        <Fragment>
            <Card className="custom-card ">
                <Card.Body>
                    <div className="">
                        <div className="d-flex justify-content-between">
                            <span className={`avatar avatar-rounded avatar-md bg-${card.iconBgClass}-transparent svg-${card.iconBgClass} mb-2`}>
                                {card.icon}
                            </span>
                            <SpkDropdown toggleas='a' Customtoggleclass="text-muted no-caret" Icon={true} IconClass="bx bx-dots-horizontal-rounded fs-20">
                                <li><Dropdown.Item href="#!">Week</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Day</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Year</Dropdown.Item></li>
                            </SpkDropdown>
                        </div>
                        <p className="flex-fill text-muted fs-14 mb-0">{card.title}</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="fs-22 fw-medium mb-0 d-flex align-items-center">{card.value}</div>
                        <span className={`text-${card.arrow === 'up' ? 'success' : 'danger'} badge bg-${card.arrow === 'up' ? 'success' : 'danger'}-transparent rounded-pill d-flex align-items-center fs-11 me-0 ms-2 mb-0`}>
                            <i className={`ri-arrow-left-${card.arrow}-line fs-11`}></i>{card.badgeText}
                        </span>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default SpkWidgetsrow4Card