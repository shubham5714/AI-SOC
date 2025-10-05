"use client"
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import { Accordion1, Accordion2, Accordion3, Accordion4, Accordion5, products, summaryData } from "@/shared/data/apps/executive/ordersdetailsdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Link from "next/link";
import SpkAccordions from "@/shared/@spk-reusable-components/reusable-advancedui/spk-accordions";
import Image from "next/image";

interface OrderDetailsPrps { }

const OrderDetails: React.FC<OrderDetailsPrps> = () => {
    const print = () => {
        window.print();
    };
    return (
        <Fragment>
            <Seo title="Order Details" />
            <Pageheader title='Apps' subtitle='Executive' currentpage='Order Details' activepage='Order Details' />
            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xxl={9}>
                    <Row>
                        <Col xl={12}>
                            <Card className=" custom-card">
                                <Card.Header className=" d-flex justify-content-between">
                                    <div className="card-title">
                                        Order No - <span className="text-primary">#SPK-434422</span>
                                    </div>
                                    <div>
                                        <span className="badge bg-primary-transparent">
                                            Estimated delivery : 30,Nov 2023
                                        </span>
                                    </div>
                                </Card.Header>
                                <Card.Body className=" p-0">
                                    <div className="table-responsive">
                                        <SpkTables tableClass=" text-nowrap" header={[{ title: 'Item' }, { title: 'Tracking ID' }, { title: 'Price' }, { title: 'Quantity' }, { title: 'Total Price' }]} >
                                            {products.map((product) => (
                                                <tr key={product.id}>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-3">
                                                                <span className="avatar avatar-xl bg-light custom-width">
                                                                    <Image fill src={product.imageUrl} alt={product.name} />
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <div className="mb-1 fs-14 fw-medium">
                                                                    <Link href="#!" scroll={false}>{product.name}</Link>
                                                                </div>
                                                                <div className="mb-1">
                                                                    <span className="me-1 d-inline-block">Category :</span>
                                                                    <span className="text-muted">{product.category}</span>
                                                                </div>
                                                                <div className="mb-1">
                                                                    <span className="me-1 d-inline-block">Brand :</span>
                                                                    <span className="text-muted">
                                                                        {product.brand}
                                                                        {product.offer && (
                                                                            <span className={`badge bg-${product.offer === "In Offer" ? "success" : "primary"} ms-3`}>{product.offer}</span>
                                                                        )}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <Link href="#!" scroll={false} className="text-primary">
                                                            {product.sku}
                                                        </Link>
                                                    </td>
                                                    <td>
                                                        <span className="fs-15 fw-medium">{product.price}</span>
                                                    </td>
                                                    <td>{product.quantity}</td>
                                                    <td>{product.totalPrice}</td>
                                                </tr>
                                            ))}
                                        </SpkTables>
                                    </div>
                                </Card.Body>
                                <Card.Footer className="d-flex align-items-center justify-content-between gap-2 border-top-0">
                                    <SpkButton Buttonvariant="primary-light" onClickfunc={() => print()} ><i className="ri-printer-line me-1 align-middle d-inline-block"></i>Print</SpkButton>
                                    <SpkButton Buttonvariant="primary"><i className="ri-share-forward-line me-1 align-middle d-inline-block"></i>Share Details</SpkButton>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={3} >
                    <Card className=" custom-card">
                        <Card.Header>
                            <div className="card-title">
                                Order Tracking
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-center gap-4">
                                <p className="mb-3">
                                    <span>Order ID :</span>
                                    <span className="text-primary ms-1 d-inline-block">#434422</span>
                                </p>
                                <p className="mb-3">
                                    <span>Product :</span>
                                    <span className="text-secondary ms-1 d-inline-block">Men's Sports Shoes</span>
                                </p>
                            </div>
                            <div className="order-track">
                                <SpkAccordions accordionClass="accordionicon-none mb-2 mt-3" items={Accordion1} defaultActiveKey="0" />
                                <SpkAccordions accordionClass="accordionicon-none mb-2" items={Accordion2} defaultActiveKey="0" />
                                <SpkAccordions accordionClass="accordionicon-none mb-2" items={Accordion3} defaultActiveKey="0" />
                                <SpkAccordions accordionClass="accordionicon-none mb-3" items={Accordion4} closeAll={true} />
                                <SpkAccordions accordionClass="accordionicon-none order-accordian" items={Accordion5} />

                            </div>
                        </Card.Body>
                    </Card>
                    <Card className=" custom-card overflow-hidden">
                        <Card.Header className=" justify-content-between">
                            <div className="card-title">
                                Order Summary
                            </div>
                            <div>
                                ID : <Link href="#!" scroll={false} className="text-primary fw-medium">#434422</Link>
                            </div>
                        </Card.Header>
                        <Card.Body className="card-body p-0 table-responsive">
                            <SpkTables>
                                {summaryData.map((item, index) => (
                                    <tr key={index}>
                                        <td>
                                            <div className="fw-medium">{item.label}</div>
                                        </td>
                                        <td>
                                            {item.value}
                                        </td>
                                    </tr>
                                ))}
                            </SpkTables>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default OrderDetails;