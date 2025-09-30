import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'
import SpkBadge from '../reusable-uiElements/spk-badge'
import Spkapexcharts from '../reusable-plugins/spk-apexcharts'
import { HrmCardDataType } from '@/shared/data/dashboards/hrmdata'

interface SpkHrmCardProps {
    card: HrmCardDataType
    customCardClass?: string
    cardBodyClass?: string
}

const SpkHrmCard: React.FC<SpkHrmCardProps> = ({ card, customCardClass, cardBodyClass }) => {
    return (
        <Fragment>
            <Card className={`custom-card ${customCardClass}`}>
                <Card.Body className={cardBodyClass}>
                    <div className="d-flex align-items-center w-100 justify-content-between gap-1 flex-wrap">
                        <div>
                            <p className="mb-1 text-muted fw-medium">{card.title}</p>
                            <h4 className="mb-0 fw-medium">{card.value}</h4>
                        </div>
                        <div className="ms-auto text-end">
                            <SpkBadge variant={`${card.trend === 'up' ? 'success' : 'danger'}`} Customclass="rounded-pill align-items-center fs-11"><i className={`ri-arrow-left-${card.trend}-line fs-11`}></i> {card.percentage}</SpkBadge>
                            <div className="text-muted fs-12 mt-1">This year</div>
                        </div>
                    </div>
                </Card.Body>
                <div id="employees">
                    <Spkapexcharts chartOptions={card.chartOptions} chartSeries={card.chartSeries} type='area' width={'100%'} height={50} />
                </div>
            </Card>
        </Fragment>
    )
}

export default SpkHrmCard
