"use client"
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import { Ordertable } from "@/shared/data/apps/ecommerce/ordersdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { ButtonGroup, Card, Dropdown, Form, Pagination } from "react-bootstrap";

interface OrdersProps { }

const Orders: React.FC<OrdersProps> = () => {
    const [order, setOrder] = useState(Ordertable);
    const handleRemove = (id: number) => {
        const List = order.filter((idx) => idx.id !== id);
        setOrder(List);
    }
    return (
        <Fragment>
            <Seo title="Orders" />
            <Pageheader title='Apps' subtitle='Ecommerce' currentpage='Orders' activepage='Orders' />
            {/* <!-- Start::row-1 --> */}
            <Card className=" custom-card">
                <Card.Header className="justify-content-between">
                    <div className="card-title">
                        All Orders List
                    </div>
                    <div className="d-flex gap-3 align-items-center flex-wrap">

                        <SpkDropdown as={ButtonGroup} Togglevariant="" Customtoggleclass="btn btn-outline-light border dropdown-toggle"
                            Icon={true} IconClass="ti ti-sort-descending-2 me-1" Toggletext="Sort By" iconPosition="before">
                            <li><Dropdown.Item>Created Date</Dropdown.Item></li>
                            <li><Dropdown.Item>Status</Dropdown.Item></li>
                            <li><Dropdown.Item>Orders</Dropdown.Item></li>
                            <li><Dropdown.Item>Product Name</Dropdown.Item></li>
                            <li><Dropdown.Item>Newest</Dropdown.Item></li>
                            <li><Dropdown.Item>Oldest</Dropdown.Item></li>
                        </SpkDropdown>
                        <div className="custom-form-group flex-grow-1">
                            <Form.Control type="text" className="" placeholder="Search Orders.." aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <Link scroll={false} href="#!" className="text-muted custom-form-btn"><i className="ti ti-search"></i></Link>
                        </div>
                    </div>
                </Card.Header>
                <Card.Body className=" p-0">
                    <div className="table-responsive">
                        <SpkTables tableClass="table-hover text-nowrap" header={[{ title: 'Order Id' }, { title: 'Product' }, { title: 'Customer' }, { title: 'Mobile Number' }, { title: 'Ordered Date' }, { title: 'Status' }, { title: 'Payment Mode' }, { title: 'Cost' }, { title: 'Action' }]}>
                            {order.map((idx) => (
                                <tr className="order-list" key={idx.id}>
                                    <td>{idx.orderid}</td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <span className="avatar avatar-sm avatar-square bg-gray-300 custom-width"><Image fill src={idx.src} className="w-100 h-100" alt="..." /></span>
                                            <div className="ms-2">
                                                <p className="fw-medium mb-0 d-flex align-items-center"><Link href="/apps/ecommerce/order-details">{idx.product}</Link></p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <span className="avatar avatar-sm me-2 avatar-rounded custom-width">
                                                <Image fill src={idx.src1} alt="" />
                                            </span>{idx.cusromer}
                                        </div>
                                    </td>
                                    <td>{idx.mobile}</td>
                                    <td>
                                        {idx.date}
                                    </td>
                                    <td><span className={`badge bg-${idx.color}-transparent`}>{idx.status}</span></td>
                                    <td>{idx.payment}</td>
                                    <td className="fw-medium">{idx.cost}</td>
                                    <td>
                                        <Link href="/apps/ecommerce/order-details" className="btn btn-icon btn-sm btn-primary-light btn-wave waves-effect waves-light me-1">
                                            <i className="ri-eye-line"></i>
                                        </Link>
                                        <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light me-1">
                                            <i className="ri-download-line"></i>
                                        </Link>
                                        <Link scroll={false} href="#!" onClick={() => handleRemove(idx.id)} className="order-delete-btn btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light me-1">
                                            <i className="ri-delete-bin-line"></i>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </SpkTables>
                    </div>
                </Card.Body>
                <Card.Footer className="border-top-0">
                    <div className="d-flex align-items-center flex-wrap overflow-auto">
                        <div className="mb-2 mb-sm-0">
                            Showing <b>1</b> to <b>8</b> entries <i className="bi bi-arrow-right ms-2 fw-medium"></i>
                        </div>
                        <div className="ms-auto">
                            <Pagination className="mb-0 overflow-auto">
                                <Pagination.Item disabled>Previous</Pagination.Item>
                                <Pagination.Item active>1</Pagination.Item>
                                <Pagination.Item>2</Pagination.Item>
                                <Pagination.Item>3</Pagination.Item>
                                <Pagination.Item>4</Pagination.Item>
                                <Pagination.Item>5</Pagination.Item>
                                <Pagination.Item className="pagination-next">next</Pagination.Item>
                            </Pagination>
                        </div>
                    </div>
                </Card.Footer>
            </Card>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default Orders;