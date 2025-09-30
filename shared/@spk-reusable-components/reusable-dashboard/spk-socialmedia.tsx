import { SocialCardType } from '@/shared/data/dashboards/socialmediadata';
import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';

interface SpkSocialmediaCardProps {
    card: SocialCardType
    customCardClass?: string
    cardBodyClass?: string
}

const SpkSocialmediaCard: React.FC<SpkSocialmediaCardProps> = ({ card, customCardClass, cardBodyClass }) => {
    return (
        <Fragment>
            <Card className={`custom-card ${customCardClass}`}>
                <Card.Body className={cardBodyClass}>
                    <div className="d-flex flex-wrap gap-2 align-items-start justify-content-between">
                        <div>
                            <p className={`flex-fill fs-15 fw-medium mb-1 text-${card.colorClass}`}>{card.platform}</p>
                            <p className="mb-2 fs-24 fw-medium">{card.count}</p>
                            <div className="flex-between">
                                <span className="text-muted fs-12 me-1">{card.subtitle}</span>
                                <span className={`text-${card.arrow === 'up' ? 'success' : 'danger'} d-inline-block`}><i className={`bi bi-arrow-${card.arrow}-right me-1 fs-10`}></i>{card.change}</span>
                            </div>
                        </div>
                        <div>
                            <span className={`avatar avatar-lg avatar-rounded bg-${card.colorClass}`}>
                                <i className={`ri-${card.icon} fs-5`}></i>
                            </span>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default SpkSocialmediaCard
