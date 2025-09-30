import { CardItem } from '@/shared/data/dashboards/nftdata';
import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';

interface SpkNftProps {
    card: CardItem
    cardBodyClass?: string
}

const SpkNft: React.FC<SpkNftProps> = ({ card,  cardBodyClass }) => {
    return (
        <Fragment>
            <Card className="custom-card">
                <Card.Body className={cardBodyClass}>
                    <div className="d-flex align-items-center gap-3 flex-wrap">
                        <div className="main-card-icon primary">
                            <div className={`avatar avatar-lg avatar-rounded bg-${card.iconColor}`}>
                                <div className="avatar avatar-sm svg-white">
                                    {card.iconAlt}
                                </div>
                            </div>
                        </div>
                        <div>
                            <span className="d-block ,mb-1">{card.title}</span>
                            <h5 className="fw-medium d-block mb-0">{card.value}<span className={`text-${card.trend === 'up' ? 'success' : 'danger'} fw-semibold fs-12 ms-2 d-inline-block`}>{card.percentageChange}<i className={`ri-arrow-${card.trend}-s-line align-middle ms-1`}></i></span></h5>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default SpkNft
