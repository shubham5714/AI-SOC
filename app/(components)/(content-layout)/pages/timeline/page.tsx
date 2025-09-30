"use client"

import SpkTimeline1 from "@/shared/@spk-reusable-components/reusable-pages/timeline/spk-timeline1";
import SpkTimeline2 from "@/shared/@spk-reusable-components/reusable-pages/timeline/spk-timeline2";
import Notification from "@/shared/@spk-reusable-components/reusable-pages/timeline/spk-timeline3";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import { notifications, steps, timelineData, timelineData1 } from "@/shared/data/pages/timelinedata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";

interface TimelineProps { }

const Timeline: React.FC<TimelineProps> = () => {
    return (
        <Fragment>

            {/* <!-- Start::page-header --> */}
            <Seo title="Pages-Timeline" />
            <Pageheader title="Pages" currentpage="Timeline" activepage="Timeline" />
            {/* <!-- End::page-header --> */}

            {/*<!-- Start:: row-1 -->*/}
            <Row className="justify-content-center timeline-3">
                <Col xxl={11} className="">
                    <Card className=" custom-card">
                        <div className="card-header pb-4">
                            <div className="card-title">Timeline 01</div>
                        </div>
                        <Card.Body className="">
                            <div className="timeline-steps">
                                {steps.map((step, index) => (
                                    <SpkTimeline1 key={index} obj={step} />
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/*<!-- End:: row-1 -->*/}

            {/*<!-- Start:: row-2 -->*/}
            <Row className=" justify-content-center">
                <Col xxl={11} className="">
                    <Card className=" custom-card border overflow-hidden">
                        <div className="card-header">
                            <div className="card-title">
                                Timeline 02
                            </div>
                        </div>
                        <Card.Body className="">
                            <div className="timeline container">
                                <Row>
                                    <Col lg={12}>
                                        <div className="timeline-end"> <span className="p-1 fs-11 bg-info text-fixed-white backdrop-blur text-center border border-info border-opacity-10 rounded-1 lh-1 fw-medium"> 22 January 2024 </span> </div>
                                        <SpkTimeline2 timelineData={timelineData} />
                                        <div className="timeline-end"> <span className="p-1 fs-11 bg-secondary text-fixed-white backdrop-blur text-center border border-info border-opacity-10 rounded-1 lh-1 fw-medium z-1 position-relative"> 25 January 2024 </span> </div>
                                        <SpkTimeline2 timelineData={timelineData1} />
                                    </Col>
                                </Row>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/*<!-- End:: row-2 -->*/}

            {/*<!-- Start:: row-3 -->*/}
            <Row className=" justify-content-center timeline-2">
                <Col xxl={11} className="">
                    <Card className=" custom-card">
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                Timeline 03
                            </div>
                        </div>
                        <ul className="notification container px-3">
                            {notifications.map((notification, index) => (
                                <Notification key={index} {...notification} />
                            ))}
                        </ul>
                        <div className="text-center mb-4">
                            <SpkButton Buttonvariant="success-light" Customclass="btn-loader mx-auto">
                                <span className="me-2">Loading</span>
                                <span className="loading"><i className="ri-loader-4-line fs-16"></i></span>
                            </SpkButton>
                        </div>
                    </Card>
                </Col>
            </Row>
            {/*<!-- End:: row-3 -->*/}
        </Fragment>
    )
};

export default Timeline;