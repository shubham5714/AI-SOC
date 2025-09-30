import Link from 'next/link';
import React, { Fragment } from 'react';
import { Card } from 'react-bootstrap';
import SpkBadge from '../reusable-uiElements/spk-badge';
import { ProjectsCardDataType } from '@/shared/data/dashboards/projectsdata';

interface SpkJobscardProps {
    card: ProjectsCardDataType
    ShowContent?: boolean
}

const SpkJobscard: React.FC<SpkJobscardProps> = ({ card,   ShowContent }) => {
    return (
        <Fragment>
            <Card className={`custom-card `}>
                <Card.Body>
                    <div className="d-flex align-items-start justify-content-between">
                        <div>
                            <p className={`fw-medium mb-2 ${card.titleColor ? `${card.titleColor}` : ''}`}>{card.title}</p>
                            <h4 className="fw-medium mb-0">{card.count}
                                {card.timePeriod ? (
                                    <span className={`text-muted fs-10 mx-1 ${card.spanClass}`}>{card.timePeriod}</span>
                                ) : (
                                    <SpkBadge variant={`${card.bgColor}-transparent`} Customclass={`fs-11 mx-2 ${card.badgeClass}`}><i className={`ti ti-trending-${card.arrow} me-1 align-middle d-inline-block`}></i>{card.percentage}</SpkBadge>
                                )}
                            </h4>
                        </div>
                        <div>
                            <span className={`avatar avatar-lg bg-${card.bgColor} avatar-rounded ${card.icon ? 'svg-white' : ''}`}>
                                {card.iconClass ? (<i className={`ri-${card.iconClass} fs-20`}></i>) : card.icon}
                            </span>
                        </div>
                    </div>
                    {ShowContent ? (
                        <div className="d-flex mt-2 flex-wrap gap-1">
                            <Link scroll={false} href="#!" className="fs-12 text-primary d-inline-flex align-items-center"><span>Show full status</span><i className="ti ti-chevron-right rtl-transform-icon ms-1"></i></Link>
                            <SpkBadge variant={`${card.bgColor}-transparent`} Customclass={`rounded-pill ms-auto`}><i className="ti ti-caret-up me-1"></i>{card.badgeText}</SpkBadge>
                        </div>
                    ) : ''}

                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default SpkJobscard;
