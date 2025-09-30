"use client"
import { avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9 } from "@/shared/data/prism-code/utilities-prism";
import { Avatardata, Avataricon, Avatarinitial, Avatarnumber, Avataroffline, Avataronline, Avatarsize, Avatarstack } from "@/shared/data/utilities/avatarsdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import ShowCode from "@/shared/layouts-components/showcode/showcode";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";

interface AvatarsProps { }

const Avatars: React.FC<AvatarsProps> = () => {

    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title={"Avatars"} />

            <Pageheader title="Utilities" currentpage="Avatars" activepage="Avatars" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={6} lg={6} md={12} sm={12}>
                    <ShowCode title="Avatars" customCardClass="custom-card" customCardBodyClass="py-4" reactCode={avatar1}>
                        {Avatardata.map((idx) => (
                            <span className={`avatar me-2 custom-width ${idx.class}`} key={idx.id}>
                                <Image fill src={idx.src} alt="img" />
                            </span>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={6} lg={6} md={12} sm={12}>
                    <ShowCode title="Avatar With Icons
                                        <p class='subtitle text-muted fs-12 fw-normal'>
                                            Avatar contains icons to perform respective action.
                                        </p>" customCardClass="custom-card" customCardBodyClass="" reactCode={avatar3}>
                        {Avataricon.map((idx) => (
                            <span key={idx.id} className={`avatar avatar-${idx.class} me-2 avatar-rounded custom-width`}>
                                <Image fill src={idx.src} alt="img" />
                                <Link href="#!" className={`badge bg-${idx.class1} rounded-pill avatar-badge`}><i className={`fe fe-${idx.icon}`}></i></Link>
                            </span>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={6} lg={6} md={12} sm={12}>
                    <ShowCode title=" Avatar Sizes <p class='subtitle text-muted fs-12 fw-normal'>  Avatars of different sizes </p>" customCardClass="custom-card" customCardBodyClass="" reactCode={avatar2}>
                        {Avatarsize.map((idx) => (
                            <span key={idx.id} className={`avatar avatar-${idx.class} me-2 custom-width`}>
                                <Image fill src={idx.src} alt="img" />
                            </span>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={6} lg={6} md={12} sm={12}>
                    <ShowCode title=" Avatar With Online Status Indicators
                                        <p class='subtitle text-muted fs-12 fw-normal'>
                                            avatars having online status indicator.
                                        </p>" customCardClass="custom-card" customCardBodyClass="" reactCode={avatar4}>
                        {Avataronline.map((idx) => (
                            <span key={idx.id} className={`avatar avatar-${idx.class} me-2 avatar-rounded custom-width`}>
                                <Image fill src={idx.src} alt="img" />
                            </span>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={6} lg={6} md={12} sm={12}>
                    <ShowCode title="  Avatar With Offline Status Indicators
                                        <p class='subtitle text-muted fs-12 fw-normal'>
                                            avatars having a offline status indicator.
                                        </p>" customCardClass="custom-card" customCardBodyClass="" reactCode={avatar5}>
                        {Avataroffline.map((idx) => (
                            <span key={idx.id} className={`avatar avatar-${idx.class} me-2 avatar-rounded custom-width`}>
                                <Image fill src={idx.src} alt="img" />
                            </span>
                        ))}
                    </ShowCode>
                </Col>
                <Col xl={6} lg={6} md={12} sm={12}>
                    <ShowCode title=" Avatars With Number Badges
                                        <p class='subtitle text-muted fs-12 fw-normal'>
                                            Avatar numbers indicates the no. of unread notififactions/messages.
                                        </p>" customCardClass="custom-card" customCardBodyClass="" reactCode={avatar6}>
                        {Avatarnumber.map((idx) => (
                            <span key={idx.id} className={`avatar avatar-${idx.class} me-2 avatar-rounded custom-width`}>
                                <Image fill src={idx.src} alt="img" />
                                <span className={`badge rounded-pill bg-${idx.class1} avatar-badge`}>{idx.data}</span>
                            </span>
                        ))}
                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- End::row-1 --> */}

            {/* <!-- Start::row-3 --> */}
            <Row>
                <Col xl={6} lg={6} md={12} sm={12}>
                    <ShowCode title="Stacked Avatars
                                        <p class='subtitle text-muted fs-12 fw-normal'>
                                            Group of avatars stacked together.
                                        </p>" customCardClass="custom-card" customCardBodyClass="" reactCode={avatar8}>
                        <div className="avatar-list-stacked">
                            {Avatarstack.map((idx) => (
                                <span key={idx.id} className="avatar custom-width">
                                    <Image fill src={idx.src} alt="img" />
                                </span>
                            ))}
                            <a className="avatar bg-primary text-fixed-white" href="#!">
                                +8
                            </a>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={6} lg={6} md={12} sm={12}>
                    <ShowCode title="Rounded Stacked Avatars
                                        <p class='subtitle text-muted fs-12 fw-normal'>
                                            Group of avatars stacked together.
                                        </p>" customCardClass="custom-card" customCardBodyClass="" reactCode={avatar9}>
                        <div className="avatar-list-stacked">
                            {Avatarstack.map((idx) => (
                                <span key={idx.id} className="avatar avatar-rounded custom-width">
                                    <Image fill src={idx.src} alt="img" />
                                </span>
                            ))}
                            <a className="avatar bg-primary avatar-rounded text-fixed-white" href="#!">
                                +8
                            </a>
                        </div>
                    </ShowCode>
                </Col>
                <Col xl={12} lg={6} md={12} sm={12}>
                    <ShowCode title=" Avatar With Initials
                                        <p class='subtitle text-muted fs-12 fw-normal'>
                                            Avatar contains intials when user profile doesn't exist.
                                        </p>" customCardClass="custom-card" customCardBodyClass="" reactCode={avatar7}>
                        {Avatarinitial.map((idx) => (
                            <span key={idx.id} className={`avatar avatar-${idx.data} m-2 bg-${idx.color}`}>
                                {idx.data1}
                            </span>
                        ))}

                    </ShowCode>
                </Col>
            </Row>
            {/* <!-- End::row-3 --> */}
        </Fragment>
    )
};
export default Avatars;