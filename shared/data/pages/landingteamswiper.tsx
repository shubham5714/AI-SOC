import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap';
import { TeamMemberType } from './landingdata';

interface LandingTeamSwiperProps {
    card: TeamMemberType
}

const LandingTeamSwiper: React.FC<LandingTeamSwiperProps> = ({ card }) => {
    return (
        <Fragment>
            <Card className=" border text-center feature-card-15 shadow-none reveal reveal-active">
                <Card.Body className=" main-card-body">
                    <div className="d-flex align-items-center gap-3">
                        <div>
                            <Image fill src={card.image} className="img-fluid team-img rounded-circle" alt="img" />
                        </div>
                        <div className="text-start">
                            <h5 className="mb-0 mt-3">{card.name}</h5>
                            <p className="text-primary mb-3 fs-14">{card.role}</p>
                            <div className="d-flex">
                                <Link scroll={false} aria-label="anchor" href="#!" className="btn btn-primary-light btn-sm btn-icon rounded-circle me-2"><i className="ri ri-twitter-x-fill fs-11"></i></Link>
                                <Link scroll={false} aria-label="anchor" href="#!" className="btn btn-success-light btn-sm btn-icon rounded-circle me-2"><i className="bx bxl-facebook"></i></Link>
                                <Link scroll={false} aria-label="anchor" href="#!" className="btn btn-info-light btn-sm btn-icon rounded-circle me-2"><i className="bx bxl-instagram"></i></Link>
                                <Link scroll={false} aria-label="anchor" href="#!" className="btn btn-secondary-light btn-sm btn-icon rounded-circle"><i className="bx bxl-linkedin"></i></Link>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default LandingTeamSwiper;
