"use client"
import { TeamMemberType } from '@/shared/data/pages/teamdata';
import Image from 'next/image';
import Link from 'next/link'
import React, { Fragment } from 'react'
import { Card } from 'react-bootstrap'

interface Teamprops {
    card: TeamMemberType;
}

const SpkTeamcards: React.FC<Teamprops> = ({ card }) => {
    return (
        <Fragment>
            <Card className="custom-card team-member text-center">
                <div className={`team-bg-shape ${card.Color}`}></div>
                <Card.Body>
                    <div className={`${card.Imageclass} lh-1 d-flex gap-2 justify-content-center`}>
                        <span className={`avatar avatar-xl avatar-rounded custom-width bg-${card.Color}`}>
                            <Image fill src={card.Imgsrc} className="card-img" alt="..." />
                        </span>
                    </div>
                    <div className="">
                        <p className={`mb-2 fs-11 badge bg-${card.Color} fw-medium`}>{card.Role}</p>
                        <h6 className="mb-3 fw-semibold">{card.Title}</h6>
                        <p className="text-muted fs-12">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</p>
                        <div className="d-flex justify-content-center">
                            <Link scroll={false} href={card.Navigate} className="btn btn-icon btn-primary-light btn-wave btn-sm"><i className="ri-twitter-x-fill"></i></Link>
                            <Link scroll={false} href={card.Navigate} className="btn btn-icon btn-success-light btn-wave btn-sm ms-2"><i className="ri-facebook-fill"></i></Link>
                            <Link scroll={false} href={card.Navigate} className="btn btn-icon btn-info-light btn-wave btn-sm ms-2"><i className="ri-instagram-line"></i></Link>
                            <Link scroll={false} href={card.Navigate} className="btn btn-icon btn-secondary-light btn-wave btn-sm ms-2"><i className="ri-linkedin-fill"></i></Link>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default SpkTeamcards;