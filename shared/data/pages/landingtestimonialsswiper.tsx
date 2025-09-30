import SpkTooltips from '@/shared/@spk-reusable-components/reusable-uiElements/spk-tooltips';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap';
import { TestimonialsType } from './landingdata';

interface LandingTestimonialsSwiperProps {
    card: TestimonialsType
}

const LandingTestimonialsSwiper: React.FC<LandingTestimonialsSwiperProps> = ({ card }) => {
    return (
        <Fragment>
            <Card className=" custom-card text-fixed-white border-0 reveal reveal-active">
                <Card.Body className="">
                    <div className="d-flex align-items-center mb-3">
                        <span className="avatar rounded-circle me-2">
                            <Image fill src={card.image} alt="" className="img-fluid rounded-circle" />
                        </span>
                        <div>
                            <h6 className="mb-0 fw-semibold fs-14 text-fixed-white">{card.name}</h6>
                            <p className="mb-0 fs-11 fw-normal op-8">{card.email}</p>
                        </div>
                    </div>
                    <div className="mb-3">
                        <span className="op-8">- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  -- <SpkTooltips placement='top' title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio'>
                            <Link scroll={false} href="#!" className="fw-semibold fs-11 text-fixed-white">Read More</Link>
                        </SpkTooltips>
                        </span>
                    </div>
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                        <div className="d-flex align-items-center">
                            <span className="op-8">Rating : </span>
                            <span className="text-warning d-block ms-1">
                                <i className="ri-star-fill me-1"></i>
                                <i className="ri-star-fill me-1"></i>
                                <i className="ri-star-fill me-1"></i>
                                <i className="ri-star-fill me-1"></i>
                                <i className="ri-star-fill"></i>
                            </span>
                        </div>
                        <div className="float-end fs-12 fw-semibold op-8 text-end">
                            <span>{card.timeAgo}</span>
                            <span className="d-block fs-12 text-success"><i>{card.name}</i></span>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment >
    )
}

export default LandingTestimonialsSwiper;
