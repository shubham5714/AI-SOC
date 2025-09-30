"use client"
import SpkSelect from "@/shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import SpkBadge from "@/shared/@spk-reusable-components/reusable-uiElements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import SpkTooltips from "@/shared/@spk-reusable-components/reusable-uiElements/spk-tooltips";
import LabeledTwoThumbs1 from "@/shared/data/apps/ecommerce/ordersdata";
import { CandidateData, Data, Data2 } from "@/shared/data/apps/jobs/search-candidate-data";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Card, Col, Collapse, Dropdown, Form, Row } from "react-bootstrap";

interface SearchCandidateProps { }

const SearchCandidate: React.FC<SearchCandidateProps> = () => {

    const [openState, setOpenState] = useState({
        CollapseOpen: false,
        SkillsOpen: false
    });

    return (
        <Fragment>
            <Seo title="Search Candidate" />
            <Pageheader title='Apps' subtitle='Jobs' currentpage='Search Candidate' activepage='Search Candidate' />
            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xxl={3} xl={4}>
                    <Card className="custom-card products-navigation-card">
                        <Card.Body className=" p-0">
                            <div className="p-3 border border-dashed m-2 rounded">
                                <h6 className="fw-medium mb-0">Categories</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <Form.Check.Input className="me-2" type="checkbox" value="" id="c-1" defaultChecked />
                                        <Form.Check.Label htmlFor="c-1">
                                            Software Development
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">3,200</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check.Input className="me-2" type="checkbox" value="" id="c-2" />
                                        <Form.Check.Label htmlFor="c-2">
                                            Finance
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">780</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check.Input className="me-2" type="checkbox" value="" id="c-3" defaultChecked />
                                        <Form.Check.Label htmlFor="c-3">
                                            Marketing
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">15,500</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check.Input className="me-2" type="checkbox" value="" id="c-4" defaultChecked />
                                        <Form.Check.Label htmlFor="c-4">
                                            Customer Service
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">2,950</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check.Input className="me-2" type="checkbox" value="" id="c-5" />
                                        <Form.Check.Label htmlFor="c-5">
                                            Operations
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">6,800</SpkBadge>
                                    </div>
                                    <Collapse in={openState.CollapseOpen}>
                                        <div>
                                            <div className="form-check mb-2">
                                                <Form.Check.Input className="me-2" type="checkbox" value="" id="c-6" />
                                                <Form.Check.Label htmlFor="c-6">
                                                    Human Resources
                                                </Form.Check.Label>
                                                <SpkBadge variant="light" Customclass="text-default fw-500 float-end">4,500</SpkBadge>
                                            </div>
                                            <div className="form-check mb-2">
                                                <Form.Check.Input className="me-2" type="checkbox" value="" id="c-7" />
                                                <Form.Check.Label htmlFor="c-7">
                                                    Business
                                                </Form.Check.Label>
                                                <SpkBadge variant="light" Customclass="text-default fw-500 float-end">620</SpkBadge>
                                            </div>
                                        </div>
                                    </Collapse>
                                    <Link scroll={false} onClick={() => setOpenState(prevState => ({ ...prevState, CollapseOpen: !prevState.CollapseOpen }))} className="ecommerce-more-link" data-bs-toggle="collapse" href="#category-more" role="button" aria-expanded="false" aria-controls="category-more">MORE</Link>
                                </div>
                            </div>
                            <div className="p-3 border border-dashed m-2 rounded">
                                <h6 className="fw-medium mb-0">Availability</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <Form.Check.Input className="me-2" type="checkbox" value="" id="available-1" defaultChecked />
                                        <Form.Check.Label htmlFor="available-1">
                                            Available Now
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">620</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check.Input className="me-2" type="checkbox" value="" id="available-2" />
                                        <Form.Check.Label htmlFor="available-2">
                                            30 Days Notice
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">1,850</SpkBadge>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border border-dashed m-2 rounded">
                                <h6 className="fw-medium mb-0">Bond Agreement</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <Form.Check.Input className="me-2" type="checkbox" value="" id="bond-1" defaultChecked />
                                        <Form.Check.Label htmlFor="bond-1">
                                            1 Year
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">760</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check.Input className="me-2" type="checkbox" value="" id="bond-2" />
                                        <Form.Check.Label htmlFor="bond-2">
                                            2 yrs
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">480</SpkBadge>
                                    </div>
                                    <div className="form-check">
                                        <Form.Check.Input className="me-2" type="checkbox" value="" id="bond-3" />
                                        <Form.Check.Label htmlFor="bond-3">
                                            3 yrs
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">240</SpkBadge>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border border-dashed m-2 rounded">
                                <h6 className="fw-medium mb-0">Languages</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <Form.Check.Input className="me-2" type="checkbox" value="" id="languages-1" defaultChecked />
                                        <Form.Check.Label htmlFor="languages-1">
                                            English
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">1,250</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check.Input className="me-2" type="checkbox" value="" id="languages-2" />
                                        <Form.Check.Label htmlFor="languages-2">
                                            Hindi
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">350</SpkBadge>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border border-dashed m-2 rounded">
                                <h6 className="fw-medium mb-0">Job Type</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <Form.Check.Input className="me-2" type="checkbox" value="" id="j-1" defaultChecked />
                                        <Form.Check.Label htmlFor="j-1">
                                            Full Time
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">1,920</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check.Input className="me-2" type="checkbox" value="" id="j-2" defaultChecked />
                                        <Form.Check.Label htmlFor="j-2">
                                            Part Time
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">3,100</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check.Input className="me-2" type="checkbox" value="" id="j-3" defaultChecked />
                                        <Form.Check.Label htmlFor="j-3">
                                            Internship
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">860</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check.Input className="me-2" type="checkbox" value="" id="j-4" />
                                        <Form.Check.Label htmlFor="j-4">
                                            Freelancer
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">75</SpkBadge>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border border-dashed m-2 rounded">
                                <h6 className="fw-medium mb-0">Salary Range</h6>
                                <div className="py-3 pb-0">
                                    <div id="nonlinear">
                                        <LabeledTwoThumbs1 />
                                    </div>
                                    <div className="d-flex mt-3 justify-content-center">
                                        <div className="fw-medium h6 mb-0">$8,000<span id="lower-value"></span></div>
                                        &nbsp; -- &nbsp;
                                        <div className="fw-medium h6 mb-0">$24,567<span id="upper-value"></span></div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border border-dashed m-2 rounded">
                                <h6 className="fw-medium mb-0">Qualification</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <Form.Check.Input className="me-2" type="checkbox" value="" id="q-1" />
                                        <Form.Check.Label htmlFor="q-1">
                                            All Education Levels
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">22,457</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check.Input className="me-2" type="checkbox" value="" id="q-2" defaultChecked />
                                        <Form.Check.Label htmlFor="q-2">
                                            10th Pass and Above
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">12,562</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check.Input className="me-2" type="checkbox" value="" id="q-4" defaultChecked />
                                        <Form.Check.Label htmlFor="q-4">
                                            Diploma and Graduate
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">5,767</SpkBadge>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border border-dashed m-2 rounded">
                                <h6 className="fw-medium mb-0">Skills</h6>
                                <div className="py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <Form.Check.Input className="me-2" type="checkbox" value="" id="s-1" defaultChecked />
                                        <Form.Check.Label htmlFor="s-1">
                                            HTML5
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default fw-500 float-end">23,156</SpkBadge>
                                    </div>
                                    <Collapse in={openState.SkillsOpen}>
                                        <div>
                                            <div className="form-check mb-2">
                                                <Form.Check.Input className="me-2" type="checkbox" value="" id="s-4" />
                                                <Form.Check.Label htmlFor="s-4">
                                                    CSS3
                                                </Form.Check.Label>
                                                <SpkBadge variant="light" Customclass="text-default fw-500 float-end">7,154</SpkBadge>
                                            </div>
                                            <div className="form-check mb-2">
                                                <Form.Check.Input className="me-2" type="checkbox" value="" id="s-5" />
                                                <Form.Check.Label htmlFor="s-5">
                                                    Bootstrap
                                                </Form.Check.Label>
                                                <SpkBadge variant="light" Customclass="text-default fw-500 float-end">5,946</SpkBadge>
                                            </div>
                                            <div className="form-check mb-2">
                                                <Form.Check.Input className="me-2" type="checkbox" value="" id="s-6" />
                                                <Form.Check.Label htmlFor="s-6">
                                                    Angular
                                                </Form.Check.Label>
                                                <SpkBadge variant="light" Customclass="text-default fw-500 float-end">3,267</SpkBadge>
                                            </div>
                                            <div className="form-check mb-2">
                                                <Form.Check.Input className="me-2" type="checkbox" value="" id="s-7" />
                                                <Form.Check.Label htmlFor="s-7">
                                                    React
                                                </Form.Check.Label>
                                                <SpkBadge variant="light" Customclass="text-default fw-500 float-end">578</SpkBadge>
                                            </div>
                                        </div>
                                    </Collapse>
                                    <Link scroll={false} onClick={() => setOpenState(prevState => ({ ...prevState, SkillsOpen: !prevState.SkillsOpen }))} className="ecommerce-more-link" data-bs-toggle="collapse" href="#sizes-more" role="button" aria-expanded="false" aria-controls="sizes-more">MORE</Link>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={9} xl={8}>
                    <Row className="align-items-center">
                        <Col lg={12}>
                            <Card className="custom-card">
                                <Card.Body className=" p-md-0">
                                    <div className="input-group companies-search-input companies-search-input1 custom-job-search flex-lg-nowrap">
                                        <input type="text" className="form-control form-control-lg w-25" aria-label="Text input with segmented dropdown button" placeholder="Enter your keyword here" />
                                        <SpkSelect name="state" option={Data} mainClass="basic-multi-select " searchable
                                            menuplacement='auto' classNameprefix="Select2" defaultvalue={[Data[0]]}
                                        />
                                        <input type="text" className="form-control form-control-lg w-25" aria-label="Text input with segmented dropdown button" placeholder="Search by location" />
                                        <SpkSelect name="state" option={Data2} mainClass="basic-multi-select custom-select-searchcompany" searchable
                                            menuplacement='auto' classNameprefix="Select2" defaultvalue={[Data2[0]]}
                                        />
                                        <SpkButton Buttontype="button" Buttonvariant="primary" Customclass="btn btn-lg"><i className="ri-search-line"></i></SpkButton>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Body >
                                    <div className="d-flex flex-wrap gap-2 align-items-center">
                                        <h5 className="fw-medium mb-0 flex-grow-1">3,232 <span className="fw-normal fs-18">Candidates match your job search</span> </h5>
                                        <SpkDropdown Customclass="btn-group" Togglevariant='outline-light'
                                            Customtoggleclass="border dropdown-toggle" Toggletext="Sort By" >
                                            <Dropdown.Item as="li" >Premium</Dropdown.Item>
                                            <Dropdown.Item as="li" >Newest</Dropdown.Item>
                                            <Dropdown.Item as="li" >Most Relevant</Dropdown.Item>
                                            <Dropdown.Item as="li" >Fresher</Dropdown.Item>
                                            <Dropdown.Item as="li" >Experienced</Dropdown.Item>
                                            <Dropdown.Item as="li" >Bond Agreement</Dropdown.Item>
                                            <Dropdown.Item as="li" >Flexible Shift</Dropdown.Item>
                                            <Dropdown.Item as="li" >Day Shift</Dropdown.Item>
                                        </SpkDropdown>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        {CandidateData.map((idx) => (
                            <Col xl={12} key={idx.id}>
                                <Card className="custom-card">
                                    <Card.Body >
                                        <div className="float-end">
                                            <SpkTooltips placement="top" title="Download CV">
                                                <Link scroll={false} href="#!" className="avatar avatar-rounded avatar-sm bg-info-transparent me-1"><span><i className="ri-download-cloud-line fs-14"></i></span></Link>
                                            </SpkTooltips>
                                            <SpkTooltips placement="top" title="Add to Wishlist">
                                                <Link scroll={false} href="#!" className="avatar avatar-rounded avatar-sm bg-danger-transparent"><span><i className="ri-heart-line fs-14"></i></span></Link>
                                            </SpkTooltips>
                                        </div>
                                        <div className="d-flex mb-3 align-items-center flex-wrap gap-2">
                                            <div>
                                                <span className="avatar avatar-lg avatar-rounded custom-width">
                                                    <Image fill src={idx.image} alt="Profile Picture" />
                                                </span>
                                            </div>
                                            <div>
                                                <h6 className="fw-medium mb-1 d-flex align-items-center">
                                                    <Link scroll={false} href="/apps/jobs/candidate-details/"> {idx.name}
                                                        <SpkTooltips placement="top" title="Verified candidate">
                                                            <i className="ri-verified-badge-fill text-primary fs-14 mx-1"></i>
                                                        </SpkTooltips>
                                                    </Link>
                                                </h6>
                                                <div className="d-flex gap-2 flex-wrap">
                                                    <Link scroll={false} href="#!">{idx.role}</Link>
                                                    <p className="mb-0 fs-12 text-muted"><i className="ri-map-pin-line fs-11"></i> {idx.location}</p>
                                                </div>
                                                <div className="d-flex align-items-center fs-12 text-muted flex-wrap">
                                                    <p className="fs-12 mb-0">Ratings : </p>
                                                    <div className="min-w-fit-content ms-2">
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                    </div>
                                                    <Link scroll={false} href="#!" className="ms-1 min-w-fit-content text-muted">
                                                        <span>({idx.totalRatings})</span> <span>Ratings</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="popular-tags mb-3 d-flex gap-2 flex-wrap">
                                            <Link scroll={false} href="#!" className="badge rounded-pill fs-11 border border-primary border-opacity-10 text-primary"><i className="ri-file-text-line me-1"></i>{idx.degree}</Link>
                                            <Link scroll={false} href="#!" className="badge rounded-pill fs-11 border border-success border-opacity-10 text-success"><i className="ri-remote-control-line me-1"></i> Remote Work</Link>
                                            <Link scroll={false} href="#!" className="badge rounded-pill fs-11 border border-info border-opacity-10 text-info"><i className="ri-time-line me-1"></i> {idx.experience}</Link>
                                            <Link scroll={false} href="#!" className="badge rounded-pill fs-11 border border-info border-opacity-10 text-info"><i className="ri-time-fill me-1"></i> {idx.shift}</Link>
                                        </div>
                                        <div className="d-flex align-items-center flex-wrap gap-3">
                                            <div>
                                                <p className="mb-1 flex-grow-1"><span className="text-muted">Annual Pay :</span> <span className="fw-medium"> {idx.salaryRange}</span> </p>
                                                <p className="mb-0"><span className="text-muted"> Languages :</span> <span className="fw-medium">{idx.languages}</span></p>
                                            </div>
                                            <div className="ms-auto">
                                                <div className="btn btn-primary">View Profile <i className="ri-arrow-right-line"></i></div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}

                    </Row>
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
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default SearchCandidate;