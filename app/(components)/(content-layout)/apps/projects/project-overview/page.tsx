"use client"
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/reusable-uiElements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import SpkTooltips from "@/shared/@spk-reusable-components/reusable-uiElements/spk-tooltips";
import { Documents, ToDoTasks } from "@/shared/data/apps/projects/project-overview-data";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Card, Col, Dropdown, ListGroup, Row, Table } from "react-bootstrap";
import { ReactSortable } from "react-sortablejs";

interface ProjectsOverviewProps { }

const ProjectsOverview: React.FC<ProjectsOverviewProps> = () => {
    const [data, setData] = useState(ToDoTasks);


    //Delete Function
    const handleRemove = (id: number) => {
        setData((prevData) => prevData.filter((item) => item.id !== id));
    };

    return (
        <Fragment>
            <Seo title="Projects Overview" />
            <Pageheader title='Apps' subtitle='Projects' currentpage='Projects Overview' activepage='Projects Overview' />
            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xxl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Project Details
                            </Card.Title>
                            <div className="btn-list">
                                <Link scroll={false} href="/apps/projects/create-project" className="btn btn-sm btn-primary btn-wave"><i className="ri-add-line align-middle me-1 fw-medium"></i>Create Project</Link>
                                <Link scroll={false} href="#!" className="btn btn-sm btn-secondary btn-wave"><i className="ri-share-line align-middle fw-medium me-1"></i>Share</Link>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-center mb-4 gap-2 flex-wrap">
                                <span className="avatar avatar-lg me-1 bg-primary-gradient"><i className="ri-stack-line fs-24 lh-1"></i></span>
                                <div>
                                    <h6 className="fw-medium mb-2 task-title">
                                        Customer Feedback Dashboard Development
                                    </h6>
                                    <SpkBadge variant="success-transparent"> In progress</SpkBadge>
                                    <span className="text-muted fs-12"><i className="ri-circle-fill text-success mx-2 fs-9"></i>Last Updated 1 Day Ago</span>
                                </div>
                                <div className="ms-auto align-self-start">
                                    <SpkDropdown toggleas='a' Customtoggleclass="btn btn-icon btn-sm btn-primary-light no-caret" Icon={true} IconClass="fe fe-more-vertical">
                                        <li><Dropdown.Item href="#!"><i className="ri-eye-line align-middle me-1 d-inline-block"></i>View</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!"><i className="ri-edit-line align-middle me-1 d-inline-block"></i>Edit</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item></li>
                                    </SpkDropdown>
                                </div>
                            </div>
                            <div className="fs-15 fw-medium mb-2">Project Description :</div>
                            <p className="text-muted mb-4">The Customer Feedback Dashboard Development project aims to create a comprehensive dashboard that aggregates and visualizes customer feedback data. This will enable our team to gain actionable insights and improve customer satisfaction.</p>
                            <div className="d-flex gap-5 mb-4 flex-wrap">
                                <div className="d-flex align-items-center gap-2 me-3">
                                    <span className="avatar avatar-md avatar-rounded me-1 bg-success"><i className="ri-calendar-event-line fs-18 lh-1 align-middle"></i></span>
                                    <div>
                                        <div className="fw-medium mb-0 task-title">
                                            Start Date
                                        </div>
                                        <span className="fs-12 text-muted">28 August, 2025</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-2 me-3">
                                    <span className="avatar avatar-md avatar-rounded me-1 bg-info"><i className="ri-time-line fs-18 lh-1 align-middle"></i></span>
                                    <div>
                                        <div className="fw-medium mb-0 task-title">
                                            End Date
                                        </div>
                                        <span className="fs-12 text-muted">30 Oct, 2025</span>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-2">
                                    <span className="avatar avatar-md avatar-rounded me-1 custom-width"><Image fill src="../../../assets/images/faces/12.jpg" alt="" /></span>
                                    <div>
                                        <span className="d-block fs-14 fw-medium">Amith Catzem</span>
                                        <span className="fs-12 text-muted">Project Manager</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <Row className="gy-3">
                                    <Col xl={12}>
                                        <div className="fs-15 fw-medium mb-2">Key tasks :</div>
                                        <ul className="task-details-key-tasks mb-0">
                                            <li>Design and implement a user-friendly dashboard interface.</li>
                                            <li>Integrate data sources and APIs to fetch customer feedback data.</li>
                                            <li>Develop interactive data visualizations for easy interpretation.</li>
                                            <li>Implement filters and sorting functionalities for data analysis.</li>
                                            <li>Create user authentication and access control features.</li>
                                            <li>Perform usability testing and iterate based on feedback.</li>
                                        </ul>
                                    </Col>
                                    <Col xl={12}>
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <div className="fs-15 fw-medium">Sub Tasks :</div>
                                            <Link scroll={false} href="#!" className="btn btn-primary-light btn-wave btn-sm waves-effect waves-light">See More</Link>
                                        </div>
                                        <ListGroup >
                                            <ListGroup.Item>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2"><i className="ri-link fs-15 text-secondary lh-1 p-1 bg-secondary-transparent rounded-circle"></i></div>
                                                    <div className="fw-medium">Research latest web development trends.</div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2"><i className="ri-link fs-15 text-secondary lh-1 p-1 bg-secondary-transparent rounded-circle"></i></div>
                                                    <div className="fw-medium">Create technical specifications document.</div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2"><i className="ri-link fs-15 text-secondary lh-1 p-1 bg-secondary-transparent rounded-circle"></i></div>
                                                    <div className="fw-medium">Optimize website for mobile responsiveness.</div>
                                                </div>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Col>
                                </Row>
                            </div>
                            <div className="fs-15 fw-medium mb-2">Skills :</div>
                            <div className="d-flex gap-2 flex-wrap">
                                <SpkBadge variant="light" Customclass="text-default border">UI/UX Design</SpkBadge>
                                <SpkBadge variant="light" Customclass="text-default border">Data Integration</SpkBadge>
                                <SpkBadge variant="light" Customclass="text-default border">Data Visualization</SpkBadge>
                                <SpkBadge variant="light" Customclass="text-default border">Front-End Development</SpkBadge>
                                <SpkBadge variant="light" Customclass="text-default border">Authentication Systems</SpkBadge>
                                <SpkBadge variant="light" Customclass="text-default border">Usability Testing</SpkBadge>
                                <SpkBadge variant="light" Customclass="text-default border">Agile Methodology</SpkBadge>
                                <SpkBadge variant="light" Customclass="text-default border">API Development</SpkBadge>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                                <div className="d-flex gap-3 align-items-center">
                                    <span className="fs-12">Assigned To :</span>
                                    <div className="avatar-list-stacked">
                                        <SpkTooltips tooltipClass="tooltip-primary" placement="top"  title="John">
                                            <span className="avatar avatar-sm avatar-rounded custom-width">
                                                <Image fill src="../../../assets/images/faces/2.jpg" alt="img" />
                                            </span>
                                        </SpkTooltips>
                                        <SpkTooltips tooltipClass="tooltip-primary" placement="top" title="Emily">
                                            <span className="avatar avatar-sm avatar-rounded custom-width">
                                                <Image fill src="../../../assets/images/faces/8.jpg" alt="img" />
                                            </span>
                                        </SpkTooltips>
                                        <SpkTooltips tooltipClass="tooltip-primary" placement="top" title="Liam">
                                            <span className="avatar avatar-sm avatar-rounded custom-width" >
                                                <Image fill src="../../../assets/images/faces/5.jpg" alt="img" />
                                            </span>
                                        </SpkTooltips>
                                        <SpkTooltips tooltipClass="tooltip-primary" placement="top" title="Sophia">
                                            <span className="avatar avatar-sm avatar-rounded custom-width">
                                                <Image fill src="../../../assets/images/faces/10.jpg" alt="img" />
                                            </span>
                                        </SpkTooltips>
                                        <SpkTooltips tooltipClass="tooltip-primary" placement="top" title="Charlotte">
                                            <span className="avatar avatar-sm avatar-rounded custom-width">
                                                <Image fill src="../../../assets/images/faces/15.jpg" alt="img" />
                                            </span>
                                        </SpkTooltips>
                                    </div>
                                </div>
                                <div className="d-flex gap-3 align-items-center">
                                    <span className="fs-12">Status:</span>
                                    <span className="d-block"><SpkBadge variant="info">On going</SpkBadge></span>
                                </div>
                                <div className="d-flex gap-3 align-items-center">
                                    <span className="fs-12">Priority:</span>
                                    <span className="d-block fs-14 fw-medium"><SpkBadge variant="secondary">Medium</SpkBadge></span>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Project Documents
                            </Card.Title>
                            <SpkDropdown toggleas='a' Customtoggleclass="btn btn-light btn-full btn-sm no-caret" Toggletext="View All" Icon={true} IconClass="ti ti-chevron-down ms-1">
                                <li><Dropdown.Item href="#!">Download</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Import</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Export</Dropdown.Item></li>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <ListGroup className="list-group-flush">
                                {Documents.map((idx) => (
                                    <ListGroup.Item key={idx.id}>
                                        <div className="d-flex align-items-center flex-wrap gap-2">
                                            <span className={`avatar avatar-md avatar-rounded ${idx.avatarClass ? `${idx.avatarClass}` : ''} bg-light lh-1 custom-width`}>
                                                <Image fill src={idx.icon} alt="" />
                                            </span>
                                            <div className="flex-fill">
                                                <Link scroll={false} href="#!"><span className="d-block fw-medium">{idx.name}</span></Link>
                                                <span className="d-block text-muted fs-12 fw-normal">{idx.size}</span>
                                            </div>
                                            <div className="btn-list">
                                                <SpkButton Buttonvariant="info-light" Customclass="btn btn-sm btn-icon btn-wave"><i className="ri-edit-line"></i></SpkButton>
                                                <SpkButton Buttonvariant="danger-light" Customclass="btn btn-sm btn-icon  btn-wave"><i className="ri-delete-bin-line"></i></SpkButton>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6}>
                    <Card className="custom-card justify-content-between">
                        <Card.Header>
                            <Card.Title>Project Discussions</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ul className="list-unstyled profile-timeline">
                                <li>
                                    <div>
                                        <span className="avatar avatar-sm bg-primary-transparent avatar-rounded profile-timeline-avatar">
                                            A
                                        </span>
                                        <div className="mb-2 d-flex align-items-start gap-2">
                                            <div>
                                                <span className="fw-medium">Project Kick-off Meeting</span>
                                            </div>
                                            <SpkBadge variant="primary" Customclass="ms-auto">15,Jun 2025 - 06:20</SpkBadge>
                                        </div>
                                        <p className="text-muted mb-0">
                                            Discuss project scope, objectives, and timelines.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span className="avatar avatar-sm bg-info-transparent avatar-rounded profile-timeline-avatar">
                                            B
                                        </span>
                                        <div className="mb-2 d-flex align-items-start gap-2">
                                            <div>
                                                <span className="fw-medium">Project Details Page Planning</span>
                                            </div>
                                            <SpkBadge variant="info" Customclass="ms-auto">20, Jun 2025 - 09:00</SpkBadge>
                                        </div>
                                        <p className="text-muted mb-0">
                                            Define feature requirements and layout for the project details page.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span className="avatar avatar-sm avatar-rounded profile-timeline-avatar custom-width">
                                            <Image fill src="../../../assets/images/faces/12.jpg" alt="" />
                                        </span>
                                        <div className="text-muted mb-2 d-flex align-items-start gap-2 flex-wrap">
                                            <div>
                                                <span className="text-default"><b>Brenda Adams</b> shared a document with <b>you</b></span>.
                                            </div>
                                            <SpkBadge variant="light" Customclass="ms-auto text-muted">18,Jun 2025 - 09:15</SpkBadge>
                                        </div>
                                        <p className="profile-activity-media mb-0">
                                            <Link scroll={false} href="#!">
                                                <Image width={64} height={48} src="../../../assets/images/media/file-manager/3.png" alt="" />
                                            </Link>
                                            <span className="fs-11 text-muted">728.62KB</span>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span className="avatar avatar-sm bg-secondary-transparent avatar-rounded profile-timeline-avatar">
                                            J
                                        </span>
                                        <div className="text-muted mb-2 d-flex align-items-start gap-2 flex-wrap">
                                            <div>
                                                <span className="text-default"><b>You</b> shared a post with 4 people <b>John,Emma,Liam,Sophie</b></span>.
                                            </div>
                                            <SpkBadge variant="secondary" Customclass="ms-auto">30,Jun 2025 - 13:20</SpkBadge>
                                        </div>
                                        <p className="profile-activity-media mb-2">
                                            <Link scroll={false} href="#!" className="">
                                                <Image width={64} height={48} src="../../../assets/images/media/media-21.jpg" alt="" />
                                            </Link>
                                        </p>
                                        <div>
                                            <div className="avatar-list-stacked">
                                                <span className="avatar avatar-xs avatar-rounded custom-width">
                                                    <Image fill src="../../../assets/images/faces/3.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-xs avatar-rounded custom-width">
                                                    <Image fill src="../../../assets/images/faces/9.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-xs avatar-rounded custom-width">
                                                    <Image fill src="../../../assets/images/faces/6.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-xs avatar-rounded custom-width">
                                                    <Image fill src="../../../assets/images/faces/14.jpg" alt="img" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span className="avatar avatar-sm avatar-rounded profile-timeline-avatar custom-width">
                                            <Image fill src="../../../assets/images/faces/7.jpg" alt="" />
                                        </span>
                                        <div className="mb-2">
                                            <span className="fw-medium">Security and Compliance Audit</span>
                                        </div>
                                        <p className="text-muted mb-0 fs-12">
                                            Ensure the system adheres to security and regulatory requirements.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span className="avatar avatar-sm avatar-rounded profile-timeline-avatar ">
                                            <Image width={28} height={28} src="../../../assets/images/media/media-45.jpg" alt="" />
                                        </span>
                                        <div className="mb-1 d-flex align-items-start gap-2 flex-wrap flex-xxl-nowrap">
                                            <div>
                                                <b>Lucas</b> Commented on Project <Link scroll={false} className="text-secondary" href="#!"><u>#System Integration</u></Link>.
                                            </div>
                                            <SpkBadge variant="light" Customclass="ms-auto text-muted">25,Jun 2025 - 10:52</SpkBadge>
                                        </div>
                                        <p className="text-muted">Integration progress looks good, keep it up! &#128077;</p>
                                        <p className="profile-activity-media mb-0">
                                            <Link scroll={false} href="#!">
                                                <Image width={64} height={48} src="../../../assets/images/media/media-28.jpg" alt="" />
                                            </Link>
                                            <Link scroll={false} href="#!">
                                                <Image width={64} height={48} src="../../../assets/images/media/media-30.jpg" alt="" />
                                            </Link>
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </Card.Body>
                        <Card.Footer>
                            <div className="d-sm-flex align-items-center lh-1">
                                <div className="me-sm-2 mb-2 mb-sm-0 p-1 rounded-circle bg-primary-transparent d-inline-block ">
                                    <Image width={28} height={28} src="../../../assets/images/faces/5.jpg" alt="" className="avatar avatar-sm avatar-rounded" />
                                </div>
                                <div className="flex-fill">
                                    <div className="input-group flex-nowrap">
                                        <input type="text" className="form-control w-sm-50 border shadow-none" placeholder="Share your thoughts" aria-label="Recipient's username with two button addons" />
                                        <SpkButton Buttonvariant="primary-light" Customclass="btn btn-wave waves-effect waves-light" Buttontype="button"><i className="bi bi-emoji-smile"></i></SpkButton>
                                        <SpkButton Buttonvariant="primary-light" Customclass="btn btn-wave waves-effect waves-light" Buttontype="button"><i className="bi bi-paperclip"></i></SpkButton>
                                        <SpkButton Buttonvariant="primary-light" Customclass="btn btn-wave waves-effect waves-light" Buttontype="button"><i className="bi bi-camera"></i></SpkButton>
                                        <SpkButton Buttonvariant="primary" Customclass="btn btn-wave waves-effect waves-light text-nowrap" Buttontype="button">Post</SpkButton>
                                    </div>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="justify-content-between">
                            <Card.Title>To Do Tasks</Card.Title>
                            <div className="btn btn-sm btn-primary-light btn-wave"><i className="ri-add-line align-middle me-1 fw-medium"></i>Add Task</div>
                        </Card.Header>
                        <Card.Body className="p-0 position-relative" id="todo-content">
                            <div>
                                <div className="table-responsive">
                                    <Table className="table text-nowrap">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <input className="form-check-input check-all" type="checkbox" id="all-tasks" value="" aria-label="..." />
                                                </th>
                                                <th className="todolist-handle-drag">

                                                </th>
                                                <th scope="col">Task Title</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">End Date</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <ReactSortable
                                            list={data}
                                            setList={setData}
                                            className="sortable-table"
                                            animation={150} // Adjust the animation speed
                                            handle=".todo-handle" // This makes only the drag handle element draggable
                                            tag='tbody'
                                        >
                                            {data.map((idx) => (
                                                <tr className="todo-box" key={idx.id}>
                                                    <td className="task-checkbox"><input className="form-check-input" type="checkbox" value="" aria-label="..." defaultChecked={idx.checked} /></td>
                                                    <td>
                                                        <SpkButton Buttonvariant="light" Customclass="btn btn-icon btn-sm btn-wave todo-handle">: :</SpkButton>
                                                    </td>
                                                    <td>
                                                        <span className="fw-medium">{idx.title}</span>
                                                    </td>
                                                    <td>
                                                        <span className={`fw-medium text-${idx.statusClass}`}><i className="ri-circle-line fw-semibold fs-7 me-2 lh-1 align-middle"></i>{idx.status}</span>
                                                    </td>
                                                    <td>
                                                        {idx.date}
                                                    </td>
                                                    <td className="text-end">
                                                        <div className="d-flex gap-2">
                                                            <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light">
                                                                <i className="ri-edit-line"></i>
                                                            </Link>
                                                            <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light" onClick={() => handleRemove(idx.id)}>
                                                                <i className="ri-delete-bin-line"></i>
                                                            </Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </ReactSortable>

                                    </Table>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default ProjectsOverview;