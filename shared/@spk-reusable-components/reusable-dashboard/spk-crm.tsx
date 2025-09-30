import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap';
import Spkapexcharts from '../reusable-plugins/spk-apexcharts';
import SpkBadge from '../reusable-uiElements/spk-badge';
import { CRMcardDataType } from '@/shared/data/dashboards/crmdata';

interface SpkCrmCardProps {
    card: CRMcardDataType
    CustomCardClass?: string
    cardBodyClass?: string
}

const SpkCrmCard: React.FC<SpkCrmCardProps> = ({ card, CustomCardClass, cardBodyClass }) => {
    return (
        <Fragment>
            <Card className={`custom-card ${CustomCardClass}`}>
                <Card.Body className={cardBodyClass}>
                    <div className="">
                        <div className="d-flex justify-content-between align-items-start mb-2 gap-2 flex-wrap">
                            <div className={`p-2 border border-${card.bgColor} border-opacity-10 bg-${card.bgColor}-transparent rounded`}>
                                <span className={`avatar avatar-md bg-${card.bgColor} svg-white`}>
                                    {card.icon}
                                </span>
                            </div>
                            <div id="total-leads" className="ms-auto">
                                <Spkapexcharts chartOptions={card.chartOptions} chartSeries={card.chertSeries} type={card.chartType} width={80} height={40} />
                            </div>
                        </div>
                        <p className="flex-fill text-muted fs-14 mb-0">{card.title}</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mt-1">
                        <h4 className="mb-0 d-flex align-items-center">{card.value}</h4>
                        <SpkBadge variant={`${card.changeDirection === 'up' ? 'success' : 'danger'}-transparent`} Customclass={`text-${card.changeDirection === 'up' ? 'success' : 'danger'} rounded-pill d-flex align-items-center fs-11 me-0 ms-2 mb-0`}><i className={`ri-arrow-left-${card.changeDirection}-line fs-11`}></i>{card.changePercentage}</SpkBadge>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default SpkCrmCard;
