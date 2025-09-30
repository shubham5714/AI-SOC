"use client"
import SpkJobscard from "@/shared/@spk-reusable-components/reusable-dashboard/spk-jobs";
import Spkapexcharts from "@/shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/reusable-uiElements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import SpkTooltips from "@/shared/@spk-reusable-components/reusable-uiElements/spk-tooltips";
import { Acquisitions, AcquisitionsProgress, Applicants, Approvals, ApprovalsType, CandidatesPerformanceOptions, CandidatesPerformanceSeries, JobsCardData, JobStatisticsOptions, JobStatisticsSeries, RecentHirings } from "@/shared/data/dashboards/jobsdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Card, Col, Dropdown, Form, ListGroup, ProgressBar, Row } from "react-bootstrap";

interface JobsProps { }

const Jobs: React.FC<JobsProps> = () => {

    const [searchTerm, setSearchTerm] = useState<string>('');

    const Approval: ApprovalsType[] = Approvals.filter(project =>
        project.position.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <Fragment>
            <Seo title="Dashboards Jobs" />
            <Pageheader title='Dashboards' currentpage='Jobs' activepage='Jobs' />
            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xxl={7}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className=" d-flex justify-content-between">
                            <Card.Title>Candidates Performance</Card.Title>
                            <SpkButton Buttonvariant="primary" Buttontype="button" Customclass="ms-auto btn btn-sm btn-wave d-inline-flex">
                                <span><i className="ri-download-2-line"></i></span>
                                <span className="ms-2">Download</span>
                            </SpkButton>
                        </Card.Header>
                        <Card.Body>
                            <div id="candidatePerformance">
                                <Spkapexcharts chartOptions={CandidatesPerformanceOptions} chartSeries={CandidatesPerformanceSeries} type='line' width={'100%'} height={300} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={5}>
                    <Row>
                        {JobsCardData.map((idx) => (
                            <Col xl={6} lg={6} md={12} sm={12} key={idx.id}>
                                <SpkJobscard card={idx} ShowContent={true} />
                            </Col>
                        ))}
                        <Col xl={12} md={12} sm={12}>
                            <Card className="custom-card">
                                <Card.Body>
                                    <div className="d-flex mb-3">
                                        <div className="fw-medium fs-15 mb-0">Applicants Summary</div>
                                        <Link scroll={false} href="#!" className="d-inline-flex ms-auto text-primary">
                                            <span><i className="ri-alarm-line"></i></span>
                                            <span className="ms-1 fw-medium">Send reminder</span>
                                        </Link>
                                    </div>
                                    <Row className=" mb-2">
                                        <Col xl={4}>
                                            <span className="fw-medium applicant full-time">Full Time</span>
                                        </Col>
                                        <Col xl={4}>
                                            <span className="fw-medium applicant part-time">Part Time</span>
                                        </Col>
                                        <Col xl={4}>
                                            <span className="fw-medium applicant internship">Internship</span>
                                        </Col>
                                    </Row>
                                    <div className="progress progress-xl bg-white gap-1">
                                        <div className="progress-bar rounded-pill progress-border" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>25%</div>
                                        <div className="progress-bar rounded-pill progress-border bg-info" role="progressbar" style={{ width: '35%' }} aria-valuenow={35} aria-valuemin={0} aria-valuemax={100}>35%</div>
                                        <div className="progress-bar rounded-pill progress-border bg-success" role="progressbar" style={{ width: '40%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}>40%</div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}

            {/* <!-- Start::row-2 --> */}
            <Row>
                <Col xxl={3} lg={6} md={6} sm={12}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="">
                            <Card.Title>Recent Applicants</Card.Title>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <ListGroup as='ul' className="list-group-flush">
                                {Applicants.map((idx) => (
                                    <ListGroup.Item as='li' key={idx.id}>
                                        <div className="d-flex align-items-center gap-2 flex-wrap">
                                            <span className="avatar avatar-md avatar-rounded custom-width">
                                                <Image fill src={idx.image} alt="image" />
                                            </span>
                                            <div className="flex-fill">
                                                <span className="d-block fw-medium">{idx.name}</span>
                                                <span className="fw-medium text-muted fs-12">{idx.title}</span>
                                            </div>
                                            <div className="btn-list ms-auto">
                                                <SpkTooltips placement="top" title="Mail">
                                                    <Link scroll={false} href="#!" className="btn btn-icon rounded-pill btn-secondary-light"><i className="ti ti-mail align-middle"></i></Link>
                                                </SpkTooltips>
                                                <SpkTooltips placement="top" title="Call">
                                                    <Link scroll={false} href="#!" className="btn btn-icon rounded-pill btn-primary-light"><i className="ti ti-phone align-middle"></i></Link>
                                                </SpkTooltips>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} lg={6} md={6} sm={12}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="">
                            <Card.Title>Job Statistics</Card.Title>
                        </Card.Header>
                        <Card.Body className=" pb-4">
                            <div id="quickData" className="mt-3 mb-4">
                                <Spkapexcharts chartOptions={JobStatisticsOptions} chartSeries={JobStatisticsSeries} type='radialBar' width={'100%'} height={260} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6} lg={12} md={12} sm={12}>
                    <Card className="custom-card overflow-hidden overflow-hidden">
                        <Card.Header className="">
                            <Card.Title>Recent Hirings</Card.Title>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="table text-nowrap" headerClass='bg-light' showCheckbox={true} Customcheckclass='text-center' header={[{ title: 'Interviewer' }, { title: 'Job Title' }, { title: 'Shortlisted' }, { title: 'Date of Joing' },]}>
                                    {RecentHirings.map((idx) => (
                                        <tr key={idx.id}>
                                            <th scope="row" className="text-center"><input className="form-check-input" type="checkbox" id="checkboxNoLabel1" aria-label="..." defaultChecked={idx.checked} /></th>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar avatar-sm me-2 avatar-rounded custom-width">
                                                        <Image fill src={idx.avatar} alt="image" />
                                                    </div>
                                                    <div className="lh-1">
                                                        <span className="fw-medium d-block mb-1">{idx.name}</span>
                                                        <span className="fs-12 text-muted">{idx.email}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><SpkBadge variant={`${idx.color}-transparent`}>{idx.role}</SpkBadge></td>
                                            <td className="text-center">
                                                {idx.taskCount}
                                            </td>
                                            <td>
                                                <SpkBadge variant="light" Customclass="text-muted">{idx.dueDate}</SpkBadge>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End::row-2 --> */}

            {/* <!-- Start::row-3 --> */}
            <Row>
                <Col xxl={9}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className=" d-flex justify-content-between">
                            <Card.Title>Pending Request Approvals</Card.Title>
                            <div className="d-flex flex-wrap gap-2">
                                <div>
                                    <Form.Control className="form-control-sm custom-control" type="text" placeholder="Search Here" aria-label=".form-control-sm example" value={searchTerm} onChange={handleSearch} />
                                </div>
                                <SpkDropdown toggleas='a' Customtoggleclass="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret" Toggletext="Sort By" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                    <li><Dropdown.Item href="#!">New</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Popular</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Relevant</Dropdown.Item></li>
                                </SpkDropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="table text-nowrap table-hover" header={[{ title: 'Position' }, { title: 'Experience' }, { title: 'Department' }, { title: 'Profile Rating' }, { title: 'No.of Vacancies' }, { title: 'Apply Date' }, { title: 'Status' }, { title: 'Action' },]}>
                                    {Approval.length > 0 ? (
                                        Approval.map((idx) => (
                                            <tr key={idx.id} className={idx.trClass}>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className={`avatar avatar-sm me-2 bg-${idx.color}-transparent`}>
                                                            <i className={`ri-${idx.icon}`}></i>
                                                        </div>
                                                        <div className="lh-1">
                                                            <p className="fw-medium mb-0">{idx.position}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>{idx.experience}</td>
                                                <td>{idx.department}</td>
                                                <td>
                                                    <SpkBadge  variant="light" Customclass="text-primary">{idx.performance}</SpkBadge>
                                                </td>
                                                <td>{idx.candidates}</td>
                                                <td>{idx.date}</td>
                                                <td>
                                                    <SpkBadge variant={`${idx.status === 'Open' ? 'success' : 'danger'}-transparent`}>{idx.status}</SpkBadge>
                                                </td>
                                                <td>
                                                    <div className="btn-list">
                                                        <SpkButton Buttontype="button" Buttonvariant="outline-success" Customclass="btn btn-sm me-2">Reject</SpkButton>
                                                        <SpkButton Buttontype="button" Buttonvariant="primary" Customclass="btn btn-sm waves-effect waves-light">Accept</SpkButton>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td className='text-center' colSpan={9}>No data found</td>
                                        </tr>
                                    )}
                                </SpkTables>
                            </div>
                        </Card.Body>
                        <Card.Footer className="border-top-0">
                            <div className="d-flex align-items-center pt-1">
                                <div> Showing 5 Entries <i className="bi bi-arrow-right ms-2 fw-medium"></i> </div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <ul className="pagination mb-0">
                                            <li className="page-item disabled"> <Link scroll={false} className="page-link" href="#!"> Prev </Link> </li>
                                            <li className="page-item active"><Link scroll={false} className="page-link" href="#!">1</Link></li>
                                            <li className="page-item"><Link scroll={false} className="page-link" href="#!">2</Link></li>
                                            <li className="page-item"> <Link scroll={false} className="page-link text-primary" href="#!"> next </Link> </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card">
                        <Card.Header className="">
                            <Card.Title>
                                Acquisitions
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="fs-12 text-muted d-flex align-items-center gap-2">
                                <h5 className="mb-0 fw-meidum">1,982</h5>
                                <div>Applications received</div>
                            </div>
                            <div className="progress progress-xl my-4 mt-3">
                                {AcquisitionsProgress.map((idx) => (
                                    <div key={idx.id} className={`progress-bar bg-${idx.color}`} role="progressbar" style={{ width: `${idx.percentage}%` }} aria-valuenow={idx.percentage} aria-valuemin={0} aria-valuemax={100}>{idx.percentage}%</div>
                                ))}
                            </div>
                            <ListGroup as='ul' className=" acquisitions-list mt-1">
                                {Acquisitions.map((idx) => (
                                    <ListGroup.Item as='li' key={idx.id}>
                                        {idx.label}
                                        <SpkBadge variant={`${idx.badgeColor}-transparent`} Customclass={`float-end`}>{idx.count}</SpkBadge>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End::row-3 --> */}
        </Fragment>
    );
};

export default Jobs;