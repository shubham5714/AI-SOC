import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';
import SpkBadge from '../reusable-uiElements/spk-badge';
import Spkapexcharts from '../reusable-plugins/spk-apexcharts';
import { WidgetCardType } from '@/shared/data/widgetsdata';

interface SpkWidgetsrow1CardProps { card: WidgetCardType }

const SpkWidgetsrow1Card: React.FC<SpkWidgetsrow1CardProps> = ({ card }) => {
    return (
        <Fragment>
            <Card className="custom-card overflow-hidden">
                <Card.Body>
                    <div className="d-flex justify-content-between">
                        <div>
                            <div className="flex-fill fs-13 text-muted">{card.title}</div>
                            <div className="fs-22 fw-medium mb-2">{card.value}</div>
                        </div>
                        <div className={`avatar avatar-md bg-${card.iconBgClass}-transparent`}>
                            <i className={`ri-${card.icon} fs-20`}></i>
                        </div>
                    </div>
                    <div className="d-flex align-items-end justify-content-between">
                        <div>
                            <div className="d-flex align-items-center">
                                <SpkBadge variant={`${card.badgeClass}-transparent`} Customclass={`text-${card.badgeClass} rounded-pill d-flex align-items-center fs-11 me-0 mb-1 mb-0`}><i className="ri-arrow-left-up-line fs-11"></i>{card.percentage}</SpkBadge>
                            </div>
                            <p className="fs-11 text-muted mb-0">This Month</p>
                        </div>
                        <div id={card.chartId}>
                            <Spkapexcharts chartOptions={card.chartOptions} chartSeries={card.chartSeries} type='line' width={100} height={30} />
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default SpkWidgetsrow1Card
