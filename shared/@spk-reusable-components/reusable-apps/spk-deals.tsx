"use client"
import React, { Fragment } from 'react'
import { Card, Dropdown } from 'react-bootstrap'
import SpkDropdown from '../reusable-uiElements/spk-dropdown'
import Link from 'next/link'
import Image from 'next/image'
import { DealCardType } from '@/shared/data/apps/crm/dealsdata'

interface SpkDealsCardProps {
    card: DealCardType
}

const SpkDealsCard: React.FC<SpkDealsCardProps> = ({ card }) => {
    return (
        <Fragment>
            <Card className="custom-card">
                <Card.Body>
                    <div className="d-flex align-items-center gap-2 mb-3">
                        <div className="d-flex align-items-center gap-1 flex-wrap">
                            <div className="lh-1">
                                <span className="avatar avatar-sm avatar-rounded custom-width">
                                    <Image fill src={card.avatar} alt="" />
                                </span>
                            </div>
                            <div>
                                <div>{card.name}</div>
                                <div className="text-muted fs-10">{card.dateTime}</div>
                            </div>
                        </div>
                        <SpkDropdown Customclass="ms-auto" toggleas='a' Customtoggleclass="btn btn-light btn-icons btn-sm text-muted no-caret" Icon={true} IconClass="fe fe-more-vertical">
                            <li><Dropdown.Item href="#!">Edit</Dropdown.Item></li>
                            <li><Dropdown.Item href="#!">Delete</Dropdown.Item></li>
                            <li><Dropdown.Item href="#!">View Details</Dropdown.Item></li>
                        </SpkDropdown>
                    </div>
                    <p className="fw-medium mb-1 fs-14">{card.title}</p>
                    <p className="fw-medium"><span className="text-muted fw-normal">{card.budget}:</span> {card.amount}</p>
                    <div className="deal-description">
                        <div>
                            <Link scroll={false} href="#!" className="company-name">{card.company}</Link>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Fragment>
    )
}

export default SpkDealsCard
