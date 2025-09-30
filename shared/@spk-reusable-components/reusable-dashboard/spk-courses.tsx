import { CourseCardDataType } from '@/shared/data/dashboards/coursesdata';
import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';

interface SpkCoursesCardProps {
    card: CourseCardDataType
    cardBodyClass?: string
}

const SpkCoursesCard: React.FC<SpkCoursesCardProps> = ({ card, cardBodyClass }) => {
    return (
        <Fragment>
            <Card className="custom-card">
                <Card.Body className={cardBodyClass}>
                    <div className="d-flex align-items-center gap-3 mb-2 flex-wrap">
                        <span className={`avatar avatar-rounded flex-shrink-0 bg-${card.iconBg}`}>
                            <i className={`ri-${card.icon} fs-18`}></i>
                        </span>
                        <p className="mb-0">{card.title}</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <span className="fs-5 fw-medium">{card.value}</span>
                        <div className="fs-12 text-muted">
                            <span className={`fs-12 text-${card.trend === 'up' ? 'success' : 'danger'} me-1 d-inline-flex align-items-center`}><i className={`ti ti-trending-${card.trend} align-middle me-1`}></i>{card.trendPercentage}</span>
                            This month
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default SpkCoursesCard;
