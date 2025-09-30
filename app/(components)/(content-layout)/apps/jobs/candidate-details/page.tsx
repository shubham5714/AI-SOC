"use client"
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkTooltips from "@/shared/@spk-reusable-components/reusable-uiElements/spk-tooltips";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";

interface CandidateDetailsProps { }

const CandidateDetails: React.FC<CandidateDetailsProps> = () => {
    return (
        <Fragment>
            <Seo title="Candidate Details" />
            <Pageheader title='Apps' subtitle='Jobs' currentpage='Candidate Details' activepage='Candidate Details' />
            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xxl={8}>
                    <Card className="custom-card job-candidate-details">
                        <div className="candidate-bg-shape primary"></div>
                        <Card.Body className="pt-5">
                            <div className="mb-3 lh-1 mt-4">
                                <span className="avatar avatar-xxl avatar-rounded">
                                    <Image fill src="../../../assets/images/faces/1.jpg" className="rounded-circle img-fluid shadow" alt="" />
                                </span>
                            </div>
                            <div className="d-flex gap-2 flex-wrap mb-3">
                                <div className="flex-fill">
                                    <h6 className="mb-1 fw-semibold">
                                        <Link scroll={false} href="#!"> Samantha
                                            <SpkTooltips placement="top" title="Verified candidate">
                                                <i className="ri-check-line text-success fs-16 mx-1"></i>
                                            </SpkTooltips>
                                        </Link>
                                    </h6>
                                    <p className="mb-0 text-muted">UI/UX Designer</p>
                                    <div className="d-flex flex-wrap gap-2 align-items-center fs-12 text-muted">
                                        <p className="mb-0">Ratings : </p>
                                        <div className="min-w-fit-content ms-2">
                                            <span className="text-warning me-1"><i className="ri-star-fill"></i></span>
                                            <span className="text-warning me-1"><i className="ri-star-fill"></i></span>
                                            <span className="text-warning me-1"><i className="ri-star-fill"></i></span>
                                            <span className="text-warning me-1"><i className="ri-star-fill"></i></span>
                                            <span className="text-warning"><i className="ri-star-half-fill"></i></span>
                                        </div>
                                        <Link scroll={false} href="#!" className="ms-1 min-w-fit-content text-muted">
                                            <span>(245)</span>
                                            <span className="ms-1 d-inline-block">Ratings</span>
                                        </Link>
                                    </div>
                                    <div className="d-flex fs-14 mt-3 gap-2 flex-wrap">
                                        <div className="me-3">
                                            <p className="mb-1"><i className="ri-map-pin-line me-2 text-muted"></i>Silicon Valley, CA</p>
                                            <p className="mb-0"><i className="ri-briefcase-line me-2 text-muted"></i>3 Years Experience</p>
                                        </div>
                                        <div className="me-3">
                                            <p className="mb-1"><i className="ri-currency-line me-2 text-muted"></i>Annual Pay : <span className="fw-medium">$55,000</span> - <span className="fw-medium">$80,000</span></p>
                                            <p className="mb-0"><i className="ri-graduation-cap-line me-2 text-muted"></i>Graduate</p>
                                        </div>
                                        <div>
                                            <p className="mb-1"><i className="ri-mail-line me-2 text-muted"></i>Mail : <span className="fw-medium">samantha@mail.com</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn-list ms-auto">
                                    <Link scroll={false} href="#!" className="btn btn-primary rounded-pill btn-wave waves-effect"><i className="ri-download-cloud-line me-1"></i> Download CV</Link>
                                    <Link scroll={false} href="#!" className="btn btn-success-light rounded-pill btn-wave waves-effect waves-light align-middle">
                                        <i className="ri-heart-line lh-1 my-auto align-middle"></i> Add to wishlist
                                    </Link>
                                    <Link scroll={false} href="#!" className="btn btn-icon btn-secondary-light rounded-pill btn-wave waves-effect waves-light align-middle me-0">
                                        <i className="ri-share-line fs-18 mb-1 lh-1 my-auto align-middle"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="d-flex gap-3 align-items-center flex-wrap">
                                <h6 className="mb-0">Availability:</h6>
                                <div className="popular-tags d-flex gap-2 flex-wrap">
                                    <Link scroll={false} href="#!" className="badge rounded-pill fs-11 bg-info-transparent"><i className="ri-remote-control-line me-1"></i>Full Time</Link>
                                    <Link scroll={false} href="#!" className="badge rounded-pill fs-11 bg-danger-transparent"><i className="ri-time-line me-1"></i>Immediate Joinee</Link>
                                    <Link scroll={false} href="#!" className="badge rounded-pill fs-11 bg-primary-transparent"><i className="ri-calendar-line me-1"></i>Flexible Schedule</Link>
                                </div>
                                <Link scroll={false} href="#!" className="ms-auto text-secondary px-2 py-1 rounded-pill fs-12 bg-secondary-transparent"><i className="ri-chat-1-line me-1"></i> Message Now</Link>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Candidate Profile Information
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="p-0 candidate-edu-timeline">
                            <div className="p-3 border-bottom">
                                <h5 className="fw-medium fs-17 d-flex align-items-center gap-2"><span className="avatar avatar-rounded bg-primary avatar-sm"><i className="ri-briefcase-4-line fs-13"></i></span> Career Objective :</h5>
                                <div className="ms-4 ps-3">
                                    <p className="op-9">Passionate and creative UI/UX designer with a strong portfolio and proven track record in designing intuitive user interfaces. Committed to delivering high-quality user experiences through user-centric design principles.</p>
                                    <p className="mb-0 op-9">Seeking a challenging role in a dynamic company where I can contribute my skills in UI/UX design to create innovative and user-friendly digital products.</p>
                                </div>
                            </div>
                            <div className="p-3 border-bottom">
                                <Row>
                                    <Col xl={7}>
                                        <h5 className="fw-medium fs-17 d-flex align-items-center gap-2"><span className="avatar avatar-rounded bg-primary avatar-sm"><i className="ri-graduation-cap-line fs-13"></i></span> Education :</h5>
                                        <div className="ms-4 ps-3">
                                            <p className="fw-medium fs-14 mb-0">Bachelor of Science in Computer Science</p>
                                            <div className="d-flex gap-2 mb-1">
                                                <p className="mb-0">Dwayne University</p>
                                                <p className="mb-0 text-muted"><i className="ri-map-pin-line fs-12"></i> Nellore</p>
                                            </div>
                                            <p className="mb-3 text-muted"> (2020 Mar - 2024 Apr)</p>
                                            <p className="fw-medium fs-14 mb-0">Intermediate (MPC)</p>
                                            <div className="d-flex gap-2 mb-1">
                                                <p className="mb-0">Sprect College</p>
                                                <p className="mb-0 text-muted"><i className="ri-map-pin-line fs-12"></i> Warangal</p>
                                            </div>
                                            <p className="mb-0 text-muted"> (2017 Mar - 2020 Apr)</p>
                                        </div>
                                    </Col>
                                    <Col xl={5}>
                                        <h5 className="fw-medium fs-17 d-flex align-items-center gap-2"><span className="avatar avatar-rounded bg-primary avatar-sm"><i className="ri-graduation-cap-line fs-13"></i></span> Certifications :</h5>
                                        <div className="ms-4 ps-3">
                                            <p className="fw-medium fs-14 mb-0">Web Development (3 Months)</p>
                                            <p className="mb-4">EMC Solutions Pvt Ltd</p>
                                            <p className="fw-medium fs-14 mb-0">Python Development (6 Months)</p>
                                            <p className="mb-0">Dabre Services Pvt Ltd</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="p-3 border-bottom">
                                <Row>
                                    <Col xl={7}>
                                        <h5 className="fw-medium fs-17 d-flex align-items-center gap-2"><span className="avatar avatar-rounded bg-primary avatar-sm"><i className="ri-article-line fs-13"></i></span> Publications :</h5>
                                        <div className="ms-3">
                                            <ol className="list-group border-0 list-bullets">
                                                <li className="border-0 py-1"><span className="fw-medium">“The Evolution of User Experience Design,”</span> UX Design Journal, March 2023</li>
                                                <li className="border-0 py-1"><span className="fw-medium">“Designing for Accessibility in Web Applications,”</span> A11y Matters, June 2023</li>
                                                <li className="border-0 py-1"><span className="fw-medium">“Innovations in Mobile UI Design,”</span> Mobile Design Magazine, December 2023</li>
                                            </ol>
                                        </div>
                                    </Col>
                                    <Col xl={5}>
                                        <h5 className="fw-medium fs-17 d-flex align-items-center gap-2"><span className="avatar avatar-rounded bg-primary avatar-sm"><i className="ri-movie-2-line fs-13"></i></span> Activities and Interests :</h5>
                                        <div className="ms-3">
                                            <ol className="list-group border-0 list-bullets">
                                                <li className="border-0 py-1">Active participant in local UI/UX design meetups</li>
                                                <li className="border-0 py-1">Volunteer at community-driven design workshops</li>
                                                <li className="border-0 py-1">Passionate about exploring new design trends</li>
                                            </ol>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="p-3">
                                <h5 className="fw-medium fs-17 d-flex align-items-center gap-2"><span className="avatar avatar-rounded bg-primary avatar-sm"><i className="ri-user-location-line fs-13"></i></span> References :</h5>
                                <Row className="ms-4">
                                    <Col xl={7}>
                                        <p><span className="fw-medium">Name : </span> Nicole Chiu</p>
                                        <p><span className="fw-medium">Designation : </span> Software Developer</p>
                                        <p className="mb-3"><span className="fw-medium mb-0">Company Name : </span> InnovateZ Solutions</p>
                                    </Col>
                                    <Col xl={5}>
                                        <p><span className="fw-medium">Mobile : </span> +91 7865443679</p>
                                        <p><span className="fw-medium">Email : </span> nchiu@email.com</p>
                                        <p className="mb-0"><span className="fw-medium">Location : </span> Hyderabad</p>
                                    </Col>
                                </Row>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Experience Overview
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="p-0 candidate-edu-timeline">
                            <div className="p-3">
                                <h5 className="fw-medium fs-17 d-flex align-items-center gap-2 mb-3"><span className="avatar avatar-rounded bg-primary avatar-sm"><i className="ri-briefcase-4-line fs-13"></i></span> Experience :</h5>
                                <div className="ms-4 ps-3">
                                    <p className="fw-medium fs-14 mb-0">UI/UX Designer (2019 Mar - Present)</p>
                                    <div className="d-flex gap-2">
                                        <p>InnovateZ Solutions</p>
                                        <p className="mb-0 fs-12 text-muted"><i className="ri-map-pin-line fs-12"></i> Kondapur, Hyderabad</p>
                                    </div>
                                    <p className="fw-medium mb-2">Responsibilities :</p>
                                    <ol className="list-group border-0 list-bullets">
                                        <li className="border-0 py-1">Lead the design efforts for innovative and user-friendly interfaces across multiple projects.</li>
                                        <li className="border-0 py-1">Collaborate with cross-functional teams to translate business requirements into intuitive designs.</li>
                                        <li className="border-0 py-1">Conduct user research, usability testing, and gather feedback to iterate designs.</li>
                                    </ol>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header>
                            <Card.Title>
                                Tools Used
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="d-flex flex-wrap gap-2">
                            <span className="avatar me-2 avatar-rounded border border-dashed p-2 custom-width">
                                <Image fill src="../../../assets/images/company-logos/1.png" alt="" />
                            </span>
                            <span className="avatar me-2 avatar-rounded border border-dashed p-2 custom-width">
                                <Image fill src="../../../assets/images/company-logos/2.png" alt="" />
                            </span>
                            <span className="avatar me-2 avatar-rounded border border-dashed p-2 custom-width">
                                <Image fill src="../../../assets/images/company-logos/3.png" alt="" />
                            </span>
                            <span className="avatar me-2 avatar-rounded border border-dashed p-2 custom-width">
                                <Image fill src="../../../assets/images/company-logos/4.png" alt="" />
                            </span>
                            <span className="avatar me-2 avatar-rounded border border-dashed p-2 custom-width">
                                <Image fill src="../../../assets/images/company-logos/5.png" alt="" />
                            </span>
                            <span className="avatar avatar-rounded border border-dashed p-2 custom-width">
                                <Image fill src="../../../assets/images/company-logos/6.png" alt="" />
                            </span>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Skills
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="popular-tags d-flex gap-2 flex-wrap">
                                <Link scroll={false} href="#!" className="badge rounded-pill bg-info-transparent">HTML</Link>
                                <Link scroll={false} href="#!" className="badge rounded-pill bg-primary-transparent">CSS</Link>
                                <Link scroll={false} href="#!" className="badge rounded-pill bg-info-transparent">Javascript</Link>
                                <Link scroll={false} href="#!" className="badge rounded-pill bg-secondary-transparent">Angular</Link>
                                <Link scroll={false} href="#!" className="badge rounded-pill bg-success-transparent">React</Link>
                            </div>
                        </Card.Body>
                    </Card>

                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Languages
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <p className="mb-0 fs-14"><span className="fw-medium me-2">Known : </span>Hindi, English, Spanish, Telugu</p>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header>
                            <Card.Title>
                                Personal Information
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="table table-responsive">
                                    <tr>
                                        <td className="w-50">
                                            <span className="fw-medium">Full Name</span>
                                        </td>
                                        <td>: Iliana Lilly</td>
                                    </tr>
                                    <tr>
                                        <td className="w-50">
                                            <span className="fw-medium">Email</span>
                                        </td>
                                        <td>: brendra@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td className="w-50">
                                            <span className="fw-medium">D.O.B</span>
                                        </td>
                                        <td>: 13 Jan 2008</td>
                                    </tr>
                                    <tr>
                                        <td className="w-50">
                                            <span className="fw-medium">Gender</span>
                                        </td>
                                        <td>: Female</td>
                                    </tr>
                                    <tr>
                                        <td className="w-50">
                                            <span className="fw-medium">Age</span>
                                        </td>
                                        <td>: 35</td>
                                    </tr>
                                    <tr>
                                        <td className="w-50">
                                            <span className="fw-medium">Mobile </span>
                                        </td>
                                        <td>: +91 7865343874</td>
                                    </tr>
                                    <tr>
                                        <td className="w-50">
                                            <span className="fw-medium">Marital Status </span>
                                        </td>
                                        <td>: Unmarried</td>
                                    </tr>
                                    <tr>
                                        <td className="w-50">
                                            <span className="fw-medium">Address </span>
                                        </td>
                                        <td>: Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</td>
                                    </tr>
                                </SpkTables>
                            </div>
                        </Card.Body>
                        <Card.Footer className="border-top-0">
                            <div className="d-flex align-items-center">
                                <p className="fs-15 mb-0 me-4 fw-medium">Social :</p>
                                <div className="btn-list mb-0">
                                    <SpkButton Buttonvariant="primary-light" Customclass="btn btn-sm btn-icon  btn-wave waves-effect waves-light mb-xxl-0">
                                        <i className="ri-facebook-line"></i>
                                    </SpkButton>
                                    <SpkButton Buttonvariant="secondary-light" Customclass="btn btn-sm btn-icon btn-wave waves-effect waves-light mb-xxl-0">
                                        <i className="ri-twitter-x-line"></i>
                                    </SpkButton>
                                    <SpkButton Buttonvariant="warning-light" Customclass="btn btn-sm btn-icon btn-wave waves-effect waves-light mb-xxl-0">
                                        <i className="ri-instagram-line"></i>
                                    </SpkButton>
                                    <SpkButton Buttonvariant="success-light" Customclass="btn btn-sm btn-icon btn-wave waves-effect waves-light mb-xxl-0">
                                        <i className="ri-github-line"></i>
                                    </SpkButton>
                                    <SpkButton Buttonvariant="danger-light" Customclass="btn btn-sm btn-icon btn- btn-wave waves-effect waves-light mb-xxl-0">
                                        <i className="ri-youtube-line"></i>
                                    </SpkButton>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                    <Card className="custom-card">
                        <Card.Body>
                            <h6 className="fw-medium mb-3">Subscribe to Job Alerts</h6>
                            <div className="input-group mb-3">
                                <input type="email" className="form-control" placeholder="Your Email Address" aria-label="job-email" aria-describedby="job-subscribe" />
                                <SpkButton Buttonvariant="primary" Buttontype="button" Id="job-subscribe">Subscribe</SpkButton>
                            </div>
                            <label className="form-check-label">
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

export default CandidateDetails;