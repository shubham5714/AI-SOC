"use client"
import SpkSelect from "@/shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/reusable-uiElements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import SpkTooltips from "@/shared/@spk-reusable-components/reusable-uiElements/spk-tooltips";
import { CompaniesData, companiesSize, Tags } from "@/shared/data/apps/crm/companiesdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useRef, useState } from "react";
import { Card, Col, Dropdown, Form, Modal, Offcanvas, Row } from "react-bootstrap";

interface CompaniesProps { }

const Companies: React.FC<CompaniesProps> = () => {

    const [companies, setCompanies] = useState({
        show: false,
        Modalshow: false
    })

    const handleClose = () => setCompanies(prev => ({ ...prev, show: false }));
    const handleShow = () => setCompanies(prev => ({ ...prev, show: true }));
    const handleClose1 = () => setCompanies(prev => ({ ...prev, Modalshow: false }));
    const handleExport = () => setCompanies(prev => ({ ...prev, Modalshow: true }));

    const [companyList, setCompanyList] = useState(CompaniesData);

    const handleRemove = (id: number) => {
        const list = companyList.filter((idx) => idx.id !== id)
        setCompanyList(list);
    }

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
            setSelectedItems(companyList.map((idx: { id: number; }) => idx.id));
        } else {
            setSelectedItems([]);
        }
    };

    const [selectedImage, setSelectedImage] = useState("../../../assets/images/company-logos/11.png");

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
            reader.onload = (event) => {
                setSelectedImage(event.target?.result);
            };
            reader.readAsDataURL(selectedFile);
        }
    };
    return (
        <Fragment>
            <Seo title="Companies" />
            <Pageheader title='Apps' subtitle='CRM' currentpage='Companies' activepage='Companies' />
            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Companies
                            </Card.Title>
                            <div className="d-flex flex-wrap gap-2">
                                <SpkButton Buttonvariant="primary" Customclass="btn  btn-sm btn-wave" Buttontoggle="modal" Buttontarget="#create-contact" onClickfunc={handleExport}><i className="ri-add-line me-1 fw-medium align-middle"></i>Add Company</SpkButton>
                                <SpkButton Buttonvariant="success-light" Customclass="btn  btn-sm btn-wave">Export As CSV</SpkButton>
                                <SpkDropdown toggleas='a' Customtoggleclass="btn btn-light btn-sm btn-wave no-caret" Toggletext="Sort By" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                    <li><Dropdown.Item href="#!">Newest</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Date Added</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">A - Z</Dropdown.Item></li>
                                </SpkDropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="table text-nowrap" onChange={handleSelectAll} checked={selectedItems.length === companyList.length} showCheckbox={true} header={[{ title: 'Company Name' }, { title: 'Email' }, { title: 'Phone' }, { title: 'Company Size' }, { title: 'Industry' }, { title: 'Key Contact' }, { title: 'Total Deals' }, { title: 'Actions' },]}>
                                    {companyList.map((idx) => (
                                        <tr className="crm-contact companies-list" key={idx.id}>
                                            <td className="companies-checkbox">
                                                <input className="form-check-input" type="checkbox" id="checkboxNoLabel1" aria-label="..." onChange={() => handleCheckboxClick(idx.id)} checked={selectedItems.includes(idx.id)} />
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-sm p-1 bg-light avatar-rounded custom-width">
                                                            <Image fill src={idx.logo} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <Link scroll={false} data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" onClick={handleShow}>{idx.name}</Link>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <span className="d-block mb-1"><i className="ri-mail-line me-2 align-middle fs-14 text-muted d-inline-block"></i>{idx.email}</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <span className="d-block"><i className="ri-phone-line me-2 align-middle fs-14 text-muted d-inline-block"></i>{idx.phone}</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center flex-wrap gap-1">
                                                    <SpkBadge variant={`${idx.typeColor}-transparent`}>{idx.type}</SpkBadge>
                                                </div>
                                            </td>
                                            <td>
                                                {idx.industry}
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-rounded avatar-sm custom-width">
                                                            <Image fill src={idx.avatar} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="d-block fw-medium">{idx.contactPerson}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {idx.revenue}
                                            </td>
                                            <td>
                                                <div className="btn-list">
                                                    <Link scroll={false} data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" className="btn btn-sm btn-primary-light btn-icon" onClick={handleShow}><i className="ri-eye-line"></i></Link>
                                                    <SpkButton Buttonvariant="info-light" Customclass="btn btn-sm btn-icon"><i className="ri-pencil-line"></i></SpkButton>
                                                    <SpkButton Buttonvariant="secondary-light" Customclass="btn btn-sm btn-icon contact-delete" onClickfunc={(e: React.MouseEvent<HTMLInputElement>) => handleRemove(idx.id)}><i className="ri-delete-bin-line"></i></SpkButton>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                        <Card.Footer className="border-top-0">
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

            {/* <!-- Start:: Company Details Offcanvas --> */}
            <Offcanvas className=" offcanvas-end" show={companies.show} onHide={handleClose} placement="end" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExample" >
                <Offcanvas.Body className="p-0">
                    <div className="d-flex align-items-top p-3 border-bottom border-block-end-dashed main-profile-cover">
                        <span className="avatar avatar-xxl avatar-rounded me-3 p-2 bg-primary-transparent flex-shrink-0 custom-width">
                            <Image fill src="../../../assets/images/company-logos/1.png" alt="" />
                        </span>
                        <div className="flex-fill main-profile-info">
                            <div className="d-flex align-items-start justify-content-between">
                                <h6 className="fw-medium mb-1">Ethan Thompson
                                    <SpkBadge variant="success-transparent" Customclass="ms-1 fs-10"><i className="ri-circle-fill fs-8 text-success me-1 "></i> New Lead</SpkBadge>
                                </h6>
                                <SpkButton Buttontype="button" Buttonvariant="" Customclass="btn-close crm-contact-close-btn" Buttondismiss="offcanvas" Buttonlabel="Close" onClickfunc={handleClose}></SpkButton>
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
                                        <span className="text-muted lh-1 rounded-circle ms-1"><i className="ri-file-copy-line"></i></span>
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
                    <div className="p-3 border-bottom border-block-end-dashed d-flex align-items-center gap-3">
                        <div className="fs-14 fw-medium">Company Size:</div>
                        <div>
                            <SpkBadge variant="primary-transparent">Corporate</SpkBadge> - 250+ Employees
                        </div>
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
                            <SpkButton Buttonvariant="primary-light" Customclass="btn btn-sm btn-icon btn-wave waves-effect waves-light mb-0">
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
                        <p className="fs-14 mb-0 fw-medium">Tags :</p>
                        <div>
                            <SpkBadge variant="primary-transparent me-1">New Lead</SpkBadge>
                            <SpkBadge variant="primary-transparent">Others</SpkBadge>
                        </div>
                    </div>
                    <div className="p-3 d-flex align-items-center gap-3">
                        <div className="fs-14 fw-medium">
                            Key Contact :
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <div className="lh-1">
                                <span className="avatar avatar-rounded avatar-sm custom-width">
                                    <Image fill src="../../../assets/images/faces/2.jpg" alt="img" />
                                </span>
                            </div>
                            <div className="fw-medium">Linda Klusty</div>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
            {/* <!-- End:: Company Details Offcanvas --> */}

            {/* <!-- Start:: Add Company --> */}
            <Modal show={companies.Modalshow} onHide={handleClose1} className="fade" centered id="create-contact" tabIndex={-1}>
                <div className="">
                    <div className="">
                        <Modal.Header>
                            <Modal.Title as='h6' className="modal-title">Add Company</Modal.Title>
                            <SpkButton Customclass="btn-close" Buttonvariant="" Buttontype="button" onClickfunc={handleClose1} >
                            </SpkButton>
                        </Modal.Header>
                        <Modal.Body className="px-4">
                            <Row className="gy-3">
                                <Col xl={12}>
                                    <div className="mb-0 text-center">
                                        <span className="avatar avatar-xxl avatar-rounded p-2 bg-light">
                                            <Image width={64} height={64} src={selectedImage || ''} alt="" id="profile-img" />
                                            <SpkBadge variant="primary" Customclass="rounded-pill avatar-badge" Onclickfun={openFileInput}>
                                                <input type="file" name="photo" className="position-absolute w-100 h-100 op-0" id="profile-change" ref={fileInputRef} onChange={handleImageChange} style={{ display: 'none' }} />
                                                <i className="fe fe-camera"></i>
                                            </SpkBadge>
                                        </span>
                                    </div>
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="company-name" className="form-label">Company Name</Form.Label>
                                    <Form.Control type="text" className="form-control" id="company-name" placeholder="Contact Name" />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="company-lead-score" >Total Deals</Form.Label>
                                    <Form.Control type="number" id="company-lead-score" placeholder="Total Deals" />
                                </Col>
                                <Col xl={12} className="col-xl-12">
                                    <Form.Label htmlFor="company-mail" className="form-label">Email</Form.Label>
                                    <Form.Control type="email" className="form-control" id="company-mail" placeholder="Enter Email" />
                                </Col>
                                <Col xl={12} className="col-xl-12">
                                    <Form.Label htmlFor="company-phone" className="form-label">Phone No</Form.Label>
                                    <Form.Control type="tel" className="form-control" id="company-phone" placeholder="Enter Phone Number" />
                                </Col>
                                <Col xl={12} className="col-xl-12">
                                    <Form.Label htmlFor="key-contact" className="form-label">Key Contact</Form.Label>
                                    <Form.Control type="text" className="form-control" id="key-contact" placeholder="Contact Name" />
                                </Col>
                                <Col xl={12} className="col-xl-12">
                                    <label className="form-label">Industry</label>
                                    <SpkSelect name="colors" option={Tags} mainClass="basic-multi-select"
                                        menuplacement='auto' classNameprefix="Select2" placeholder="Select Industry" />
                                </Col>
                                <Col xl={12}>
                                    <label className="form-label">Company Size</label>
                                    <SpkSelect name="colors" option={companiesSize} mainClass="basic-multi-select"
                                        menuplacement='top' classNameprefix="Select2" placeholder="Company Size" />

                                </Col>
                            </Row>
                        </Modal.Body>
                        <Modal.Footer className="modal-footer">
                            <SpkButton Buttonvariant="light" Buttontype="button" onClickfunc={handleClose1} >
                                Cancel
                            </SpkButton>
                            <SpkButton Buttonvariant="primary" Buttontype="button" >
                                Create Contact
                            </SpkButton>
                        </Modal.Footer>
                    </div>
                </div>
            </Modal>
            {/* <!-- End:: Add Company --> */}
        </Fragment >
    );
};

export default Companies;