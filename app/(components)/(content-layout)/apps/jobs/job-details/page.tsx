"use client"
import SpkSwiperJs from "@/shared/@spk-reusable-components/reusable-plugins/spk-swiperjs";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkTooltips from "@/shared/@spk-reusable-components/reusable-uiElements/spk-tooltips";
import { JobDetailsSwiper } from "@/shared/data/apps/jobs/job-details-data";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";

interface JobDetailsProps { }

const JobDetails: React.FC<JobDetailsProps> = () => {

    const breakpoints = {
        350: {
            slidesPerView: 3,
            spaceBetween: 8,
        },
        320: {
            slidesPerView: 2,
            spaceBetween: 8,
        },
    }
    
    return (
        <Fragment>
            <Seo title="Job Details" />
            <Pageheader title='Apps' subtitle='Jobs' currentpage='Job Details' activepage='Job Details' />
            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xxl={9}>
                    <Card>
                        <Card.Body>
                            <Card className="custom-card overflow-hidden job-info-banner">
                            </Card>
                            <Card className="border border-dashed custom-card job-info-data mb-2">
                                <Card.Body>
                                    <div className="d-flex flex-wrap align-items-top justify-content-between gap-2">
                                        <div>
                                            <div className="d-flex flex-wrap gap-2">
                                                <div>
                                                    <span className="avatar avatar-lg border p-1 custom-width">
                                                        <Image fill src="../../../assets/images/media/jobs/2.png" alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <h5 className="fw-medium mb-0 d-flex align-items-center"><Link scroll={false} href="#!" className="">Frontend Developer</Link></h5>
                                                    <Link scroll={false} href="#!" className="fs-12 text-muted"><i className="bi bi-building"></i> Spruko Technologies PRIVATE LIMITED</Link>
                                                    <div className="d-flex mt-3">
                                                        <div>
                                                            <p className="mb-1"><i className="bi bi-geo-alt me-1"></i>Bangalore, Karnataka</p>
                                                            <p><i className="bi bi-briefcase me-1"></i>2 - 4 Yrs Exp.</p>
                                                        </div>
                                                        <div className="ms-4">
                                                            <p className="mb-1"><i className="bi bi-coin me-1"></i><span className="fw-medium">25,000 - 35,000</span> / per month (+incentives)</p>
                                                            <p><i className="bi bi-mortarboard  me-1"></i>Graduate and Above</p>
                                                        </div>
                                                    </div>
                                                    <div className="popular-tags">
                                                        <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default me-1"><i className="bi bi-clock me-1"></i>Full Time</Link>
                                                        <Link scroll={false} href="#!" className="badge rounded-pill bg-light text-default"><i className="bi bi-briefcase me-1"></i>8 Openings</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-end ms-auto">
                                            <SpkTooltips placement="top" title="Save">
                                                <Link scroll={false} href="#!" className="rounded-pill btn btn-icon btn-primary-light btn-wave btn-sm">
                                                    <i className="ri-bookmark-line"></i>
                                                </Link>
                                            </SpkTooltips>

                                            <p className="mb-0 mt-4 pt-3">
                                                <SpkTooltips placement="top" title="20 days left">
                                                    <i className="bi bi-info-circle text-info me-1"></i>
                                                </SpkTooltips>
                                                <span className="fw-medium">20 days left </span> to apply for this job</p>
                                            <div className="d-flex gap-2 flex-wrap mt-3 justify-content-end">
                                                <Link scroll={false} href="#!" className="btn mb-0 btn-primary"> Apply Now</Link>
                                                <Link scroll={false} href="#!" className="btn mb-0 btn-icon btn-success-light btn-wave">
                                                    <i className="ri-heart-line"></i>
                                                </Link>
                                                <Link scroll={false} href="#!" className="btn mb-0 btn-icon btn-info-light btn-wave me-0">
                                                    <i className="ri-share-line"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                </Card.Body>
                            </Card>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Body>
                            <h6 className="fw-medium">Job Description</h6>
                            <p className="op-9">We are seeking a skilled Frontend Developer to join our dynamic team. In this role, you will be responsible for implementing visual elements that users see and interact with in web applications. You will work closely with designers and backend developers to bridge the gap between graphical design and technical implementation, ensuring an optimized and responsive user experience.</p>
                            <p className="mb-4 op-9">As a Frontend Developer, you will use your expertise in HTML, CSS, and JavaScript frameworks to translate UI/UX design wireframes into high-quality code. You will collaborate with cross-functional teams to deliver scalable and maintainable frontend solutions that meet business objectives and user needs.</p>

                            <h6 className="fw-medium">Key Responsibilities</h6>
                            <ListGroup as='ol' className="list-group border-0 list-unstyled list-group-numbered mb-3">
                                <ListGroup.Item className="border-0 py-1">Develop responsive web pages and web applications based on provided designs and specifications.</ListGroup.Item>
                                <ListGroup.Item className="border-0 py-1">Collaborate with UX/UI designers and backend developers to deliver seamless user interfaces.</ListGroup.Item>
                                <ListGroup.Item className="border-0 py-1">Optimize application performance and ensure cross-browser compatibility.</ListGroup.Item>
                                <ListGroup.Item className="border-0 py-1">Implement front-end components and libraries using modern frameworks such as React, Angular, or Vue.js.</ListGroup.Item>
                                <ListGroup.Item className="border-0 py-1">Conduct thorough testing of user interfaces to identify and fix UI issues and bugs.</ListGroup.Item>
                            </ListGroup>
                            <h6 className="fw-medium">Requirements</h6>
                            <ListGroup as='ul' className="list-group border-0 list-unstyled list-group-numbered mb-3">
                                <ListGroup.Item className="border-0 py-1">Bachelor's degree in Computer Science, Engineering, or a related field, or equivalent practical experience.</ListGroup.Item>
                                <ListGroup.Item className="border-0 py-1">Proven experience as a Frontend Developer or similar role, with a strong portfolio demonstrating frontend development skills.</ListGroup.Item>
                                <ListGroup.Item className="border-0 py-1">Proficiency in HTML5, CSS3, JavaScript, and frontend frameworks/libraries (e.g., React, Angular, Vue.js).</ListGroup.Item>
                                <ListGroup.Item className="border-0 py-1">Experience with version control systems (e.g., Git) and modern development workflows.</ListGroup.Item>
                                <ListGroup.Item className="border-0 py-1">Understanding of responsive design principles and mobile-first approach.</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card border shadow-none bg-primary-transparent border border-primary border-opacity-10">
                        <Card.Body>
                            <Row className="align-items-center">
                                <Col lg={6}>
                                    <h5 className="fw-medium mb-3"><i className="ri-briefcase-line me-2 p-2 bg-primary text-fixed-white fs-15 lh-1 align-middle rounded-circle"></i>Explore Job Opportunities</h5>
                                    <span className="text-muted mb-0 fs-14">Find exciting job opportunities that match your skills and interests. Join us to make a difference!</span>
                                </Col>
                                <Col lg={6} className="text-end">
                                    <Link scroll={false} href="#!" className="btn btn-primary btn-lg" role="button">
                                        <i className="ri-share-line me-2 align-middle d-inline-block"></i>Sign up Now
                                    </Link>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Job Highlights</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="mb-2 fs-14 d-flex align-items-center">
                                <span className="avatar avatar-sm border lh-1 avatar-rounded me-2 bg-info-transparent">
                                    <i className="ri-map-pin-line"></i>
                                </span>
                                <span className="text-muted">Work Location</span>
                                <span className="ms-auto fw-medium">
                                    Bangalore
                                </span>
                            </div>
                            <div className="mb-2 d-flex align-items-center">
                                <span className="avatar avatar-sm border lh-1 avatar-rounded me-2 bg-danger-transparent">
                                    <i className="ri-time-line"></i>
                                </span>
                                <span className="text-muted">Flexible Hours</span>
                                <span className="ms-auto fw-medium">
                                    9:00AM -6:00PM
                                </span>

                            </div>
                            <div className="mb-2 d-flex align-items-center">
                                <span className="avatar avatar-sm border lh-1 avatar-rounded me-2 bg-success-transparent">
                                    <i className="ri-cash-line"></i>
                                </span>
                                <span className="text-muted">Competitive Salary</span>
                                <span className="ms-auto fw-medium">
                                    35,000 +
                                </span>

                            </div>
                            <div className="mb-0 d-flex align-items-center">
                                <span className="avatar avatar-sm border lh-1 avatar-rounded me-2 bg-info-transparent">
                                    <i className="ri-award-line"></i>
                                </span>
                                <span className="text-muted">Employee Benefits</span>
                                <span className="ms-auto fw-medium">
                                    Award
                                </span>

                            </div>
                        </Card.Body>
                    </Card>
                    <div className="mb-1">
                        <h6 className="fw-medium mb-3">Related Jobs</h6>
                        <SpkSwiperJs slides={JobDetailsSwiper} autoplay={true} slidesPerView={3} breakpoint={breakpoints} loop={true} className='swiper swiper-vertical overflow-hidden swiper-related-jobs mb-3' direction={"vertical"} />
                    </div>
                    <Card className="custom-card">
                        <Card.Body>
                            <h6 className="fw-medium mb-3">Subscribe to Job Alerts</h6>
                            <div className="input-group mb-1">
                                <input type="email" className="form-control" placeholder="Your Email Address" aria-label="job-email" aria-describedby="job-subscribe" />
                                <SpkButton Buttonvariant="primary" Buttontype="button" Id="job-subscribe">Subscribe</SpkButton>
                            </div>
                            <label className="form-check-label fs-11">
                                By subscribing, you accept our <Link scroll={false} href="#!" className="text-success"><u>privacy policy</u></Link>.
                            </label>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End::row-1 --> */}
        </Fragment>
    );
};

export default JobDetails;