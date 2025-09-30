"use client"
import SpkHrmCard from "@/shared/@spk-reusable-components/reusable-dashboard/spk-hrm";
import Spkapexcharts from "@/shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/reusable-uiElements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import SpkTooltips from "@/shared/@spk-reusable-components/reusable-uiElements/spk-tooltips";
import { AttendanceItems, EmployeeDirectory, EmployeeDirectoryType, EmployeeStatus, GenderDistributionOptions, GenderDistributionSeries, HrmCardData, Interviews, JobApplicationOptions, JobApplicationSeries, LeaveRequests, UpcomingEvents } from "@/shared/data/dashboards/hrmdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { Card, Col, Dropdown, Form, Row } from "react-bootstrap";

interface HrmProps { }

const Hrm: React.FC<HrmProps> = () => {

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [data, setData] = useState<EmployeeDirectoryType[]>(EmployeeDirectory);

    // Filter EmployeeDirectory based on search term
    useEffect(() => {
        setData(
            EmployeeDirectory.filter((hrm) =>
                hrm.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm]);

    // Handle search input change
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    // Handle deletion of an employee
    const handleDelete = (contactId: number): void => {
        setData((prevData) => prevData.filter((contact) => contact.id !== contactId));
    };

    return (
        <Fragment>
            <Seo title="Dashboards HRM" />
            <Pageheader title='Dashboards' currentpage='HRM' activepage='HRM' />
            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xxl={9}>
                    <Row>
                        {HrmCardData.map((idx) => (
                            <Col xxl={3} xl={6} key={idx.id}>
                                <SpkHrmCard customCardClass="overflow-hidden" cardBodyClass='pb-4 mb-2 ' card={idx} />
                            </Col>
                        ))}
                        <Col xxl={8}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        Job Application Status
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <div id="Application-statistics">
                                        <Spkapexcharts chartOptions={JobApplicationOptions} chartSeries={JobApplicationSeries} type='bar' width={'100%'} height={315} />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={4}>
                            <Card className="custom-card">
                                <Card.Header className="justify-content-between">
                                    <Card.Title>
                                        Gender Distribution
                                    </Card.Title>
                                    <div>
                                        <Link scroll={false} href="#!" className="btn btn-light btn-sm">View All</Link>
                                    </div>
                                </Card.Header>
                                <Card.Body className="text-center mx-auto px-0">
                                    <div id="gender-chart">
                                        <Spkapexcharts chartOptions={GenderDistributionOptions} chartSeries={GenderDistributionSeries} type='polarArea' width={'100%'} height={405} />
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className="custom-card">
                                <Card.Body>
                                    <ul className="d-flex flex-wrap mb-0 list-unstyled justify-content-around text-center gap-2">
                                        {AttendanceItems.map((idx) => (
                                            <li key={idx.id}>
                                                <div>
                                                    <div className="lh-1 me-1 mb-2">
                                                        <span className={`avatar avatar-md bg-${idx.bgColor}-transparent border border-${idx.bgColor} border-3 border-opacity-25 avatar-rounded`}>
                                                            <i className={`ri-${idx.icon} fs-17 lh-1`}></i>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="d-block mb-0 text-muted fs-12">{idx.label}</span>
                                                        <h5 className="fw-medium mb-0">{idx.count}</h5>
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
                <Col xxl={3}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>Upcoming Events</Card.Title>
                            <Link scroll={false} aria-label="anchor" href="#!" className="btn btn-sm btn-primary-light">
                                View All
                            </Link>
                        </Card.Header>
                        <Card.Body>
                            <ul className="list-unstyled timeline-widget1 mb-0">
                                {UpcomingEvents.map((idx) => (
                                    <li className="timeline-widget-list" key={idx.id}>
                                        <div className="d-flex align-items-start gap-3 flex-wrap">
                                            <div className={`avatar avatar-lg bg-${idx.color}-transparent flex-shrink-0`}>
                                                <div className="text-center">
                                                    <div className=" fw-medium lh-1 mb-1">{idx.date}</div>
                                                    <div className="fs-12 text-default fw-medium lh-1">{idx.day}</div>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-wrap flex-fill align-items-top justify-content-between flex-xl-nowrap gap-1">
                                                <div className="events-width">
                                                    <p className="mb-1 timeline-widget-content text-truncate">{idx.title}</p>
                                                    <p className="mb-0 fs-12 lh-1 text-muted">{idx.time}   <SpkBadge variant={`${idx.badgeColor}-transparent`} Customclass={`${idx.class ? 'ms-2' : ''} ${idx.time ? 'mx-2' : ''}`}>{idx.badgeText}</SpkBadge></p>
                                                </div>
                                                <SpkDropdown Menuas='ul' toggleas='a' Customtoggleclass="btn btn-light btn-icon no-caret" Icon={true} IconClass="fe fe-more-vertical">
                                                    <li><Dropdown.Item href="#!">Action</Dropdown.Item></li>
                                                    <li><Dropdown.Item href="#!">Another action</Dropdown.Item></li>
                                                    <li><Dropdown.Item href="#!">Something else here</Dropdown.Item></li>
                                                </SpkDropdown>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start:: row-3 --> */}
            <Row>
                <Col xxl={5}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Employee Status
                            </Card.Title>
                            <SpkDropdown toggleas='a' Customtoggleclass="fs-12 text-muted no-caret p-1" Toggletext="Sort By" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                <li><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Last Week</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">This Month</Dropdown.Item></li>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="table text-nowrap" header={[{ title: 'Name' }, { title: 'Role' }, { title: 'Status' }, { title: 'Score' },]}>
                                    {EmployeeStatus.map((idx) => (
                                        <tr key={idx.id}>
                                            <td className={idx.tdClass}>
                                                <div className="d-flex align-items-center gap-2">
                                                    <span className="avatar avatar-sm avatar-rounded custom-width">
                                                        <Image fill src={idx.image} alt="" />
                                                    </span>
                                                    <span className="fw-medium">{idx.name} </span>
                                                </div>
                                            </td>
                                            <td className={idx.tdClass}>
                                                {idx.role}
                                            </td>
                                            <td className={idx.tdClass}>
                                                <SpkBadge variant={`${idx.status === 'Active' ? 'success' : 'danger'}-transparent`} Customclass="rounded-pill min-w-badge">{idx.status}</SpkBadge>
                                            </td>
                                            <td className={idx.tdClass}>
                                                {idx.performance}
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} className="col-xxl-3">
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Today's Interviews
                            </Card.Title>
                            <div>
                                <Link scroll={false} href="#!" className="btn btn-light btn-sm">View All</Link>
                            </div>
                        </Card.Header>
                        <Card.Body className="py-3">
                            <ul className="list-unstyled mb-0 schedule-list">
                                {Interviews.map((idx) => (
                                    <li key={idx.id}>
                                        <div className="d-flex align-items-center flex-wrap flex-xl-nowrap gap-2">
                                            <div className="lh-1">
                                                <span className="avatar avatar-md avatar-rounded p-1 bg-light custom-width">
                                                    <Image fill src={idx.src} alt="" />
                                                </span>
                                            </div>
                                            <div className="flex-fill text-truncate">
                                                <p className="fw-medium mb-0 text-truncate">{idx.name}</p>
                                                <p className="fs-12 text-muted mb-0 text-nowrap text-truncate w-75"><i className="ri-time-line me-1"></i>{idx.time}</p>
                                            </div>
                                            <div className="ms-auto">
                                                <SpkButton Buttonvariant="primary" Buttontype="button" Customclass="btn btn-sm text-nowrap">Call Now</SpkButton>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="justify-content-between">
                            <Card.Title>Leave Request</Card.Title>
                            <Link scroll={false} href="#!" className="btn btn-sm btn-light border">View All</Link>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="table text-nowrap mb-0" header={[{ title: 'Employee' }, { title: 'Type' }, { title: 'Days', headerClassname: 'text-center' }, { title: 'Status' },]}>
                                    {LeaveRequests.map((idx) => (
                                        <tr key={idx.id}>
                                            <td className={idx.tdClass}>
                                                <div className="d-flex align-items-start gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-sm custom-width">
                                                            <Image fill src={idx.image} className="" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-1">
                                                        <p className="mb-0 fw-medium">{idx.name}</p>
                                                        <span className="fs-12 text-muted">{idx.role}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={idx.tdClass}>
                                                <span>{idx.leaveType}</span>
                                            </td>
                                            <td className={`${idx.tdClass ? `${idx.tdClass}` : ''} text-center`}>
                                                <span>{idx.leaveDays}</span>
                                            </td>
                                            <td className={idx.tdClass}>
                                                <SpkBadge variant={`${idx.color}-transparent`}>{idx.status}</SpkBadge>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-3 --> */}

            {/* <!-- Start:: row-4 --> */}
            <Row>
                <Col xxl={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Employee Directory
                            </Card.Title>
                            <div className="d-flex flex-wrap">
                                <div className="me-3 my-1">
                                    <Form.Control className="form-control-sm" type="text" placeholder="Search Here" aria-label=" example" value={searchTerm} onChange={handleSearch} />
                                </div>
                                <SpkDropdown Customclass='my-1' toggleas='a' Customtoggleclass="btn btn-sm btn-primary no-caret" Toggletext="Sort By" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1">
                                    <li><Dropdown.Item href="#!">New</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Popular</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Relevant</Dropdown.Item></li>
                                </SpkDropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="table table-hover text-nowrap" header={[{ title: 'S.No',headerClassname:'text-center' }, { title: 'Employee Id' }, { title: 'Employee Name' }, { title: 'Position' }, { title: 'Department' }, { title: 'Email' }, { title: 'Status' }, { title: 'Contact' }, { title: 'Salary' }, { title: 'Action' },]}>
                                    {data.length > 0 ? (
                                        data.map((idx) => (
                                            <tr key={idx.id} className={idx.trClass}>
                                                <td className="text-center">
                                                    {idx.id}
                                                </td>
                                                <td>
                                                    <span className="text-primary">{idx.empID}</span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <Image width={20} height={20} src={idx.image} className="avatar avatar-sm" alt="" />
                                                        <div className="flex-1 flex-between pos-relative ms-2">
                                                            <div className="">
                                                                <Link scroll={false} href="#!" className="fs-13 fw-medium">{idx.name}</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="">{idx.role}</span>
                                                </td>
                                                <td>
                                                    <span className="">{idx.department}</span>
                                                </td>
                                                <td>
                                                    <Link scroll={false} href="#!">{idx.email}</Link>
                                                </td>
                                                <td>
                                                    <SpkBadge variant={`${idx.color}-transparent`}>{idx.status}</SpkBadge>
                                                </td>
                                                <td>
                                                    <span className="">{idx.phone}</span>
                                                </td>
                                                <td>
                                                    <span className="fw-medium">{idx.salary}</span>
                                                </td>
                                                <td>
                                                    <div className="g-2">
                                                        <SpkTooltips placement="top" title="Edit">
                                                            <Link href='#!' scroll={false} aria-label="anchor" className="btn  btn-primary-light btn-sm"><span className="ri-pencil-line"></span></Link>
                                                        </SpkTooltips>
                                                        <SpkTooltips placement="top" title="Delete">
                                                            <Link href="#!" scroll={false} aria-label="anchor" className="btn btn-danger-light btn-sm ms-2" onClick={() => handleDelete(idx.id)}><span className="ri-delete-bin-7-line"></span></Link>
                                                        </SpkTooltips>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td className='text-center border-bottom-0' colSpan={9}>No data found</td>
                                        </tr>
                                    )}

                                </SpkTables>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <div className="d-flex align-items-center">
                                <div>
                                    Showing 7 Entries <i className="bi bi-arrow-right ms-2 fw-medium"></i>
                                </div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <ul className="pagination mb-0">
                                            <li className="page-item disabled">
                                                <Link scroll={false} className="page-link" href="#!">
                                                    Prev
                                                </Link>
                                            </li>
                                            <li className="page-item active"><Link scroll={false} className="page-link" href="#!">1</Link></li>
                                            <li className="page-item"><Link scroll={false} className="page-link" href="#!">2</Link></li>
                                            <li className="page-item">
                                                <Link scroll={false} className="page-link text-primary" href="#!">
                                                    next
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-4 --> */}
        </Fragment>
    );
};

export default Hrm;