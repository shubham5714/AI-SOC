"use client"

import Spkapexcharts from "@/shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/reusable-uiElements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import * as Invoicedata from '@/shared/data/pages/invoice/invoicelist';
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Card, Col, Dropdown, Pagination, Row } from "react-bootstrap";
import { Manageinvoices } from "@/shared/data/pages/invoice/invoicelist";
import Image from "next/image";
import CountUp from 'react-countup';

interface InvoiceListProps { }

const InvoiceList: React.FC<InvoiceListProps> = () => {

//Delete function
const [manageCompanydata, setManageCompanydata] = useState([...Manageinvoices]);
const handleDelete = (idToRemove: string) => {
    const updatedInvoiceData = manageCompanydata.filter((item) => item.id !== idToRemove);
    setManageCompanydata(updatedInvoiceData);
};

    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}
            <Seo title="Pages-InvoiceList" />

            <Pageheader title="Pages" subtitle="Invoice" currentpage="Invoice List" activepage="Invoice List" />

            {/* <!-- End::page-header --> */}
            {/*<!-- Start::row-1 -->*/}
            <Row>
                <Col xl={12}>
                    <Row>
                        <Col xxl={7}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        Invoice Statistics
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body className="p-0">
                                    <div id="invoice-list-stats">
                                        <Spkapexcharts chartOptions={Invoicedata.Invoiceoptions} chartSeries={Invoicedata.Invoiceseries} type="bar" width={"100%"} height={255} />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={5}>
                            <Row>
                                <Col lg={6}>
                                    <Card className="custom-card overflow-hidden main-content-card">
                                        <Card.Body className="p-4">
                                            <div className="d-flex align-items-start gap-3">
                                                <div className="flex-fill">
                                                    <h6 className="mb-2 fs-12">Total Amount</h6>
                                                    <div className="pb-0 mt-0">
                                                        <div>
                                                            <h4 className="fw-medium mb-1">$<span className="count-up" data-count="385"><CountUp end={385} /></span>k </h4>
                                                            <SpkBadge variant="primary">12,895</SpkBadge>
                                                            <div className="text-muted fs-13 mt-2">Increased By <span className="text-success">2.13%<i className="ti ti-arrow-narrow-up fs-16"></i></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="main-card-icon primary border-3 border border-primary border-opacity-50 rounded-circle">
                                                    <div className="avatar avatar-md bg-primary border border-primary border-opacity-10 avatar-rounded">
                                                        <div className="avatar avatar-sm svg-white">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="var(--primary-color)" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                                <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2m4 -14h6m-6 4h6m-2 4h2" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={6}>
                                    <Card className="custom-card overflow-hidden main-content-card">
                                        <Card.Body className="p-4">
                                            <div className="d-flex align-items-start gap-3">
                                                <div className="flex-fill">
                                                    <h6 className="mb-2 fs-12">Total Paid</h6>
                                                    <div>
                                                        <h4 className="fw-medium mb-1">$<span className="count-up" data-count="126"><CountUp end={127} /></span>k</h4>
                                                        <SpkBadge variant="success">3,457</SpkBadge>
                                                        <div className="text-muted fs-13 mt-2">Decreased By <span className="text-danger">1.05%<i className="ti ti-arrow-narrow-down fs-16"></i></span></div>
                                                    </div>
                                                </div>
                                                <div className="main-card-icon success border-3 border border-success border-opacity-50 rounded-circle">
                                                    <div className="avatar avatar-md bg-success border border-success border-opacity-10 avatar-rounded">
                                                        <div className="avatar avatar-sm svg-white">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-rosette-discount-check"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"></path> </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={6}>
                                    <Card className="custom-card overflow-hidden main-content-card">
                                        <Card.Body className="p-4">
                                            <div className="d-flex align-items-start gap-3">
                                                <div className="flex-fill">
                                                    <h6 className="mb-2 fs-12">Pending Invoices</h6>
                                                    <div>
                                                        <h4 className="fw-medium mb-1"><span className="count-up" data-count="56"><CountUp end={57} /></span></h4>
                                                        <SpkBadge variant="success">5,447</SpkBadge>
                                                        <div className="text-muted fs-13 mt-2">Decreased By <span className="text-danger">2.06%<i className="ti ti-arrow-narrow-down fs-16"></i></span></div>
                                                    </div>
                                                </div>
                                                <div className="main-card-icon info border-3 border border-info border-opacity-50 rounded-circle">
                                                    <div className="avatar avatar-md bg-info border border-info border-opacity-10 avatar-rounded">
                                                        <div className="avatar avatar-sm svg-white">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-alert-octagon"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M14.897 1a4 4 0 0 1 2.664 1.016l.165 .156l4.1 4.1a4 4 0 0 1 1.168 2.605l.006 .227v5.794a4 4 0 0 1 -1.016 2.664l-.156 .165l-4.1 4.1a4 4 0 0 1 -2.603 1.168l-.227 .006h-5.795a3.999 3.999 0 0 1 -2.664 -1.017l-.165 -.156l-4.1 -4.1a4 4 0 0 1 -1.168 -2.604l-.006 -.227v-5.794a4 4 0 0 1 1.016 -2.664l.156 -.165l4.1 -4.1a4 4 0 0 1 2.605 -1.168l.227 -.006h5.793zm-2.887 14l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z"></path> </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={6}>
                                    <Card className="custom-card overflow-hidden main-content-card">
                                        <Card.Body className="p-4">
                                            <div className="d-flex align-items-start gap-3">
                                                <div className="flex-fill">
                                                    <h6 className="mb-2 fs-12">Overdue Invoices</h6>
                                                    <div>
                                                        <h4 className="fw-medium mb-1"><span className="count-up" data-count="47"><CountUp end={47} /></span>K</h4>
                                                        <SpkBadge variant="secondary" Customclass="border">2,145</SpkBadge>
                                                        <div className="text-muted fs-13 mt-2">Increased By <span className="text-success">1.3%<i className="ti ti-arrow-narrow-up fs-16"></i></span></div>
                                                    </div>
                                                </div>
                                                <div className="main-card-icon secondary border-3 border border-secondary border-opacity-50 rounded-circle">
                                                    <div className="avatar avatar-md bg-secondary border border-secondary border-opacity-10 avatar-rounded">
                                                        <div className="avatar avatar-sm svg-white">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-hourglass" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="var(--primary-tint3-color)" fill="none" strokeLinecap="round" strokeLinejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M6.5 7h11"></path> <path d="M6.5 17h11"></path> <path d="M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z"></path> <path d="M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z"></path> </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Manage Invoices
                            </Card.Title>
                            <div className="d-flex">
                                <Link scroll={false} href={"/pages/invoice/create-invoice/"} className="btn btn-sm btn-primary btn-wave waves-light"><i className="ri-add-line fw-medium align-middle me-1"></i> Create Invoice</Link>
                                <SpkDropdown Customclass="ms-2" Customtoggleclass="btn btn-icon btn-secondary-light btn-sm btn-wave waves-light no-caret" Togglevariant="" Icon={true} IconClass="ti ti-dots-vertical">
                                    <li><Dropdown.Item href="#!">All Invoices</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Paid Invoices</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Pending Invoices</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Overdue Invoices</Dropdown.Item></li>
                                </SpkDropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="text-nowrap" header={[{ title: 'Client' }, { title: 'Invoice ID' }, { title: 'Issued Date' }, { title: 'Amount' }, { title: 'Status' }, { title: 'Due Date' }, { title: 'Action' }]}>
                                    {manageCompanydata.map((idx) => (
                                        <tr className="invoice-list" key={idx.id}>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-sm avatar-rounded  custom-width">
                                                            <Image fill src={idx.src} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-medium">{idx.name}</p>
                                                        <p className="mb-0 fs-11 text-muted">{idx.mail}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <Link scroll={false} href="#!" className="fw-medium text-primary">
                                                    {idx.invoiceid}
                                                </Link>
                                            </td>
                                            <td>
                                                {idx.issueddate}
                                            </td>
                                            <td>
                                                {idx.amount}
                                            </td>
                                            <td>
                                                <span className={`badge bg-${idx.color}-transparent`}>{idx.status}</span>
                                            </td>
                                            <td>
                                                {idx.duedate}
                                            </td>
                                            <td>
                                                <SpkButton Buttonvariant="primary-light" Customclass="btn-icon btn-sm"><i className="ri-printer-line"></i></SpkButton>
                                                <SpkButton Buttonvariant="danger-light" Customclass="btn-icon ms-1 btn-sm invoice-btn" onClickfunc={() => handleDelete(idx.id)}><i className="ri-delete-bin-5-line"></i></SpkButton>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                        <Card.Footer className="border-top-0">
                            <nav aria-label="Page navigation">
                                <Pagination className="pagination mb-0 float-end">
                                    <Pagination.Item disabled>Previous
                                    </Pagination.Item>
                                    <Pagination.Item >1</Pagination.Item>
                                    <Pagination.Item active aria-current="page">2</Pagination.Item>
                                    <Pagination.Item>3</Pagination.Item>
                                    <Pagination.Item className="pagination-next">Next</Pagination.Item>
                                </Pagination>
                            </nav>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
                {/*<!--End::row-1 -->*/}
          
        </Fragment>
    )
};

export default InvoiceList;