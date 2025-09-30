"use client"
import SpkAnalyticsCard from "@/shared/@spk-reusable-components/reusable-dashboard/spk-analytics";
import Spkapexcharts from "@/shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/reusable-uiElements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import SpkTooltips from "@/shared/@spk-reusable-components/reusable-uiElements/spk-tooltips";
import { Activity, Assignments, AttendanceOverviewOptions, AttendanceOverviewSeries, EarningsReportOptions, EarningsReportSeries, SchoolCardData, StudentMarks, StudentMarksType, Students, TeachersList } from "@/shared/data/dashboards/schooldata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment,  useState } from "react";
import { Card, Col, Dropdown, Form, ListGroup, Row } from "react-bootstrap";

interface SchoolProps { }

const School: React.FC<SchoolProps> = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const Studentmarks: StudentMarksType[] = StudentMarks.filter(school =>
        school.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <Fragment>
            <Seo title="Dashboards School" />
            <Pageheader title='Dashboards' currentpage='School' activepage='School' />
            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xxl={9}>
                    <Row>
                        {SchoolCardData.map((idx) => (
                            <div className="col-xl-3" key={idx.id}>
                                <SpkAnalyticsCard card={idx} />
                            </div>
                        ))}
                        <Col xxl={8}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        Earnings Report
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <div id="earnings-report">
                                        <Spkapexcharts chartOptions={EarningsReportOptions} chartSeries={EarningsReportSeries} type='line' width={'100%'} height={295} />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={4}>
                            <Card className="custom-card">
                                <Card.Header className="justify-content-between">
                                    <Card.Title>
                                        Upcoming Assignments
                                    </Card.Title>
                                    <Link scroll={false} href="#!" className="fs-12 text-muted ms-auto"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                                </Card.Header>
                                <Card.Body>
                                    <ul className="list-unstyled upcoming-assignments-list">
                                        {Assignments.map((idx) => (
                                            <li key={idx.id}>
                                                <div className="d-flex align-items-start justify-content-between flex-wrap gap-1">
                                                    <div>
                                                        <Link scroll={false} href="#!" className="fw-medium d-block mb-1">
                                                            {idx.title}
                                                        </Link>
                                                        <span className="text-muted fs-12 d-flex align-items-center gap-3">{idx.dateRange}<SpkBadge variant={`${idx.badgeColor}-transparent`}>{idx.badgeText}</SpkBadge></span>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <SpkButton Buttonvariant="light" Customclass="btn btn-icon btn-sm"><i className="ri-arrow-right-s-line rtl-rotate"></i></SpkButton>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={5}>
                            <Card className="custom-card">
                                <Card.Header className="justify-content-between">
                                    <Card.Title>
                                        Activity
                                    </Card.Title>
                                    <Link scroll={false} href="#!" className="btn btn-sm bg-light btn-light text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                                </Card.Header>
                                <Card.Body>
                                    <ul className="list-unstyled school-activity-list">
                                        {Activity.map((idx) => (
                                            <li key={idx.id}>
                                                <div>
                                                    <h6 className="mb-1 fs-13">{idx.name}<span className="fs-11 text-muted float-end">{idx.time}</span></h6>
                                                    <span className="d-block fs-13 text-muted fw-normal">{idx.message}</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={7}>
                            <Card className="custom-card">
                                <Card.Header className="justify-content-between">
                                    <Card.Title>
                                        Top Students
                                    </Card.Title>
                                    <Link scroll={false} href="#!" className="fs-12 text-muted tag-link py-1"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                                </Card.Header>
                                <Card.Body className="p-0">
                                    <div className="table-responsive">
                                        <SpkTables tableClass="table text-nowrap table-hover" header={[{ title: 'Name' }, { title: 'ID' }, { title: 'Marks' }, { title: 'Percent' }, { title: 'Year' }, { title: 'Actions' },]}>
                                            {Students.map((idx) => (
                                                <tr key={idx.id}>
                                                    <td className={idx.tdClass}>
                                                        <div className="d-flex align-items-center">
                                                            <span className="avatar avatar-sm avatar-rounded me-2 custom-width">
                                                                <Image fill src={idx.image} alt="img" />
                                                            </span>
                                                            <Link scroll={false} href="#!" className="fw-medium">{idx.name}</Link>
                                                        </div>
                                                    </td>
                                                    <td className={idx.tdClass}>{idx.rollNo}</td>
                                                    <td className={idx.tdClass}>{idx.score}</td>
                                                    <td className={idx.tdClass}><span className={`text-${idx.color}`}>{idx.percentage}</span></td>
                                                    <td className={idx.tdClass}>{idx.year}</td>
                                                    <td className={idx.tdClass}>
                                                        <div className="btn-list">
                                                            <SpkTooltips placement="top" title="Edit">
                                                                <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-primary-light"><i className="bi bi-pencil-square"></i></Link>
                                                            </SpkTooltips>
                                                            <SpkTooltips placement="top" title="Delete">
                                                                <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-secondary-light"><i className="bi bi-trash"></i></Link>
                                                            </SpkTooltips>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </SpkTables>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={3}>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card overflow-hidden">
                                <Card.Header>
                                    <Card.Title>Attendance Overview</Card.Title>
                                </Card.Header>
                                <Card.Body className="p-0">
                                    <div id="attendance-overview" className="p-3">
                                        <Spkapexcharts chartOptions={AttendanceOverviewOptions} chartSeries={AttendanceOverviewSeries} type='radialBar' width={'100%'} height={205} />
                                    </div>
                                    <div className="border-top">
                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item>
                                                <div className="d-flex align-items-start flex-wrap gap-2 lh-1">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-sm bg-primary-transparent avatar-rounded fs-5">
                                                            B
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <span className="d-block fw-medium mb-1">Boys</span>
                                                        <span className="text-muted fs-12">This year</span>
                                                    </div>
                                                    <div className="text-end">
                                                        <span className="fw-semibold d-block mb-1">4,342</span>
                                                        <span className="text-success fs-12"><i className="ti ti-trending-up me-1 align-middle d-inline-block"></i>2.19%</span>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex align-items-start flex-wrap gap-2 lh-1">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-sm bg-secondary-transparent avatar-rounded fs-5">
                                                            G
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <span className="d-block fw-medium mb-1">Girls</span>
                                                        <span className="text-muted fs-12">This year</span>
                                                    </div>
                                                    <div className="text-end">
                                                        <span className="fw-semibold d-block mb-1">12.533 - USDT</span>
                                                        <span className="text-success fs-12"><i className="ti ti-trending-up me-1 align-middle d-inline-block"></i>1.67%</span>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card overflow-hidden">
                                <Card.Header className="justify-content-between">
                                    <Card.Title>
                                        Teachers List
                                    </Card.Title>
                                    <Link scroll={false} href="#!" className="fs-12 text-muted tag-link"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                                </Card.Header>
                                <Card.Body>
                                    <ul className="list-group list-unstyled teachers-list">
                                        {TeachersList.map((idx) => (
                                            <li key={idx.id}>
                                                <div className="d-flex align-items-start gap-3 justify-content-between">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-md avatar-rounded custom-width">
                                                            <Image fill src={idx.image} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <Link scroll={false} href="#!" className="fw-medium">
                                                            {idx.name}
                                                        </Link>
                                                        <span className="fs-12 text-muted d-block">{idx.qualification}</span>
                                                    </div>
                                                    <div className={`text-${idx.subjectClass} fw-medium`}>
                                                        {idx.subject}
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row>
                <Col xxl={12} xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Student Marks
                            </Card.Title>
                            <div className="d-flex flex-wrap gap-2">
                                <div>
                                    <Form.Control className="form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" value={searchTerm} onChange={handleSearch} />
                                </div>
                                <SpkDropdown toggleas='a' Customtoggleclass="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret" Toggletext="Sort By" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                    <li><Dropdown.Item href="#!">New</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Popular</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Relevant</Dropdown.Item></li>
                                </SpkDropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="table text-nowrap" header={[{ title: 'S.No' }, { title: 'Student' }, { title: 'ID' }, { title: 'Age' }, { title: 'Gender' }, { title: 'Class' }, { title: 'Section' }, { title: 'Marks In %' }, { title: 'Marks In GPA' }, { title: 'Status' }, { title: 'Actions' },]}>
                                    {Studentmarks.length > 0 ? (
                                        Studentmarks.map((idx) => (
                                            <tr key={idx.id}>
                                                <td>{idx.id}</td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <Link scroll={false} href="#!" className="avatar avatar-xs avatar-rounded me-2 custom-width">
                                                            <Image fill src={idx.image} alt="img" />
                                                        </Link>
                                                        <Link scroll={false} href="#!">{idx.name}</Link>
                                                    </div>
                                                </td>
                                                <td>{idx.studentId}</td>
                                                <td>{idx.age}</td>
                                                <td><span className={`text-${idx.gender === 'Boy' ? 'primary' : 'danger'}`}>{idx.gender}</span></td>
                                                <td>{idx.class}</td>
                                                <td>{idx.grade}</td>
                                                <td>{idx.percentage}</td>
                                                <td>{idx.score}</td>
                                                <td>
                                                    <SpkBadge variant={`${idx.status === 'Pass' ? 'success' : 'danger'}`} Customclass="rounded-pill">{idx.status}</SpkBadge>
                                                </td>
                                                <td>
                                                    <div className="btn-list">
                                                        <SpkButton Buttonvariant="primary-light" Customclass="btn btn-sm btn-icon btn-wave waves-effect waves-light">
                                                            <i className="ri-eye-line"></i>
                                                        </SpkButton>
                                                        <SpkButton Buttonvariant="secondary-light" Customclass="btn btn-sm btn-icon btn-wave waves-effect waves-light">
                                                            <i className="ri-edit-line"></i>
                                                        </SpkButton>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td className='text-center border-top-0' colSpan={11}>No data found</td>
                                        </tr>
                                    )}

                                </SpkTables>
                            </div>
                        </Card.Body>
                        <Card.Footer className="border-top-0">
                            <div className="d-flex align-items-center">
                                <div> Showing {Studentmarks.length} Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i> </div>
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
            </Row>
            {/* <!-- End:: row-2 --> */}
        </Fragment>
    );
};

export default School;