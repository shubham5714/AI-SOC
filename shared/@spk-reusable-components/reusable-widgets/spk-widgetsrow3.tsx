import React, { Fragment } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import SpkBadge from '../reusable-uiElements/spk-badge'
import Spkapexcharts from '../reusable-plugins/spk-apexcharts'
import { WidgetCard1Type } from '@/shared/data/widgetsdata'

interface SpkWidgetsrow3CardProps {
    card: WidgetCard1Type
}

const SpkWidgetsrow3Card: React.FC<SpkWidgetsrow3CardProps> = ({ card }) => {
    return (
        <Fragment>
            <Card className="custom-card overflow-hidden">
                <Card.Body>
                    <div className="d-flex justify-content-between">
                        <div>
                            <div className="flex-fill fs-13 text-muted">{card.title}</div>
                            <div className="fs-22 fw-medium mb-2">{card.value}</div>
                        </div>
                        <div className={`avatar avatar-md avatar-rounded bg-${card.iconBgClass}-transparent svg-${card.iconBgClass}`}>
                            {card.icon}
                        </div>
                    </div>
                    <Row>
                        <Col xl={6}>
                            <div className="d-flex align-items-center">
                                <SpkBadge variant={`${card.arrow === 'up' ? 'success' : 'danger'}-transparent`} Customclass={`badge-sm rounded-pill text-${card.arrow === 'up' ? 'success' : 'danger'} me-2 mb-1`}><i className={`ri-arrow-${card.arrow === 'up' ? 'right': 'left'}-${card.arrow}-line fs-11`}></i></SpkBadge>
                                <span className="mb-1">{card.percentage}</span>
                            </div>
                            <p className="fs-11 text-muted mb-0">This Month</p>
                        </Col>
                        <Col xl={6} className="text-end">
                            <div id={card.chartId}>
                                <Spkapexcharts chartOptions={card.chartOptions} chartSeries={card.chartSeries} type='area' width={100} height={40} />
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default SpkWidgetsrow3Card