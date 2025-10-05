import { DashboardCard } from '@/shared/data/dashboards/executivedata';
import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap';

interface SpkExecutiveCardProps {
    card: DashboardCard
    cardBodyClass?: string
}

const SpkExecutiveCard: React.FC<SpkExecutiveCardProps> = ({ card, cardBodyClass }) => {
    return (
        <Fragment>
            <Card className="custom-card overflow-hidden main-content-card">
                <Card.Body className={cardBodyClass}>
                    <div className="d-flex justify-content-between gap-1">
                        <div>
                            <div className="flex-fill fs-13 text-muted">{card.title}</div>
                            <div className="fs-23 fw-medium mb-0">{card.value}</div>
                            <div className="text-muted fs-13">{card.arrow === 'up' ? 'Increased' : 'Decreased'} By <span className={`text-${card.arrow === 'up' ? 'success' : 'danger'}`}>{card.change}<i className={`ti ti-trending-${card.arrow} fs-16`}></i></span></div>
                        </div>
                        <div className={`avatar avatar-md bg-${card.iconBg} avatar-rounded flex-shrink-0 svg-white`}>
                            {card.icon}
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default SpkExecutiveCard;
