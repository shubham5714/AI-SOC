"use client"
import SpkSelect from "@/shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/reusable-uiElements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import { LeadsData, Leadssource, Leadsstatus, Tags } from "@/shared/data/apps/crm/leadsdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useRef, useState } from "react";
import { Card, Col, Dropdown, Modal, Row } from "react-bootstrap";

interface LeadsProps { }

const Leads: React.FC<LeadsProps> = () => {
    const [contactsList, setContactsList] = useState(LeadsData);
    const handleRemove = (id: number) => {
        const list = contactsList.filter((idx) => idx.id !== id)
        setContactsList(list);
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [selectedItems, setSelectedItems] = useState<number[]>([])

    const handleCheckboxClick = (id: number) => {
        setSelectedItems((prevSelected: number[]) =>
            prevSelected.includes(id)
                ? prevSelected.filter((item: number) => item !== id)
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

    const fileInputRef = useRef<HTMLInputElement | null>(null)

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
            <Seo title="Leads" />
            <Pageheader title='Apps' subtitle='CRM' currentpage='Leads' activepage='Leads' />
            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className=" d-flex align-items-center justify-content-between flex-wrap gap-3">
                            <Card.Title>
                                Leads<SpkBadge variant="primary" Customclass="rounded ms-2 fs-12 align-middle">28</SpkBadge>
                            </Card.Title>
                            <div className="d-flex flex-wrap gap-2">
                                <SpkButton Buttonvariant="primary" Customclass="btn btn-sm" data-bs-toggle="modal" data-bs-target="#create-contact" onClickfunc={handleShow}><i className="ri-add-line me-1 fw-medium align-middle"></i>Create Lead</SpkButton>
                                <SpkButton Buttonvariant="success-light" Customclass="btn btn-sm">Export As CSV</SpkButton>
                                <SpkDropdown Togglevariant="light" Toggletext="Sort By" Size="sm" Arrowicon={false} Icon={true} Customtoggleclass="no-caret btn-wave waves-effect waves-light" IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block" >
                                    <Dropdown.Item>Newest</Dropdown.Item>
                                    <Dropdown.Item>Date Added</Dropdown.Item>
                                    <Dropdown.Item>A - Z</Dropdown.Item>
                                </SpkDropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="table text-nowrap" showCheckbox={true} onChange={handleSelectAll} checked={selectedItems.length === contactsList.length} header={[{ title: 'Contact Name' }, { title: 'Company' }, { title: 'Email' }, { title: 'Lead Status' }, { title: 'Phone' }, { title: 'Lead Source' }, { title: 'Owner' }, { title: 'Last Contracted' }, { title: 'Actions' },]}>
                                    {contactsList.map((idx) => (
                                        <tr className="crm-contact leads-list" key={idx.id}>
                                            <td className="leads-checkbox">
                                                <input className="form-check-input" type="checkbox" id="checkboxNoLabel01" value="" aria-label="..." onChange={() => handleCheckboxClick(idx.id)}
                                                    checked={selectedItems.includes(idx.id)} />
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-rounded avatar-sm custom-width">
                                                            <Image fill src={idx.avatar} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="d-block fw-medium">{idx.name}</span>
                                                    </div>
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
                                                <div>
                                                    <span className="d-block mb-1"><i className="ri-mail-line me-2 align-middle fs-14 text-muted d-inline-block"></i>{idx.email}</span>
                                                </div>
                                            </td>
                                            <td>
                                                <SpkBadge variant={`${idx.statusClass}-transparent`}>{idx.status}</SpkBadge>
                                            </td>
                                            <td>
                                                <div>
                                                    <span className="d-block"><i className="ri-phone-line me-2 align-middle fs-14 text-muted"></i>{idx.phone}</span>
                                                </div>
                                            </td>
                                            <td>
                                                {idx.source}
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-rounded avatar-sm custom-width">
                                                            <Image fill src={idx.image} alt="Avatar" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="d-block fw-medium">{idx.assignedTo}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="fw-medium">
                                                {idx.date}
                                            </td>
                                            <td>
                                                <div className="btn-list">
                                                    <Link href='#!' scroll={false} className="btn btn-sm btn-primary-light btn-icon"><i className="ri-eye-line"></i></Link>
                                                    <SpkButton Buttonvariant="info-light" Customclass="btn btn-sm btn-icon"><i className="ri-pencil-line"></i></SpkButton>
                                                    <SpkButton Buttonvariant="secondary-light" Customclass="btn btn-sm btn-icon contact-delete" onClickfunc={(e: React.MouseEvent<HTMLInputElement>) => handleRemove(idx.id)}><i className="ri-delete-bin-line"></i></SpkButton>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <div className="d-flex align-items-center">
                                <div>
                                    Showing 9 Entries <i className="bi bi-arrow-right ms-2 fw-medium"></i>
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
            {/* <!--End::row-1 --> */}

            {/* <!-- Start:: Create Contact --> */}
            <Modal show={show} onHide={handleClose} centered className="fade" id="create-contact" tabIndex={-1}>
                <div className="">
                    <div className="">
                        <Modal.Header >
                            <Modal.Title as='h6'>Create Lead</Modal.Title>
                            <SpkButton Buttonvariant="" Customclass="btn-close" Buttontype="button" onClickfunc={handleClose} ></SpkButton>
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
                                <Col xl={12}>
                                    <label htmlFor="contact-name" className="form-label">Contact Name</label>
                                    <input type="text" className="form-control" id="contact-name" placeholder="Contact Name" />
                                </Col>
                                <Col xl={12}>
                                    <label htmlFor="contact-mail" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="contact-mail" placeholder="Enter Email" />
                                </Col>
                                <Col xl={12}>
                                    <label htmlFor="contact-phone" className="form-label">Phone No</label>
                                    <input type="tel" className="form-control" id="contact-phone" placeholder="Enter Phone Number" />
                                </Col>
                                <Col xl={12}>
                                    <label htmlFor="company-name" className="form-label">Company Name</label>
                                    <input type="text" className="form-control" id="company-name" placeholder="Company Name" />
                                </Col>
                                <Col xl={12}>
                                    <label className="form-label">Lead Status</label>
                                    <SpkSelect name="colors" option={Leadsstatus} placeholder="Select Status"
                                        menuplacement='auto' classNameprefix="Select2"
                                    />
                                </Col>
                                <Col xl={12}>
                                    <label className="form-label">Lead Source</label>
                                    <SpkSelect name="colors" option={Leadssource}
                                        menuplacement='auto' classNameprefix="Select2" defaultvalue={[Leadssource[0]]}
                                    />
                                </Col>
                                <Col xl={12}>
                                    <label className="form-label">Tags</label>
                                    <SpkSelect multi name="colors" option={Tags}
                                        menuplacement='top' classNameprefix="Select2" placeholder="Select Tag"
                                    />
                                </Col>
                            </Row>
                        </Modal.Body>
                        <Modal.Footer className="modal-footer">
                            <SpkButton Buttonvariant="light" Buttontype="button" onClickfunc={handleClose} >
                                Cancel
                            </SpkButton>
                            <SpkButton Buttonvariant="primary" Buttontype="button" >
                                Create Lead
                            </SpkButton>
                        </Modal.Footer>
                    </div>
                </div>
            </Modal>
            {/* <!-- End:: Create Contact --> */}
        </Fragment>
    );
};

export default Leads;