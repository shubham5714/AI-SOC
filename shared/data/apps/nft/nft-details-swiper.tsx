import SpkButton from '@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons';
import Image from 'next/image';
import Link from 'next/link'
import React, { Fragment } from 'react'
import { Col, Row } from 'react-bootstrap';
import { ReviewsType } from './nft-details-data';

interface NftDetailsSwiperProps {
    card: ReviewsType
}

const NftDetailsSwiper: React.FC<NftDetailsSwiperProps> = ({ card }) => {
    return (
        <Fragment>
            <div className="border rounded p-3">
                <div className="d-sm-flex d-block align-items-top mb-3">
                    <div className="d-flex flex-fill">
                        <div className="me-2">
                            <span className="avatar avatar-sm avatar-rounded custom-width">
                                <Image fill src={card.avatar} alt="" />
                            </span>
                        </div>
                        <div className="lh-1 me-2">
                            <p className="mb-1 fw-medium fs-14">{card.name} <span className="text-success"></span></p>
                            <div className="mb-1">
                                <span className="fs-11 text-muted">
                                    {card.date}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="mb-1 ms-auto text-end d-flex align-items-center gap-1">
                        <i className="ri-star-fill align-middle text-warning align-middle"></i>
                        <i className="ri-star-fill align-middle text-warning align-middle"></i>
                        <i className="ri-star-fill align-middle text-warning align-middle"></i>
                        <i className="ri-star-fill align-middle text-warning align-middle"></i>
                        <i className="ri-star-half-fill align-middle text-warning align-middle fs-12"></i> <span className="align-middle">{card.rating}</span>
                    </div>
                </div>
                <div className="ps-sm-4 ps-0 mb-3">
                    <p className="fw-medium mb-1 ps-2">{card.title}</p>
                    <p className="mb-0 fs-12 text-muted ps-2">{card.description}</p>
                </div>
                <div className="product-images ps-sm-4 ps-0">
                    <Row>
                        <Col xl={6} className="col-xl-6">
                            <div className="">
                                {card.images.map((img, index) => (
                                    <Link scroll={false} href="#!" className="avatar avatar-sm me-1" key={index}>
                                        <Image width={28} height={28} src={img} alt="" />
                                    </Link>
                                ))}

                            </div>
                        </Col>
                        <div className="col-xl-6 d-flex align-items-end justify-content-sm-end mt-sm-0 mt-2">
                            <SpkButton Buttonvariant='primary-light' Customclass="btn btn-sm me-2">Report abuse</SpkButton>
                            <SpkButton Buttonvariant='info-light' Customclass="btn btn-sm btn-icon me-2">
                                <i className="ri-thumb-up-line"></i>
                            </SpkButton>
                            <SpkButton Buttonvariant='secondary-light' Customclass="btn btn-sm btn-icon">
                                <i className="ri-thumb-down-line"></i>
                            </SpkButton>
                        </div>
                    </Row>
                </div>
            </div>
        </Fragment>
    )
}

export default NftDetailsSwiper
