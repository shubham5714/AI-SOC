"use client"
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/reusable-uiElements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkTooltips from "@/shared/@spk-reusable-components/reusable-uiElements/spk-tooltips";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Col, Form, ListGroup, Nav, ProgressBar, Row, Tab } from "react-bootstrap";

interface TicketDetailsProps { }

const TicketDetails: React.FC<TicketDetailsProps> = () => {
    return (
        <Fragment>
            <Seo title="Ticket Details" />
            <Pageheader title='Tickets' subtitle='Management' currentpage='Ticket Details' activepage='Ticket Details' />
            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between align-items-center">
                            <Card.Title>Task Details</Card.Title>
                            <div className="btn-list">
                                <SpkButton Buttonvariant="primary" Buttontype="button" Customclass="btn btn-sm btn-wave me-0"><i className="ri-edit-line me-1 align-middle"></i>Edit Task</SpkButton>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex gap-2 mb-4 align-items-center">
                                <div className="fs-15 fw-medium">Task Title :</div>
                                <h5 className="fw-medium mb-0">
                                    Develop New Website Features <SpkBadge variant="success-transparent" Customclass="fs-10 fw-medium"># created on 12 June, 2024</SpkBadge>
                                </h5>
                            </div>
                            <div className="fs-15 fw-medium mb-2">Task Description :</div>
                            <p className="text-muted mb-4">Enhance existing website features to improve user engagement and streamline user experience. Implement new functionalities to support business growth and adaptability.</p>
                            <Row className="gy-3 mb-4">
                                <Col xl={12}>
                                    <div className="fs-15 fw-medium mb-2">Key tasks :</div>
                                    <ul className="task-details-key-tasks mb-0">
                                        <li>Review current website features and identify areas for improvement.</li>
                                        <li>Brainstorm and develop ideas for new website functionalities.</li>
                                        <li>Design wireframes and prototypes for new features.</li>
                                        <li>Implement front-end and back-end development for new functionalities.</li>
                                        <li>Perform comprehensive testing and debugging.</li>
                                        <li>Launch and monitor performance of new website features.</li>
                                    </ul>
                                </Col>
                                <Col xl={12}>
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                        <div className="fs-15 fw-medium">Sub Tasks :</div>
                                        <Link scroll={false} href="#!" className="btn btn-info-light btn-wave btn-sm waves-effect waves-light">See More</Link>
                                    </div>
                                    <ListGroup className=" mb-0">
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
                            <div className="fs-15 fw-medium mb-2">Uploads :</div>
                            <div className="d-flex gap-2 mb-0 flex-wrap">
                                <Link scroll={false} aria-label="anchor" href="#!" className="avatar avatar-xl ">
                                    <Image width={64} height={64} src="../../../assets/images/media/media-37.jpg" alt="File 1" />
                                </Link>
                                <Link scroll={false} aria-label="anchor" href="#!" className="avatar avatar-xl">
                                    <Image width={64} height={64} src="../../../assets/images/media/media-38.jpg" alt="File 2" />
                                </Link>
                                <Link scroll={false} aria-label="anchor" href="#!" className="avatar avatar-xl">
                                    <Image width={64} height={64} src="../../../assets/images/media/media-39.jpg" alt="File 3" />
                                </Link>
                                <Link scroll={false} aria-label="anchor" href="#!" className="avatar avatar-xl">
                                    <Image width={64} height={64} src="../../../assets/images/media/media-40.jpg" alt="File 4" />
                                </Link>
                                <Link scroll={false} aria-label="anchor" href="#!" className="avatar avatar-xl">
                                    <Image width={64} height={64} src="../../../assets/images/media/media-41.jpg" alt="File 5" />
                                </Link>
                                <Link scroll={false} aria-label="anchor" href="#!" className="avatar avatar-xl bg-primary text-fixed-white">
                                    +2
                                </Link>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="">
                            <Card.Title>
                                Attachments list
                            </Card.Title>
                            <Link scroll={false} href="#!" className="btn btn-primary-light ms-auto btn-sm mt-1"> View More</Link>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>
                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                        <div className="lh-1">
                                            <span className="avatar avatar-rounded p-2 bg-light">
                                                <Image width={26} height={26} src="../../../assets/images/media/file-manager/1.png" alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <Link scroll={false} href="#!"><span className="d-block fw-medium">Full Project</span></Link>
                                            <span className="d-block text-muted fs-12 fw-normal">0.45MB</span>
                                        </div>
                                        <div className="btn-list">
                                            <SpkButton Buttonvariant="info-light" Buttontype="button" Buttonlabel="button" Customclass="btn btn-sm btn-icon  btn-wave"><i className="ri-edit-line"></i></SpkButton>
                                            <SpkButton Buttonvariant="danger-light" Buttontype="button" Buttonlabel="button" Customclass="btn btn-sm btn-icon  btn-wave"><i className="ri-delete-bin-line"></i></SpkButton>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                        <div className="lh-1">
                                            <span className="avatar avatar-rounded bg-light">
                                                <Image width={26} height={26} src="../../../assets/images/media/file-manager/3.png" alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <Link scroll={false} href="#!"><span className="d-block fw-medium">assets.zip</span></Link>
                                            <span className="d-block text-muted fs-12 fw-normal">0.99MB</span>
                                        </div>
                                        <div className="btn-list">
                                            <SpkButton Buttonvariant="info-light" Buttontype="button" Buttonlabel="button" Customclass="btn btn-sm btn-icon  btn-wave"><i className="ri-edit-line"></i></SpkButton>
                                            <SpkButton Buttonvariant="danger-light" Buttontype="button" Buttonlabel="button" Customclass="btn btn-sm btn-icon  btn-wave"><i className="ri-delete-bin-line"></i></SpkButton>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                        <div className="lh-1">
                                            <span className="avatar avatar-rounded p-2 bg-light">
                                                <Image width={26} height={26} src="../../../assets/images/media/file-manager/1.png" alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <Link scroll={false} href="#!"><span className="d-block fw-medium">image-1.png</span></Link>
                                            <span className="d-block text-muted fs-12 fw-normal">245KB</span>
                                        </div>
                                        <div className="btn-list">
                                            <SpkButton Buttonvariant="info-light" Buttontype="button" Buttonlabel="button" Customclass="btn btn-sm btn-icon  btn-wave"><i className="ri-edit-line"></i></SpkButton>
                                            <SpkButton Buttonvariant="danger-light" Buttontype="button" Buttonlabel="button" Customclass="btn btn-sm btn-icon  btn-wave"><i className="ri-delete-bin-line"></i></SpkButton>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                        <div className="lh-1">
                                            <span className="avatar avatar-rounded bg-light">
                                                <Image width={26} height={26} src="../../../assets/images/media/file-manager/3.png" alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <Link scroll={false} href="#!"><span className="d-block fw-medium">documentation.zip</span></Link>
                                            <span className="d-block text-muted fs-12 fw-normal">2MB</span>
                                        </div>
                                        <div className="btn-list">
                                            <SpkButton Buttonvariant="info-light" Buttontype="button" Buttonlabel="button" Customclass="btn btn-sm btn-icon  btn-wave"><i className="ri-edit-line"></i></SpkButton>
                                            <SpkButton Buttonvariant="danger-light" Buttontype="button" Buttonlabel="button" Customclass="btn btn-sm btn-icon  btn-wave"><i className="ri-delete-bin-line"></i></SpkButton>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                        <div className="lh-1">
                                            <span className="avatar avatar-rounded bg-light">
                                                <Image width={26} height={26} src="../../../assets/images/media/file-manager/3.png" alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <Link scroll={false} href="#!"><span className="d-block fw-medium">landing.zip</span></Link>
                                            <span className="d-block text-muted fs-12 fw-normal">3.46MB</span>
                                        </div>
                                        <div className="btn-list">
                                            <SpkButton Buttonvariant="info-light" Buttontype="button" Buttonlabel="button" Customclass="btn btn-sm btn-icon  btn-wave"><i className="ri-edit-line"></i></SpkButton>
                                            <SpkButton Buttonvariant="danger-light" Buttontype="button" Buttonlabel="button" Customclass="btn btn-sm btn-icon  btn-wave"><i className="ri-delete-bin-line"></i></SpkButton>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Tab.Container defaultActiveKey='activity'>
                            <Card.Header className=" justify-content-between">
                                <Nav as='ul' variant="tabs"  className="nav-tabs tab-style-7 scaleX profile-settings-tab" id="myTab4" role="tablist">
                                    <Nav.Item as='li' className="flex-fill" role="presentation">
                                        <Nav.Link as='button' eventKey='activity' className="border border-dashed rounded-bottom-0 px-3" id="task-activity" data-bs-toggle="tab" data-bs-target="#task-activity-pane" type="button" role="tab" aria-controls="task-activity-pane" aria-selected="true">Task Activity</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as='li' className="flex-fill" role="presentation">
                                        <Nav.Link as='button' eventKey='comments' className="border border-dashed rounded-bottom-0 px-3" id="task-comments-tab" data-bs-toggle="tab" data-bs-target="#task-comments-tab-pane" type="button" role="tab" aria-controls="task-comments-tab-pane" aria-selected="false" tabIndex={-1}>Comments</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Card.Header>
                            <Card.Body className="tab-content">
                                <Tab.Pane eventKey='activity' className="tab-paneoverflow-hidden p-0 border-0" id="task-activity-pane" role="tabpanel" aria-labelledby="task-activity" tabIndex={0}>
                                    <ul className="list-unstyled profile-timeline mb-3">
                                        <li>
                                            <div>
                                                <span className="avatar avatar-sm avatar-rounded profile-timeline-avatar custom-width">
                                                    <Image fill src="../../../assets/images/faces/7.jpg" alt="Oliver" />
                                                </span>
                                                <p className="text-muted mb-2">
                                                    <span className="text-default">
                                                        <span className="fw-medium">Oliver</span> shared a document with
                                                        <span className="fw-medium mx-1">you</span>.
                                                    </span>
                                                    <SpkBadge variant="light" Customclass="float-end fs-11  text-muted">14, June 2024 - 10:45</SpkBadge>
                                                </p>
                                                <p className="text-muted mb-2 fs-12">
                                                    "We've finalized the project specifications and the client has approved the initial designs. Moving forward with the development phase."
                                                </p>
                                                <p className="profile-activity-media mb-0">
                                                    <Link scroll={false} aria-label="anchor" href="#!">
                                                        <Image width={64} height={48} src="../../../assets/images/media/file-manager/3.png" alt="Document" />
                                                    </Link>
                                                    <span className="fs-11 text-muted">512.34KB</span>
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <span className="avatar avatar-sm bg-info avatar-rounded profile-timeline-avatar">
                                                    S
                                                </span>
                                                <p className="text-muted mb-2">
                                                    <span className="text-default">
                                                        <span className="fw-medium">You</span> shared a post with 6 people, including  <span className="fw-medium">Ava, Sophia, Mia, Lucas</span>.
                                                    </span>
                                                    <SpkBadge variant="light" Customclass="float-end fs-11 text-muted">10, June 2024 - 14:23</SpkBadge>
                                                </p>
                                                <p className="profile-activity-media mb-2">
                                                    <Link scroll={false} aria-label="anchor" href="#!">
                                                        <Image width={64} height={48} src="../../../assets/images/media/media-19.jpg" alt="Post Image" />
                                                    </Link>
                                                </p>
                                                <div>
                                                    <div className="avatar-list-stacked">
                                                        <span className="avatar avatar-xs avatar-rounded custom-width">
                                                            <Image fill src="../../../assets/images/faces/3.jpg" alt="User 1" />
                                                        </span>
                                                        <span className="avatar avatar-xs avatar-rounded custom-width">
                                                            <Image fill src="../../../assets/images/faces/9.jpg" alt="User 2" />
                                                        </span>
                                                        <span className="avatar avatar-xs avatar-rounded custom-width">
                                                            <Image fill src="../../../assets/images/faces/12.jpg" alt="User 3" />
                                                        </span>
                                                        <span className="avatar avatar-xs avatar-rounded custom-width">
                                                            <Image fill src="../../../assets/images/faces/14.jpg" alt="User 4" />
                                                        </span>
                                                        <span className="ms-3">
                                                            4 People reacted
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <span className="avatar avatar-sm avatar-rounded profile-timeline-avatar custom-width">
                                                    <Image fill src="../../../assets/images/faces/5.jpg" alt="Liam" />
                                                </span>
                                                <p className="text-muted mb-2">
                                                    <span className="text-default">
                                                        <span className="fw-medium">Liam</span> commented on your post.
                                                    </span>
                                                    <SpkBadge variant="light" Customclass="float-end fs-11 text-muted">12, June 2024 - 09:15</SpkBadge>
                                                </p>
                                                <p className="text-muted mb-0 fs-12">
                                                    "The updates to the project plan look great. I'll review the milestones and get back to you by end of day."
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="p-3 mt-2 bg-light rounded">
                                        <div className="d-sm-flex align-items-center lh-1">
                                            <div className="me-sm-3 mb-2 mb-sm-0">
                                                <span className="avatar avatar-md avatar-rounded custom-width">
                                                    <Image fill src="../../../assets/images/faces/9.jpg" alt="" />
                                                </span>
                                            </div>
                                            <div className="flex-fill me-sm-2">
                                                <div className="input-group">
                                                    <Form.Control type="text" className="shadow-none border" placeholder="Post Anything" aria-label="Recipient's username with two button addons" />
                                                    <SpkButton Buttonvariant="outline-light" Buttontype="button" Buttonlabel="button" Customclass="btn border btn-wave"><i className="bi bi-emoji-smile"></i></SpkButton>
                                                    <SpkButton Buttonvariant="outline-light" Buttontype="button" Buttonlabel="button" Customclass="btn  border btn-wave"><i className="bi bi-paperclip"></i></SpkButton>
                                                    <SpkButton Buttonvariant="outline-light" Buttontype="button" Buttonlabel="button" Customclass="btn  border btn-wave"><i className="bi bi-camera"></i></SpkButton>
                                                    <SpkButton Buttonvariant="primary" Customclass="btn btn-wave" Buttontype="button">Post</SpkButton>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey='comments' className="tab-pane overflow-hidden p-0 border-0" id="task-comments-tab-pane" role="tabpanel" aria-labelledby="task-comments-tab" tabIndex={0}>
                                    <ul className="list-group">
                                        <ListGroup.Item className="custom-border">
                                            <div className="d-flex align-items-start gap-3 flex-wrap">
                                                <div>
                                                    <span className="avatar avatar-lg avatar-rounded custom-width custom-width">
                                                        <Image fill src="../../../assets/images/faces/1.jpg" alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill w-50">
                                                    <span className="fw-medium d-block mb-1">Mary Cateline</span>
                                                    <span className="d-block mb-3">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo</span>
                                                    <div className="btn-list">
                                                        <SpkButton Buttonvariant="primary-light" Customclass="btn btn-sm btn-wave waves-effect waves-light">Reply<i className="ri-reply-line ms-1"></i></SpkButton>
                                                        <SpkButton Buttonvariant="success-light" Customclass="btn btn-sm btn-wave waves-effect waves-light">View Details<i className="ri-eye-line ms-1"></i></SpkButton>
                                                    </div>
                                                </div>
                                                <div className="btn-list">
                                                    <SpkButton Buttonvariant="info-light" Customclass="btn btn-icon btn-sm btn-wave waves-effect waves-light"><i className="ri-thumb-up-line"></i></SpkButton>
                                                    <SpkButton Buttonvariant="secondary-light" Customclass="btn btn-icon btn-sm btn-wave waves-effect waves-light"><i className="ri-thumb-down-line"></i></SpkButton>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex align-items-start gap-3 flex-wrap">
                                                <div>
                                                    <span className="avatar avatar-lg avatar-rounded custom-width">
                                                        <Image fill src="../../../assets/images/faces/13.jpg" alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill w-50">
                                                    <span className="fw-medium d-block mb-1">Monte vin</span>
                                                    <span className="d-block mb-3">Dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam</span>
                                                    <div className="btn-list">
                                                        <SpkButton Buttonvariant="primary-light" Customclass="btn btn-sm btn-wave waves-effect waves-light">Reply<i className="ri-reply-line ms-1"></i></SpkButton>
                                                        <SpkButton Buttonvariant="success-light" Customclass="btn btn-sm btn-wave waves-effect waves-light">View Details<i className="ri-eye-line ms-1"></i></SpkButton>
                                                    </div>
                                                </div>
                                                <div className="btn-list">
                                                    <SpkButton Buttonvariant="info-light" Customclass="btn btn-icon btn-sm btn-wave waves-effect waves-light"><i className="ri-thumb-up-line"></i></SpkButton>
                                                    <SpkButton Buttonvariant="secondary-light" Customclass="btn btn-icon btn-sm btn-wave waves-effect waves-light"><i className="ri-thumb-down-line"></i></SpkButton>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                    </ul>
                                </Tab.Pane>
                            </Card.Body>
                        </Tab.Container>
                    </Card>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="">
                            <Card.Title>
                                Task Information
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="p-3 d-flex gap-5 border-bottom">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="assign" id="assign1" defaultChecked />
                                    <label className="form-check-label fw-medium" htmlFor="assign1">
                                        Assign Lead
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="assign" id="assign2" />
                                    <label className="form-check-label fw-medium" htmlFor="assign2">
                                        Assign Member
                                    </label>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <SpkTables tableClass="table text-nowrap">
                                    <tr>
                                        <td><span className="fw-medium">Task ID :</span></td>
                                        <td>SPK - 456</td>
                                    </tr>
                                    <tr>
                                        <td><span className="fw-medium">Task Tags :</span></td>
                                        <td>
                                            <SpkBadge variant="info-transparent" Customclass="me-1">Marketing</SpkBadge>
                                            <SpkBadge variant="secondary-transparent">Campaign</SpkBadge>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span className="fw-medium">Project Name :</span></td>
                                        <td>
                                            New Product Launch Strategy
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="fw-medium">Assigned By :</span>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2 lh-1">
                                                    <span className="avatar avatar-xs avatar-rounded custom-width">
                                                        <Image fill src="../../../assets/images/faces/11.jpg" alt="" />
                                                    </span>
                                                </div>
                                                <span className="d-block fs-14 fw-medium">Emily Watson</span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="fw-medium">Progress :</span>
                                        </td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <ProgressBar className="progress progress-sm progress-animate flex-fill me-2" role="progressbar" aria-valuenow={45} aria-valuemin={0} aria-valuemax={100}>
                                                    <ProgressBar className="progress-bar bg-primary progress-bar-striped progress-bar-animated" style={{ width: '45%' }}></ProgressBar>
                                                </ProgressBar>
                                                <div className="text-muted fs-11">45%</div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span className="fw-medium">Project Status :</span></td>
                                        <td>
                                            <span className="fw-medium text-secondary">Inprogress</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span className="fw-medium">Project Priority :</span></td>
                                        <td>
                                            <SpkBadge variant="danger-transparent"><i className="ri-circle-fill fs-8"></i> High</SpkBadge>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span className="fw-medium">End Date :</span></td>
                                        <td>
                                            31, Dec 2024
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span className="fw-medium">Assigned To :</span></td>
                                        <td>
                                            <div className="avatar-list-stacked">
                                                <SpkTooltips tooltipClass="tooltip-primary" placement="top" title="Simon">
                                                    <span className="avatar avatar-sm avatar-rounded custom-width">
                                                        <Image fill src="../../../assets/images/faces/4.jpg" alt="Simon" />
                                                    </span>
                                                </SpkTooltips>
                                                <SpkTooltips tooltipClass="tooltip-primary" placement="top" title="Sasha">
                                                    <span className="avatar avatar-sm avatar-rounded custom-width">
                                                        <Image fill src="../../../assets/images/faces/12.jpg" alt="Sasha" />
                                                    </span>
                                                </SpkTooltips>
                                                <SpkTooltips tooltipClass="tooltip-primary" placement="top" title="Anagha">
                                                    <span className="avatar avatar-sm avatar-rounded custom-width">
                                                        <Image fill src="../../../assets/images/faces/5.jpg" alt="Anagha" />
                                                    </span>
                                                </SpkTooltips>
                                                <SpkTooltips tooltipClass="tooltip-primary" placement="top" title="Hishen">
                                                    <span className="avatar avatar-sm avatar-rounded custom-width">
                                                        <Image fill src="../../../assets/images/faces/6.jpg" alt="Hishen" />
                                                    </span>
                                                </SpkTooltips>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><span className="fw-medium">Last Updated Date :</span></td>
                                        <td>
                                            <span className="text-success fw-medium">18, June 2024</span>
                                            <span className="text-success fw-medium ms-1 d-inline-block">10:30</span>
                                        </td>
                                    </tr>
                                </SpkTables>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default TicketDetails;