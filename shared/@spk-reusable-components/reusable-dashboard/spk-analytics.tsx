import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap';
import Spkapexcharts from '../reusable-plugins/spk-apexcharts';
import { AnalyticsCardDataType } from '@/shared/data/dashboards/analyticsdata';

interface SpkAnalyticsCardProps {
    card: AnalyticsCardDataType
}

const SpkAnalyticsCard: React.FC<SpkAnalyticsCardProps> = ({ card }) => {
    return (
        <Fragment>
            <Card className="custom-card overflow-hidden">
                <Card.Body className="p-0">
                    <div className="p-3 d-flex align-items-start gap-3 flex-wrap">
                        <div className="lh-1">
                            <span className={`avatar ${card.avatarsize ? `avatar-${card.avatarsize}` : ''} avatar-rounded bg-${card.avatarColor} svg-white flex-shrink-0`}>
                                {card.icon ? (<i className={`bx bx-${card.icon} fs-22`}></i>) : card.svgIcon}
                            </span>
                        </div>
                        <div className={`${card.chart ? 'mb-3' : 'mb-0'} me-3`}>
                            <span className="fw-medium fs-13 text-muted pe-3">{card.title}</span>
                            <span className={`fs-${card.fs} fw-medium mb-0 d-flex align-items-center`}>{card.value}
                            </span>
                            <div className="text-muted fs-12">
                                <span className={`text-${card.trendIcon === 'up' ? 'success' : 'danger'} `}>{card.percentage}<i className={`${card.chart ? `ti ti-arrow-narrow-${card.trendIcon} ${card.chart ? '' : 'align-middle'}  mx-1` : `ri-arrow-${card.trendIcon}-s-line`}  fs-16`}></i></span> This year
                            </div>
                        </div>
                    </div>
                    {card.chart ? (
                        <div className="d-flex align-items-end justify-content-end">
                            <div id={card.chartId}>
                                <Spkapexcharts chartOptions={card.chartOptions} chartSeries={card.chartSeries} type="area" width={100} height={70} />
                            </div>
                        </div>
                    ) : ''}

                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default SpkAnalyticsCard;
