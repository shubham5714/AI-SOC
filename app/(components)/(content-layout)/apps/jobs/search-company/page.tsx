"use client"
import SpkSelect from "@/shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import SpkBadge from "@/shared/@spk-reusable-components/reusable-uiElements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import SpkTooltips from "@/shared/@spk-reusable-components/reusable-uiElements/spk-tooltips";
import { Data, SearchCompany } from "@/shared/data/apps/jobs/search-company-data";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Card, Col, Collapse, Dropdown, Row } from "react-bootstrap";

interface CompanySearchProps { }

const CompanySearch: React.FC<CompanySearchProps> = () => {

    const [openState, setOpenState] = useState({
        CollapseOpen: false,
        SkillsOpen: false
    });

    return (
        <Fragment>
            <Seo title="Company Search" />
            <Pageheader title='Apps' subtitle='Jobs' currentpage='Company Search' activepage='Company Search' />
            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xxl={3} lg={5}>
                    <Card className="custom-card products-navigation-card">
                        <Card.Body className=" p-0">
                            <div className="p-3 m-2 border border-dashed rounded">
                                <h6 className="fw-medium mb-0">Industry Type</h6>
                                <div className="px-0 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="c-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="c-1">
                                            R & D
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">2,712</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="c-2" />
                                        <label className="form-check-label" htmlFor="c-2">
                                            Accounting
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">536</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="c-3" defaultChecked />
                                        <label className="form-check-label" htmlFor="c-3">
                                            Business Process
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">18,289</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="c-4" defaultChecked />
                                        <label className="form-check-label" htmlFor="c-4">
                                            Consulting
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">3,453</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="c-5" />
                                        <label className="form-check-label" htmlFor="c-5">
                                            Support
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">7,165</SpkBadge>
                                    </div>
                                    <Collapse in={openState.CollapseOpen}>
                                        <div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="cc-6" />
                                                <label className="form-check-label" htmlFor="cc-6">
                                                    Human Resources
                                                </label>
                                                <SpkBadge variant="light" Customclass="text-default  float-end">5,964</SpkBadge>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="cc-7" />
                                                <label className="form-check-label" htmlFor="cc-7">
                                                    Marketing
                                                </label>
                                                <SpkBadge variant="light" Customclass="text-default  float-end">2,123</SpkBadge>
                                            </div>
                                        </div>
                                    </Collapse>
                                    <Link scroll={false} onClick={() => setOpenState(prevState => ({ ...prevState, CollapseOpen: !prevState.CollapseOpen }))} className="ecommerce-more-link" data-bs-toggle="collapse" href="#category-more" role="button" aria-expanded="false" aria-controls="category-more">MORE</Link>
                                </div>
                            </div>
                            <div className="p-3 m-2 border border-dashed rounded">
                                <h6 className="fw-medium mb-0">Location</h6>
                                <div className="px-0 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="available-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="available-1">
                                            Hyderabad
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">512</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="available-2" />
                                        <label className="form-check-label" htmlFor="available-2">
                                            Banglore
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">2,186</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="available-3" />
                                        <label className="form-check-label" htmlFor="available-3">
                                            Chennai
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">734</SpkBadge>
                                    </div>
                                    <Collapse in={openState.SkillsOpen}>
                                        <div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="c-6" />
                                                <label className="form-check-label" htmlFor="c-6">
                                                    Pune
                                                </label>
                                                <SpkBadge variant="light" Customclass="text-default  float-end">5,964</SpkBadge>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="c-7" />
                                                <label className="form-check-label" htmlFor="c-7">
                                                    USA
                                                </label>
                                                <SpkBadge variant="light" Customclass="text-default  float-end">2,123</SpkBadge>
                                            </div>
                                        </div>
                                    </Collapse>
                                    <Link scroll={false} onClick={() => setOpenState(prevState => ({ ...prevState, SkillsOpen: !prevState.SkillsOpen }))} className="ecommerce-more-link" data-bs-toggle="collapse" href="#location-more" role="button" aria-expanded="false" aria-controls="location-more">MORE</Link>
                                </div>
                            </div>
                            <div className="p-3 m-2 border border-dashed rounded">
                                <h6 className="fw-medium mb-0">Recruiter Type</h6>
                                <div className="px-0 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="Recruiter-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="Recruiter-1">
                                            Direct Company
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">13</SpkBadge>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="Recruiter-2" />
                                        <label className="form-check-label" htmlFor="Recruiter-2">
                                            Agency
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">67</SpkBadge>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 m-2 border border-dashed rounded">
                                <h6 className="fw-medium mb-0">Job Vacancies</h6>
                                <div className="px-0 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="vacancies-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="vacancies-1">
                                            0 -10
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">13</SpkBadge>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="vacancies-3" />
                                        <label className="form-check-label" htmlFor="vacancies-3">
                                            20 +above
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">67</SpkBadge>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 m-2 border border-dashed rounded">
                                <h6 className="fw-medium mb-0">Type of Employement</h6>
                                <div className="px-0 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="j-1" defaultChecked />
                                        <label className="form-check-label" htmlFor="j-1">
                                            Full Time
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">512</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="j-2" />
                                        <label className="form-check-label" htmlFor="j-2">
                                            Part Time
                                        </label>
                                        <SpkBadge variant="light" Customclass="text-default  float-end">2,186</SpkBadge>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={9} lg={7}>
                    <Row className="align-items-center mb-4">
                        <Col lg={12}>
                            <div className="input-group companies-search-input">
                                <input type="text" className="form-control form-control-lg flex-fill" aria-label="Text input with segmented dropdown button" placeholder="Enter your keyword here" />
                                <input type="text" className="form-control form-control-lg flex-fill" aria-label="Text input with segmented dropdown button" placeholder="Search by location" />
                                <SpkSelect classNameprefix="Select2" mainClass='rounded-0 custom-select' name="form-field-name" option={Data} placeholder="Select Location" />
                                <SpkButton Buttontype="button" Buttonvariant="primary"><i className="ri-search-line"></i></SpkButton>
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Body className="">
                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                        <h5 className="fw-medium mb-0 flex-grow-1">2,433 <span className="fw-normal fs-18">Companies match for your search</span> </h5>
                                        <SpkDropdown Customclass="btn-group" Togglevariant='outline-light'
                                            Customtoggleclass="border dropdown-toggle" Toggletext="Sort By"  >
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
                        {SearchCompany.map((idx) => (
                            <Col xl={4} key={idx.id}>
                                <Card className="custom-card">
                                    <Card.Body className="">
                                        <div className="float-end">
                                            <SpkTooltips placement="top" title="Add to Wishlist">
                                                <Link scroll={false} href="#!" className="avatar avatar-rounded bg-primary-transparent avatar-sm"><span><i className="bi bi-heart"></i></span></Link>
                                            </SpkTooltips>
                                        </div>
                                        <div className="d-flex align-items-center flex-wrap gap-2">
                                            <span className="avatar avatar-xl border border-dashed p-3 avatar-rounded custom-width">
                                                <Image fill src={idx.logo} alt="" />
                                            </span>
                                            <div className="ms-2 mt-2">
                                                <h6 className="fw-medium mb-1 d-flex align-items-center"><Link scroll={false} href="#!">{idx.name}
                                                    <SpkTooltips placement="top" title="Verified company">
                                                        <i className="ri-verified-badge-fill text-secondary fs-13 mx-1"></i>
                                                    </SpkTooltips>
                                                </Link></h6>
                                                <div className="d-flex gap-2 mb-3 flex-wrap">
                                                    <Link scroll={false} href="#!"><i className="ri-map-pin-2-line text-info"></i> {idx.location} </Link>
                                                    <p className="mb-0 text-muted">Establishment year - {idx.established}</p>
                                                </div>
                                                <div className="d-flex align-items-center mb-2 fs-12 text-muted flex-wrap">
                                                    <p className="fs-12 mb-0">Ratings : </p>
                                                    <div className="min-w-fit-content ms-2">
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                        <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                    </div>
                                                    <Link scroll={false} href="#!" className="ms-1 min-w-fit-content text-muted">
                                                        <span>({idx.ratingCount})</span>
                                                        <span className="mx-1">Ratings</span>
                                                    </Link>
                                                </div>
                                                <div className="d-flex gap-1 align-items-center flex-wrap">
                                                    <SpkTooltips placement="top" title="No of employees">
                                                        <Link scroll={false} href="#!" className="badge badge-md fs-11 rounded-pill bg-success-transparent me-1" ><i className="bi bi-people me-1"></i>No. of Emp : {idx.employees}</Link>
                                                    </SpkTooltips>
                                                    <Link scroll={false} href="#!" className="badge badge-md fs-11 rounded-pill bg-info-transparent"><i className="bi bi-briefcase me-1"></i>Vacancies :  {idx.vacancies}</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer className="card-footer">
                                        <div className="d-grid">
                                            <Link scroll={false} href="#!" className="btn btn-wave btn-primary">
                                                View Profile <i className="ri-arrow-right-line align-middle rtl-transform-icon"></i>
                                            </Link>
                                        </div>
                                    </Card.Footer>
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
            {/* <!-- End:: row-1 --> */}
        </Fragment >
    );
};

export default CompanySearch;