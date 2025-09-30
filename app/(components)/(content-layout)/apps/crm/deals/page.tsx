"use client"
import SpkDealsCard from "@/shared/@spk-reusable-components/reusable-apps/spk-deals";
import SpkDatepickr from "@/shared/@spk-reusable-components/reusable-plugins/spk-datepicker";
import SpkBadge from "@/shared/@spk-reusable-components/reusable-uiElements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import { ContactInitiated, DiscoveredData, Finalized, leadStages, NeedsIdentified, Negotiation, QualifiedData } from "@/shared/data/apps/crm/dealsdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Card, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";

interface DealsProps { }

const Deals: React.FC<DealsProps> = () => {
    const [dates, setDates] = useState<{ [key: string]: Date | string | null }>({});
    const handleDateChange = (key: string, date: Date | null) => {
        if (date) {
            setDates((prevDates) => ({
                ...prevDates,
                [key]: date,
            }));
        } else {
            setDates((prevDates) => {
                const { [key]: removedKey, ...rest } = prevDates;
                return rest;
            });
        }
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const firstContainerRef = useRef<HTMLDivElement>(null);
    const secondContainerRef = useRef<HTMLDivElement>(null);
    const thirdContainerRef = useRef<HTMLDivElement>(null);
    const fourthContainerRef = useRef<HTMLDivElement>(null);
    const fifthContainerRef = useRef<HTMLDivElement>(null);
    const sixthContainerRef = useRef<HTMLDivElement>(null);

    const [isViewMoreButtonVisible, setIsViewMoreButtonVisible] = useState(true);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const dragula = require("dragula");
            const containers = [
                firstContainerRef.current,
                secondContainerRef.current,
                thirdContainerRef.current,
                fourthContainerRef.current,
                fifthContainerRef.current,
                sixthContainerRef.current,
            ];

            if (firstContainerRef.current && secondContainerRef.current) {
                const drake = dragula(containers);

                // Checking if the first container has a specific class
                if (firstContainerRef.current.classList.contains("task-Null")) {
                    setIsViewMoreButtonVisible(false);  // Hide the button based on the class
                }
            }
        }
    }, []);

    const [selectedImage, setSelectedImage] = useState("../../../assets/images/faces/9.jpg");

    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const openFileInput = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const selectedFile = e.target.files && e.target.files[0];
        if (selectedFile) {
            // You can handle the file here, for example, upload it to a server.
            const reader = new FileReader();
            reader.onload = (event: MouseEvent) => {
                setSelectedImage(event.target?.result);
            };
            reader.readAsDataURL(selectedFile);
        }
    };
    return (
        <Fragment>
            <Seo title="Deals" />
            <Pageheader title='Apps' subtitle='CRM' currentpage='Deals' activepage='Deals' />
            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body>
                            <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                                <div className="d-flex align-items-center">
                                    <span className="fw-medium fs-16 me-2">Deals</span><span className="badge bg-primary align-middle">26</span>
                                </div>
                                <div className="d-flex flex-wrap gap-2">
                                    <SpkButton Buttonvariant="primary" Customclass="btn btn-sm" data-bs-toggle="modal" data-bs-target="#create-contact" onClickfunc={handleShow}><i className="ri-add-line me-1 fw-medium align-middle"></i>New Deal</SpkButton>
                                    <SpkButton Buttonvariant="success-light" Customclass="btn  btn-sm">Export As CSV</SpkButton>
                                    <SpkDropdown Customclass="nav-item dropdown" Togglevariant="light" Customtoggleclass="btn btn-sm btn-wave waves-effect waves-light no-caret " Toggletext="Sort By" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block" >
                                        <Dropdown.Item as="li" >Newest</Dropdown.Item>
                                        <Dropdown.Item as="li" >Date Added</Dropdown.Item>
                                        <Dropdown.Item as="li" >A - Z here</Dropdown.Item>
                                    </SpkDropdown>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}

            {/* <!-- Start::row-2 --> */}
            <Row>
                {leadStages.map((idx) => (
                    <Col xxl={2} md={4} key={idx.id}>
                        <Card className={`custom-card border bg-${idx.bgColor}-transparent border-${idx.bgColor} border-opacity-50`}>
                            <Card.Body className=" p-3">
                                <div className="d-flex align-items-top flex-wrap justify-content-between">
                                    <div>
                                        <h6 className={`fw-medium mb-0 ${idx.className}`}><i className={`ri-circle-fill p-1 lh-1 fs-7 rounded-2 bg-${idx.bgColor}-transparent text-${idx.bgColor} me-2 align-middle`}></i>{idx.title}</h6>
                                    </div>
                                    <div className="ms-auto text-center">
                                        <SpkBadge variant={`${idx.bgColor}`}>{idx.count}</SpkBadge>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            {/* <!-- End::row-2 --> */}

            {/* <!-- Start::row-3 --> */}
            <Row>
                <Col xxl={2} id="leads-discovered" ref={firstContainerRef}>
                    {DiscoveredData.map((idx) => (
                        <SpkDealsCard key={idx.id} card={idx} />
                    ))}
                </Col>
                <Col xxl={2} id="leads-qualified" ref={secondContainerRef}>
                    {QualifiedData.map((idx) => (
                        <SpkDealsCard key={idx.id} card={idx} />
                    ))}
                </Col>
                <Col xxl={2} id="contact-initiated" ref={thirdContainerRef}>
                    {ContactInitiated.map((idx) => (
                        <SpkDealsCard key={idx.id} card={idx} />
                    ))}
                </Col>
                <Col xxl={2} id="needs-identified" ref={fourthContainerRef}>
                    {NeedsIdentified.map((idx) => (
                        <SpkDealsCard key={idx.id} card={idx} />
                    ))}
                </Col>
                <Col xxl={2} id="negotiation" ref={fifthContainerRef}>
                    {Negotiation.map((idx) => (
                        <SpkDealsCard key={idx.id} card={idx} />
                    ))}
                </Col>
                <Col xxl={2} id="deal-finalized" ref={sixthContainerRef}>
                    {Finalized.map((idx) => (
                        <SpkDealsCard key={idx.id} card={idx} />
                    ))}
                </Col>
            </Row>
            {/* <!-- End::row-3 --> */}

            {/* <!-- Start:: New Deal --> */}
            <Modal show={show} onHide={handleClose} className="fade" centered id="create-contact" tabIndex={-1}>
                <Modal.Header>
                    <Modal.Title as={'h6'}>New Deal</Modal.Title>
                    <SpkButton Customclass="btn-close" Buttonvariant="" Buttontype="button" onClickfunc={handleClose} >
                    </SpkButton>
                </Modal.Header>
                <Modal.Body className="px-4">
                    <Row className="gy-3">
                        <Col xl={12}>
                            <div className="mb-0 text-center">
                                <span className="avatar avatar-xxl avatar-rounded">
                                    <Image width={80} height={80} src={selectedImage || ''} alt="" id="profile-img" />
                                    <SpkBadge variant="primary" Customclass="rounded-pill avatar-badge" Onclickfun={openFileInput}>
                                        <input type="file" name="photo" className="position-absolute w-100 h-100 op-0" id="profile-change" ref={fileInputRef} onChange={handleImageChange} style={{ display: 'none' }} />
                                        <i className="fe fe-camera"></i>
                                    </SpkBadge>
                                </span>
                            </div>
                        </Col>
                        <Col xl={6} >
                            <Form.Label htmlFor="deal-name" >Contact Name</Form.Label>
                            <Form.Control type="text" id="deal-name" placeholder="Contact Name" />
                        </Col>
                        <Col xl={6}>
                            <Form.Label htmlFor="deal-lead-score">Deal Value</Form.Label>
                            <Form.Control type="number" id="deal-lead-score" placeholder="Deal Value" />
                        </Col>
                        <Col xl={12}>
                            <Form.Label htmlFor="company-name">Company Name</Form.Label>
                            <Form.Control type="text" id="company-name" placeholder="Company Name" />
                        </Col>
                        <Col xl={12} className='custom-deals'>
                            <Form.Label>Last Contacted</Form.Label>
                            <div className="input-group datepicker-inputwraper">
                                <div className="input-group-text text-muted border-end-0"> <i className="ri-calendar-line"></i> </div>
                                <SpkDatepickr className="form-control" dateFormat="yy/MM/dd h:mm aa" selected={dates["LastContacted"] ? new Date(dates["LastContacted"]) : null} onChange={(date: Date | null) => handleDateChange("LastContacted", date)} showTimeInput />
                            </div>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <SpkButton Buttonvariant="light" Buttontype="button" onClickfunc={handleClose} >
                        Cancel
                    </SpkButton>
                    <SpkButton Buttonvariant="primary" Buttontype="button" >
                        Create Deal
                    </SpkButton>
                </Modal.Footer>
            </Modal>
            {/* <!-- End:: New Deal --> */}
        </Fragment>
    );
};

export default Deals;