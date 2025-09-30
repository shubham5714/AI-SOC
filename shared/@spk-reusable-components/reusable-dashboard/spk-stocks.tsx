import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'
import Spkapexcharts from '../reusable-plugins/spk-apexcharts'
import { StockCardDataType } from '@/shared/data/dashboards/stocksdata'

interface SpkStocksCardProps {
    card: StockCardDataType
}

const SpkStocksCard: React.FC<SpkStocksCardProps> = ({ card }) => {
    return (
        <Fragment>
            <Card className="custom-card">
                <Card.Body>
                    <div className={`d-flex align-items-center gap-3 flex-wrap ${card.chart ? 'mb-4' : ''}`}>
                        <div className="lh-1">
                            {card.avatarClass ? (
                                <div className={`avatar avatar-md bg-${card.avatarClass}-transparent avatar-rounded`}>
                                    <div className={`avatar avatar-sm avatar-rounded bg-${card.avatarClass} svg-white`}>
                                        <i className={`bi bi-${card.iconClass} fs-18`}></i>
                                    </div>
                                </div>
                            ) : (
                                <div className=""> <span className={`avatar bg-${card.arrow === 'up' ? 'primary' : 'danger'}-transparent`}> <i className={`ti ti-trending-${card.arrow} fs-18`}></i> </span> </div>
                            )}
                        </div>
                        <div className="flex-fill">
                            <span className={`d-block fw-medium ${card.chart ? 'fs-14' : ''}`}>{card.name}</span>
                            <span className={`d-block ${card.chart ? 'text-muted fs-12' : ''}`}>{card.company}</span>
                        </div>
                        <div className="text-end">
                            <span className={`fs-12 text-${card.changeColor}`}>{card.change}</span>
                            <span className={`text-${card.percentageColor} fs-12 d-block`}>
                                {card.percentageChange}
                            </span>
                        </div>
                    </div>
                    {card.chart ? (
                        <div className="d-flex align-items-end justify-content-between gap-1">
                            <div>
                                <span className="fs-11 text-muted">CURRENT VALUE</span>
                                <span className="fs-20  fw-semibold d-block">{card.currentValue}</span>
                            </div>
                            <div id={card.chartId}>
                                <Spkapexcharts chartOptions={card.chartOption} chartSeries={card.chartSeries} type='area' width={120} height={40} />
                            </div>
                        </div>
                    ) : ''}

                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default SpkStocksCard
