"use client"
import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';
import SpkBadge from '../reusable-uiElements/spk-badge';
import Spkapexcharts from '../reusable-plugins/spk-apexcharts';
import Image from 'next/image';
import { CryptoCardDataType } from '@/shared/data/dashboards/cryptodata';

interface SpkCryptoCardProps {
    card: CryptoCardDataType
}

const SpkCryptoCard: React.FC<SpkCryptoCardProps> = ({ card }) => {
    return (
        <Fragment>
            <Card className="custom-card overflow-hidden">
                <Card.Body>
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <div className="d-flex align-items-center gap-3 flex-fill">
                            <div className="lh-1">
                                <span className="avatar avatar-sm avatar-rounded">
                                    <Image width={28} height={28} src={card.logo} alt="" className={card.imgClass}/>
                                </span>
                            </div>
                            <div className="fs-14">{card.name} - {card.symbol}</div>
                        </div>
                        <div>
                            <SpkBadge Customclass='' variant="success-transparent">{card.percentageChange}</SpkBadge>
                        </div>
                    </div>
                    <div className="d-flex align-items-end justify-content-between">
                        <div>
                            <div className="h4 mb-0">
                                {card.amount}
                            </div>
                            <span className="d-block text-muted">
                                {card.usdValue}
                            </span>
                        </div>
                        <div id={card.chartId}>
                            <Spkapexcharts chartOptions={card.chertOprtions} chartSeries={card.chartSeries} type='area' width={150} height={40} />
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default SpkCryptoCard;
