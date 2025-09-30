"use client"
import SpkDatepickr from "@/shared/@spk-reusable-components/reusable-plugins/spk-datepicker";
import SpkSelect from "@/shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/reusable-uiElements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import SpkTooltips from "@/shared/@spk-reusable-components/reusable-uiElements/spk-tooltips";
import { ContactsData, leads, Tags } from "@/shared/data/apps/crm/contactsdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useRef, useState } from "react";
import { Card, Col, Dropdown, Form, Modal, Offcanvas, Row } from "react-bootstrap";

interface ContactsProps { }

const Contacts: React.FC<ContactsProps> = () => {
    const [contactsShow, setContactsShow] = useState<{ [key: string]: boolean }>({});
    const handleShow = (offcanvasName: string) => {
        setContactsShow((prevShow) => ({ ...prevShow, [offcanvasName]: true }));
    };
    const handleClose = (offcanvasName: string) => {
        setContactsShow((prevShow) => ({ ...prevShow, [offcanvasName]: false }));
    };

    const [contactsList, setContactsList] = useState(ContactsData);
    const handleRemove = (id: number) => {
        const list = contactsList.filter((idx) => idx.id !== id)
        setContactsList(list);
    }
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

    const [selectedItems, setSelectedItems] = useState<any>([]);

    const handleCheckboxClick = (id: number) => {
        setSelectedItems((prevSelected: string[]) =>
            prevSelected.includes(id)
                ? prevSelected.filter((item: string) => item !== id)
                : [...prevSelected, id]
        );
    };
    const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setSelectedItems(contactsList.map((idx: { id: number; }) => idx.id));
        } else {
            setSelectedItems([]);
        }
    };


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
            <Seo title="Contacts" />
            <Pageheader title='Apps' subtitle='CRM' currentpage='Contacts' activepage='Contacts' />
            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className=" d-flex align-items-center justify-content-between flex-wrap gap-3">
                            <Card.Title>
                                Contacts
                            </Card.Title>
                            <div className="d-flex flex-wrap gap-2">
                                <SpkButton Buttonvariant="primary" Customclass="btn btn-sm" data-bs-toggle="modal" data-bs-target="#create-contact" onClickfunc={() => handleShow('modal')}><i className="ri-add-line me-1 fw-medium align-middle"></i>Create Contact</SpkButton>
                                <SpkButton Buttonvariant="success-light" Customclass="btn btn- btn-sm">Export As CSV</SpkButton>
                                <SpkDropdown toggleas='a' Customtoggleclass="btn btn-light btn-sm btn-wave waves-effect waves-light no-caret" Toggletext="Sort By" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                    <li><Dropdown.Item href="#!">Newest</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Date Added</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">A - Z</Dropdown.Item></li>
                                </SpkDropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="table text-nowrap table-hover" onChange={handleSelectAll} checked={selectedItems.length === contactsList.length} showCheckbox={true} header={[{ title: 'Contact Name' }, { title: 'Email' }, { title: 'Company' }, { title: 'Lead Score' }, { title: 'Priority' }, { title: 'Phone' }, { title: 'Tags' }, { title: 'Lead Source' }, { title: 'Actions' },]}>
                                    {contactsList.map((idx) => (
                                        <tr className="crm-contact contacts-list" key={idx.id}>
                                            <td className="contacts-checkbox">
                                                <input className="form-check-input" type="checkbox" id="checkboxNoLabel1" aria-label="..."
                                                    onChange={() => handleCheckboxClick(idx.id)}
                                                    checked={selectedItems.includes(idx.id)}
                                                />
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-rounded avatar-sm custom-width">
                                                            <Image fill src={idx.avatar} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <Link scroll={false} data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" onClick={() => handleShow('offcanvas')}><span className="d-block fw-medium">{idx.name}</span></Link>
                                                        <SpkTooltips placement="top" title="Last Contacted" tooltipClass="tooltip-primary" >
                                                            <span className="d-block text-muted fs-11"><i className="ri-account-circle-line me-1 fs-13 align-middle"></i>{idx.lastContacted}</span>
                                                        </SpkTooltips>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <span className="d-block mb-1"><i className="ri-mail-line me-2 align-middle fs-14 text-muted"></i>{idx.email}</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-sm p-1 bg-light avatar-rounded custom-width">
                                                            <Image fill src={idx.companyLogo} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>{idx.company}</div>
                                                </div>
                                            </td>
                                            <td>
                                                {idx.leadScore}
                                            </td>
                                            <td>
                                                <SpkBadge variant={`${idx.priorityColor}-transparent`}>{idx.priority}</SpkBadge>
                                            </td>
                                            <td>
                                                <div>
                                                    <span className="d-block"><i className="ri-phone-line me-2 align-middle fs-14 text-muted"></i>{idx.phone}</span>
                                                </div>
                                            </td>
                                            <td>
                                                <SpkBadge variant="primary-transparent">{idx.clientType}</SpkBadge>
                                            </td>
                                            <td>
                                                {idx.source}
                                            </td>
                                            <td>
                                                <div className="btn-list">
                                                    <Link scroll={false} data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" className="btn btn-sm btn-primary-light btn-icon" onClick={() => handleShow('offcanvas')}><i className="ri-eye-line"></i></Link>
                                                    <SpkButton Buttonvariant="info-light" Customclass="btn btn-sm btn-icon"><i className="ri-pencil-line"></i></SpkButton>
                                                    <SpkButton Buttonvariant="secondary-light" Customclass="btn btn-sm btn-icon contact-delete" onClickfunc={(e: React.MouseEvent<HTMLInputElement>) => handleRemove(idx.id)}><i className="ri-delete-bin-line"></i></SpkButton>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                        <div className="card-footer border-top-0">
                            <div className="d-flex align-items-center">
                                <div>
                                    Showing 8 Entries <i className="bi bi-arrow-right ms-2 fw-medium"></i>
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
                        </div>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}

            {/* <!-- Start:: Contact Details Offcanvas --> */}
            <Offcanvas className=" offcanvas-end" show={contactsShow['offcanvas'] || false} onHide={() => handleClose('offcanvas')} tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExample" placement="end" >
                <Offcanvas.Body className=" p-0">
                    <div className="d-flex align-items-top p-3 border-bottom border-block-end-dashed main-profile-cover">
                        <span className="avatar avatar-xxl avatar-rounded me-3 flex-shrink-0 custom-width" >
                            <Image fill src="../../../assets/images/faces/11.jpg" alt="" />
                        </span>
                        <div className="flex-fill main-profile-info">
                            <div className="d-flex align-items-start justify-content-between">
                                <h6 className="fw-medium mb-1">Ethan Thompson
                                    <SpkBadge variant="success-transparent" Customclass="fs-10 ms-1"><i className="ri-circle-fill fs-8 text-success me-1 "></i> New Lead</SpkBadge>
                                </h6>
                                <SpkButton Buttonvariant='' Customclass="btn-close crm-contact-close-btn p-4" Buttontype="button" onClickfunc={() => handleClose('offcanvas')} >
                                </SpkButton>
                            </div>
                            <p className="mb-2 text-muted fs-12">Chief Financial Officer (CFO)</p>
                            <div className="d-flex gap-2 fs-15 mt-1">
                                <Link scroll={false} href="#!" className="btn btn-icon btn-sm rounded-pill btn-success-light"><i className="ri-phone-line"></i></Link>
                                <Link scroll={false} href="#!" className="btn btn-icon btn-sm rounded-pill btn-info-light"><i className="ri-mail-line"></i></Link>
                                <Link scroll={false} href="#!" className="btn btn-icon btn-sm rounded-pill btn-secondary-light"><i className="ri-message-line"></i></Link>
                                <SpkDropdown toggleas='a' Customtoggleclass="btn btn-icon btn-sm rounded-pill btn-secondary-light no-caret" Icon={true} IconClass="ri-more-fill">
                                    <li><Dropdown.Item href="#!">Size </Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Deals</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Status</Dropdown.Item></li>
                                </SpkDropdown>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex mt-3 gap-3 p-1 py-0 border-bottom border-block-end-dashed">
                        <div className="p-2 text-center flex-fill">
                            <i className="ri-shake-hands-line p-2 fs-5 rounded-circle lh-1 text-fixed-white shadow-sm bg-primary"></i>
                            <p className="fw-semibold fs-20 text-shadow mb-0 mt-2">253</p>
                            <p className="mb-0 text-muted">Deals</p>
                        </div>
                        <div className="p-2 text-center flex-fill">
                            <i className="ri-money-dollar-circle-line p-2 fs-5 rounded-circle lh-1 text-fixed-white shadow-sm bg-primary"></i>
                            <p className="fw-semibold fs-20 text-shadow mb-0 mt-2">$12k</p>
                            <p className="mb-0 text-muted">Contributions</p>
                        </div>
                        <div className="p-2 text-center flex-fill">
                            <i className="ri-thumb-up-line p-2 fs-5 rounded-circle lh-1 text-fixed-white shadow-sm bg-primary"></i>
                            <p className="fw-semibold fs-20 text-shadow mb-0 mt-2">$17k</p>
                            <p className="mb-0 text-muted">Comitted</p>
                        </div>
                    </div>
                    <div className="p-3 border-bottom border-block-end-dashed">
                        <div className="mb-0">
                            <p className="fs-15 mb-2 fw-medium">Professional Bio :</p>
                            <p className="text-muted mb-0">
                                I am <b className="text-default">Ethan Thompson,</b> hereby declaring that I am the founder and managing director of the prestigious company named Thompson Enterprises, and I serve as the Chief Financial Officer (CFO) of the company.
                            </p>
                        </div>
                    </div>
                    <div className="p-3 border-bottom border-block-end-dashed">
                        <p className="fs-14 mb-2 fw-medium">Contact Information :</p>
                        <div className="">
                            <div className="d-flex align-items-center mb-2">
                                <div className="me-2">
                                    <span className="avatar avatar-sm avatar-rounded bg-success-transparent">
                                        <i className="ri-mail-line align-middle fs-14"></i>
                                    </span>
                                </div>
                                <div>
                                    ethanthompson@example.com
                                    <SpkTooltips placement="top" title="Copy">
                                        <span className="text-muted lh-1 rounded-circle ms-1"><i className="ri-file-copy-fill"></i></span>
                                    </SpkTooltips>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                                <div className="me-2">
                                    <span className="avatar avatar-sm avatar-rounded bg-info-transparent">
                                        <i className="ri-phone-line align-middle fs-14"></i>
                                    </span>
                                </div>
                                <div>
                                    +(333) 555-1234
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-0">
                                <div className="me-2">
                                    <span className="avatar avatar-sm avatar-rounded bg-secondary-transparent">
                                        <i className="ri-map-pin-line align-middle fs-14"></i>
                                    </span>
                                </div>
                                <div>
                                    1234 Elm Street, Apt 101, Springfield, IL, 62701, USA
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 border-bottom border-block-end-dashed d-flex align-items-center flex-wrap gap-4">
                        <p className="fs-14 mb-0 fw-medium">Priority:</p>
                        <SpkBadge variant="success-transparent"><i className="ri-circle-fill lh-1 align-middle fs-9 me-1"></i> Low Priority</SpkBadge>
                    </div>
                    <div className="p-3 border-bottom border-block-end-dashed d-flex align-items-center flex-wrap gap-4">
                        <p className="fs-14 mb-0 fw-medium">Created Date:</p>
                        <div>25-May-2024</div>
                    </div>
                    <div className="p-3 border-bottom border-block-end-dashed d-flex align-items-center flex-wrap gap-4">
                        <p className="fs-14 mb-0 fw-medium">Lead Source:</p>
                        <div><i className="ri-instagram-line bg-danger-transparent p-1 lh-1 align-middle fs-15 me-1 rounded"></i> Instagram</div>
                    </div>
                    <div className="p-3 border-bottom border-block-end-dashed d-flex align-items-center flex-wrap gap-4">
                        <p className="fs-14 mb-0 fw-medium">Social Networks :</p>
                        <div className="btn-list mb-0">
                            <SpkButton Buttonvariant="primary-light" Customclass="btn btn-sm btn-icon  btn-wave waves-effect waves-light mb-0">
                                <i className="ri-facebook-line fw-medium"></i>
                            </SpkButton>
                            <SpkButton Buttonvariant="secondary-light" Customclass="btn btn-sm btn-icon btn-wave waves-effect waves-light mb-0">
                                <i className="ri-twitter-x-line fw-medium"></i>
                            </SpkButton>
                            <SpkButton Buttonvariant="info-light" Customclass="btn btn-sm btn-icon btn-wave waves-effect waves-light mb-0">
                                <i className="ri-instagram-line fw-medium"></i>
                            </SpkButton>
                            <SpkButton Buttonvariant="success-light" Customclass="btn btn-sm btn-icon btn-wave waves-effect waves-light mb-0">
                                <i className="ri-github-line fw-medium"></i>
                            </SpkButton>
                            <SpkButton Buttonvariant="danger-light" Customclass="btn btn-sm btn-icon btn-wave waves-effect waves-light mb-0">
                                <i className="ri-youtube-line fw-medium"></i>
                            </SpkButton>
                        </div>
                    </div>
                    <div className="p-3 border-bottom border-block-end-dashed d-flex align-items-center flex-wrap gap-4">
                        <p className="fs-14 mb-0 me-4 fw-medium">Tags :</p>
                        <div>
                            <SpkBadge variant="primary-transparent me-1">New Lead</SpkBadge>
                            <SpkBadge variant="primary-transparent">Others</SpkBadge>
                        </div>
                    </div>
                    <div className="p-3">
                        <p className="fs-14 mb-2 fw-medium">Relationship Manager :
                            <Link scroll={false} className="bg-success-transparent fs-12 p-1 pe-2 rounded mb-0 float-end" href="#!"><i className="ri-add-line me-1 align-middle"></i>Add Manager</Link>
                        </p>
                        <div className="avatar-list-stacked">
                            <span className="avatar avatar-sm avatar-rounded custom-width">
                                <Image fill src="../../../assets/images/faces/2.jpg" alt="img" />
                            </span>
                            <span className="avatar avatar-sm avatar-rounded custom-width">
                                <Image fill src="../../../assets/images/faces/8.jpg" alt="img" />
                            </span>
                            <span className="avatar avatar-sm avatar-rounded custom-width">
                                <Image fill src="../../../assets/images/faces/2.jpg" alt="img" />
                            </span>
                            <span className="avatar avatar-sm avatar-rounded custom-width">
                                <Image fill src="../../../assets/images/faces/10.jpg" alt="img" />
                            </span>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
            {/* <!-- End:: Contact Details Offcanvas --> */}

            {/* <!-- Start:: Create Contact --> */}
            <Modal show={contactsShow['modal'] || false} onHide={() => handleClose('modal')} className="modal fade" id="create-contact" tabIndex={-1} centered>
                <Modal.Header>
                    <Modal.Title as='h6' className="modal-title">Create Contact</Modal.Title>
                    <SpkButton Customclass="btn-close" Buttonvariant="" Buttontype="button" onClickfunc={() => handleClose('modal')}>
                    </SpkButton>
                </Modal.Header>
                <Modal.Body className="px-4">
                    <Row className="gy-3">
                        <Col xl={12}>
                            <div className="mb-0 text-center">
                                <span className="avatar avatar-xxl avatar-rounded custom-width profile-upload-img">
                                    <Image fill src={selectedImage || ''} alt="" id="profile-img" />
                                    <SpkBadge variant="primary" Customclass="rounded-pill avatar-badge" Onclickfun={openFileInput}>
                                        <input type="file" name="photo" className="position-absolute w-100 h-100 op-0" id="profile-change" ref={fileInputRef} onChange={handleImageChange} style={{ display: 'none' }} />
                                        <i className="fe fe-camera"></i>
                                    </SpkBadge>
                                </span>
                            </div>
                        </Col>
                        <Col xl={6}>
                            <Form.Label htmlFor="deal-title">Deal Title</Form.Label>
                            <Form.Control type="text" id="deal-title" placeholder="Deal Title" />
                        </Col>
                        <Col xl={6}>
                            <Form.Label htmlFor="contact-lead-score">Lead Score</Form.Label>
                            <Form.Control type="number" id="contact-lead-score" placeholder="Lead Score" />
                        </Col>
                        <Col xl={12}>
                            <Form.Label htmlFor="contact-mail">Email</Form.Label>
                            <Form.Control type="email" id="contact-mail" placeholder="Enter Email" />
                        </Col>
                        <Col xl={12}>
                            <Form.Label htmlFor="contact-phone">Phone No</Form.Label>
                            <Form.Control type="tel" id="contact-phone" placeholder="Enter Phone Number" />
                        </Col>
                        <Col xl={12} >
                            <Form.Label htmlFor="company-name">Company Name</Form.Label>
                            <Form.Control type="text" id="company-name" placeholder="Company Name" />
                        </Col>
                        <Col xl={12}>
                            <Form.Label className="form-label">Lead Source</Form.Label>
                            <SpkSelect name="colors" option={leads} mainClass="basic-multi-select"
                                menuplacement='auto' classNameprefix="Select2"
                            />
                        </Col>
                        <div className="col-xl-6">
                            <label className="form-label">Last Contacted</label>
                            <div className="form-group">
                                <div className="input-group datepicker-inputwraper flex-nowrap">
                                    <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                    <SpkDatepickr className="form-control" selected={dates["LastContacted"] ? new Date(dates["LastContacted"]) : null} onChange={(date: Date | null) => handleDateChange("LastContacted", date)} dateFormat="yy/MM/dd h:mm aa" showTimeInput />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <label className="form-label">Tags</label>
                            <SpkSelect name="colors" option={Tags} multi mainClass="basic-multi-select"
                                menuplacement='auto' classNameprefix="Select2" placeholder="Select Tag"
                            />
                        </div>
                    </Row>
                </Modal.Body>
                <Modal.Footer className="modal-footer">
                    <SpkButton Buttonvariant="light" Buttontype="button" onClickfunc={() => handleClose('modal')} >
                        Cancel
                    </SpkButton>
                    <SpkButton Buttonvariant="primary" Buttontype="button" >
                        Create Contact
                    </SpkButton>
                </Modal.Footer>
            </Modal>
            {/* <!-- End:: Create Contact --> */}
        </Fragment>
    );
};

export default Contacts;