"use client"
import SpkCrmCard from "@/shared/@spk-reusable-components/reusable-dashboard/spk-crm";
import Spkapexcharts from "@/shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/reusable-uiElements/spk-badge";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import SpkTooltips from "@/shared/@spk-reusable-components/reusable-uiElements/spk-tooltips";
import { CRMcardData, DealsStatistics, DealsStatisticsType, LeadsOverviewOptions, LeadsOverviewSeries, ProfitBySale, RevenueAnalyticsOptions, RevenueAnalyticsSeries, TasksList, TasksList1, TopDeals, TopLeads } from "@/shared/data/dashboards/crmdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Card, Col, Dropdown, Form, Nav, ProgressBar, Row, Tab } from "react-bootstrap";

interface CrmProps { }

const Crm: React.FC<CrmProps> = () => {

    const [searchTerm, setSearchTerm] = useState<string>('');

    const Dealsstatistics: DealsStatisticsType[] = DealsStatistics.filter(deals =>
        deals.companyName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <Fragment>
            <Seo title="Dashboards CRM" />
            <Pageheader title='Dashboards' currentpage='CRM' activepage='CRM' />
            {/* <!-- Start::row-1 --> */}
            <Row>
                {CRMcardData.map((idx) => (
                    <Col md={6} lg={4} className="col-xl" key={idx.id}>
                        <SpkCrmCard CustomCardClass='crm-card' card={idx} />
                    </Col>
                ))}
            </Row>
            {/* <!-- End::row-1 --> */}

            {/* <!-- Start::row-2 --> */}
            <Row>
                <Col md={12} xxl={6}>
                    <Card className="custom-card ">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>Revenue Analytics</Card.Title>
                            <div className="d-flex gap-2">
                                <div className="btn btn-sm btn-outline-light">Today</div>
                                <div className="btn btn-sm btn-outline-light">Weakly</div>
                                <div className="btn btn-sm btn-light">Yearly</div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="crm-revenue-analytics">
                                <Spkapexcharts chartOptions={RevenueAnalyticsOptions} chartSeries={RevenueAnalyticsSeries} type='line' width={'100%'} height={290} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={12} xxl={3}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Top Leads
                            </Card.Title>
                            <SpkDropdown toggleas='a' Customtoggleclass="btn btn-icon btn-sm btn-light no-caret" Icon={true} IconClass="fe fe-more-vertical">
                                <li><Dropdown.Item href="#!">Week</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Month</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Year</Dropdown.Item></li>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body>
                            <ul className="list-unstyled crm-top-deals mb-0">
                                {TopLeads.map((idx) => (
                                    <li key={idx.id}>
                                        <div className="d-flex align-items-top flex-wrap">
                                            <div className="me-2">
                                                <span className={`avatar avatar-sm avatar-rounded custom-width ${idx.src ? '' : `bg-${idx.avatarColor}-transparent fw-medium`} `}>
                                                    {idx.src ? (<Image fill src={idx.src} alt="" />) : idx.avatarText}
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <p className="fw-medium mb-0">{idx.name}</p>
                                                <span className="text-muted fs-12">{idx.email}</span>
                                            </div>
                                            <div className="fw-medium fs-15">{idx.amount}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={12} xxl={3}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Leads Overview
                            </Card.Title>
                            <SpkDropdown toggleas='a' Customtoggleclass="btn btn-light border btn-full btn-sm no-caret" Toggletext="Yearly" Icon={true} IconClass="ti ti-chevron-down ms-1">
                                <li><Dropdown.Item href="#!">Yearly</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Weekly</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Monthly</Dropdown.Item></li>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body className="px-0 pb-0">
                            <div id="leads-overview">
                                <Spkapexcharts chartOptions={LeadsOverviewOptions} chartSeries={LeadsOverviewSeries} type='radar' width={'100%'} height={312} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End::row-2 --> */}

            {/* <!-- Start::row-3 --> */}
            <Row>
                <Col xxl={4}>
                    <Card className="custom-card">
                        <Tab.Container defaultActiveKey='today'>
                            <Card.Header className=" justify-content-between">
                                <Card.Title>
                                    Tasks List
                                </Card.Title>
                                <div>
                                    <Nav as='ul' className="nav-tabs justify-content-end nav-tabs-header card-headertabs" role="tablist">
                                        <Nav.Item as='li' role="presentation">
                                            <Nav.Link as='a' data-bs-toggle="tab" eventKey='today' role="tab" aria-current="page" href="#today" aria-selected="true">Today</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item as='li' role="presentation">
                                            <Nav.Link as='a' data-bs-toggle="tab" role="tab" eventKey='Upcoming' aria-current="page" href="#Upcoming" aria-selected="false" tabIndex={-1}>Upcoming</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </div>
                            </Card.Header>
                            <Card.Body className="todo-tab p-0">
                                <Tab.Content className="tab-content">
                                    <Tab.Pane eventKey='today' className="tab-pane border-0" id="today" role="tabpanel">
                                        <ul className="list-unstyled task-list-tab mb-0">
                                            {TasksList.map((idx) => (
                                                <li key={idx.id}>
                                                    <div className="todolist d-flex">
                                                        <div className="mb-3 form-check  me-2">
                                                            <input type="checkbox" className="form-check-input" defaultChecked={idx.checked} />
                                                        </div>
                                                        <div className="flex-fill w-100">
                                                            <div className="d-flex align-items-start justify-content-between gap-1">
                                                                <div>
                                                                    <span className="d-block fw-medium">{idx.title}
                                                                        <SpkTooltips placement="top" title={idx.tooltip}>
                                                                            <i className={`ri-${idx.icon} bg-${idx.color}-transparent p-1 align-middle fs-10 lh-1 rounded-circle mx-1`}></i>
                                                                        </SpkTooltips>

                                                                    </span>
                                                                    <p className="text-muted mb-0 fs-12">{idx.description}</p>
                                                                </div>
                                                                <div className="btn-list flex-shrink-0">
                                                                    <SpkTooltips placement="top" title="Edit">
                                                                        <Link scroll={false} href="#!" className="btn btn-sm btn-primary-light btn-icon"><i className="ti ti-edit"></i></Link>
                                                                    </SpkTooltips>
                                                                    <SpkTooltips placement="top" title="Delete">
                                                                        <Link scroll={false} href="#!" className="btn btn-sm btn-danger-light btn-icon"><i className="ti ti-trash"></i></Link>
                                                                    </SpkTooltips>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey='Upcoming' className="tab-pane border-0" id="Upcoming" role="tabpanel">
                                        <ul className="list-unstyled task-list-tab mb-0">
                                            {TasksList1.map((idx) => (
                                                <li key={idx.id}>
                                                    <div className="todolist d-flex">
                                                        <div className="mb-3 form-check  me-2">
                                                            <input type="checkbox" className="form-check-input" defaultChecked={idx.checked} />
                                                        </div>
                                                        <div className="flex-fill w-100">
                                                            <div className="d-flex align-items-start justify-content-between gap-1">
                                                                <div>
                                                                    <span className="d-block fw-medium">{idx.title}
                                                                        <SpkTooltips placement="top" title="Not Started">
                                                                            <i className={`ri-${idx.icon} bg-${idx.color}-transparent p-1 align-middle fs-10 lh-1 rounded-circle mx-1`}></i>
                                                                        </SpkTooltips>
                                                                    </span>
                                                                    <p className="text-muted mb-0 fs-12">{idx.description}</p>
                                                                </div>
                                                                <div className="btn-list flex-shrink-0">
                                                                    <SpkTooltips placement="top" title="Edit">
                                                                        <Link scroll={false} href="#!" className="btn btn-sm btn-primary-light btn-icon"><i className="ti ti-edit"></i></Link>
                                                                    </SpkTooltips>
                                                                    <SpkTooltips placement="top" title="Delete">
                                                                        <Link scroll={false} href="#!" className="btn btn-sm btn-danger-light btn-icon"><i className="ti ti-trash"></i></Link>
                                                                    </SpkTooltips>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Card.Body>
                        </Tab.Container>
                    </Card>
                </Col>
                <Col md={12} xxl={5}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                TOP DEALS
                            </Card.Title>
                            <Link scroll={false} href="#!" className="fs-12 text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive table-padding">
                                <SpkTables tableClass="table" header={[{ title: 'Deal' }, { title: 'Value' }, { title: 'Probability', headerClassname: 'text-center' }, { title: 'Status' },]}>
                                    {TopDeals.map((idx) => (
                                        <tr key={idx.id}>
                                            <td className={idx.tdClass}>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className={`avatar-sm avatar bg-${idx.avatarColor}`}>{idx.avatarIcon ? (<i className={`fe fe-${idx.avatarIcon}`}></i>) : idx.avatarText}</span>
                                                    </div>
                                                    <Link scroll={false} href="#!" className="fw-medium">{idx.company}</Link>
                                                </div>
                                            </td>
                                            <td className={idx.tdClass}>{idx.revenue}</td>
                                            <td className={`text-center ${idx.tdClass}`}>{idx.progress}</td>
                                            <td className={idx.tdClass}><SpkBadge variant={`${idx.statusColor}-transparent`}>{idx.status}</SpkBadge></td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>Profit By Sale</Card.Title>
                            <SpkDropdown toggleas='a' Customtoggleclass="btn btn-sm btn-light text-muted" Toggletext="Sort By">
                                <li><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Last Week</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">This Month</Dropdown.Item></li>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body>
                            <ul className="list-unstyled profit-by-sale-list">
                                {ProfitBySale.map((idx) => (
                                    <li key={idx.id}>
                                        <div className="d-flex justify-content-between align-items-top">
                                            <div className="d-flex">
                                                <span className={`avatar avatar-rounded avatar-md bg-${idx.colorClass}-transparent`}><i className={`bx bx-${idx.icon} fs-18`}></i></span>
                                                <div className="d-flex flex-column ms-2">
                                                    <p className="fw-medium mb-0">{idx.title}</p>
                                                    <p className="fs-12 text-muted mb-0">{idx.percentage}</p>
                                                </div>
                                            </div>
                                            <h6 className="fw-medium mb-0">{idx.amount}</h6>
                                        </div>
                                        <ProgressBar className="progress progress-xs mt-2 mb-0" role="progressbar" aria-label="Basic example" aria-valuenow={idx.progress} aria-valuemin={0} aria-valuemax={100}>
                                            <ProgressBar className={`progress-bar progress-bar-striped progress-bar-animated bg-${idx.colorClass}`} style={{ width: `${idx.progress}%` }}></ProgressBar>
                                        </ProgressBar>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End::row-3 --> */}

            {/* <!-- Start::row-4 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Deals Statistics
                            </Card.Title>
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
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="table text-nowrap" header={[{ title: 'S.No', headerClassname: 'text-center' }, { title: 'Deal' }, { title: 'Sales Rep' }, { title: 'Mail' }, { title: 'Amount' }, { title: 'Location' }, { title: 'Sales Cycle length' }, { title: 'Action' },]}>
                                    {Dealsstatistics.length > 0 ? (
                                        Dealsstatistics.map((idx) => (
                                            <tr key={idx.id}>
                                                <td className={`text-center ${idx.tdClass}`}>
                                                    <span>
                                                        {idx.id}
                                                    </span>
                                                </td>
                                                <td className={idx.tdClass}>
                                                    <span>{idx.companyName}</span>
                                                </td>
                                                <td className={idx.tdClass}>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 lh-1">
                                                            <span className="avatar avatar-xs custom-width">
                                                                <Image fill src={idx.src} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="fs-14">{idx.contactName}</div>
                                                    </div>
                                                </td>
                                                <td className={idx.tdClass}>
                                                    {idx.email}
                                                </td>
                                                <td className={idx.tdClass}>
                                                    <span className="fw-medium fs-14">{idx.amount}</span>
                                                </td>
                                                <td className={idx.tdClass}>
                                                    <SpkBadge variant={`${idx.color}-transparent`}>{idx.country}</SpkBadge>
                                                </td>
                                                <td className={idx.tdClass}>
                                                    <span className="">{idx.daysLeft}</span>
                                                </td>
                                                <td className={idx.tdClass}>
                                                    <div className="hstack gap-2 fs-1">
                                                        <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-success-light btn-wave waves-effect waves-light"><i className="ri-download-2-line"></i></Link>
                                                        <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-secondary-light btn-wave waves-effect waves-light"><i className="ri-edit-line"></i></Link>
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
                        <Card.Footer>
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
            {/* <!-- End::row-4 --> */}
        </Fragment >
    );
};

export default Crm;