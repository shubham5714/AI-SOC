import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';
import Spkapexcharts from '../reusable-plugins/spk-apexcharts';
import { SelesCardDataType } from '@/shared/data/dashboards/salesdata';

interface SpkSalesCardProps {
    card: SelesCardDataType
    cardBodyClass?: string
}

const SpkSalesCard: React.FC<SpkSalesCardProps> = ({ card, cardBodyClass }) => {
    return (
        <Fragment>
            <Card className="custom-card">
                <Card.Body className={cardBodyClass}>
                    <div className="d-flex align-items-end gap-2 justify-content-between flex-wrap mb-3">
                        <div>
                            <span className={`avatar avatar-rounded bg-${card.iconBg}-transparent`}>
                                {card.svgIcon}
                            </span>
                            <h4 className="mb-0 mt-3 fw-smeibold">{card.title}</h4>
                            <div className="fs-12 text-muted fw-medium">{card.description}</div>
                        </div>
                        <div className="text-end">
                            <span className={`d-block text-${card.trendIcon === 'up' ? 'success' : 'danger'} lh-1 fs-12 fw-medium`}><i className={`ti ti-trending-${card.trendIcon} me-1 align-middle fs-16 d-inline-block`}></i>{card.percentage}</span>
                            <span className="text-muted fs-11 op-5 fw-medium">This week</span>
                        </div>
                    </div>
                    <div id="total-revenue">
                        <Spkapexcharts chartOptions={card.chartOptions} chartSeries={card.chartSeries} type="area" width={'100%'} height={35} />
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default SpkSalesCard
