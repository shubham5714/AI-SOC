"use client"

import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { Fragment, useReducer, useState } from "react";
import { Row, Col, Card, Form } from "react-bootstrap";
import SpkSelect from "@/shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import Link from "next/link";
import SpkDatepickr from "@/shared/@spk-reusable-components/reusable-plugins/spk-datepicker";
import Image from "next/image";

interface CreateInvoiceProps { }

const CreateInvoice: React.FC<CreateInvoiceProps> = () => {
    const initialState = { count1: 1, count2: 1 }

    const reducer = (state: { count1: number; count2: number }, action: string) => {
        switch (action) {
            case "addition":
                return {
                    ...state,
                    count1: state.count1 + 1,
                };
            case "subtraction":
                return {
                    ...state,
                    count1: Math.max(0, state.count1 - 1), // Prevent count1 < 0
                };
            case "addition1":
                return {
                    ...state,
                    count2: state.count2 + 1,
                };
            case "subtraction1":
                return {
                    ...state,
                    count2: Math.max(0, state.count2 - 1), // Prevent count2 < 0
                };
            default:
                return state;
        }
    };
    // 
    const [count, dispatch] = useReducer(reducer, initialState)

    //Date picker
    const [dates, setDates] = useState<{ [key: string]: Date | null }>({});

    const handleDateChange = (key: string, date: Date | null) => {
        setDates((prevDates) => ({
            ...prevDates,
            [key]: date,
        }));
    };


    //Currency select data
    const Currencydata = [
        { value: 'Select Currency', label: 'Select Currency' },
        { value: 'USD - (United States Dollar)', label: 'USD - (United States Dollar)' },
        { value: 'BHD - (Bahraini Dinar)', label: 'BHD - (Bahraini Dinar)' },
        { value: 'KWD - (Kuwaiti Dinar)', label: 'KWD - (Kuwaiti Dinar)' },
        { value: 'CHF - (Swiss Franc)', label: 'CHF - (Swiss Franc)' },
    ]


    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}
            <Seo title="Pages-CreateInvoice" />
            <Pageheader title="Pages" subtitle="Invoice" currentpage="Create Invoice" activepage="Create Invoice" />

            {/* <!-- End::page-header --> */}
            {/*<!-- Start::row-1 -->*/}
            <Row>
                <Col xl={9}>
                    <Card className="custom-card">
                        <Card.Header className="d-md-flex d-block">
                            <div className="h5 mb-0 d-sm-flex d-block align-items-center">
                                <div>
                                    <Image fill src="../../../assets/images/brand-logos/toggle-logo.png" alt="" />
                                </div>
                                <div className="ms-sm-2 ms-0 mt-sm-0 mt-2">
                                    <input type="text" className="form-control form-control-light form-control-sm" placeholder="Invoice Title" defaultValue="INV TITLE" />
                                </div>
                                <div className="mx-2">:</div>
                                <div className="mt-sm-0 mt-2">
                                    <input type="text" className="form-control form-control-light form-control-sm" placeholder="Invoice ID" defaultValue="INV ID" />
                                </div>
                            </div>
                            <div className="ms-auto mt-md-0 mt-2">
                                <SpkButton Buttonvariant="primary" Size="sm" Customclass="me-2">Save As PDF<i className="ri-file-pdf-line ms-1 align-middle d-inline-block"></i></SpkButton>
                                <SpkButton Buttonvariant="success-light" Size="sm" Customclass="btn-icon me-2"><i className="bi bi-plus-lg"></i></SpkButton>
                                <SpkButton Buttonvariant="info-light" Size="sm" Customclass="btn-icon me-2"><i className="bi bi-download"></i></SpkButton>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="row gy-3">
                                <Col xl={12}>
                                    <Row>
                                        <Col xl={4} lg={4} md={6} sm={6}>
                                            <p className="dw-semibold mb-2">
                                                Billing From :
                                            </p>
                                            <Row className="gy-2">
                                                <Col xl={12}>
                                                    <Form.Control type="text" className="form-control form-control-light" id="Company-Name" placeholder="Company Name" defaultValue="SPRUKO TECHNOLOGIES" />
                                                </Col>
                                                <Col xl={12}>
                                                    <Form.Control as="textarea" className="form-control form-control-light" id="company-address" placeholder="Enter Address" rows={3}></Form.Control>
                                                </Col>
                                                <Col xl={12}>
                                                    <Form.Control type="text" className="form-control form-control-light" id="company-mail" placeholder="Company Email" defaultValue="" />
                                                </Col>
                                                <Col xl={12}>
                                                    <Form.Control type="text" className="form-control form-control-light" id="company-phone" placeholder="Phone Number" defaultValue="" />
                                                </Col>
                                                <Col xl={12}>
                                                    <Form.Control as="textarea" className="form-control form-control-light" id="invoice-subject" placeholder="Subject" rows={4}></Form.Control>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col xl={4} lg={4} md={6} sm={6} className="ms-auto mt-sm-0 mt-3">
                                            <p className="dw-semibold mb-2">
                                                Billing To :
                                            </p>
                                            <div className="row gy-2">
                                                <Col xl={12}>
                                                    <Form.Control type="text" className="form-control-light" id="customer-Name" placeholder="Customer Name" defaultValue="Jack Miller" />
                                                </Col>
                                                <Col xl={12}>
                                                    <Form.Control as="textarea" className="form-control-light" id="customer-address" placeholder="Enter Address" rows={3}></Form.Control>
                                                </Col>
                                                <Col xl={12}>
                                                    <Form.Control type="text" className="form-control-light" id="customer-mail" placeholder="Customer Email" defaultValue="" />
                                                </Col>
                                                <Col xl={12}>
                                                    <Form.Control type="text" className="form-control-light" id="customer-phone" placeholder="Phone Number" defaultValue="" />
                                                </Col>
                                                <Col xl={12}>
                                                    <Form.Control type="text" className="form-control-light" id="zip-code" placeholder="Zip Code" defaultValue="" />
                                                </Col>
                                                <Col xl={12} className="choices-control">
                                                    <p className="dw-semibold mb-2 mt-2">
                                                        Currency :
                                                    </p>
                                                    <SpkSelect name="colors" option={Currencydata} mainClass="basic-multi-select  bg-light"
                                                        menuplacement='auto' classNameprefix="Select2" defaultvalue={[Currencydata[0]]}
                                                    />
                                                </Col>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xl={3}>
                                    <Form.Label htmlFor="invoice-number" className="form-label">Invoice ID</Form.Label>
                                    <Form.Control type="text" className="form-control form-control-light" id="invoice-number" placeholder="Inv No" defaultValue="#SPK120219890" />
                                </Col>
                                <Col xl={3} className="invoice-date-issued">
                                    <Form.Label htmlFor="invoice-date-issued" className="form-label d-block">Date Issued</Form.Label>
                                    <SpkDatepickr className="form-control  form-control-light" placeholderText='Choose date' selected={dates["dateissues"]}
                                        onChange={(date) => handleDateChange("dateissues", date)} />

                                </Col>
                                <Col xl={3} className="invoice-date-due">
                                    <Form.Label htmlFor="invoice-date-due" className="form-label d-block">Due Date</Form.Label>
                                    <SpkDatepickr className="form-control  form-control-light rounded-md border-0" placeholderText='Choose date' selected={dates["duedate"]}
                                        onChange={(date) => handleDateChange("duedate", date)} />
                                </Col>
                                <Col xl={3}>
                                    <Form.Label htmlFor="invoice-due-amount" className="form-label">Due Amount</Form.Label>
                                    <Form.Control type="text" className="form-control form-control-light" id="invoice-due-amount" placeholder="Enter Amount" defaultValue="$12,983.78" />
                                </Col>
                                <Col xl={12}>
                                    <div className="table-responsive">
                                        <table className="table nowrap text-nowrap border mt-3">
                                            <thead>
                                                <tr>
                                                    <th>PRODUCT NAME</th>
                                                    <th>DESCRIPTION</th>
                                                    <th>QUANTITY</th>
                                                    <th>PRICE PER UNIT</th>
                                                    <th>TOTAL</th>
                                                    <th>ACTION</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <Form.Control type="text" className="form-control form-control-light" placeholder="Enter Product Name" />
                                                    </td>
                                                    <td>
                                                        <textarea rows={1} className="form-control form-control-light" placeholder="Enter Description"></textarea>
                                                    </td>
                                                    <td className="invoice-quantity-container">
                                                        <div className="input-group border rounded flex-nowrap">
                                                            <SpkButton Buttonvariant="" Customclass="btn-icon btn-primary input-group-text flex-fill product-quantity-minus" onClickfunc={() => dispatch('subtraction')}><i className="ri-subtract-line" ></i></SpkButton>
                                                            <input type="text" className="form-control form-control-sm border-0 text-center w-100" aria-label="quantity" id="product-quantity4" key={count.count1} defaultValue={count.count1} />
                                                            <SpkButton Buttonvariant="" Customclass="btn-icon btn-primary input-group-text flex-fill product-quantity-plus" onClickfunc={() => dispatch('addition')}><i className="ri-add-line" ></i></SpkButton>
                                                        </div>
                                                    </td>
                                                    <td><Form.Control className="form-control form-control-light" placeholder="" type="text" defaultValue="$84.00" /></td>
                                                    <td><Form.Control className="form-control form-control-light" placeholder="" type="text" defaultValue="$251.00" /></td>
                                                    <td>
                                                        <SpkButton Buttonvariant="" Customclass="btn-sm btn-icon btn-danger-light"><i className="ri-delete-bin-5-line"></i></SpkButton>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <Form.Control type="text" className="form-control form-control-light" placeholder="Enter Product Name" />
                                                    </td>
                                                    <td>
                                                        <textarea rows={1} className="form-control form-control-light" placeholder="Enter Description"></textarea>
                                                    </td>
                                                    <td className="invoice-quantity-container">
                                                        <div className="input-group border rounded flex-nowrap">
                                                            <SpkButton Buttonvariant="" Customclass="btn-icon btn-primary input-group-text flex-fill product-quantity-minus"
                                                                onClickfunc={() => dispatch('subtraction1')}
                                                            ><i className="ri-subtract-line" ></i></SpkButton>
                                                            <input type="text" className="form-control form-control-sm border-0 text-center w-100" aria-label="quantity" id="product-quantity5" key={count.count2}
                                                                defaultValue={count.count2}
                                                            />
                                                            <SpkButton Buttonvariant="" Customclass="btn-icon btn-primary input-group-text flex-fill product-quantity-plus"
                                                                onClickfunc={() => dispatch('addition1')}
                                                            ><i className="ri-add-line" ></i></SpkButton>
                                                        </div>
                                                    </td>
                                                    <td><Form.Control className="form-control form-control-light" placeholder="Enter Amount" type="text" /></td>
                                                    <td><Form.Control className="form-control form-control-light" placeholder="Enter Amount" type="text" /></td>
                                                    <td>
                                                        <SpkButton Buttonvariant="" Customclass="btn btn-sm btn-icon btn-danger-light"><i className="ri-delete-bin-5-line"></i></SpkButton>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={6} className="border-bottom-0"><a className="btn btn-light" href="#!"><i className="bi bi-plus-lg"></i> Add Product</a></td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={4}></td>
                                                    <td colSpan={2}>
                                                        <table className="table table-sm text-nowrap mb-0 table-borderless">
                                                            <tbody>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <div className="fw-medium">Sub Total :</div>
                                                                    </th>
                                                                    <td>
                                                                        <Form.Control type="text" className="form-control form-control-light invoice-amount-input" placeholder="Enter Amount" defaultValue="$2519.89" />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <div className="fw-medium">Avail Discount :</div>
                                                                    </th>
                                                                    <td>
                                                                        <Form.Control type="text" className="form-control form-control-light invoice-amount-input" placeholder="Enter Amount" defaultValue="$15.58" />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <div className="fw-medium">Coupon Discount <span className="text-success">(3.5%)</span> :</div>
                                                                    </th>
                                                                    <td>
                                                                        <Form.Control type="text" className="form-control form-control-light invoice-amount-input" placeholder="Enter Amount" defaultValue="$112.00" />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <div className="fw-medium">Vat <span className="text-danger">(7.5%)</span> :</div>
                                                                    </th>
                                                                    <td>
                                                                        <Form.Control type="text" className="form-control form-control-light invoice-amount-input" placeholder="Enter Amount" defaultValue="$214.00" />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <div className="fw-medium">Due Till Date :</div>
                                                                    </th>
                                                                    <td>
                                                                        <Form.Control type="text" className="form-control form-control-light invoice-amount-input" placeholder="Enter Amount" defaultValue="$2.00" />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <div className="fs-14 fw-medium">Total :</div>
                                                                    </th>
                                                                    <td>
                                                                        <Form.Control type="text" className="form-control form-control-light invoice-amount-input" placeholder="Enter Amount" defaultValue="$2,106.68" />
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </Col>
                                <Col xl={12}>
                                    <div>
                                        <label htmlFor="invoice-note" className="form-label">Note:</label>
                                        <textarea className="form-control form-control-light" id="invoice-note" rows={3} defaultValue="If you're not satisfied with the product, you can return the unused item within 10 days of the delivery date. For refund options, please visit the official website and review the available refund policies.">
                                        </textarea>
                                    </div>
                                </Col>
                            </div>
                        </Card.Body>
                        <Card.Footer className="d-flex justify-content-between">
                            <SpkButton Buttonvariant="success-light" Customclass="m-1"><i className="ri-eye-line me-1 align-middle d-inline-block"></i>Preview</SpkButton>
                            <SpkButton Buttonvariant="primary" Customclass="m-1">Send Invoice <i className="ri-send-plane-2-line ms-1 align-middle d-inline-block"></i></SpkButton>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={3}>
                    <Card className="custom-card">
                        <Card.Header className="">
                            <Card.Title className="">
                                Mode Of Payment
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="row gy-3">
                                <Col xl={12}>
                                    <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2" />
                                        <label className="btn btn-outline-primary mt-sm-0 mt-1" htmlFor="btnradio2">UPI</label>
                                        <input type="radio" className="btn-check" name="btnradio" id="btnradio3" defaultChecked />
                                        <label className="btn btn-outline-primary mt-sm-0 mt-1" htmlFor="btnradio3">Credit/Debit Card</label>
                                    </div>
                                </Col>
                                <Col xl={12}>
                                    <Form.Control type="text" className="form-control-light" id="invoice-payment-cardname" placeholder="Card Number" defaultValue="1234 5678 9087 XXXX" />
                                    <Form.Label htmlFor="invoice-payment-cardname" className="mb-0"><Link scroll={false} className="text-muted fs-11" href="#!">Enter valid card number <sup className="fs-12 text-danger align-middle"> *</sup></Link></Form.Label>
                                </Col>
                                <Col xl={12}>
                                    <Form.Control type="text" className="form-control-light" placeholder="Card Holder Name" />
                                </Col>

                                <Col xl={12}>
                                    <Form.Control type="text" className="form-control-light mb-2" placeholder="Enter OTP" />
                                </Col>
                                <Col xl={12}>
                                    <div className="alert alert-info" role="alert">
                                        Please Make sure to pay the invoice bill within 30 days.
                                    </div>
                                </Col>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/*<!--End::row-1 -->*/}


        </Fragment>
    )
};

export default CreateInvoice;