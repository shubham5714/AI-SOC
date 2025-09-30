"use client"
import SpkSocialmediaCard from "@/shared/@spk-reusable-components/reusable-dashboard/spk-socialmedia";
import Spkapexcharts from "@/shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/reusable-uiElements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import SpkTooltips from "@/shared/@spk-reusable-components/reusable-uiElements/spk-tooltips";
import { Countries, DeviceSessions, DevicesOptions, DevicesSeries, PostInsight, ProfileAnalysisOptions, ProfileAnalysisSeries, Requests, Segmentation, SocialActivities, SocialCardData, SocialStats } from "@/shared/data/dashboards/socialmediadata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Col, Dropdown, Form, ListGroup, Row } from "react-bootstrap";

interface SocialMediaProps { }

const SocialMedia: React.FC<SocialMediaProps> = () => {
    return (
        <Fragment>
            <Seo title="Dashboards Social Media" />
            <Pageheader title='Dashboards' currentpage='Social Media' activepage='Social Media' />
            {/* <!-- Start::Row-1 --> */}
            <Row>
                {SocialCardData.map((idx) => (
                    <Col xxl={2} xl={4} key={idx.id}>
                        <SpkSocialmediaCard customCardClass="social-cards insta" cardBodyClass="flex-fill" card={idx} />
                    </Col>
                ))}
            </Row>
            {/* <!-- End::Row-1 --> */}

            {/* <!-- Start:: Row-2 --> */}
            <Row>
                <Col xxl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Profile Analysis
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="profile-analysis">
                                <Spkapexcharts chartOptions={ProfileAnalysisOptions} chartSeries={ProfileAnalysisSeries} type='line' width={'100%'} height={337} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Follow On Device
                            </Card.Title>
                            <Link scroll={false} href="#!" className="btn btn-light btn-sm text-muted">
                                View All
                            </Link>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div id="devices">
                                <Spkapexcharts chartOptions={DevicesOptions} chartSeries={DevicesSeries} type='donut' width={'100%'} height={178} />
                            </div>
                            <ListGroup className="list-group-flush border-top mt-3">
                                {DeviceSessions.map((idx) => (
                                    <ListGroup.Item key={idx.id}>
                                        <div className="d-flex align-items-start justify-content-between">
                                            <div className="session-type lh-1 mobile">
                                                <div className="fw-medium mb-1">{idx.type}</div>
                                                <span className="fs-12 text-muted">{idx.changeDirection} By<span className={`text-${idx.changeDirection === 'Increased' ? 'success' : 'danger'} fs-12 ms-1 fw-medium d-inline-block`}>{idx.change}</span></span>
                                            </div>
                                            <div className="lh-1 text-end">
                                                <span className="d-block fs-12 text-muted mb-1">Total</span>
                                                <span className="d-block fw-medium mb-0">{idx.total}</span>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Requests
                            </Card.Title>
                            <Link scroll={false} href="#!" className="btn btn-light btn-sm text-muted">
                                View All
                            </Link>
                        </Card.Header>
                        <Card.Body>
                            <ul className="list-unstyled personal-favourite mb-0">
                                {Requests.map((idx) => (
                                    <li key={idx.id}>
                                        <div className="d-flex align-items-center">
                                            <div className="me-2">
                                                <span className="avatar avatar-sm custom-width">
                                                    <Image fill src={idx.avatar} alt="" />
                                                </span>
                                            </div>
                                            <div className="flex-fill text-truncate">
                                                <span className="fw-medium d-block mb-0">{idx.name}</span>
                                                <span className="text-muted d-block fs-12 w-75 text-truncate">want's to add you as a friend </span>
                                            </div>
                                            <SpkDropdown Menuas='ul' toggleas='a' Customtoggleclass="btn btn-primary-light btn-icon btn-sm no-caret" Icon={true} IconClass="ri-more-2-fill">
                                                <li><Dropdown.Item className="text-success" href="#!"><i className="ri-check-line me-2 lh-1 align-middle"></i>Accept</Dropdown.Item></li>
                                                <li><Dropdown.Item className="text-danger" href="#!"><i className="ri-close-line me-2 lh-1 align-middle"></i>Reject</Dropdown.Item></li>
                                            </SpkDropdown>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: Row-2 --> */}

            {/* <!-- Start:: Row-3 --> */}
            <Row>
                <Col xxl={3} xl={6}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Followers Segmentation
                            </Card.Title>
                            <Link scroll={false} href="#!" className="fs-12 text-muted py-1 tag-link"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                        </Card.Header>
                        <Card.Body>
                            <ul className="list-unstyled followers-segmentation-list">
                                {Segmentation.map((idx) => (
                                    <li key={idx.id}>
                                        <div className="d-flex gap-2 flex-wrap align-items-start justify-content-between mb-2">
                                            <div className="d-flex flex-fill align-items-center">
                                                <div className="me-2">
                                                    <span className="fw-medium">
                                                        {idx.label}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="fw-medium fs-14 text-end">
                                                <span className="d-block text-muted">{idx.count}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="progress progress-xs mt-2">
                                                <div className={`progress-bar progress-bar-animated bg-${idx.color} progress-bar-striped progress-bar-animated`} style={{ width: `${idx.percentage}%` }}></div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6} xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Post Insight
                            </Card.Title>
                            <Link scroll={false} href="#!" className="fs-12 text-muted tag-link"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="table text-nowrap table-hover" header={[{ title: 'Post Name' }, { title: 'Posted On' }, { title: 'Platform' }, { title: 'Views' }, { title: 'Earning' }, { title: 'Action' },]}>
                                    {PostInsight.map((idx) => (
                                        <tr key={idx.id}>
                                            <td className={idx.tdClass}>
                                                <div className="d-flex align-items-center gap-2">
                                                    <span className="avatar avatar-sm">
                                                        <Image width={28} height={28} src={idx.image} alt="image" />
                                                    </span>
                                                    <span className="fw-medium">{idx.title}</span>
                                                </div>
                                            </td>
                                            <td className={idx.tdClass}>
                                                {idx.date}
                                            </td>
                                            <td className={idx.tdClass}><SpkBadge variant={`${idx.platformClass}-transparent`}>{idx.platform}</SpkBadge></td>
                                            <td className={idx.tdClass}>
                                                {idx.views}
                                            </td>
                                            <td className={idx.tdClass}>
                                                {idx.revenue}
                                            </td>
                                            <td className={`text-end ${idx.tdClass ? `${idx.tdClass}` : ''}`}>
                                                <div className="btn-list">
                                                    <SpkTooltips placement="top" title="Edit">
                                                        <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-light"><i className="bi bi-pencil-square"></i></Link>
                                                    </SpkTooltips>
                                                    <SpkTooltips placement="top" title="Delete">
                                                        <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-light"><i className="bi bi-trash"></i></Link>
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
                <Col xxl={3}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Audience Top Countries
                            </Card.Title>
                            <Link scroll={false} href="#!" className="text-muted fs-12 tag-link">View All<i className="ti ti-arrow-narrow-right ms-1"></i></Link>
                        </Card.Header>
                        <Card.Body>
                            <ul className="list-unstyled top-country-audience">
                                {Countries.map((idx) => (
                                    <li key={idx.id}>
                                        <div className="d-flex align-items-center gap-3">
                                            <div>
                                                <span className="avatar avatar-md bg-light p-2 custom-width">
                                                    <Image fill src={idx.image} alt="" />
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <span className="d-block fw-medium">{idx.name}</span>
                                                <span className="fs-12 text-muted d-block">{idx.company}</span>
                                            </div>
                                            <div>
                                                <SpkBadge variant={`${idx.badgeColor}-transparent`}>{idx.users}</SpkBadge>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: Row-3 --> */}

            {/* <!-- Start::Row-3 --> */}
            <Row>
                <Col xxl={9}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Social Media Performance
                            </Card.Title>
                            <div className="d-flex flex-wrap gap-2">
                                <div>
                                    <Form.Control className="form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
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
                                <SpkTables tableClass="table text-nowrap" header={[{ title: 'Platform' }, { title: 'Date' }, { title: 'Likes' }, { title: 'Comments' }, { title: 'Shares' }, { title: 'Impressions' }, { title: 'Engagemen(%)' }, { title: 'Action' },]}>
                                    {SocialStats.map((idx) => (
                                        <tr key={idx.id}>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <span className={`avatar avatar-sm bg-${idx.colorClass}-transparent`}>
                                                        <i className={`ri-${idx.icon} fs-16`}></i>
                                                    </span>
                                                    <Link scroll={false} href="#!" className="fw-medium">{idx.platform}</Link>
                                                </div>
                                            </td>
                                            <td>
                                                {idx.date}
                                            </td>
                                            <td>
                                                {idx.posts}
                                            </td>
                                            <td>
                                                {idx.likes}
                                            </td>
                                            <td>
                                                {idx.comments}
                                            </td>
                                            <td>
                                                <SpkBadge variant={`${idx.colorClass}-transparent`}>{idx.reach}</SpkBadge>
                                            </td>
                                            <td>
                                                {idx.engagement}
                                            </td>
                                            <td>
                                                <SpkButton Buttonvariant="primary-light" Customclass="btn btn-sm">View Details</SpkButton>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                        <Card.Footer className="border-top-0">
                            <div className="d-flex align-items-center">
                                <div> Showing 5 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i> </div>
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
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Recent Activities
                            </Card.Title>
                            <Link scroll={false} href="#!" className="fs-12 text-muted tag-link"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                        </Card.Header>
                        <Card.Body>
                            <ul className="list-unstyled mb-0 social-activity">
                                {SocialActivities.map((idx) => (
                                    <li className={`social-activity-content ${idx.liClass ? `${idx.liClass}` : ''}`} key={idx.id}>
                                        <div className="d-flex align-items-top">
                                            <div className="me-3">
                                                <span className="avatar avatar-sm avatar-rounded custom-width">
                                                    <Image fill src={idx.image} alt="" />
                                                </span>
                                            </div>
                                            <div className="social-content">
                                                <span className="d-block fw-medium">{idx.action}</span>
                                                <div className="d-flex gap-2 mt-1">
                                                    <span>{idx.date}</span>
                                                    <span className="d-block fs-12 text-muted">{idx.platform}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End::Row-3 --> */}
        </Fragment>
    );
};

export default SocialMedia;