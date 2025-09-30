"use client"
import Spkapexcharts from "@/shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import SpkBadge from "@/shared/@spk-reusable-components/reusable-uiElements/spk-badge";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import SpkWidgetsrow1Card from "@/shared/@spk-reusable-components/reusable-widgets/spk-widgetsrow1";
import SpkWidgetsrow2Card from "@/shared/@spk-reusable-components/reusable-widgets/spk-widgetsrow2";
import SpkWidgetsrow3Card from "@/shared/@spk-reusable-components/reusable-widgets/spk-widgetsrow3";
import SpkWidgetsrow4Card from "@/shared/@spk-reusable-components/reusable-widgets/spk-widgetsrow4";
import * as widgetsData from "@/shared/data/widgetsdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Col, Dropdown, ListGroup, ProgressBar, Row } from "react-bootstrap";

interface WidgetsProps { }

const Widgets: React.FC<WidgetsProps> = () => {
    return (
        <Fragment>
            <Seo title={"Widgets"} />
            <Pageheader title="Widgets" currentpage="Widgets" activepage="Widgets" />
            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xxl={9}>
                    <Row>
                        {widgetsData.WidgetsCardData.map((idx) => (
                            <Col md={6} xl={3} key={idx.id}>
                                <SpkWidgetsrow1Card card={idx} />
                            </Col>
                        ))}
                        {widgetsData.MetricsData.map((idx) => (
                            <Col md={6} xl={3} key={idx.id}>
                                <SpkWidgetsrow2Card card={idx} />
                            </Col>
                        ))}
                        <Col xxl={8}>
                            <Card className="custom-card">
                                <Card.Header className=" justify-content-between">
                                    <Card.Title >Sales Analysis</Card.Title>
                                    <SpkDropdown toggleas='a' Customtoggleclass="btn btn-sm btn-outline-light text-muted no-caret" Toggletext="View All" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                        <li><Dropdown.Item href="#!">Today</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">Last Week</Dropdown.Item></li>
                                    </SpkDropdown>
                                </Card.Header>
                                <Card.Body>
                                    <div id="widgets-sales-analysis">
                                        <Spkapexcharts chartOptions={widgetsData.SalesAnalysisOptions} chartSeries={widgetsData.SalesAnalysisSeries} type='line' width={'100%'} height={388} />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={4}>
                            <Card className="custom-card">
                                <Card.Header className=" justify-content-between flex-wrap">
                                    <Card.Title >Customers Activity</Card.Title>
                                    <SpkDropdown toggleas='a' Customtoggleclass="btn btn-sm btn-outline-light text-muted no-caret" Toggletext="View All" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                        <li><Dropdown.Item href="#!">Today</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">Last Week</Dropdown.Item></li>
                                    </SpkDropdown>
                                </Card.Header>
                                <Card.Body>
                                    <Row className="gy-2 gy-xl-0">
                                        <Col xl={6}>
                                            <div className="p-2 border br-7 bg-success-transparent">
                                                <h5 className="mb-2 text-center text-success">1586</h5>
                                                <p className="text-muted fs-13 text-center mb-0 text-success">New Customers</p>
                                            </div>
                                        </Col>
                                        <Col xl={6}>
                                            <div className="p-2 border br-7 bg-danger-transparent">
                                                <h5 className="mb-2 text-center text-danger">486</h5>
                                                <p className="text-muted fs-13 text-center mb-0 text-danger">Return Customers
                                                </p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <p className="mb-2 mt-3 fw-medium">Recent Transactions</p>
                                    <div>
                                        {widgetsData.ActivityData.map((idx) => (
                                            <div className="p-2 border rounded mb-2 d-flex align-items-center justify-content-between mb-0" key={idx.id}>
                                                <div className="d-flex gap-3 align-items-center">
                                                    <span className="avatar avatar-md flex-shrink-0 custom-width">
                                                        <Image fill src={idx.image} alt="" className="rounded-pill" />
                                                    </span>
                                                    <div>
                                                        <p className="mb-0 fw-medium">{idx.name}</p>
                                                        <span className="text-muted fs-12">{idx.message}</span>
                                                    </div>
                                                </div>
                                                <div className="text-end">
                                                    <p className="mb-0 fs-18 fw-medium text-end">{idx.amount}</p>
                                                    <span className="text-muted fs-12 text-end">
                                                        {idx.time}</span>
                                                </div>
                                            </div>
                                        ))}
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
                                <Card.Header className=" justify-content-between">
                                    <Card.Title >
                                        Total Revenue
                                    </Card.Title>
                                    <SpkDropdown toggleas='a' Customtoggleclass="btn btn-sm btn-outline-light text-muted no-caret" Toggletext="View All" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                        <li><Dropdown.Item href="#!">Today</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">Last Week</Dropdown.Item></li>
                                    </SpkDropdown>
                                </Card.Header>
                                <Card.Body className=" pb-0">
                                    <div className="d-flex align-items-center mb-2">
                                        <h3 className="fw-medium mb-0">$4,289</h3>
                                        <div className="ms-2">
                                            <SpkBadge variant="success-transparent">1.02<i className="ri-arrow-up-s-fill align-mmiddle ms-1"></i></SpkBadge>
                                        </div>
                                    </div>
                                    <ProgressBar className="progress-stacked progress-animate progress-sm mb-4">
                                        <ProgressBar className="" role="progressbar" style={{ width: '30%' }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100}></ProgressBar>
                                        <ProgressBar className=" bg-info" role="progressbar" style={{ width: '30%' }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100}></ProgressBar>
                                        <ProgressBar className=" bg-success" role="progressbar" style={{ width: '40%' }} aria-valuenow={30} aria-valuemin={0} aria-valuemax={100}></ProgressBar>
                                    </ProgressBar>
                                </Card.Body>
                                <ListGroup className="list-group-flush revenue-list border-top">
                                    {widgetsData.RevenueData.map((idx) => (
                                        <ListGroup.Item className={`${idx.listClass ? `${idx.listClass}` : ''}`} key={idx.id}>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-fill align-items-center pt-1">
                                                    <div className="d-flex align-items-top justify-content-between">
                                                        <p className="mb-0 text-muted d-flex align-items-center"><i className={`ti ti-point-filled fs-20 text-${idx.iconColor} me-1`}></i>{idx.title}</p>
                                                        <h6 className=" mb-0 lh-1">{idx.amount}</h6>
                                                    </div>
                                                    <div className={`text-${idx.arrow === 'up' ? 'success' : 'danger'}`}><i className={`ri-arrow-${idx.arrow}-s-fill me-1 align-middle`}></i>{idx.percentage}
                                                    </div>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header className="">
                                    <Card.Title >Total Sales</Card.Title>
                                </Card.Header>
                                <Card.Body className=" pb-0">
                                    <div id="websitedesign">
                                        <Spkapexcharts chartOptions={widgetsData.TotalSalesOptions} chartSeries={widgetsData.TotalSalesSeries} type='bar' width={'100%'} height={260} />
                                    </div>
                                </Card.Body>
                                <Card.Footer className="p-0">
                                    <Row>
                                        <Col xl={6} className="text-center border-end p-2">
                                            <p className="mb-1"><i className="bx bxs-circle text-orange fs-10 me-1"></i>Sale Items</p>
                                            <h5 className="mb-1 fw-semibold">567</h5>
                                        </Col>
                                        <Col xl={6} className="text-center p-2">
                                            <p className="mb-1"><i className="bx bxs-circle text-orange op-2 fs-10 me-1"></i>Sale Value</p>
                                            <h5 className="mb-1 fw-semibold">$1267</h5>
                                        </Col>
                                    </Row>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row>
                <Col md={12} xxl={9}>
                    <Row>
                        {widgetsData.WidgetsCardData1.map((idx) => (
                            <Col md={6} xl={3} key={idx.id}>
                                <SpkWidgetsrow3Card card={idx} />
                            </Col>
                        ))}
                        <Col xxl={8}>
                            <Card className="custom-card">
                                <Card.Header className=" justify-content-between">
                                    <Card.Title >Sales Revenue</Card.Title>
                                    <SpkDropdown toggleas='button' Customtoggleclass="btn btn-outline-light border d-flex align-items-center text-muted no-caret" Toggletext="Monthly" Icon={true} IconClass="bx bx-caret-down ms-1 fs-16">
                                        <li><Dropdown.Item href="#!">Yearly</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">Monthly</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">Weakly</Dropdown.Item></li>
                                    </SpkDropdown>
                                </Card.Header>
                                <Card.Body>
                                    <div id="salerevenue">
                                        <Spkapexcharts chartOptions={widgetsData.SalesRevenueOptions} chartSeries={widgetsData.SalesRevenueSeries} type='line' width={'100%'} height={356} />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={12} xl={12} xxl={4}>
                            <Card className="custom-card overflow-hidden">
                                <Card.Header className=" justify-content-between">
                                    <Card.Title >Total Sales</Card.Title>
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
                    </Row>
                </Col>
                <Col md={12} xxl={3}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title >Top Customers</Card.Title>
                            <SpkDropdown toggleas='button' Customtoggleclass="btn btn-outline-light border d-flex align-items-center text-muted no-caret" Toggletext="View All" Icon={true} IconClass="bx bx-caret-down ms-1 fs-16">
                                <li><Dropdown.Item href="#!">Yearly</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Monthly</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Weakly</Dropdown.Item></li>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body>
                            <ul className="list-unstyled crm-top-deals mb-0">
                                {widgetsData.PeopleData.map((idx) => (
                                    <li key={idx.id}>
                                        <div className="d-flex align-items-center flex-wrap">
                                            <div className="me-2 lh-1">
                                                <span className="avatar avatar-sm avatar-rounded custom-width">
                                                    <Image fill src={idx.image} alt="" />
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <span className="fw-medium d-block mb-0">{idx.name}</span>
                                                <span className="text-muted fs-12">{idx.email}</span>
                                            </div>
                                            <div>
                                                <span className="">{idx.amount}</span>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title >Sales details</Card.Title>
                            <SpkDropdown toggleas='button' Customtoggleclass="btn btn-outline-light border d-flex align-items-center text-muted no-caret" Toggletext="View All" Icon={true} IconClass="bx bx-caret-down ms-1 fs-16">
                                <li><Dropdown.Item href="#!">Yearly</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Monthly</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Weakly</Dropdown.Item></li>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body>
                            <ul className="list-unstyled crm-top-deals mb-0">
                                <li>
                                    <div className="d-flex align-items-top flex-wrap mb-4">
                                        <div className="me-2 lh-1">
                                            <span className="avatar avatar-sm avatar-rounded bg-primary-transparent">
                                                <i className="bi bi-wallet text-primary fs-16"></i>
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <div className="d-flex justify-content-between mb-1">
                                                <span className="d-block mb-2 lh-1">Total Income</span>
                                                <span className="">$6,192</span>
                                            </div>
                                            <div className="progress progress-xs mb-0" role="progressbar" aria-label="Basic example" aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}>
                                                <div className="progress-bar bg-primary" style={{ width: '65%' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex align-items-top flex-wrap mb-4">
                                        <div className="me-2 lh-1">
                                            <span className="avatar avatar-sm avatar-rounded bg-info-transparent">
                                                <i className="bi bi-suitcase-lg fs-16 text-info"></i>
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <div className="d-flex justify-content-between mb-1">
                                                <span className="d-block mb-2 lh-1">Total Expense</span>
                                                <span className="">$6,192</span>
                                            </div>
                                            <ProgressBar className="progress progress-xs mb-0" role="progressbar" aria-label="Basic example" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100}>
                                                <ProgressBar className="progress-bar bg-info" style={{ width: '55%' }}></ProgressBar>
                                            </ProgressBar>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex align-items-top flex-wrap mb-2">
                                        <div className="me-2 lh-1">
                                            <span className="avatar avatar-sm avatar-rounded bg-secondary-transparent">
                                                <i className="bi bi-bar-chart-line text-secondary fs-16"></i>
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <div className="d-flex justify-content-between mb-1">
                                                <span className="d-block mb-2 lh-1">Total Profit</span>
                                                <span className="">$6,192</span>
                                            </div>
                                            <ProgressBar className="progress progress-xs mb-0" role="progressbar" aria-label="Basic example" aria-valuenow={45} aria-valuemin={0} aria-valuemax={100}>
                                                <ProgressBar className="progress-bar bg-secondary" style={{ width: '45%' }}></ProgressBar>
                                            </ProgressBar>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-2 --> */}

            {/* <!-- Start:: row-3 --> */}
            <Row>
                <Col md={12} xxl={4}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title >Sales Revenue</Card.Title>
                            <div className="d-flex gap-2">
                                <div className="btn btn-outline-light border btn-full btn-sm">Today<span
                                    className="btn-con"><i className="bx bxs-circle fs-7 ms-2 text-primary"></i></span></div>
                                <div className="btn btn-outline-light border btn-full btn-sm">Weakly<span><i
                                    className="bx bxs-circle fs-7 ms-2 text-secondary op-5"></i></span>
                                </div>
                                <div className="btn btn-outline-light border btn-full btn-sm">Yearly<span><i
                                    className="bx bxs-circle fs-7 ms-2 text-secondary op-5"></i></span>
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="salerevenue1">
                                <Spkapexcharts chartOptions={widgetsData.SalesRevenueOptions1} chartSeries={widgetsData.SalesRevenueSeries1} type='line' width={'100%'} height={200} />
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className=" justify-content-between">
                            <Card.Title >
                                Total Revenue
                            </Card.Title>
                            <SpkDropdown toggleas='button' Customtoggleclass="btn btn-outline-light border btn-full btn-sm no-caret" Toggletext="View All" Icon={true} IconClass="ti ti-chevron-down ms-1 d-inline-block">
                                <li><Dropdown.Item href="#!">Download</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Import</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Export</Dropdown.Item></li>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body>
                            <div id="sales-statistics1">
                                <Spkapexcharts chartOptions={widgetsData.TotalRevenueOptions} chartSeries={widgetsData.TotalRevenueSeries} type='bar' width={'100%'} height={249} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={12} xxl={5}>
                    <Row>
                        {widgetsData.WidgetsCard.map((idx) => (
                            <Col md={6} xl={6} key={idx.id}>
                                <SpkWidgetsrow4Card card={idx} />
                            </Col>
                        ))}
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header className=" justify-content-between">
                                    <Card.Title >Total Sales</Card.Title>
                                    <SpkDropdown toggleas='button' Customtoggleclass="btn btn-outline-light border btn-full btn-sm no-caret" Toggletext="View All" Icon={true} IconClass="ti ti-chevron-down ms-1 d-inline-block">
                                        <li><Dropdown.Item href="#!">Download</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">Import</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">Export</Dropdown.Item></li>
                                    </SpkDropdown>
                                </Card.Header>
                                <Card.Body>
                                    <div id="audienceReport">
                                        <Spkapexcharts chartOptions={widgetsData.TotalSalesOptions2} chartSeries={widgetsData.TotalSalesSeries2} type='bar' width={'100%'} height={265} />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col md={12} xxl={3}>
                    <Card className="custom-card">
                        <Card.Header className="">
                            <Card.Title >Recent Transactions</Card.Title>
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
            </Row>
            {/* <!-- End:: row-3 --> */}
        </Fragment>
    );
};

export default Widgets;