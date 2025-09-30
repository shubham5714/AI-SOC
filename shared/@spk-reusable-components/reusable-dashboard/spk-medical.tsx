import { SummaryCard } from '@/shared/data/dashboards/medicaldata';
import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';

interface SpkMedicalCardProps {
    card: SummaryCard
}

const SpkMedicalCard: React.FC<SpkMedicalCardProps> = ({ card }) => {
    return (
        <Fragment>
            <Card className={`custom-card overflow-hidden medical-main-card ${card.cardClass}`}>
                <Card.Body className=" p-4">
                    <div className="d-flex align-items-center gap-3">
                        <div>
                            <span className={`avatar avatar-lg bg-${card.bgColor} avatar-rounded svg-white`}>
                                {card.icon}
                            </span>
                        </div>
                        <div className="flex-fill">
                            <h4 className="fw-medium mb-0">{card.value}</h4>
                            <span className="d-block">{card.label}</span>
                        </div>
                        <div className="text-end flex-shrink-0">
                            <span className={`d-block mb-1 fw-medium text-${card.trendColor} lh-1`}><i className={`ri-arrow-${card.trend}-s-fill`}></i>{card.trendPercent}</span>
                            <span className="fs-12 text-muted">This Year</span>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default SpkMedicalCard
