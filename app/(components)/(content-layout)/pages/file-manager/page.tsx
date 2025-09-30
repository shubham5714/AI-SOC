"use client"
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Card, Col, Dropdown, ListGroup, Modal, Offcanvas, Pagination, Row } from "react-bootstrap";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import { Accessdata, cardData, Fileoptions, Filesdata, Fileseries, Filesloopdata, Folderdata } from "@/shared/data/pages/filemanagerdata";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import Spkapexcharts from "@/shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import SpkProgress from "@/shared/@spk-reusable-components/reusable-uiElements/spk-progress";
import Spkimagecapcards from "@/shared/@spk-reusable-components/reusable-pages/spkimagecapcards";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import Image from "next/image";
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);
interface FileManagerProps { }

const FileManager: React.FC<FileManagerProps> = () => {

    const [shows, setShows] = useState({
        show: false,
        Folder: false,
        Offcanvas: false,
    });

    const handleClose = () => setShows(prev => ({ ...prev, show: false }));
    const handleShow = () => setShows(prev => ({ ...prev, show: true }));


    const handleFolderClose = () => setShows(prev => ({ ...prev, Folder: false }));
    const handleFolderShow = () => setShows(prev => ({ ...prev, Folder: true }));

    const [files, setFiles] = useState<any>([]);

    const handleOffcanvasClose = () => setShows(prev => ({ ...prev, Offcanvas: false }));
    const handleOffcanvasShow = () => setShows(prev => ({ ...prev, Offcanvas: true }));



    const FooterContent = (
        <tr className="">
            <td colSpan={5}>
                <nav aria-label="Page navigation">
                    <nav aria-label="Page navigation" className="pagination-style-4 float-end">
                        <Pagination className="pagination mb-0 overflow-auto">
                            <Pagination.Item disabled>Previous</Pagination.Item>
                            <Pagination.Item active>1</Pagination.Item>
                            <Pagination.Item>2</Pagination.Item>
                            <Pagination.Item className="pagination-next"><span className="text-primary">next</span></Pagination.Item>
                        </Pagination>
                    </nav>
                </nav>
            </td>
        </tr>
    );
    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}
            <Seo title="Pages-File Manager" />
            <Pageheader title="Pages" currentpage="File Manager" activepage="File Manager" />

            {/* <!-- End::page-header --> */}

            {/*<!-- Start:: row-1 -->*/}
            <Row className="">
                <Col xxl={3}>
                    <Row className="">
                        <Col xl={12}>
                            <Card className=" custom-card">
                                <div className="border-bottom border-block-end-dashed p-3">
                                    <div className="input-group">
                                        <input type="text" className="form-control w-50" placeholder="Search File" aria-describedby="button-addon01" />
                                        <SpkButton Buttonvariant="primary" Buttontype="button" Id="button-addon01"><i className="ri-search-line"></i></SpkButton>
                                    </div>
                                </div>

                                <Card.Body>
                                    <ul className="list-unstyled files-main-nav" id="files-main-nav">
                                        <li className="px-0 pt-0">
                                            <span className="fs-12 text-muted">My Files</span>
                                        </li>
                                        {Filesloopdata.map((idx) => (
                                            <li className={idx.class1} key={idx.id}>
                                                <Link href="#!" scroll={false}>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2">
                                                            <i className={`ri-${idx.icon} fs-16`}></i>
                                                        </div>
                                                        <span className="flex-fill text-nowrap">
                                                            {idx.text1}
                                                        </span>
                                                        <span className={idx.class}>{idx.text2}</span>
                                                    </div>
                                                </Link>
                                            </li>
                                        ))}
                                        <li className="px-0 pt-0">
                                            <span className="fs-12 text-muted">Most Recent</span>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="me-0">
                                                    <span className="avatar avatar-md bg-primary-transparent text-primary">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><path d="M112,175.67V168a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v40a8,8,0,0,0,8,8h56a8,8,0,0,0,8-8v-8.82L144,216V160Z" opacity="0.2" /><polyline points="112 175.67 144 160 144 216 112 199.18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><rect x="40" y="160" width="72" height="56" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><polygon points="152 32 152 88 208 88 152 32" opacity="0.2" /><polyline points="152 32 152 88 208 88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><path d="M176,224h24a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /></svg>
                                                    </span>
                                                </div>
                                                <div>
                                                    <Link scroll={false} href="#!" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" onClick={handleOffcanvasShow}>VID-14512223-AKP823.mp4</Link>
                                                </div>
                                                <div className="ms-auto">
                                                    <span className="fw-medium text-muted">1.2KB</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="me-0">
                                                    <span className="avatar avatar-md bg-success-transparent text-success">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><path d="M112,175.67V168a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v40a8,8,0,0,0,8,8h56a8,8,0,0,0,8-8v-8.82L144,216V160Z" opacity="0.2" /><polyline points="112 175.67 144 160 144 216 112 199.18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><rect x="40" y="160" width="72" height="56" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><polygon points="152 32 152 88 208 88 152 32" opacity="0.2" /><polyline points="152 32 152 88 208 88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><path d="M176,224h24a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /></svg>
                                                    </span>
                                                </div>
                                                <div>
                                                    <Link scroll={false} href="#!" data-bs-toggle="offcanvas"
                                                        data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" onClick={handleOffcanvasShow}>AUD-14512223-AKP823.mp3</Link>
                                                </div>
                                                <div className="ms-auto">
                                                    <span className="fw-medium text-muted">25GB</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="me-0">
                                                    <span className="avatar avatar-md bg-info-transparent text-info">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><path d="M112,175.67V168a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v40a8,8,0,0,0,8,8h56a8,8,0,0,0,8-8v-8.82L144,216V160Z" opacity="0.2" /><polyline points="112 175.67 144 160 144 216 112 199.18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><rect x="40" y="160" width="72" height="56" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><polygon points="152 32 152 88 208 88 152 32" opacity="0.2" /><polyline points="152 32 152 88 208 88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><path d="M176,224h24a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /></svg>
                                                    </span>
                                                </div>
                                                <div>
                                                    <Link scroll={false} href="#!" data-bs-toggle="offcanvas"
                                                        data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" onClick={handleOffcanvasShow}>VID-14211110-AKP823.mp4</Link>
                                                </div>
                                                <div className="ms-auto">
                                                    <span className="fw-medium text-muted">36GB</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="px-0 pt-3">
                                            <span className="fs-12 text-muted">Upload File</span>
                                        </li>
                                        <li className="p-3 border border-dashed">
                                            <label className="form-label">Drop File here :</label>
                                            <FilePond className="multiple-filepond" files={files} onupdatefiles={setFiles} allowMultiple={true} maxFiles={3} server="/api" name="files" labelIdle='Drag & Drop your file here or click ' />
                                        </li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xl={12}>
                            <Card className=" custom-card">
                                <Card.Body className="">
                                    <div className="filemanager-upgrade-storage w-100 text-center">
                                        <span className="d-block mb-3 pb-1 border border-dashed rounded-2"> <Image fill src="../../assets/images/media/file-manager/2.png" alt="" /> </span>
                                        <span className="fs-16 fw-semibold text-default">Get more storage with Pro.</span>
                                        <span className="d-block text-muted mt-2">Upgrade now for increased storage space and enhanced functionality.</span>
                                        <div className="mt-4 d-grid">
                                            <SpkButton Buttonvariant="primary" Customclass="waves-effect waves-light">Upgrade Now</SpkButton>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={9} className="">
                    <Row className="">
                        <Col xl={12} className="">
                            <Card className=" custom-card overflow-hidden">
                                <Card.Body className="card-body p-0">
                                    <div className="file-manager-folders">
                                        <div className="d-flex p-3 flex-wrap gap-2 align-items-center justify-content-between border-bottom">
                                            <div className="flex-fill">
                                                <h6 className="fw-medium mb-0">All Folders</h6>
                                            </div>
                                            <div className="d-flex gap-2 flex-lg-nowrap flex-wrap justify-content-sm-end w-75">
                                                <SpkButton Buttonvariant="primary" onClickfunc={handleShow} Customclass="btn-w-md d-flex align-items-center justify-content-center btn-wave waves-light text-nowrap"
                                                    data-bs-toggle="modal" data-bs-target="#create-folder">
                                                    <i className="ri-add-circle-line align-middle me-1"></i>Create Folder
                                                </SpkButton>
                                                <Modal show={shows.show} onHide={handleClose} centered className="fade" id="create-folder" tabIndex={-1}
                                                    aria-labelledby="create-folder" data-bs-keyboard="false"
                                                >
                                                    <Modal.Header>
                                                        <h6 className="modal-title" id="staticBackdropLabel">Create Folder
                                                        </h6>
                                                        <SpkButton Buttonvariant="" onClickfunc={handleClose} Buttontype="button" Customclass="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></SpkButton>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <label htmlFor="create-folder1" className="form-label">Folder Name</label>
                                                        <input type="text" className="form-control" id="create-folder1" placeholder="Folder Name" />
                                                    </Modal.Body>
                                                    <div className="modal-footer">
                                                        <SpkButton Buttonvariant="light" Buttontype="button" Size="sm" Customclass="btn-icon" onClickfunc={handleClose}
                                                            data-bs-dismiss="modal"><i className="ri-close-fill"></i></SpkButton>
                                                        <SpkButton Buttonvariant="success" Buttontype="button" Size="sm" >Create</SpkButton>
                                                    </div>
                                                </Modal>
                                                <SpkButton Buttonvariant="" onClickfunc={handleFolderShow} Customclass="btn btn-success-light btn-w-md d-flex align-items-center justify-content-center btn-wave waves-light"
                                                    data-bs-toggle="modal" data-bs-target="#create-file">
                                                    <i className="ri-add-circle-line align-middle me-1"></i>Create File
                                                </SpkButton>
                                                <Modal show={shows.Folder} onHide={handleFolderClose} centered className="fade" id="create-file" tabIndex={-1}
                                                    aria-labelledby="create-file" data-bs-keyboard="false"
                                                >
                                                    <Modal.Header>
                                                        <h6 className="modal-title" id="staticBackdropLabel1">Create File
                                                        </h6>
                                                        <SpkButton Buttonvariant="" Buttontype="button" onClickfunc={handleFolderClose} Customclass="btn-close" Buttondismiss="modal"
                                                            Buttonlabel="Close"></SpkButton>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <label htmlFor="create-file1" className="form-label">File Name</label>
                                                        <input type="text" className="form-control" id="create-file1" placeholder="File Name" />
                                                    </Modal.Body>
                                                    <div className="modal-footer">
                                                        <SpkButton Buttonvariant="light" Buttontype="button" Size="sm" Customclass="btn-icon" onClickfunc={handleFolderClose}
                                                            data-bs-dismiss="modal"><i className="ri-close-fill"></i></SpkButton>
                                                        <SpkButton Buttonvariant="success" Buttontype="button" Size="sm">Create</SpkButton>
                                                    </div>
                                                </Modal>
                                            </div>
                                        </div>
                                        <div className="p-3 file-folders-container">
                                            <div className="d-flex mb-3 align-items-center justify-content-between">
                                                <p className="mb-0 fw-medium fs-14">Quick Access</p>
                                                <Link scroll={false} href="#!" className="fs-12 text-muted fw-medium"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                                            </div>
                                            <Row className="row mb-3">
                                                {Accessdata.map((idx, index) => (
                                                    <Col xxl={4} xl={6} lg={6} md={6} className="" key={index}>
                                                        <Spkimagecapcards Customclass="shadow-none border" Custombodyclass="">
                                                            <div className="d-flex align-items-center gap-3 flex-wrap">
                                                                <div className={`main-card-icon ${idx.color}`}>
                                                                    <div className={`avatar avatar-md bg-${idx.color}-transparent border border-${idx.color} border-opacity-10`}>
                                                                        <div className={`avatar avatar-sm text-${idx.color}`}>
                                                                            <i className={`ti ti-${idx.icon} fs-24`}></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="flex-fill">
                                                                    <Link scroll={false} href="#!" className="d-block fw-medium">{idx.title}</Link>
                                                                    <span className="fs-12 text-muted">{idx.percentage}</span>
                                                                </div>
                                                                <div className="text-end">
                                                                    <span className="fw-medium">{idx.files}</span>
                                                                    <span className="d-block fs-12 text-muted">{idx.storage}</span>
                                                                </div>
                                                            </div>
                                                        </Spkimagecapcards>
                                                    </Col>
                                                ))}

                                            </Row>
                                            <div className="d-flex mb-3 align-items-center justify-content-between">
                                                <p className="mb-0 fw-medium fs-14">Folders</p>
                                                <Link scroll={false} href="#!" className="fs-12 text-muted fw-medium"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                                            </div>
                                            <Row className=" mb-2">
                                                {Folderdata.map((idx, index) => (
                                                    <Col xxl={3} xl={6} lg={6} md={6} className="" key={index}>
                                                        <Card className=" custom-card shadow-none border">
                                                            <Card.Body>
                                                                <div className="mb-4 folder-svg-container d-flex flex-wrap justify-content-between align-items-top">
                                                                    <div className="avatar">
                                                                        <Image fill src="../../assets/images/media/file-manager/1.png" alt="" className="img-fluid" />
                                                                    </div>
                                                                    <div>
                                                                        <SpkDropdown toggleas="a" Customtoggleclass="no-caret" Icon={true} IconClass="ri-more-fill fw-semibold text-muted">
                                                                            <li><Dropdown.Item>Delete</Dropdown.Item></li>
                                                                            <li><Dropdown.Item>Rename</Dropdown.Item></li>
                                                                            <li><Dropdown.Item>Hide Folder</Dropdown.Item></li>
                                                                        </SpkDropdown>
                                                                    </div>
                                                                </div>
                                                                <p className="fs-14 fw-medium mb-1 lh-1">
                                                                    <Link scroll={false} href="#!">{idx.text1}</Link>
                                                                </p>
                                                                <div className="d-flex align-items-center justify-content-between flex-wrap">
                                                                    <div>
                                                                        <span className="text-muted fs-12">
                                                                            {idx.text2}
                                                                        </span>
                                                                    </div>
                                                                    <div>
                                                                        <span className="text-default fw-medium">
                                                                            {idx.text3}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                ))}
                                            </Row>
                                            <div className="d-flex mb-3 align-items-center justify-content-between">
                                                <p className="mb-0 fw-medium fs-14">Recent Files</p>
                                                <Link scroll={false} href="#!" className="fs-12 text-muted fw-medium"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                                            </div>
                                            <Row className="">
                                                <Col xl={12}>
                                                    <div className="table-responsive border border-bottom-0">
                                                        <SpkTables tBodyClass="files-list" footchildren={FooterContent} tableClass="text-nowrap table-hover" header={[{ title: 'File Name' }, { title: 'Category' }, { title: 'Size' }, { title: 'Date Modified' }, { title: 'Action' }]}>
                                                            {Filesdata.map((file, index) => (
                                                                <tr key={index} className={file.mainClass}>
                                                                    <th scope="row">
                                                                        <div className="d-flex align-items-center">
                                                                            <div className="me-0">
                                                                                <span className={`avatar avatar-md ${file.iconClass} text-${file.iconClass} svg-${file.iconClass}`}>
                                                                                    {file.path}
                                                                                </span>
                                                                            </div>
                                                                            <div>
                                                                                <Link scroll={false} href="#!" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" onClick={handleOffcanvasShow}>
                                                                                    {file.name}
                                                                                </Link>
                                                                            </div>
                                                                        </div>

                                                                    </th>
                                                                    <td>{file.type}</td>
                                                                    <td>{file.size}</td>
                                                                    <td>{file.date}</td>
                                                                    <td>
                                                                        <div className="hstack gap-2 fs-15">
                                                                            <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-info-light">
                                                                                <i className="ri-eye-line"></i>
                                                                            </Link>
                                                                            <Link scroll={false} href="#!" className="btn btn-icon btn-sm btn-secondary-light">
                                                                                <i className="ri-delete-bin-line"></i>
                                                                            </Link>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </SpkTables>

                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12} className="">
                            <Card className=" custom-card">
                                <Card.Body className="">
                                    <Row className=" gy-3 gy-xl-0">
                                        <Col xl={3} className=" my-auto">
                                            <div className="d-flex align-items-start gap-3">
                                                <div>
                                                    <span className="avatar avatar-md bg-secondary-transparent">
                                                        <i className="ri-hard-drive-2-fill fs-16"></i>
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <div className=" mb-3"> All Folders
                                                        <p className="mb-0"><span className="fw-bold fs-14">68.12GB</span> Used</p>
                                                        <p className="fs-11 text-muted mb-0">21.35GB free space</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="file-manager-storage">
                                                <Spkapexcharts chartOptions={Fileoptions} chartSeries={Fileseries} type="donut" width={"100%"} height={200} />
                                            </div>
                                        </Col>
                                        <Col xl={9} className="">
                                            <Row className=" gy-3">
                                                {cardData.map((card, index) => (
                                                    <Col xl={6} key={index} className="">
                                                        <div className="border border-dashed rounded p-3">
                                                            <div className="d-flex align-items-center gap-3">
                                                                <div className={`main-card-icon ${card.color}`}>
                                                                    <div className={`avatar avatar-lg bg-${card.color}-transparent border border-${card.color} border-opacity-10`} >
                                                                        <div className={`avatar avatar-sm text-${card.color}`}>
                                                                            <i className={`ti ${card.icon} fs-20`}></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="flex-fill">
                                                                    <span className="fw-medium">{card.title}</span>
                                                                    <span className="text-muted fs-12 d-block">{card.fileCount} files</span>
                                                                </div>
                                                                <div>
                                                                    <span className={`fw-medium text-${card.color} mb-0 fs-14`}>{card.size}</span>
                                                                </div>
                                                            </div>
                                                            <SpkProgress
                                                                variant={card.color}
                                                                mainClass={`progress-md p-1 bg-${card.color}-transparent mt-3`}
                                                                striped={true}
                                                                animated={true}
                                                                now={card.progress}
                                                            />
                                                        </div>
                                                    </Col>
                                                ))}
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/*<!-- End:: row-1 -->*/}
            {/* <!-- Start::mail information offcanvas --> */}
            <Offcanvas className="offcanvas-end" show={shows.Offcanvas} onHide={handleOffcanvasClose} placement="end" tabIndex={-1} id="offcanvasRight">
                <Offcanvas.Body className="p-0">
                    <div className="selected-file-details">
                        <div className="d-flex p-3 align-items-center justify-content-between border-bottom">
                            <div>
                                <h6 className="fw-medium mb-0">File Details</h6>
                            </div>
                            <div className="d-flex align-items-center">
                                <SpkDropdown Customclass="me-1" toggleas='a' Customtoggleclass="btn btn-sm btn-icon btn-primary-light btn-wave waves-light waves-effect waves-light no-caret" Icon={true} IconClass="ri-more-2-fill">
                                    <li><Dropdown.Item href="#!">Share</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Copy</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Move</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Delete</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Raname</Dropdown.Item></li>
                                </SpkDropdown>
                                <SpkButton Buttonvariant="outline-light" Buttontype="button" Customclass="btn btn-sm btn-icon border" data-bs-dismiss="offcanvas" onClickfunc={handleOffcanvasClose}
                                    aria-label="Close"><i className="ri-close-line"></i></SpkButton>
                            </div>
                        </div>
                        <div className="filemanager-file-details" id="filemanager-file-details">
                            <div className="p-3 text-center border-bottom border-block-end-dashed">
                                <div className="file-details mb-3">
                                    <Image width={150} height={150} src="../../assets/images/media/blog/9.jpg" alt="" />
                                </div>
                                <div>
                                    <p className="mb-0 fw-medium fs-16">IMG-09123878-SPK734.jpeg</p>
                                    <p className="mb-0 text-muted fs-10">422KB | 23,Nov 2024</p>
                                </div>
                            </div>
                            <div className="p-3 border-bottom border-block-end-dashed">
                                <ListGroup>
                                    <ListGroup.Item>
                                        <div>
                                            <span className="fw-medium">File Format : </span><span className="fs-12 text-muted">jpeg</span>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div>
                                            <p className="fw-medium mb-0">File Description : </p>
                                            <span className="fs-12 text-muted">This file contains 3 folder Zeno.main & Zeno.premium & Zeno.featured and 42 images and layout styles are added in this update.</span>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <p className="fw-medium mb-0">File Location : </p>
                                        <span className="fs-12 text-muted">Device/Storage/Archives/IMG-09123878-SPK734.jpeg</span>
                                    </ListGroup.Item>
                                </ListGroup>
                            </div>
                            <div className="p-3 border-bottom border-block-end-dashed">
                                <p className="mb-1 fw-medium fs-14">Downloaded from :</p>
                                <Link scroll={false} className="text-primary fw-medium text-break" href="https://themeforest.net/user/spruko/portfolio" target="_blank">
                                    <u>https://themeforest.net/user/spruko/portfolio</u>
                                </Link>
                            </div>
                            <div className="p-3">
                                <p className="mb-2 fw-medium fs-14">Shared With :</p>
                                <Link scroll={false} href="javascript:void(0);">
                                    <div className="d-flex align-items-center p-2 mb-1">
                                        <span className="avatar avatar-sm me-2 avatar-rounded custom-width">
                                            <Image fill src="../../assets/images/faces/1.jpg" alt="" />
                                        </span>
                                        <span className="fw-medium flex-fill">Akira Susan</span>
                                        <span className="badge bg-success-transparent fw-normal">28,Nov 2024</span>
                                    </div>
                                </Link>
                                <Link scroll={false} href="javascript:void(0);">
                                    <div className="d-flex align-items-center p-2 mb-1">
                                        <span className="avatar avatar-sm me-2 avatar-rounded custom-width">
                                            <Image fill src="../../assets/images/faces/15.jpg" alt="" />
                                        </span>
                                        <span className="fw-medium flex-fill">Khalid Ahmad</span>
                                        <span className="badge bg-success-transparent fw-normal">16,Oct 2024</span>
                                    </div>
                                </Link>
                                <Link scroll={false} href="javascript:void(0);">
                                    <div className="d-flex align-items-center p-2 mb-1">
                                        <span className="avatar avatar-sm me-2 avatar-rounded custom-width">
                                            <Image fill src="../../assets/images/faces/8.jpg" alt="" />
                                        </span>
                                        <span className="fw-medium flex-fill">Jeremiah Jackson</span>
                                        <span className="badge bg-success-transparent fw-normal">05,Dec 2024</span>
                                    </div>
                                </Link>
                                <Link scroll={false} href="javascript:void(0);">
                                    <div className="d-flex align-items-center p-2">
                                        <span className="avatar avatar-sm me-2 avatar-rounded custom-width">
                                            <Image fill src="../../assets/images/faces/13.jpg" alt="" />
                                        </span>
                                        <span className="fw-medium flex-fill">Brigo Jhonson</span>
                                        <span className="badge bg-success-transparent fw-normal">26,Apr 2024</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
            {/* <!-- End::mail information offcanvas --> */}
        </Fragment>
    )
};

export default FileManager;