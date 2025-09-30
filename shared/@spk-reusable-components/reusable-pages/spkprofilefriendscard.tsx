import React, { Fragment } from 'react'
import { Card, Dropdown } from 'react-bootstrap'
import Link from 'next/link'
import SpkDropdown from '../reusable-uiElements/spk-dropdown';
import SpkButton from '../reusable-uiElements/spk-buttons';
import Image from 'next/image';
import { ProfileCardType } from '@/shared/data/pages/profiledata';

interface Profilecard {
    card: ProfileCardType;
}

const SpkProfilefriendscard: React.FC<Profilecard> = ({ card }) => {
    return (
        <Fragment>
            <Card className="custom-card shadow-none border">
                <Card.Body className="">
                    <div className="d-flex align-items-center gap-2 flex-wrap">
                        <span className="avatar avatar-xl avatar-rounded flex-shrink-0 custom-width">
                            <Image fill src={card.Imgsrc} alt="" />
                        </span>
                        <div className="text-truncate flex-fill">
                            <Link scroll={false} href={"#!"} className="mb-0 fw-semibold">{card.Name}</Link>
                            <p className="w-75 text-truncate fs-12 op-7 mb-1 text-muted">{card.Mail}</p>
                            <span className={`badge bg-${card.Color}-transparent`}>{card.Role}</span>
                        </div>
                        <SpkDropdown Togglevariant="secondary-light" Customclass="dropdown-menu-end" Customtoggleclass="btn btn-icon btn-sm btn-wave waves-effect waves-light no-caret" Icon={true} IconClass='ri-more-2-fill' >
                            <li><Dropdown.Item>Message</Dropdown.Item></li>
                            <li><Dropdown.Item>Block</Dropdown.Item></li>
                            <li><Dropdown.Item>Remove</Dropdown.Item></li>
                        </SpkDropdown>
                    </div>
                </Card.Body>
                <Card.Footer className="text-center p-3">
                    <div className="d-flex gap-2 flex-wrap justify-content-center">
                        <SpkButton Buttonvariant="" Size='sm' Customclass="btn-primary-light btn-wave me-0">View Profile</SpkButton>
                        <SpkButton Buttonvariant="" Size='sm' Customclass="btn-light btn-wave me-0">Unfollow</SpkButton>
                    </div>
                </Card.Footer>
            </Card>
        </Fragment>
    )
}

export default SpkProfilefriendscard