"use client"
import SpkMedicalCard from "@/shared/@spk-reusable-components/reusable-dashboard/spk-medical";
import Spkapexcharts from "@/shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/reusable-uiElements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import SpkTooltips from "@/shared/@spk-reusable-components/reusable-uiElements/spk-tooltips";
import { Appointments, AppointmentsHistory, Doctors, Patients, PatientsOverviewOptions, PatientsOverviewSeries, PatientsStatisticsOptions, PatientsStatisticsSeries, SummaryCards, Treatments } from "@/shared/data/dashboards/medicaldata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Col, Dropdown, ListGroup, Row } from "react-bootstrap";

interface MedicalProps { }

const Medical: React.FC<MedicalProps> = () => {
    return (
        <Fragment>
            <Seo title="Dashboards Medical" />
            <Pageheader title='Dashboards' currentpage='Medical' activepage='Medical' />
            {/* <!-- Start:: row-1 --> */}
            <Row>
                {SummaryCards.map((idx) => (
                    <Col xxl={3} key={idx.id}>
                        <SpkMedicalCard card={idx} />
                    </Col>
                ))}
            </Row>
            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row>
                <Col xxl={6}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Patients Statistics
                            </Card.Title>
                            <SpkDropdown toggleas='a' Customtoggleclass="fs-12 text-muted no-caret" Toggletext="Sort By" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                <li><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Last Week</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">This Month</Dropdown.Item></li>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body className="">
                            <div id="total-patients">
                                <Spkapexcharts chartOptions={PatientsStatisticsOptions} chartSeries={PatientsStatisticsSeries} type='line' width={'100%'} height={292} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Appointments History
                            </Card.Title>
                            <Link scroll={false} href="#!" className="fs-12 text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <ListGroup className="list-group-flush">
                                {AppointmentsHistory.map((idx) => (
                                    <ListGroup.Item key={idx.id}>
                                        <Link scroll={false} href="#!" className="stretched-link"></Link>
                                        <div className="d-flex align-items-center gap-2 flex-wrap">
                                            <div className="lh-1">
                                                <span className={`avatar avatar-md bg-${idx.colorClass}-transparent`}>
                                                    <i className={`ti ti-${idx.icon} fs-5`}></i>
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <span className="fw-medium">{idx.title}</span>
                                                <span className="fs-12 text-muted d-block mt-1"><span className="fw-medium">{idx.historyid}</span> - {idx.dateTime}</span>
                                            </div>
                                            <span className={`text-${idx.color}`}>{idx.status}</span>
                                        </div>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Patients Overview
                            </Card.Title>
                            <SpkDropdown toggleas='a' Customtoggleclass="fs-12 text-muted no-caret" Toggletext="Sort By" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                <li><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Last Week</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">This Month</Dropdown.Item></li>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div id="patients-overview">
                                <Spkapexcharts chartOptions={PatientsOverviewOptions} chartSeries={PatientsOverviewSeries} type='radar' width={'100%'} height={215} />
                            </div>
                            <div className="border-top">
                                <ListGroup className="list-group-flush top-categories">
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="lh-1">
                                                <div className="fw-medium mb-1">Male</div>
                                                <div>
                                                    <span className="text-muted fs-13">Increased by <span className="text-success fw-medium ms-1 d-inline-flex align-items-center">0.64%<i className="ti ti-trending-up ms-1"></i></span></span>
                                                </div>
                                            </div>
                                            <div className="lh-1 text-end">
                                                <span className="d-block fw-medium h6 mb-0">1,200</span>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="lh-1">
                                                <div className="fw-medium mb-1">Female</div> <div><span className="text-muted fs-13">Decreased by <span className="text-danger fw-medium ms-1 d-inline-flex align-items-center">2.75%<i className="ti ti-trending-down ms-1"></i></span></span>
                                                </div>
                                            </div>
                                            <div className="lh-1 text-end">
                                                <span className="d-block fw-medium h6 mb-0">750</span>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-2 --> */}

            {/* <!-- Start:: row-3 --> */}
            <Row>
                <Col xxl={3} xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="">
                            <Card.Title>
                                Available Doctors
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="">
                            <ul className="list-unstyled doctors-list">
                                {Doctors.map((idx) => (
                                    <li key={idx.id}>
                                        <div className="d-flex align-items-center gap-2 flex-wrap">
                                            <div className="lh-1">
                                                <span className="avatar avatar-sm avatar-rounded custom-width">
                                                    <Image fill src={idx.image} alt="" />
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <span className="d-block fw-medium lh-1">
                                                    {idx.name}
                                                </span>
                                                <span className="text-muted fs-12">{idx.specialty}</span>
                                            </div>
                                            <div>
                                                <SpkBadge variant={`${idx.status === 'Available' ? 'success' : 'danger'}-transparent`} Customclass={`rounded-pill`}><i className="ri-circle-fill me-1 fs-7"></i>{idx.status}</SpkBadge>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="">
                            <Card.Title>
                                Available Treatments
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="">
                            <ul className="list-unstyled available-treatments-list">
                                {Treatments.map((idx) => (
                                    <li key={idx.id}>
                                        <div className="d-flex align-items-center gap-2 flex-wrap">
                                            <div className="lh-1">
                                                <span className={`avatar avatar-sm bg-${idx.bgColorClass} avatar-rounded`}>
                                                    <i className={`ti ti-${idx.icon} fs-18`}></i>
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <span className="d-block fw-medium lh-1 mb-1">
                                                    {idx.name}
                                                </span>
                                                <span className="text-muted fs-12">{idx.doctorCount} Doctors</span>
                                            </div>
                                            <div className="text-end ms-auto">
                                                <span className="fw-medium">{idx.timings}</span>
                                                <span className="fs-12 text-muted d-block">Timings</span>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Latest Appointments
                            </Card.Title>
                            <Link scroll={false} href="#!" className="fs-12 text-muted tag-link"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                        </Card.Header>
                        <Card.Body className=" p-0 pb-1">
                            <div className="table-responsive">
                                <SpkTables tableClass="table text-nowrap table-hover" header={[{ title: 'Name' }, { title: 'ID' }, { title: 'Date' }, { title: 'Status' }, { title: 'Actions' },]}>
                                    {Appointments.map((idx) => (
                                        <tr key={idx.id}>
                                            <td className={idx.tdClass}>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className={`avatar avatar-sm me-2 bg-${idx.bgColor}-transparent`}>
                                                            <i className={`ti ti-${idx.icon} fs-5`}></i>
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <Link scroll={false} href="#!" className="fw-medium">{idx.name}</Link>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={idx.tdClass}>{idx.code}</td>
                                            <td className={idx.tdClass}>{idx.date}</td>
                                            <td className={idx.tdClass}><SpkBadge variant={`${idx.color}-transparent`} Customclass={`text-${idx.color}`}>{idx.text}</SpkBadge></td>
                                            <td className={`text-end ${idx.tdClass ? `${idx.tdClass}` : ''}`}>
                                                <div className="d-flex gap-2">
                                                    <SpkTooltips placement="top" title="Accept">
                                                        <Link scroll={false} href="#!" className="btn btn-primary-light btn-sm"><i className="ti ti-check"></i></Link>
                                                    </SpkTooltips>
                                                    <SpkTooltips placement="top" title="Reject">
                                                        <Link scroll={false} href="#!" className="btn btn-secondary-light btn-sm"><i className="ti ti-x"></i></Link>
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
            {/* <!-- End:: row-3 --> */}

            {/* <!-- Start:: row-4 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Patients List
                            </Card.Title>
                            <div className="d-flex flex-wrap gap-2">
                                <div>
                                    <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
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
                                <SpkTables Customcheckclass='text-center' tableClass="table text-nowrap" showCheckbox={true} header={[{ title: 'Patient ID' }, { title: 'Name' }, { title: 'Gender' }, { title: 'Contact Number' }, { title: 'Last Appointment' }, { title: 'Medical History' }, { title: 'Next Appointment' }, { title: 'Action' },]}>
                                    {Patients.map((idx) => (
                                        <tr key={idx.id}>
                                            <td className="text-center"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob2" value="" aria-label="..." defaultChecked={idx.checked} /></td>
                                            <td>{idx.patientId}</td>
                                            <td>
                                                <div className="d-flex gap-2">
                                                    <span className="avatar avatar-xs avatar-rounded custom-width"><Image fill src={idx.avatar} className="" alt="..." /></span>
                                                    <div>
                                                        <span className="fw-medium mb-0 d-flex align-items-center">{idx.name}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {idx.gender}
                                            </td>
                                            <td>{idx.phone}</td>
                                            <td>
                                                {idx.nextVisit}
                                            </td>
                                            <td>
                                                <SpkBadge variant={`${idx.color}-transparent`}>{idx.label}</SpkBadge>
                                            </td>
                                            <td>{idx.createdAt}</td>
                                            <td>
                                                <div className="btn-list">
                                                    <SpkButton Buttonvariant="primary-light" Customclass="btn btn-sm btn-icon  btn-wave">
                                                        <i className="ri-eye-line"></i>
                                                    </SpkButton>
                                                    <SpkButton Buttonvariant="secondary-light" Customclass="btn btn-sm btn-icon btn-wave">
                                                        <i className="ri-edit-line"></i>
                                                    </SpkButton>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                        <Card.Footer className="border-top-0">
                            <div className="d-flex align-items-center">
                                <div> Showing 6 Entries <i className="bi bi-arrow-right ms-2 fw-medium"></i> </div>
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
            {/* <!-- End:: row-4 --> */}
        </Fragment>
    );
};

export default Medical;