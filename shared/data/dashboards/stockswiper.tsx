import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap';
import { SlideDataType } from './stocksdata';

interface StockSwiperCardProps {
    card: SlideDataType
}

const StockSwiperCard: React.FC<StockSwiperCardProps> = ({ card }) => {
    return (
        <Fragment>
            <Card className="custom-card">
                <Card.Body>
                    <div className="d-flex gap-2 flex-wrap align-items-center justify-content-between">
                        <div className="d-flex flex-fill align-items-center">
                            <div className="me-2">
                                <span className={`avatar avatar-sm bg-${card.bgColor} p-2`}>
                                    <i className={`bi bi-${card.iconClass}  fs-18`}></i>
                                </span>
                            </div>
                            <div className="lh-1">
                                <span className="d-block mb-2 text-default fw-medium">{card.name}</span>
                                <span className="d-block fs-12">{card.value}</span>
                            </div>
                        </div>
                        <div className="fs-12 text-end">
                            <span className="text-success d-block">{card.percentChange}<i className="ti ti-arrow-bear-right"></i></span>
                            <span className={`d-block text-${card.bgColor}`}>{card.changeValue}</span>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default StockSwiperCard;
