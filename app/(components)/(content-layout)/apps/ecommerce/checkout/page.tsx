"use client"
import SpkSelect from "@/shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkListgroup from "@/shared/@spk-reusable-components/reusable-uiElements/spk-listgroup";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Card, Col, Form, ListGroup, Modal, Nav, Row, Tab } from "react-bootstrap";

interface CheckoutProps { }

const Checkout: React.FC<CheckoutProps> = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const [key, setKey] = useState('first');

    const handleTabSelect = (selectedKey: string | null) => {
        if (selectedKey !== null) {
            setKey(selectedKey);
        }
    };
    const handleNext = () => {
        switch (key) {
            case 'first':
                setKey('second');
                break;
            case 'second':
                setKey('third');
                break;
            case 'third':
                setKey('fourth');
                break;
            default:
                break;
        }
    };

    const handlePrevious = () => {
        switch (key) {
            case 'second':
                setKey('first');
                break;
            case 'third':
                setKey('second');
                break;
            case 'fourth':
                setKey('third');
                break;
            default:
                break;
        }
    };
    type Feature = {
        id: number;
        title: string;
        description: string;
        iconClass: string;
        bgClass: string;
        textColor: string;
    };

    const features: Feature[] = [
        {
            id: 1,
            title: "Free Delivery",
            description: "Consetetur eirmod dolor stet justo gubergren ea et lorem sadipscing.",
            iconClass: "ti-truck-delivery",
            bgClass: "bg-info",
            textColor: "text-info"
        },
        {
            id: 2,
            title: "Great Deals & Offers",
            description: "Consetetur eirmod dolor stet justo gubergren ea etlorem sadipscing.",
            iconClass: "ti-tags",
            bgClass: "bg-secondary",
            textColor: "text-secondary"
        },
        {
            id: 3,
            title: "Easy Returns",
            description: "Consetetur eirmod dolor stet justo gubergren ea et lorem sadipscing.",
            iconClass: "ti-package",
            bgClass: "bg-success",
            textColor: "text-success"
        }
    ];

    const cityData = [
        { label: 'Georgetown', value: 1 },
        { label: 'Alexandria', value: 2 },
        { label: 'Rockville', value: 3 },
        { label: 'Frederick', value: 4 },
    ]
    const StateData = [
        { label: 'Washington,D.C', value: 1 },
        { label: 'California', value: 2 },
        { label: 'Texas', value: 3 },
        { label: 'Alaska', value: 4 },
    ]
    // Define a type for the product
    type Product = {
        id: number;
        name: string;
        brand: string;
        qty: string;
        price: string;
        totalPrice: string;
        imageUrl: string;
    };

    const products: Product[] = [
        {
            id: 1,
            name: "Bluetooth Speaker",
            brand: "JBL",
            qty: "2 × $149",
            price: "$149",
            totalPrice: "$298",
            imageUrl: "../../../assets/images/ecommerce/png/13.png",
        },
        {
            id: 2,
            name: "Laptop Backpack",
            brand: "Samsonite",
            qty: "1 × $59",
            price: "$59",
            totalPrice: "$108",
            imageUrl: "../../../assets/images/ecommerce/png/14.png",
        },
        {
            id: 3,
            name: "Wall Clock",
            brand: "Herman Miller",
            qty: "1 × $299",
            price: "$299",
            totalPrice: "$299",
            imageUrl: "../../../assets/images/ecommerce/png/15.png",
        },
    ];

    return (
        <Fragment>
            <Seo title="Checkout" />
            <Pageheader title='Apps' subtitle='Ecommerce' currentpage='Checkout' activepage='Checkout' />
            {/* <!-- Start:: Row-1 --> */}
            <Row className="">
                <Col xxl={9}>
                    <Card className="custom-card">
                        <Card.Body className=" product-checkout">
                            <Tab.Container defaultActiveKey="first" activeKey={key} onSelect={handleTabSelect}>
                                <Nav className="nav nav-tabs tab-style-7 scaleX d-sm-flex d-block justify-content-around border border-dashed border-bottom-0 rounded-top" id="myTab1" role="tablist">
                                    <Nav.Item className="" role="presentation">
                                        <Nav.Link eventKey="first" className="p-3" id="confirmed-tab" data-bs-toggle="tab"
                                            data-bs-target="#confirm-tab-pane" type="button" role="tab"
                                            aria-controls="confirmed-tab" aria-selected="false"><i
                                                className="ri-user-3-line me-2 align-middle"></i>Personal Details</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="" role="presentation">
                                        <Nav.Link eventKey="second" className="p-3" id="order-tab" data-bs-toggle="tab"
                                            data-bs-target="#order-tab-pane" type="button" role="tab"
                                            aria-controls="order-tab" aria-selected="true"><i
                                                className="ri-truck-line me-2 align-middle"></i>Shipping</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item className="" role="presentation">
                                        <Nav.Link eventKey="third" className="p-3" id="shipped-tab" data-bs-toggle="tab"
                                            data-bs-target="#shipped-tab-pane" type="button" role="tab"
                                            aria-controls="shipped-tab" aria-selected="false"><i
                                                className="ri-bank-card-line me-2 align-middle"></i>Payment</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="" role="presentation">
                                        <Nav.Link eventKey="fourth" className="p-3" id="delivered-tab" data-bs-toggle="tab"
                                            data-bs-target="#delivery-tab-pane" type="button" role="tab"
                                            aria-controls="delivered-tab" aria-selected="false"><i
                                                className="ri-checkbox-circle-line me-2 align-middle"></i>Complete Order</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content className="border border-dashed" id="myTabContent">
                                    <Tab.Pane eventKey="first" className="fade border-0 p-0" id="confirm-tab-pane"
                                        role="tabpanel" aria-labelledby="confirm-tab-pane" tabIndex={0}>
                                        <div className="p-3">
                                            <p className="mb-1 fw-semibold text-muted op-5 fs-20">01</p>
                                            <div className="fs-15 fw-semibold d-sm-flex d-block align-items-center justify-content-between mb-3">
                                                <div>Personal Details :</div>
                                            </div>
                                            <Row className=" gy-3">
                                                <Col xl={6} className="">
                                                    <label htmlFor="firstname-personal" className="form-label">First Name</label>
                                                    <Form.Control type="text" className="form-control" id="firstname-personal" placeholder="First Name" defaultValue="Json" />
                                                </Col>
                                                <Col xl={6} className="">
                                                    <Form.Label htmlFor="lastname-personal" className="form-label">Last Name</Form.Label>
                                                    <Form.Control type="text" className="form-control" id="lastname-personal" placeholder="Last Name" defaultValue="Taylor" />
                                                </Col>
                                                <Col xl={6} className="">
                                                    <Form.Label htmlFor="email-personal" className="form-label">Email</Form.Label>
                                                    <Form.Control type="email" className="form-control" id="email-personal" placeholder="xyz@example.com" defaultValue="" />
                                                </Col>
                                                <Col xl={6} className="">
                                                    <Form.Label htmlFor="phoneno-personal" className="form-label">Phone no</Form.Label>
                                                    <Form.Control type="text" className="form-control" id="phoneno-personal" placeholder="(555)-555-1234" defaultValue="" />
                                                </Col>
                                                <Col xxl={2} className="">
                                                    <Form.Label htmlFor="pincode-personal" className="form-label">Pincode</Form.Label>
                                                    <Form.Control type="text" className="form-control" id="pincode-personal" placeholder="200017" defaultValue="" />
                                                </Col>
                                                <Col xxl={4} className="">
                                                    <Form.Label htmlFor="choices-single-default" className="form-label">City</Form.Label>
                                                    <SpkSelect name="colors" option={cityData} mainClass="basic-multi-select"
                                                        menuplacement='auto' classNameprefix="Select2" placeholder="Select" />
                                                </Col>
                                                <Col xxl={4} className="">
                                                    <Form.Label htmlFor="choices-single-default1" className="form-label">State</Form.Label>
                                                    <SpkSelect name="colors" option={StateData} mainClass="basic-multi-select"
                                                        menuplacement='auto' classNameprefix="Select2" placeholder="Select" />
                                                </Col>
                                                <Col xxl={2} className="">
                                                    <Form.Label htmlFor="country-personal" className="form-label">Country</Form.Label>
                                                    <Form.Control type="text" className="form-control" id="country-personal" placeholder="Country" defaultValue="USA" />
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className="p-3 border-top border-block-start-dashed d-sm-flex justify-content-end" onClick={handleNext}>
                                            <SpkButton Buttonvariant="secondary-light" Id="personal-details-trigger" Customclass="">Continue to shipping<i className="ri-user-3-line ms-2 align-middle d-inline-block"></i></SpkButton>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second" className="fade border-0 p-0" id="order-tab-pane" role="tabpanel"
                                        aria-labelledby="order-tab-pane" tabIndex={0}>
                                        <div className="p-3">
                                            <p className="mb-1 fw-semibold text-muted op-5 fs-20">02</p>
                                            <div className="row gy-3 mb-4">
                                                <p className="fs-15 fw-semibold mb-1">Shipping Methods :</p>
                                                <Col xl={6}>
                                                    <div className="form-check shipping-method-container mb-0">
                                                        <input id="shipping-method1" name="shipping-methods" type="radio" className="form-check-input" defaultChecked />
                                                        <div className="form-check-label">
                                                            <div className="d-sm-flex align-items-center justify-content-between">
                                                                <div className="me-2">
                                                                    <span className="avatar avatar-md custom-width">
                                                                        <Image fill src="../../../assets/images/ecommerce/png/21.png" alt="" />
                                                                    </span>
                                                                </div>
                                                                <div className="shipping-partner-details me-sm-5 me-0">
                                                                    <p className="mb-0 fw-semibold">UPS</p>
                                                                    <p className="text-muted fs-11 mb-0">Delivered By 11,May 2024</p>
                                                                </div>
                                                                <div className="fw-semibold me-sm-5 me-0">
                                                                    $9.99
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xl={6}>
                                                    <div className="form-check shipping-method-container mb-0">
                                                        <input id="shipping-method2" name="shipping-methods" type="radio" className="form-check-input" />
                                                        <div className="form-check-label">
                                                            <div className="d-sm-flex align-items-center justify-content-between">
                                                                <div className="me-2">
                                                                    <span className="avatar avatar-md custom-width">
                                                                        <Image fill src="../../../assets/images/ecommerce/png/22.png" alt="" />
                                                                    </span>
                                                                </div>
                                                                <div className="shipping-partner-details me-sm-5 me-0">
                                                                    <p className="mb-0 fw-semibold">USPS</p>
                                                                    <p className="text-muted fs-11 mb-0">Delivered By 22,Nov 2022</p>
                                                                </div>
                                                                <div className="fw-semibold me-sm-5 me-0">
                                                                    $10.49
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </div>
                                            <div className="fs-15 fw-semibold d-sm-flex d-block align-items-center justify-content-between mb-3">
                                                <div>Shipping Address :</div>
                                                <div className="mt-sm-0 mt-2">
                                                    <SpkButton Buttonvariant="primary" onClickfunc={handleShow} Size="sm" Buttontoggle="modal" Buttontarget="#modal-new-address" Customclass=""><i className="ri-add-line me-1 align-middle fs-14 fw-semibold"></i>Add New Address</SpkButton>
                                                    <Modal show={show} size="lg" centered onHide={handleClose} className="modal fade" id="modal-new-address" tabIndex={-1} aria-labelledby="modal-new-address">
                                                        <Modal.Header>
                                                            <h6 className="modal-title" id="staticBackdropLabel">New Address
                                                            </h6>
                                                            <SpkButton Buttonvariant="" Buttontype="button" Customclass="btn-close" Buttondismiss="modal" Buttonlabel="Close" onClickfunc={handleClose}></SpkButton>
                                                        </Modal.Header>
                                                        <Modal.Body>
                                                            <div className="row gy-3">
                                                                <Col xl={6}>
                                                                    <Form.Label htmlFor="fullname-new" className="">Full Name</Form.Label>
                                                                    <Form.Control type="text" className="" id="fullname-new" placeholder="Full Name" />
                                                                </Col>
                                                                <Col xl={6}>
                                                                    <Form.Label htmlFor="email-new" className="">Email</Form.Label>
                                                                    <Form.Control type="email" className="" id="email-new" placeholder="email" />
                                                                </Col>
                                                                <Col xl={6}>
                                                                    <Form.Label htmlFor="phonenumber-new" className="">Phone Number</Form.Label>
                                                                    <Form.Control type="number" className="" id="phonenumber-new" placeholder="Phone" />
                                                                </Col>
                                                                <Col xl={6}>
                                                                    <Form.Label htmlFor="address-new" className="">Address</Form.Label>
                                                                    <Form.Control type="text" className="" id="address-new" placeholder="Address" />
                                                                </Col>
                                                                <Col xl={12}>
                                                                    <Row>
                                                                        <Col xl={3}>
                                                                            <Form.Label htmlFor="pincode-new" className="">Pincode</Form.Label>
                                                                            <Form.Control type="number" className="" id="pincode-new" placeholder="Pincode" />
                                                                        </Col>
                                                                        <Col xl={3}>
                                                                            <Form.Label htmlFor="city-new" className="">City</Form.Label>
                                                                            <Form.Control type="text" className="" id="city-new" placeholder="City" />
                                                                        </Col>
                                                                        <Col xl={3}>
                                                                            <Form.Label htmlFor="state-new" className="">State</Form.Label>
                                                                            <Form.Control type="text" className="" id="state-new" placeholder="State" />
                                                                        </Col>
                                                                        <Col xl={3}>
                                                                            <Form.Label htmlFor="country-new" className="">Country</Form.Label>
                                                                            <Form.Control type="text" className="" id="country-new" placeholder="Country" />
                                                                        </Col>
                                                                    </Row>
                                                                </Col>
                                                            </div>
                                                        </Modal.Body>
                                                        <div className="modal-footer">
                                                            <SpkButton Buttonvariant="light" Buttontype="button" Buttondismiss="modal" onClickfunc={handleClose}>Close</SpkButton>
                                                            <SpkButton Buttonvariant="success" Buttontype="button">Save Address</SpkButton>
                                                        </div>
                                                    </Modal>
                                                </div>
                                            </div>
                                            <Row>
                                                <Col xl={6}>
                                                    <div className="card custom-card card-style-6 border shadow-none mb-xl-0">
                                                        <Card.Body className=" p-3">
                                                            <div className="d-flex gap-2">
                                                                <input className="form-check-input" type="radio" id="address1" name="default-address" defaultChecked />
                                                                <label className="form-check-label cursor-pointer" htmlFor="address1">Set as Default</label>
                                                            </div>
                                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                                <div className="flex-grow-1">
                                                                    <h6 className="fs-16 mb-0 fw-semibold">My Home Address</h6>
                                                                </div>
                                                                <Link scroll={false} href="#!" className="btn btn-primary btn-sm"><i className="ri-edit-2-line"></i> Change</Link>
                                                            </div>
                                                            <h6 className="mb-1">Victoria Gracie</h6>
                                                            <p className="mb-1 fw-500 fs-13">victoriagracie@jinno.mail</p>
                                                            <p className="mb-2 fw-500 fs-13">+05-554-874113</p>
                                                            <p className="mb-0">
                                                                H.No: 48A-1B/C451, Smart Avenue,Coolin Street,
                                                                Opp. NG Super Mart, 57016, Canada
                                                            </p>
                                                        </Card.Body>
                                                    </div>
                                                </Col>
                                                <Col xl={6}>
                                                    <div className="card custom-card card-style-6 border shadow-none mb-0">
                                                        <Card.Body className=" p-3">
                                                            <div className="d-flex gap-2">
                                                                <input className="form-check-input" type="radio" id="address2" name="default-address" />
                                                                <label className="form-check-label cursor-pointer" htmlFor="address2">Set as Default</label>
                                                            </div>
                                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                                <div className="flex-grow-1">
                                                                    <div className="d-flex align-items-center gap-2 card-style-6-avatar">
                                                                        <h6 className="fs-16 mb-0 fw-semibold">Work Place Address</h6>
                                                                    </div>
                                                                </div>
                                                                <Link href="#!" scroll={false} className="btn btn-primary btn-sm"><i className="ri-edit-2-line"></i> Change</Link>
                                                            </div>
                                                            <h6 className="mb-1">Victoria Gracie</h6>
                                                            <p className="mb-1 fw-500 fs-13">victoriagracie@jinno.mail</p>
                                                            <p className="mb-2 fw-500 fs-13">+05-554-874113</p>
                                                            <p className="mb-0">
                                                                Sunset Plaza, 5th Floor, Suite No: 502, Ocean Avenue,, Seaview Heights, Sunnydale, CA 90210, United States
                                                            </p>
                                                        </Card.Body>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className="p-3 border-top border-block-start-dashed d-sm-flex justify-content-between">
                                            <SpkButton Buttonvariant="primary-light" Id="back-shipping-trigger" onClickfunc={handlePrevious} Customclass=""><i className="ri-truck-line me-2 align-middle d-inline-block"></i>Back To Personal Details</SpkButton>
                                            <SpkButton Buttonvariant="secondary-light" Customclass="mt-sm-0 mt-2" Id="payment-trigger" onClickfunc={handleNext}>Continue To Payment<i className="bi bi-credit-card-2-front align-middle ms-2 d-inline-block"></i></SpkButton>
                                        </div>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="third" className="fade border-0 p-0" id="shipped-tab-pane" role="tabpanel"
                                        aria-labelledby="shipped-tab-pane" tabIndex={0}>
                                        <div className="p-3">
                                            <p className="mb-1 fw-semibold text-muted op-5 fs-20">03</p>
                                            <Row>
                                                <Col xl={12}>
                                                    <div className="fs-15 fw-semibold d-sm-flex d-block align-items-center justify-content-between mb-3">
                                                        <div>Payment Details :</div>
                                                    </div>
                                                    <div className="mb-3 d-sm-flex d-block gap-3" role="group" aria-label="Basic radio toggle button group">
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio" name="Paymentoptions" id="Paymentoptions3" defaultValue="Paymentoptions3" defaultChecked />
                                                            <label className="form-check-label" htmlFor="Paymentoptions3">Credit/Debit Card</label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio" name="Paymentoptions" id="Paymentoptions1" defaultValue="Paymentoptions1" />
                                                            <label className="form-check-label" htmlFor="Paymentoptions1">C.O.D (Cash on delivery)</label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input className="form-check-input" type="radio" name="Paymentoptions" id="Paymentoptions2" defaultValue="Paymentoptions2" />
                                                            <label className="form-check-label" htmlFor="Paymentoptions2">UPI Payment</label>
                                                        </div>
                                                    </div>
                                                    <div className="row gy-3 mb-3">
                                                        <Col xl={12}>
                                                            <Form.Label htmlFor="payment-card-number" className="">Card Number</Form.Label>
                                                            <Form.Control type="text" className="" id="payment-card-number" placeholder="Card Number" defaultValue="1245 - 5447 - 8934 - XXXX" />
                                                        </Col>
                                                        <Col xl={12}>
                                                            <Form.Label htmlFor="payment-card-name" className="">Name On Card</Form.Label>
                                                            <Form.Control type="text" className="" id="payment-card-name" placeholder="Name On Card" defaultValue="JSON TAYLOR" />
                                                        </Col>
                                                        <Col xl={4}>
                                                            <Form.Label htmlFor="payment-cardexpiry-date" className="">Expiration Date</Form.Label>
                                                            <Form.Control type="text" className="" id="payment-cardexpiry-date" placeholder="MM/YY" defaultValue="08/2024" />
                                                        </Col>
                                                        <Col xl={4}>
                                                            <Form.Label htmlFor="payment-cvv" className="">CVV</Form.Label>
                                                            <Form.Control type="text" className="" id="payment-cvv" placeholder="XXX" defaultValue="341" />
                                                        </Col>
                                                        <Col xl={4}>
                                                            <Form.Label htmlFor="payment-security" className="">O.T.P</Form.Label>
                                                            <Form.Control type="text" className="" id="payment-security" placeholder="XXXXXX" defaultValue="183467" />
                                                            <label htmlFor="payment-security" className="form-label mt-1 mb-0 text-danger fs-11"><sup><i className="ri-star-s-fill"></i></sup>Do not share O.T.P with anyone</label>
                                                        </Col>
                                                        <Col xl={12}>
                                                            <div className="form-check">
                                                                <input className="form-check-input form-checked-success" type="checkbox" defaultValue="" id="payment-card-save" defaultChecked />
                                                                <label className="form-check-label" htmlFor="payment-card-save">
                                                                    Save this card
                                                                </label>
                                                            </div>
                                                        </Col>
                                                    </div>
                                                    <div className="fs-15 fw-semibold d-sm-flex d-block align-items-center justify-content-between mb-3">
                                                        <div>Saved Cards :</div>
                                                    </div>
                                                    <div className="row gy-3">
                                                        <Col xl={6}>
                                                            <div className="form-check payment-card-container mb-0">
                                                                <input id="payment-card1" name="payment-cards" type="radio" className="form-check-input" defaultChecked />
                                                                <div className="form-check-label">
                                                                    <div className="d-sm-flex d-block align-items-center justify-content-between">
                                                                        <div className="me-2 lh-1">
                                                                            <span className="avatar avatar-md custom-width">
                                                                                <Image fill src="../../../assets/images/ecommerce/png/26.png" alt="" />
                                                                            </span>
                                                                        </div>
                                                                        <div className="saved-card-details">
                                                                            <p className="mb-0 fw-semibold">XXXX - XXXX - XXXX - 7646</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col xl={6}>
                                                            <div className="form-check payment-card-container mb-0">
                                                                <input id="payment-card2" name="payment-cards" type="radio" className="form-check-input" />
                                                                <div className="form-check-label">
                                                                    <div className="d-sm-flex d-block align-items-center justify-content-between">
                                                                        <div className="me-2 lh-1">
                                                                            <span className="avatar avatar-md custom-width">
                                                                                <Image fill src="../../../assets/images/ecommerce/png/27.png" alt="" />
                                                                            </span>
                                                                        </div>
                                                                        <div className="saved-card-details">
                                                                            <p className="mb-0 fw-semibold">XXXX - XXXX - XXXX - 9556</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className="p-3 border-top border-block-start-dashed d-sm-flex justify-content-between">
                                            <SpkButton Buttonvariant="primary-light" Id="back-personal-trigger" onClickfunc={handlePrevious}><i className="ri-user-3-line me-2 align-middle d-inline-block"></i>Back To Shipping </SpkButton>
                                            <SpkButton Buttonvariant="secondary-light" Customclass="mt-sm-0 mt-2" Id="continue-payment-trigger" onClickfunc={handleNext}>Continue Payment<i className="bi bi-credit-card-2-front align-middle ms-2 d-inline-block"></i></SpkButton>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth" className="fade border-0 p-0" id="delivery-tab-pane" role="tabpanel"
                                        aria-labelledby="delivery-tab-pane" tabIndex={0}>
                                        <div className="p-3 checkout-payment-success my-3">
                                            <div className="mb-4">
                                                <h5 className="text-success fw-semibold">Payment Successful...</h5>
                                            </div>
                                            <div className="mb-4">
                                                <Image width={200} height={200} src="../../../assets/images/ecommerce/png/24.png" alt="" />
                                            </div>
                                            <div className="mb-4">
                                                <p className="mb-1 fs-14">You can track your order with Order Id <b>SPK#1FR</b> from  <Link scroll={false} href="#!" className="link-info"><u>Track Order</u></Link></p>
                                                <p className="text-muted">Thankyou for shopping with us.</p>
                                            </div>
                                            <Link scroll={false} href="/apps/ecommerce/products" className="btn btn-primary">Continue Shopping<i className="bi bi-cart ms-2"></i></Link>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                    <Row className="">
                        {features.map((feature) => (
                            <Col xl={4} key={feature.id} className="">
                                <Card className={` card-style-5 ${feature.bgClass}-transparent`}>
                                    <Card.Body className="">
                                        <div className="d-flex align-items-start gap-3">
                                            <div className="min-w-fit-content">
                                                <span className={`avatar rounded-circle ${feature.bgClass}`}>
                                                    <i className={`ti ${feature.iconClass} fs-5`}></i>
                                                </span>
                                            </div>
                                            <div className="flex-grow-1">
                                                <p className={`mb-0 fw-medium fs-16 ${feature.textColor}`}>{feature.title}</p>
                                                <p className="mb-0 text-muted">{feature.description}</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col xxl={3} className="">
                    <Card className=" custom-card">
                        <Card.Header className="">
                            <div className="card-title me-1">Order Summary</div>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <SpkListgroup as="ul" CustomClass="list-unstyled list-group list-group-flush mb-0">
                                {products.map((product) => (
                                    <ListGroup.Item key={product.id}>
                                        <div className="d-flex align-items-start">
                                            <div className="min-w-fit-content me-3">
                                                <Link scroll={false} href="#!" className="avatar avatar-xxl bg-light rounded">
                                                    <Image fill src={product.imageUrl} alt={product.name} className="w-100 img-fluid" />
                                                </Link>
                                            </div>
                                            <div className="flex-grow-1">
                                                <p className="mb-2 fw-medium">{product.name}</p>
                                                <div className="d-flex align-items-end flex-wrap gap-2">
                                                    <div className="flex-grow-1">
                                                        <p className="mb-1 text-muted">
                                                            <span>Brand:</span>
                                                            <span className="ms-1">{product.brand}</span>
                                                        </p>
                                                        <p className="mb-0 text-muted">
                                                            <span>Qty:</span>
                                                            <span className="ms-1">{product.qty}</span>
                                                        </p>
                                                    </div>
                                                    <span className="min-w-fit-content fw-medium">{product.totalPrice}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                ))}
                            </SpkListgroup>
                            <div className="p-3">
                                <p className="mb-2 text-muted">Have a coupon code? Enter below</p>
                                <div className="custom-input-group mb-3">
                                    <input type="text" className="form-control addon-end-input pe-5rem" placeholder="Coupon code" />
                                    <Link scroll={false} href="#!" className="text-primary custom-addon end-0">Check</Link>
                                </div>
                                <div className="d-flex align-items-center justify-content-between fw-medium mb-2">
                                    <span>Sub total</span>
                                    <span>$624</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-2 text-muted">
                                    <span>Delivery Charges:</span>
                                    <span>+$5.03</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-2 text-muted">
                                    <span>Discount:</span>
                                    <span>-$10.08</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between fw-medium fs-18 text-primary">
                                    <span>Total</span>
                                    <span>$590</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: Row-1 --> */}
        </Fragment>
    );
};

export default Checkout;