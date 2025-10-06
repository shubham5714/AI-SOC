"use client"
import SpkExecutiveCard from "@/shared/@spk-reusable-components/reusable-dashboard/spk-executive";
import Spkapexcharts from "@/shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import SpkBadge from "@/shared/@spk-reusable-components/reusable-uiElements/spk-badge";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import { DashboardCardData, OrderStatusOptions, OrderStatusSeries, RecentActivity, RecentOrders, SellingProducts, TotalOrdersOptions, TotalOrdersSeries } from "@/shared/data/dashboards/executivedata";
import { TaskActivityType, TasksActivityOptions, TasksActivitySeries } from "@/shared/data/dashboards/projectsdata";
import { Funneloptions, Funnelseries } from "@/shared/data/charts/apexcharts/funnelchartdata";
import { AttendanceOverviewOptions, AttendanceOverviewSeries } from "@/shared/data/dashboards/schooldata";
import { BasiSlopChartOptions, BasiSlopChartSeries } from "@/shared/data/charts/apexcharts/slopechartdata";
import * as widgetsData from "@/shared/data/widgetsdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkRibbons from "@/shared/@spk-reusable-components/reusable-advancedui/spk-ribbons";
import { useUserContext } from "@/shared/contextapi/UserContext";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Col, Dropdown, ListGroup, ProgressBar, Row } from "react-bootstrap";

interface ExecutiveProps { }

const Executive: React.FC<ExecutiveProps> = () => {
    // Use user context
    const { userData, isLoading: userLoading } = useUserContext();

    // Show loading state while waiting for userData
    if (userLoading || !userData) {
        return (
            <Fragment>
                <Seo title="Dashboards Executive" />
                <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
                    <div className="text-center">
                        <div className="spinner-border text-primary mb-3" role="status" style={{ width: '3rem', height: '3rem' }}>
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="fs-5 fw-medium text-primary">Loading Dashboard...</div>
                        <div className="fs-6 text-muted mt-2">Preparing your data</div>
                    </div>
                </div>
            </Fragment>
        );
    }

    return (
        <Fragment>
            <Seo title="Dashboards Executive" />
            
            {/*<!-- Start::page-header -->*/}
            <Row className="my-4">
                <Col xl={3}>
                    <div>
                        <p className="fw-medium fs-20 mb-0">
                            Hey, {userData?.username || 'User'} &#128075;
                        </p>
                        <p className="fs-13 text-muted mb-0">Manage your Alerts with AI insights.</p>
                    </div>
                </Col>
                <Col xl={9}>
                    <Card className="custom-card mb-0 shadow-none border overflow-hidden">
                        <Card.Body className="p-4">
                            <SpkRibbons ribbonClass="ribbon-6 ribbon-left ribbon-primary">AI Insights</SpkRibbons>
                            <div className="text-center">
                                <h5 className="fw-semibold mb-2">AI-Powered Insights</h5>
                                <p className="text-muted mb-0">Get intelligent insights and recommendations powered by artificial intelligence to optimize your security posture.</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/*<!-- End::page-header -->*/}
            
            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xxl={12}>
                    {/* Horizontal Cards Row */}
                    <Row className="mb-2">
                        {DashboardCardData.map((idx) => (
                            <Col xl={3} md={6} key={idx.id}>
                                <SpkExecutiveCard card={idx} />
                            </Col>
                        ))}
                    </Row>
                    
                    {/* Additional Content */}
                    <Row>
                        <Col xl={6}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>Alert Trend</Card.Title>
                                </Card.Header>
                                <Card.Body className="pb-2">
                                    <div id="order-status">
                                        <Spkapexcharts chartOptions={OrderStatusOptions} chartSeries={OrderStatusSeries} type='line' width={'100%'} height={300} />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={3}>
                            <Card className="custom-card overflow-hidden">
                                <Card.Header>
                                    <Card.Title>Open Alerts Severity Distribution</Card.Title>
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
                                                        {idx.changeType && idx.change && (
                                                            <span className="fs-12 text-muted">{idx.changeType} By<span className={`text-${idx.changeType === 'Increased' ? 'success' : 'danger'} fs-12 ms-1 fw-medium d-inline-block`}>{idx.change}</span></span>
                                                        )}
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
                        <Col xl={3}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>Events vs Alerts vs Incidents</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <div id="funnel-chart">
                                        <Spkapexcharts chartOptions={Funneloptions} chartSeries={Funnelseries} type="bar" width={"100%"} height={350} />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={3}>
                            <Card className="custom-card overflow-hidden">
                                <Card.Header className=" justify-content-between">
                                    <Card.Title>Total Sales</Card.Title>
                                    <SpkDropdown toggleas='button' Customtoggleclass="btn btn-outline-light border d-flex align-items-center text-muted no-caret" Toggletext="Monthly" Icon={true} IconClass="bx bx-caret-down ms-1 fs-16">
                                        <li><Dropdown.Item href="#!">Yearly</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">Monthly</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">Weakly</Dropdown.Item></li>
                                    </SpkDropdown>
                                </Card.Header>
                                <Card.Body className=" pb-0">
                                    <div className="circle-chart-widget">
                                        <div id="circlechart">
                                            <Spkapexcharts chartOptions={widgetsData.TotalSalesOptions1} chartSeries={widgetsData.TotalSalesSeries1} type='radialBar' width={'100%'} height={300} />
                                        </div>
                                    </div>
                                    <Row className="border-top mt-3 border-block-start-dashed">
                                        <Col className=" border-end border-inline-end-dashed">
                                            <div className="text-center p-3">
                                                <span className="visit-gender male">Avarage Sales</span>
                                                <div className="mt-1">
                                                    <span className="fs-18">1,654</span>
                                                </div>
                                                <SpkBadge variant="success-transparent" Customclass="text-success mt-1 rounded-pill">+12.3%</SpkBadge>
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="text-center p-3">
                                                <span className="visit-gender female">Average Profit</span>
                                                <div className="mt-1">
                                                    <span className="fs-18">$12,234</span>
                                                </div>
                                                <SpkBadge variant="danger-transparent" Customclass="badge text-danger mt-1 rounded-pill">-11.3%</SpkBadge>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={3}>
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
                        <Col xl={3}>
                            <Card className="custom-card">
                                <Card.Header className="">
                                    <Card.Title>Recent Transactions</Card.Title>
                                </Card.Header>
                                <Card.Body className=" p-0">
                                    <div id="chart-15">
                                        <Spkapexcharts chartOptions={widgetsData.RecentTransactionsOptions} chartSeries={widgetsData.RecentTransactionsSeries} type='line' width={'100%'} height={153} />
                                    </div>
                                    <ul className="list-unstyled mb-0 top-customers p-3">
                                        {widgetsData.RecentTransactions.map((idx) => (
                                            <li key={idx.id}>
                                                <Link scroll={false} href="#!">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-top justify-content-center">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-md avatar-rounded custom-width">
                                                                    <Image fill src={idx.avatarSrc} alt="" />
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <p className="mb-0 fs-14">{idx.name}</p>
                                                                <p className="mb-0 text-muted fs-12">{idx.purchases} Purchases</p>
                                                            </div>
                                                        </div>
                                                        <div className="text-end">
                                                            <span className="text-muted d-block fs-12">Sale Value</span>
                                                            <span className="fs-14">{idx.saleValue}</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={3}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>Basic Slope Chart</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <div id="basic-slope-chart">
                                        <Spkapexcharts chartOptions={BasiSlopChartOptions} chartSeries={BasiSlopChartSeries} type='line' width={'100%'} height={300} />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}
        </Fragment>
    );
};

export default Executive;