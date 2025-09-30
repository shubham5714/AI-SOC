"use client"
import SpkBadge from "@/shared/@spk-reusable-components/reusable-uiElements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import LabeledTwoThumbs1 from "@/shared/data/apps/ecommerce/ordersdata";
import { SearchJobsData } from "@/shared/data/apps/jobs/search-jobs-data";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Card, Col, Collapse, Dropdown, Form, Row } from "react-bootstrap";

interface JobSearchProps { }

const JobSearch: React.FC<JobSearchProps> = () => {
    const [openState, setOpenState] = useState({
        CategoriesOpen: false,
        SkillsOpen: false
    });
    return (
        <Fragment>
            <Seo title="Job Search" />
            <Pageheader title='Apps' subtitle='Jobs' currentpage='Job Search' activepage='Job Search' />
            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xxl={3} xl={4}>
                    <Card className="custom-card products-navigation-card">
                        <Card.Body className=" p-0">
                            <div className="p-3 border border-dashed m-2 rounded">
                                <h6 className="fw-medium mb-0">Categories</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <Form.Check type="checkbox" value="" id="c-1" defaultChecked />
                                        <Form.Check.Label htmlFor="c-1">
                                            R & D
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">2,712</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check type="checkbox" value="" id="c-2" />
                                        <Form.Check.Label htmlFor="c-2">
                                            Accounting
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">536</SpkBadge>
                                    </div>
                                    <Collapse in={openState.CategoriesOpen}>
                                        <div>
                                            <div className="form-check mb-2">
                                                <Form.Check type="checkbox" value="" id="c-6" />
                                                <Form.Check.Label htmlFor="c-6">
                                                    Human Resources
                                                </Form.Check.Label>
                                                <SpkBadge variant="light" Customclass="text-default fw-500 float-end">5,964</SpkBadge>
                                            </div>
                                            <div className="form-check mb-2">
                                                <Form.Check type="checkbox" value="" id="c-7" />
                                                <Form.Check.Label htmlFor="c-7">
                                                    Marketing
                                                </Form.Check.Label>
                                                <SpkBadge variant="light" Customclass="text-default fw-500 float-end">2,123</SpkBadge>
                                            </div>
                                            <div className="form-check mb-2">
                                                <Form.Check type="checkbox" value="" id="c-3" defaultChecked />
                                                <Form.Check.Label htmlFor="c-3">
                                                    Business Process
                                                </Form.Check.Label>
                                                <SpkBadge variant="light" Customclass="text-default fw-500 float-end">18,289</SpkBadge>
                                            </div>
                                            <div className="form-check mb-2">
                                                <Form.Check type="checkbox" value="" id="c-4" defaultChecked />
                                                <Form.Check.Label htmlFor="c-4">
                                                    Consulting
                                                </Form.Check.Label>
                                                <SpkBadge variant="light" Customclass="text-default fw-500 float-end">3,453</SpkBadge>
                                            </div>
                                        </div>
                                    </Collapse>
                                    <Link scroll={false} onClick={() => setOpenState(prevState => ({ ...prevState, CategoriesOpen: !prevState.CategoriesOpen }))} className="ecommerce-more-link mt-3" data-bs-toggle="collapse" href="#category-more" role="button" aria-expanded="false" aria-controls="category-more">MORE</Link>
                                </div>
                            </div>
                            <div className="p-3 border border-dashed m-2 rounded">
                                <h6 className="fw-medium mb-0">Job Type</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <Form.Check type="checkbox" value="" id="j-1" defaultChecked />
                                        <Form.Check.Label htmlFor="j-1">
                                            Full Time
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">512</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check type="checkbox" value="" id="j-2" defaultChecked />
                                        <Form.Check.Label htmlFor="j-2">
                                            Part Time
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">2,186</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check type="checkbox" value="" id="j-3" defaultChecked />
                                        <Form.Check.Label htmlFor="j-3">
                                            Internship
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">734</SpkBadge>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border border-dashed m-2 rounded">
                                <h6 className="fw-medium mb-0">10th Pass and Above</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <Form.Check type="checkbox" value="" id="q-1" />
                                        <Form.Check.Label htmlFor="q-1">
                                            All Education Levels
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">22,457</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check type="checkbox" value="" id="q-2" defaultChecked />
                                        <Form.Check.Label htmlFor="q-2">
                                            10th Pass and Above
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">12,562</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check type="checkbox" value="" id="q-4" defaultChecked />
                                        <Form.Check.Label htmlFor="q-4">
                                            Graduate
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">5,767</SpkBadge>
                                    </div>
                                    <div className="form-check">
                                        <Form.Check type="checkbox" value="" id="q-5" />
                                        <Form.Check.Label htmlFor="q-5">
                                            Post Graduate
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">3,651</SpkBadge>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border border-dashed m-2 rounded">
                                <h6 className="fw-medium mb-0">Experience</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <Form.Check type="checkbox" value="" id="e-1" defaultChecked />
                                        <Form.Check.Label htmlFor="e-1">
                                            Fresher
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">23,156</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check type="checkbox" value="" id="e-2" />
                                        <Form.Check.Label htmlFor="e-2">
                                            Less than 1 year
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">15,632</SpkBadge>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border border-dashed m-2 rounded">
                                <h6 className="fw-medium mb-0">Salary Range</h6>
                                <div className="py-3 pb-0">
                                    <div id="nonlinear">
                                        <LabeledTwoThumbs1 />
                                    </div>
                                    <div className="d-flex mt-4">
                                        <div className="fw-medium h6 mb-0">$8,000<span id="lower-value"></span></div>
                                        &nbsp; -- &nbsp;
                                        <div className="fw-medium h6 mb-0">$25,980<span id="upper-value"></span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border border-dashed m-2 rounded">
                                <h6 className="fw-medium mb-0">Skills</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <Form.Check type="checkbox" value="" id="s-1" defaultChecked />
                                        <Form.Check.Label htmlFor="s-1">
                                            HTML5
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">23,156</SpkBadge>
                                    </div>
                                    <Collapse in={openState.SkillsOpen}>
                                        <div>
                                            <div className="form-check mb-2">
                                                <Form.Check type="checkbox" value="" id="s-5" />
                                                <Form.Check.Label htmlFor="s-5">
                                                    Bootstrap
                                                </Form.Check.Label>
                                                <SpkBadge variant="light" Customclass="text-default fw-500 float-end">5,946</SpkBadge>
                                            </div>
                                            <div className="form-check mb-2">
                                                <Form.Check type="checkbox" value="" id="s-6" />
                                                <Form.Check.Label htmlFor="s-6">
                                                    Angular
                                                </Form.Check.Label>
                                                <SpkBadge variant="light" Customclass="text-default fw-500 float-end">3,267</SpkBadge>
                                            </div>
                                            <div className="form-check mb-2">
                                                <Form.Check type="checkbox" value="" id="s-7" />
                                                <Form.Check.Label htmlFor="s-7">
                                                    React
                                                </Form.Check.Label>
                                                <SpkBadge variant="light" Customclass="text-default fw-500 float-end">578</SpkBadge>
                                            </div>
                                            <div className="form-check mb-2">
                                                <Form.Check type="checkbox" value="" id="s-2" defaultChecked />
                                                <Form.Check.Label htmlFor="s-2">
                                                    Javascript
                                                </Form.Check.Label>
                                                <SpkBadge variant="light" Customclass="text-default fw-500 float-end">15,632</SpkBadge>
                                            </div>
                                            <div className="form-check mb-2">
                                                <Form.Check type="checkbox" value="" id="s-3" />
                                                <Form.Check.Label htmlFor="s-3">
                                                    PHP
                                                </Form.Check.Label>
                                                <SpkBadge variant="light" Customclass="text-default fw-500 float-end">15,032</SpkBadge>
                                            </div>
                                            <div className="form-check mb-2">
                                                <Form.Check type="checkbox" value="" id="s-4" defaultChecked />
                                                <Form.Check.Label htmlFor="s-4">
                                                    CSS3
                                                </Form.Check.Label>
                                                <SpkBadge variant="light" Customclass="text-default fw-500 float-end">7,154</SpkBadge>
                                            </div>
                                        </div>
                                    </Collapse>
                                    <Link scroll={false} onClick={() => setOpenState(prevState => ({ ...prevState, SkillsOpen: !prevState.SkillsOpen }))} className="ecommerce-more-link mt-3" data-bs-toggle="collapse" href="#sizes-more" role="button" aria-expanded="false" aria-controls="sizes-more">MORE</Link>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={9} xl={8}>
                    <Card className="custom-card p-3">
                        <Row className="align-items-center p-3 border border-dashed rounded mx-0 mb-3">
                            <Col sm={7}>
                                <div className="d-flex">
                                    <h5 className="fw-medium mb-0"><span className="fw-normal">Showing</span> 4,323 Jobs</h5>
                                </div>
                            </Col>
                            <Col sm={5} className="text-sm-end mt-3 mt-sm-0">
                                <SpkDropdown Customclass="btn-group" toggleas='a' Togglevariant='outline-light' Customtoggleclass="btn btn-primary border" Toggletext="Sort By"  >
                                    <li><Dropdown.Item >Premium</Dropdown.Item></li>
                                    <li><Dropdown.Item >Newest</Dropdown.Item></li>
                                    <li><Dropdown.Item >Most Relevant</Dropdown.Item></li>
                                    <li><Dropdown.Item >Fresher</Dropdown.Item></li>
                                    <li><Dropdown.Item >Experienced</Dropdown.Item></li>
                                    <li><Dropdown.Item >Bond Agreement</Dropdown.Item></li>
                                    <li><Dropdown.Item >Flexible Shift</Dropdown.Item></li>
                                    <li><Dropdown.Item >Day Shift</Dropdown.Item></li>
                                </SpkDropdown>
                            </Col>
                        </Row>
                        <Row>
                            {SearchJobsData.map((idx) => (
                                <Col xxl={4} xl={6} key={idx.id}>
                                    <Card className="custom-card featured-jobs shadow-none border">
                                        <Card.Body >
                                            <SpkDropdown Customclass="float-end ms-auto" toggleas='a' Customtoggleclass="btn btn-white btn-icon btn-sm text-muted rounded-pill no-caret" Icon={true} IconClass="fe fe-more-vertical align-middle">
                                                <li><Dropdown.Item href="#!">Add To Favourite</Dropdown.Item></li>
                                                <li><Dropdown.Item href="#!">Save</Dropdown.Item></li>
                                            </SpkDropdown>
                                            <div className="d-flex mb-3 flex-wrap gap-2 align-items-center">
                                                <span className="avatar avatar-md border p-1 custom-width">
                                                    <Image fill src={idx.image} alt="" />
                                                </span>
                                                <div>
                                                    <h5 className="fw-medium mb-0 d-flex align-items-center"><Link scroll={false} href="#!">{idx.title}</Link></h5>
                                                    <Link scroll={false} href="#!" className="text-muted">{idx.company}</Link>
                                                </div>
                                            </div>
                                            <div className="popular-tags mb-3 d-flex gap-2 flex-wrap">
                                                <Link scroll={false} href="#!" className="badge rounded-pill fs-11 border border-primary border-opacity-10 text-primary bg-primary-transparent"><i className="ri-map-pin-line me-1"></i> San Francisco</Link>
                                                <Link scroll={false} href="#!" className="badge rounded-pill fs-11 border border-success border-opacity-10 text-success bg-success-transparent"><i className="ri-briefcase-line me-1"></i> 5 Openings</Link>
                                                <Link scroll={false} href="#!" className="badge rounded-pill fs-11 border border-info border-opacity-10 text-info bg-info-transparent"><i className="ri-graduation-cap-line me-1"></i> Graduate</Link>
                                                <Link scroll={false} href="#!" className="badge rounded-pill fs-11 border border-secondary border-opacity-10 text-secondary bg-secondary-transparent"><i className="ri-time-line me-1"></i> Min - 1 Year</Link>
                                                <Link scroll={false} href="#!" className="badge rounded-pill fs-11 border border-warning border-opacity-10 text-warning bg-warning-transparent"><i className="ri-sun-line me-1"></i> Full-time</Link>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                                                <h6 className="fw-medium mb-0">{idx.salary}</h6>
                                                <Link scroll={false} href="#!" className="btn btn-primary btn-sm d-inline-flex">
                                                    Apply Now <i className="fe fe-arrow-right transform-arrow ms-2 lh-base"></i>
                                                </Link>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                            <Col xl={12}>
                                <Card className="custom-card shadow-none bg-primary-transparent mb-0">
                                    <Card.Body >
                                        <div >
                                            <h5 className="fw-medium mb-3">Subscribe to Latest Job Alerts</h5>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder="Enter your email" aria-label="job-email" aria-describedby="job-subscribe" />
                                                <SpkButton Buttonvariant="primary" Customclass="btn" Buttontype="button" Id="job-subscribe">Subscribe</SpkButton>
                                            </div>
                                            <Form.Check.Label >
                                                By subscribing, you accept our <Link scroll={false} href="#!" className="text-success"><u>privacy policy</u></Link>.
                                            </Form.Check.Label>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Card>
                    <ul className="pagination mb-4 justify-content-end">
                        <li className="page-item disabled">
                            <Link scroll={false} className="page-link" href="#!">
                                Prev
                            </Link>
                        </li>
                        <li className="page-item active"><Link scroll={false} className="page-link" href="#!">1</Link></li>
                        <li className="page-item"><Link scroll={false} className="page-link" href="#!">2</Link></li>
                        <li className="page-item"><Link scroll={false} className="page-link" href="#!">3</Link></li>
                        <li className="page-item">
                            <Link scroll={false} className="page-link text-primary" href="#!">
                                next
                            </Link>
                        </li>
                    </ul>
                </Col>
            </Row>
            {/* <!-- End::row-1 --> */}
        </Fragment>
    );
};

export default JobSearch;