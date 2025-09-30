import { MetricType } from '@/shared/data/widgetsdata'
import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'

interface SpkWidgetsrow2CardProps {
    card: MetricType
}

const SpkWidgetsrow2Card: React.FC<SpkWidgetsrow2CardProps> = ({ card }) => {
    return (
        <Fragment>
            <Card className="custom-card overflow-hidden">
                <Card.Body>
                    <div className="d-flex align-items-center mb-2">
                        <div className="me-2">
                            <span className={`avatar avatar-md bg-${card.color} svg-white`}>
                                {card.icon}
                            </span>
                        </div>
                        <h6 className="mb-0 fw-medium">{card.title}</h6>
                    </div>
                    <div className="d-flex gap-2 align-items-center">
                        <div className="fs-25 fw-medium">{card.value} </div>
                        <div>
                            <span className="mb-0 d-flex align-items-center">
                                <span className={`text-${card.change === 'up' ? 'success' : 'danger'} fs-12`}> {card.percentage}</span>
                                <i className={`ri-arrow-${card.change}-line text-${card.change === 'up' ? 'success' : 'danger'} fs-16 align-middle ms-1`}></i>
                            </span>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default SpkWidgetsrow2Card
