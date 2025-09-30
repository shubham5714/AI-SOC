"use client"
import SpkTooltips from '@/shared/@spk-reusable-components/reusable-uiElements/spk-tooltips';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap';
import { JobDetailsType } from './job-details-data';

interface JobDetailesSwiperProps {
    card: JobDetailsType
}

const JobDetailesSwiper: React.FC<JobDetailesSwiperProps> = ({ card }) => {
    return (
        <Fragment>
            <Card className="custom-card featured-jobs shadow-none border">
                <Card.Body className="card-body">
                    <div className="d-flex mb-3 flex-sm-wrap gap-2 flex-xxl-nowrap">
                        <div>
                            <span className={`avatar avatar-md border custom-width p-1 ${card.icon ? `bg-${card.logoBgClass}-transparent` : ''}`}>
                                {card.logo ? (<Image fill src={card.logo} alt="" />) : (<i className={`bi bi-${card.icon}`}></i>)}
                            </span>
                        </div>
                        <div className="ms-1 flex-grow-1 w-sm-75 text-truncate">
                            <h6 className="fw-medium mb-0 d-flex align-items-center text-truncate w-sm-75"><Link scroll={false} href="#!" className="w-75 text-truncate"> {card.title}</Link></h6>
                            <Link scroll={false} href="#!" className="fs-12 text-muted"><i className="bi bi-building"></i> {card.company}</Link>
                        </div>
                        <div className="ms-auto d-flex gap-1 flex-xxl-nowrap">
                            <SpkTooltips placement="top" title="Add to wishlist">
                                <Link scroll={false} href="#!" className="avatar avatar-sm avatar-rounded bg-success text-fixed-white"><span><i className="bi bi-heart"></i></span></Link>
                            </SpkTooltips>
                            <SpkTooltips placement="top" title="Featured Jobs">
                                <Link scroll={false} href="#!" className="avatar avatar-sm avatar-rounded bg-warning text-fixed-white"><span><i className="bi bi-star-fill"></i></span></Link>
                            </SpkTooltips>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="popular-tags mb-3 d-flex gap-1 flex-wrap flex-xxl-nowrap">
                            <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default"><i className="bi bi-geo-alt me-1"></i> {card.location}</Link>
                            <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default"><i className="bi bi-mortarboard me-1"></i> {card.experience}</Link>
                        </div>
                        <h6 className="fw-medium mb-0">{card.salary}</h6>
                    </div>
                    <Link scroll={false} href="#!" className="fw-medium btn btn-sm btn-primary-light d-grid text-nowrap">
                        Apply Now
                    </Link>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default JobDetailesSwiper;
