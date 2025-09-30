"use client"
import SpkJobscard from "@/shared/@spk-reusable-components/reusable-dashboard/spk-jobs";
import Spkapexcharts from "@/shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/reusable-uiElements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import { Aquisitions, Categories, ProjectsCardData, ProjectStatisticsOptions, ProjectStatisticsSeries, Summary, SummaryType, TaskActivityType, TaskList, TaskList1, TasksActivityOptions, TasksActivitySeries, TransactionData } from "@/shared/data/dashboards/projectsdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { Card, Col, Dropdown, Form, ListGroup, Nav, Row, Tab } from "react-bootstrap";

interface ProjectsProps { }

const Projects: React.FC<ProjectsProps> = () => {

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [data, setData] = useState<SummaryType[]>(Summary);


    useEffect(() => {
        setData(
            Summary.filter((hrm) =>
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
            <Seo title="Dashboards Projects" />
            <Pageheader title='Dashboards' currentpage='Projects' activepage='Projects' />
            {/* <!-- Start:: row-1 --> */}
            <Row>
                {ProjectsCardData.map((idx) => (
                    <Col xl={3} lg={6} md={12} sm={12} key={idx.id}>
                        <SpkJobscard card={idx} />
                    </Col>
                ))}
            </Row>
            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row>
                <Col xxl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Project Statistics
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row className="project-stats">
                                <Col xl={4} lg={4} md={4} sm={4} className="ps-sm-5">
                                    <div className="mb-1">Active Projects</div>
                                    <div className="mb-1">
                                        <span className="mt-1 fs-16 fw-semibold text-primary me-1 d-inline-block">166</span>
                                        <span className="text-success "><i className="ti ti-arrow-narrow-up"></i>
                                            <SpkBadge variant="success-transparent" Customclass="text-success">+0.9%</SpkBadge>
                                        </span>
                                    </div>
                                    <div className="text-muted fs-12">More Projects are yet to start</div>
                                </Col>
                                <Col xl={4} lg={4} md={4} sm={4}>
                                    <div className="mb-">Completed Projects</div>
                                    <div className="mb-1">
                                        <span className="mt-1 fs-16 fw-semibold text-primary">538</span>
                                        <span className="text-success">
                                            <SpkBadge variant="success-transparent" Customclass="text-success mx-2">+0.39%</SpkBadge></span>
                                    </div>
                                    <div className="text-muted fs-12">32 Completed this year</div>
                                </Col>
                                <Col xl={4} lg={4} md={4} sm={4}>
                                    <div className="mb-1 ">Project Revenue</div>
                                    <div className="mb-0">
                                        <span className="mt-1 fs-16 fw-semibold text-secondary">$32,124.00</span>
                                        <span className="text-danger">
                                            <SpkBadge variant="danger-transparent" Customclass="text-danger mx-2">-0.15%</SpkBadge></span>
                                    </div>
                                    <div className="text-muted fs-12">Reached yearly target</div>
                                </Col>
                            </Row>
                            <div id="project-statistics">
                                <Spkapexcharts chartOptions={ProjectStatisticsOptions} chartSeries={ProjectStatisticsSeries} type='line' width={'100%'} height={311} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6} xxl={3}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Project Categories
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="progress-stacked progress-xl mb-2">
                                <div className="progress-bar" role="progressbar" style={{ width: '35%' }} aria-valuenow={35} aria-valuemin={0} aria-valuemax={100}>35%</div>
                                <div className="progress-bar bg-info" role="progressbar" style={{ width: '27%' }} aria-valuenow={27} aria-valuemin={0} aria-valuemax={100}>27%</div>
                                <div className="progress-bar bg-success" role="progressbar" style={{ width: '20%' }} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}>14%</div>
                                <div className="progress-bar bg-secondary" role="progressbar" style={{ width: '18%' }} aria-valuenow={18} aria-valuemin={0} aria-valuemax={100}>10%</div>
                                <div className="progress-bar bg-warning" role="progressbar" style={{ width: '18%' }} aria-valuenow={18} aria-valuemin={0} aria-valuemax={100}>14%</div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div className="fs-12 text-muted">Total Projects</div>
                                <div className="fw-medium">2,355</div>
                            </div>
                            <ListGroup as='ul'>
                                {Categories.map((idx) => (
                                    <ListGroup.Item as='li' key={idx.id} className={idx.liClass}>
                                        <div className="d-flex align-items-start gap-2">
                                            <div className={`text-${idx.color} fs-10`}>
                                                <i className="align-middle ti ti-circle-filled"></i>
                                            </div>
                                            <div className="flex-fill">
                                                <div className="fw-medium lh-1 mb-2">{idx.title}</div>
                                                <div className="text-muted fs-12">
                                                    <span className={`fs-12 text-${idx.color} fw-medium`}>({idx.percentage})</span> This month
                                                </div>
                                            </div>
                                            <div className="fw-medium text-end">
                                                {idx.count}
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6} xxl={3}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Recent Transactions
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ul className="list-unstyled projects-recent-transactions-list">
                                {TransactionData.map((idx) => (
                                    <li key={idx.id}>
                                        <div className="d-flex align-items-center gap-2">
                                            <div>
                                                <span className={`avatar avatar-md avatar-rounded bg-${idx.color}`}>
                                                    WR
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <span className="fw-medium d-block">{idx.title}</span>
                                                <span className="fs-12 text-muted">{idx.date}</span>
                                            </div>
                                            <div className="text-end">
                                                <span className="d-block fw-medium">{idx.amount}</span>
                                                <span className={`fs-12 text-${idx.color} fw-medium`}>{idx.status}</span>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-2 --> */}

            {/* <!-- Start:: row-3 --> */}
            <Row>
                <Col xxl={3}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Aquisitions</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex gap-3 flex-wrap mb-5">
                                <div className="p-3 bg-primary-transparent text-center flex-fill rounded">
                                    <h4 className="fw-medium mb-0">56</h4>
                                    <span className="fs-12 text-default">Projects</span>
                                </div>
                                <div className="p-3 bg-info-transparent text-center flex-fill rounded">
                                    <h4 className="fw-medium mb-0">85</h4>
                                    <span className="fs-12 text-default">Deals</span>
                                </div>
                                <div className="p-3 bg-success-transparent text-center flex-fill rounded">
                                    <h4 className="fw-medium mb-0">$45k</h4>
                                    <span className="fs-12 text-default">Earned</span>
                                </div>
                            </div>
                            <ul className="list-unstyled projects-aquisitions-list mb-1">
                                {Aquisitions.map((idx) => (
                                    <li key={idx.id}>
                                        <div className="d-flex align-items-center justify-content-between gap-2">
                                            <div className="d-flex align-items-center gap-2">
                                                <div>
                                                    <i className={`ti ti-circle align-middle text-${idx.color}`}></i>
                                                </div>
                                                <div className="fw-medium">{idx.name} <span className="fs-12 text-muted">({idx.count})</span></div>
                                            </div>
                                            <div className="d-flex align-items-center gap-3 w-50 justify-content-end">
                                                <div className="progress progress-xs flex-fill" role="progressbar" aria-valuenow={idx.progress} aria-valuemin={0} aria-valuemax={100}>
                                                    <div className={`progress-bar bg-${idx.color}`} style={{ width: `${idx.progress}%` }}>
                                                    </div>
                                                </div>
                                                <div className="fw-medium">{idx.progress}%</div>
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
                        <Tab.Container defaultActiveKey='Active'>
                            <Card.Header className=" justify-content-between">
                                <Card.Title>Task List</Card.Title>
                                <Nav as='ul' className="nav-pills justify-content-end nav-style-3 gap-2" role="tablist">
                                    <Nav.Item as='li' role="presentation">
                                        <Nav.Link as='a' eventKey='Active' className="px-0" data-bs-toggle="tab" role="tab" aria-current="page" href="#Active" aria-selected="true">Active Tasks</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as='li' role="presentation">
                                        <Nav.Link as='a' eventKey='Complete' className="px-0" data-bs-toggle="tab" role="tab" aria-current="page" href="#Complete" aria-selected="false" tabIndex={-1}>Completed Tasks</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <Tab.Content>
                                    <Tab.Pane className="p-0 border-0" eventKey='Active' id="Active" role="tabpanel">
                                        <div className="table-responsive">
                                            <SpkTables tableClass="table text-nowrap" header={[{ title: 'Task details' }, { title: 'Assigned' }, { title: 'Target' }, { title: 'Assigned to' },]}>
                                                {TaskList.map((idx) => (
                                                    <tr key={idx.id}>
                                                        <td className={idx.tdClass}><a href="#!">{idx.taskName}</a></td>
                                                        <td className={`text-muted ${idx.tdClass}`}>{idx.time}</td>
                                                        <td className={idx.tdClass}><SpkBadge variant={`${idx.date === 'Today' ? 'primary' : 'secondary'}-transparent`}>{idx.date}</SpkBadge></td>
                                                        <td className={idx.tdClass}>
                                                            <div className="avatar-list-stacked mb-0">
                                                                {idx.avatars.map((img, index) => (
                                                                    <span className="avatar avatar-xs custom-width" key={index}>
                                                                        <Image fill src={img} alt="img" />
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </SpkTables>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane className="p-0 border-0" eventKey='Complete' id="Complete" role="tabpanel">
                                        <div className="table-responsive">
                                            <SpkTables tableClass="table text-nowrap" header={[{ title: 'Task details' }, { title: 'Assigned on' }, { title: 'Target' }, { title: 'Assigned to' },]}>
                                                {TaskList1.map((idx) => (
                                                    <tr key={idx.id}>
                                                        <td className={idx.tdClass}><a href="#!">{idx.taskName}</a></td>
                                                        <td className={`text-muted ${idx.tdClass}`}>{idx.date}</td>
                                                        <td className={idx.tdClass}><SpkBadge variant="success">{idx.time}</SpkBadge></td>
                                                        <td className={idx.tdClass}>
                                                            <div className="avatar-list-stacked mb-0">
                                                                {idx.avatars.map((img, index) => (
                                                                    <span className="avatar avatar-xs custom-width" key={index}>
                                                                        <Image fill src={img} alt="img" />
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </SpkTables>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Card.Body>
                        </Tab.Container>
                    </Card>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header>
                            <Card.Title>Tasks Activity</Card.Title>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div id="task-activity" className="p-3 pb-4 border-bottom">
                                <Spkapexcharts chartOptions={TasksActivityOptions} chartSeries={TasksActivitySeries} type='donut' width={'100%'} height={213} />
                            </div>
                            <ListGroup as='ul' className="list-group-flush">
                                {TaskActivityType.map((idx) => (
                                    <ListGroup.Item as='li' key={idx.id}>
                                        <div className="d-flex align-items-start justify-content-between">
                                            <div className={`task-activity-type lh-1 ${idx.type}`}>
                                                <div className="fw-medium mb-1">{idx.name}</div>
                                                <span className="fs-12 text-muted">{idx.changeType} By<span className={`text-${idx.changeType === 'Increased' ? 'success' : 'danger'} fs-12 ms-1 fw-medium d-inline-block`}>{idx.change}</span></span>
                                            </div>
                                            <div className="lh-1 text-end">
                                                <span className="d-block fs-12 text-muted mb-1">Total</span>
                                                <span className="d-block fw-semibold mb-0">{idx.totalTasks}</span>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-3 --> */}

            {/* <!-- Start:: row-4 --> */}
            <Row>
                <Col xl={12} >
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Projects Summary
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
                                <SpkTables tableClass="table text-nowrap" header={[{ title: 'Name' }, { title: 'Start Date' }, { title: 'Progress' }, { title: 'Team' }, { title: 'Due Date' }, { title: 'Status' }, { title: 'Actions' },]}>
                                    {data.length > 0 ? (
                                        data.map((idx) => (
                                            <tr key={idx.id}>
                                                <td>
                                                    {idx.name}
                                                </td>
                                                <td>
                                                    {idx.startDate}
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="progress progress-animate progress-xs w-100" role="progressbar" aria-valuenow={idx.progress} aria-valuemin={0} aria-valuemax={100}>
                                                            <div className={`progress-bar progress-bar-striped progress-bar-animated bg-${idx.progressColor}`} style={{ width: `${idx.progress}%` }}></div>
                                                        </div>
                                                        <div className="ms-2">{idx.progress}%</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="avatar-list-stacked">
                                                        {idx.team.map((img, index) => (
                                                            <span className="avatar avatar-xs avatar-rounded custom-width" key={index}>
                                                                <Image fill src={img} alt="img" />
                                                            </span>
                                                        ))}
                                                        {idx.imgCount ? (<Link scroll={false} className="avatar avatar-xs bg-primary avatar-rounded text-fixed-white" href="#!"> +{idx.imgCount} </Link>) : ''}
                                                    </div>
                                                </td>
                                                <td>
                                                    {idx.dueDate}
                                                </td>
                                                <td>
                                                    <SpkBadge variant={`${idx.statusColor}-transparent`}>{idx.status}</SpkBadge>
                                                </td>
                                                <td>
                                                    <div className="btn-list">
                                                        <SpkButton Buttonvariant="primary-light" Customclass="btn btn-sm btn-icon btn-wave waves-effect waves-light">
                                                            <i className="ri-edit-line"></i>
                                                        </SpkButton>
                                                        <SpkButton Buttonvariant="danger-light" Customclass="btn btn-sm btn-icon btn-wave waves-effect waves-light" onClickfunc={() => handleDelete(idx.id)}>
                                                            <i className="ri-delete-bin-line"></i>
                                                        </SpkButton>
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
                            <div className="d-flex align-items-center">
                                <div>
                                    Showing 5 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
                                </div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <ul className="pagination mb-0">
                                            <li className="page-item disabled">
                                                <a className="page-link" href="#!">
                                                    Prev
                                                </a>
                                            </li>
                                            <li className="page-item active"><a className="page-link" href="#!">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#!">2</a></li>
                                            <li className="page-item">
                                                <a className="page-link text-primary" href="#!">
                                                    next
                                                </a>
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

export default Projects;