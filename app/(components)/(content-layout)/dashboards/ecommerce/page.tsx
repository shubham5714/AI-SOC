"use client"
import SpkEcommerceCard from "@/shared/@spk-reusable-components/reusable-dashboard/spk-ecommerce";
import Spkapexcharts from "@/shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/reusable-uiElements/spk-badge";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import SpkTooltips from "@/shared/@spk-reusable-components/reusable-uiElements/spk-tooltips";
import { AddedProducts, AddedProductsType, DashboardCardData, OrderStatusOptions, OrderStatusSeries, PaymentMethods, RecentActivity, RecentOrders, SellingProducts, TopSellingOptions, TopSellingSeries, TotalOrdersOptions, TotalOrdersSeries, TrafficSources } from "@/shared/data/dashboards/ecommercedata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Card, Col, Dropdown, Form, ListGroup, ProgressBar, Row } from "react-bootstrap";

interface EcommerceProps { }

const Ecommerce: React.FC<EcommerceProps> = () => {

    const [searchTerm, setSearchTerm] = useState<string>('');

    const Addedproducts: AddedProductsType[] = AddedProducts.filter(Product =>
        Product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <Fragment>
            <Seo title="Dashboards Ecommerce" />
            <Pageheader title='Dashboards' currentpage='Ecommerce' activepage='Ecommerce' />
            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xxl={9}>
                    <Row>
                        {DashboardCardData.map((idx) => (
                            <Col xl={3} md={6} key={idx.id}>
                                <SpkEcommerceCard card={idx} />
                            </Col>
                        ))}
                        <Col xl={8}>
                            <Card className="custom-card">
                                <Card.Header className="justify-content-between">
                                    <Card.Title>Order Status</Card.Title>
                                    <div className="d-flex gap-2">
                                        <div className="btn btn-sm btn-outline-light">Today</div>
                                        <div className="btn btn-sm btn-outline-light">Weakly</div>
                                        <div className="btn btn-sm btn-light">Yearly</div>
                                    </div>
                                </Card.Header>
                                <Card.Body className="pb-2">
                                    <div id="order-status">
                                        <Spkapexcharts chartOptions={OrderStatusOptions} chartSeries={OrderStatusSeries} type='line' width={'100%'} height={300} />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={4}>
                            <Card className="custom-card overflow-hidden">
                                <Card.Header className="justify-content-between">
                                    <Card.Title>Recent Orders</Card.Title>
                                    <Link scroll={false} href="#!" className="btn btn-outline-light border d-flex align-items-center text-muted btn-sm">
                                        View All
                                    </Link>
                                </Card.Header>
                                <Card.Body className="p-0">
                                    <div className="table-responsive">
                                        <SpkTables tableClass="table text-nowrap table-hover" header={[{ title: 'Order ID' }, { title: 'Customer' }, { title: 'Amount' },]}>
                                            {RecentOrders.map((idx) => (
                                                <tr key={idx.id}>
                                                    <td className={idx.tdClass}><Link scroll={false} href="#!" className="text-primary">{idx.orderId}</Link></td>
                                                    <td className={idx.tdClass}>
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2 lh-1">
                                                                <span className="avatar avatar-sm custom-width">
                                                                    <Image fill src={idx.avatar} alt="" />
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <Link scroll={false} href="#!" className="fw-medium">{idx.name}</Link>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className={idx.tdClass}>
                                                        <span className="d-block mb-1">{idx.amount}</span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </SpkTables>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={4}>
                            <Card className="custom-card overflow-hidden">
                                <Card.Header className="justify-content-between">
                                    <Card.Title>
                                        Payment Methods
                                    </Card.Title>
                                    <SpkDropdown toggleas='a' Customtoggleclass="btn btn-outline-light btn-icons btn-sm text-muted no-caret" Icon={true} IconClass="fe fe-more-vertical">
                                        <li className="border-bottom"><Dropdown.Item href="#!">Today</Dropdown.Item></li>
                                        <li className="border-bottom"><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">Last Week</Dropdown.Item></li>
                                    </SpkDropdown>
                                </Card.Header>
                                <Card.Body>
                                    <ul className="list-unstyled payment-methods-list">
                                        {PaymentMethods.map((idx) => (
                                            <li className="d-flex justify-content-between align-items-center" key={idx.id}>
                                                <div className="lh-1">
                                                    <i className={`ri-${idx.iconClass} lh-1 me-2 fs-22 rounded-1 align-middle text-${idx.textColor}`}></i>
                                                    {idx.name}
                                                </div>
                                                <SpkBadge variant="primary" Customclass="rounded-pill">{idx.percentage}</SpkBadge>
                                            </li>
                                        ))}
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={4}>
                            <Card className="custom-card">
                                <Card.Header className="justify-content-between flex-wrap">
                                    <Card.Title>
                                        Top Selling Categories
                                    </Card.Title>
                                    <SpkDropdown toggleas='a' Customtoggleclass="btn btn-outline-light btn-icons btn-sm text-muted no-caret" Icon={true} IconClass="fe fe-more-vertical">
                                        <li className="border-bottom"><Dropdown.Item href="#!">Today</Dropdown.Item></li>
                                        <li className="border-bottom"><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">Last Week</Dropdown.Item></li>
                                    </SpkDropdown>
                                </Card.Header>
                                <Card.Body className="py-0">
                                    <div id="top-selling-categories">
                                        <Spkapexcharts chartOptions={TopSellingOptions} chartSeries={TopSellingSeries} type='bar' width={'100%'} height={310} />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={4}>
                            <Card className="custom-card overflow-hidden">
                                <Card.Header className="justify-content-between pb-3">
                                    <Card.Title>
                                        Traffic Sources
                                    </Card.Title>
                                    <SpkDropdown toggleas='a' Customtoggleclass="btn btn-light btn-sm text-muted no-caret" Icon={true} Toggletext="View All" IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                        <li><Dropdown.Item href="#!">Download</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">Import</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">Export</Dropdown.Item></li>
                                    </SpkDropdown>
                                </Card.Header>
                                <Card.Body className="p-0">
                                    <div className="table-responsive">
                                        <SpkTables tableClass="table table-hover text-nowrap" header={[{ title: 'Browser' }, { title: 'Traffic' }, { title: 'Sessions', headerClassname: 'text-center' },]}>
                                            {TrafficSources.map((idx) => (
                                                <tr key={idx.id}>
                                                    <td className={idx.tdClass}>
                                                        <div className="d-flex align-items-center">
                                                            <span className="avatar  avatar-sm p-1 bg-light me-2 custom-width">
                                                                <Image fill src={idx.logo} alt="" />
                                                            </span>
                                                            <div className="fw-medium">{idx.name}</div>
                                                        </div>
                                                    </td>
                                                    <td className={idx.tdClass}>
                                                        <ProgressBar className="progress progress-sm">
                                                            <ProgressBar className={`progress-bar progress-bar-striped progress-bar-animated bg-${idx.progressColor}`} role="progressbar" style={{ width: `${idx.progress}%` }} aria-valuenow={idx.progress} aria-valuemin={0} aria-valuemax={100}></ProgressBar>
                                                        </ProgressBar>
                                                    </td>
                                                    <td className={`text-center ${idx.tdClass}`}>
                                                        <span>{idx.visits}<i className={`ri-arrow-${idx.trend}-s-fill ms-1 text-${idx.trend === 'up' ? 'success' : 'danger'} align-middle fs-18`}></i></span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </SpkTables>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header className="justify-content-between">
                                    <Card.Title>
                                        Newly Added Products
                                    </Card.Title>
                                    <div className="d-sm-flex">
                                        <div className="me-3 mb-3 mb-sm-0">
                                            <Form.Control className="form-control-sm" type="text" placeholder="Search" value={searchTerm} onChange={handleSearch} aria-label=".form-control-sm example" />
                                        </div>
                                        <SpkDropdown toggleas='a' Customtoggleclass="btn btn-primary btn-sm no-caret" Icon={true} Toggletext="Sort By" IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                            <li><Dropdown.Item href="#!">New</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#!">Popular</Dropdown.Item></li>
                                            <li><Dropdown.Item href="#!">Relevant</Dropdown.Item></li>
                                        </SpkDropdown>
                                    </div>
                                </Card.Header>
                                <Card.Body className="p-0">
                                    <div className="table-responsive">
                                        <SpkTables tableClass="table text-nowrap" header={[{ title: 'Product Id' }, { title: 'Product Name' }, { title: 'Category' }, { title: '% Discount' }, { title: 'Price' }, { title: 'Status' }, { title: 'Added Date' }, { title: 'Actions' },]}>
                                            {Addedproducts.length > 0 ? (
                                                Addedproducts.map((idx) => (
                                                    <tr key={idx.id} className="">
                                                        <td>
                                                            <span className="fw-medium">{idx.orderId}</span>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                <div className="me-2 lh-1">
                                                                    <span className="avatar avatar-md bg-light custom-width">
                                                                        <Image fill src={idx.image} alt="" />
                                                                    </span>
                                                                </div>
                                                                <div>{idx.name}</div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="fw-medium">{idx.category}</span>
                                                        </td>
                                                        <td>
                                                            <SpkBadge variant="primary">{idx.discount}</SpkBadge>
                                                        </td>
                                                        <td>
                                                            {idx.price}
                                                        </td>
                                                        <td>
                                                            <SpkBadge variant={`${idx.statusClass}-transparent`}>{idx.status}</SpkBadge>
                                                        </td>
                                                        <td>
                                                            <span className="fw-medium">{idx.date}</span>
                                                        </td>
                                                        <td>
                                                            <div className="btn-list">
                                                                <SpkTooltips placement="top" title="View">
                                                                    <Link scroll={false} href="#!" className="btn  btn-icon btn-secondary-light"><i className="ti ti-eye"></i></Link>
                                                                </SpkTooltips>
                                                                <SpkTooltips placement="top" title="Edit">
                                                                    <Link scroll={false} href="#!" className="btn  btn-icon btn-info-light"><i className="ti ti-pencil"></i></Link>
                                                                </SpkTooltips>
                                                                <SpkTooltips placement="top" title="Delete">
                                                                    <Link scroll={false} href="#!" className="btn  btn-icon  btn-success-light"><i className="ti ti-trash"></i></Link>
                                                                </SpkTooltips>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr className="">
                                                    <td className='text-center' colSpan={9}>No data found</td>
                                                </tr>
                                            )}
                                        </SpkTables>
                                    </div>
                                </Card.Body>
                                <Card.Footer className="border-top-0">
                                    <div className="d-flex align-items-center ">
                                        <div>
                                            Showing 5 Entries <i className="bi bi-arrow-right ms-2 fw-medium"></i>
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
                </Col>
                <Col xxl={3}>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header className="justify-content-between">
                                    <Card.Title>Total Orders
                                    </Card.Title>
                                    <SpkDropdown toggleas='a' Customtoggleclass="btn btn-sm border d-flex align-items-center text-muted no-caret" Icon={true} Toggletext="View All" IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                        <li><Dropdown.Item href="#!">Yearly</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">Monthly</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">Weakly</Dropdown.Item></li>
                                    </SpkDropdown>
                                </Card.Header>
                                <Card.Body>
                                    <div className="d-flex justify-content-between align-items-center text-center bg-light p-3 rounded-1 order-content">
                                        <div>
                                            <p className="mb-1">Total Orders</p>
                                            <h4 className="text-primary mb-0">12,500</h4>
                                        </div>
                                        <div className="text-end">
                                            <p className="mb-1">Overall Growth from Last Year</p>
                                            <h5 className="text-success mb-0">+15%</h5>
                                        </div>
                                    </div>
                                    <div id="total-orders">
                                        <Spkapexcharts chartOptions={TotalOrdersOptions} chartSeries={TotalOrdersSeries} type='radialBar' width={'100%'} height={295} />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header className="justify-content-between">
                                    <Card.Title> Recent Activity </Card.Title>
                                    <SpkDropdown toggleas='a' Customtoggleclass="fs-12 text-muted bg-light rounded btn btn-sm btn-light no-caret" Icon={true} Toggletext="View All" IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                        <li><Dropdown.Item href="#!">Today</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                        <li><Dropdown.Item href="#!">Last Week</Dropdown.Item></li>
                                    </SpkDropdown>
                                </Card.Header>
                                <Card.Body>
                                    <ul className="list-unstyled mb-0 ecommerce-recent-activity">
                                        {RecentActivity.map((idx) => (
                                            <li className={`ecommerce-recent-activity-content ${idx.liclass ? `${idx.liclass}` : ''}`} key={idx.id}>
                                                <div className="d-flex align-items-top">
                                                    <div className="me-3">
                                                        <span className={`avatar avatar-sm bg-${idx.bgColor} avatar-rounded`}>
                                                            <i className={`ri-${idx.icon}`}></i>
                                                        </span>
                                                    </div>
                                                    <div className="activity-content">
                                                        <span className="d-block fw-medium">{idx.title}</span>
                                                        <span className="d-block fs-12 text-muted">{idx.description}</span>
                                                        {idx.images?.map((img, index) => (
                                                            <Link scroll={false} href="#!;" className="avatar avatar-sm bg-gray-200 me-1 mt-2" key={index}>
                                                                <Image width={28} height={28} src={img} alt="" />
                                                            </Link>
                                                        ))}
                                                    </div>
                                                    <div className="flex-fill text-end">
                                                        <span className="d-block text-muted fs-11 op-7">{idx.time}</span>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header className="justify-content-between">
                                    <Card.Title>Top-Selling Products</Card.Title>
                                    <Link scroll={false} href="#!" className="btn btn-outline-light border d-flex align-items-center text-muted btn-sm">
                                        View All
                                    </Link>
                                </Card.Header>
                                <Card.Body>
                                    <ListGroup>
                                        {SellingProducts.map((idx) => (
                                            <ListGroup.Item key={idx.id}>
                                                <div className="d-flex align-items-center flex-wrap">
                                                    <div className="me-3 lh-1">
                                                        <span className="avatar avatar-lg bg-gray-200 custom-width">
                                                            <Image fill src={idx.image} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className=" flex-fill">
                                                        <span className="d-block mb-0 fw-medium">{idx.name}</span>
                                                        <span className="text-muted fs-12">{idx.category}</span>
                                                    </div>
                                                    <div className="text-end">
                                                        <p className="mb-0 fw-medium">{idx.price}</p>
                                                        <p className="mb-0 text-muted">{idx.sales} Sales</p>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
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

export default Ecommerce;