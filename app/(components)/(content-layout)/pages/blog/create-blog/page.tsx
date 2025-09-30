"use client"
const SpkSelect = dynamic(() => import('@/shared/@spk-reusable-components/reusable-plugins/spk-reactselect'), { ssr: false });
import dynamic from "next/dynamic";
import SpkSunEditor from "@/shared/@spk-reusable-components/reusable-plugins/spk-suneditor";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { Fragment, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import { Selectdata1, Selectdata2, Selectdata3 } from "@/shared/data/pages/blog/createblogdata";
import SpkDatepickr from "@/shared/@spk-reusable-components/reusable-plugins/spk-datepicker";
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);
interface CreateBlogProp { }

const CreateBlog: React.FC<CreateBlogProp> = () => {
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
    const [files, setFiles] = useState<any>([]);

    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}
            <Seo title="Pages-Createblog" />

            <Pageheader title="Pages" subtitle="Blog" currentpage="Blog Create" activepage="Blog Create" />

            {/* <!-- End::page-header --> */}

            {/*<!-- Start::row-1 -->*/}
            <Row>
                <Col xxl={12} xl={12} lg={12} md={12} sm={12} className="">
                    <Card className="custom-card">
                        <div className="card-header">
                            <div className="card-title">New Blog</div>
                        </div>
                        <Card.Body className="">
                            <div className="row gy-3">
                                <Col xl={12}>
                                    <Form.Label htmlFor="blog-title" className="">Blog Title</Form.Label>
                                    <Form.Control type="text" className="" id="blog-title" placeholder="Blog Title" />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="blog-category" className="">Blog Category</Form.Label>
                                    <SpkSelect name="colors" option={Selectdata1} mainClass="basic-multi-select"
                                        menuplacement='auto' classNameprefix="Select2" placeholder="Select Category"
                                    />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="blog-author-email" className="">Email</Form.Label>
                                    <Form.Control type="text" className="" id="blog-author-email" placeholder="Enter Email" />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="blog-author" className="">Blog Author</Form.Label>
                                    <Form.Control type="text" className="" id="blog-author" placeholder="Enter Name" />
                                </Col>
                                <Col xl={6} className="custom-blog">
                                    <Form.Label htmlFor="publish-time" className="">Publish Time</Form.Label>
                                    <SpkDatepickr className="form-control" showTimeSelect dateFormat="h:mm aa" showTimeSelectOnly selected={dates["PublishTime"] ? new Date(dates["PublishTime"]) : null} onChange={(date: Date | null) => handleDateChange("PublishTime", date)} placeholderText='Choose time' />

                                </Col>
                                <Col xl={12}>
                                    <Form.Label htmlFor="blog-tags" className="">Blog Tags</Form.Label>
                                    <SpkSelect multi name="colors" option={Selectdata3} mainClass="basic-multi-select"
                                        menuplacement='auto' classNameprefix="Select2" placeholder="Select Category" defaultvalue={[Selectdata3[0], Selectdata3[3]]}
                                    />
                                </Col>
                                <Col xl={6} className="custom-blog">
                                    <Form.Label htmlFor="publish-date" className="">Publish Date</Form.Label>
                                    <SpkDatepickr className="form-control" selected={dates["PublishDate"] ? new Date(dates["PublishDate"]) : null} onChange={(date: Date | null) => handleDateChange("PublishDate", date)} placeholderText='Choose Date' />

                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="product-status-add" className="">Published Status</Form.Label>
                                    <SpkSelect name="colors" option={Selectdata2} mainClass="basic-multi-select"
                                        menuplacement='auto' classNameprefix="Select2" placeholder="Select"
                                    />
                                </Col>
                                <div className="col-xl-12 blog-images-container">
                                    <Form.Label htmlFor="blog-author-email" className="">Blog Images</Form.Label>
                                    <FilePond
                                        files={files}
                                        onupdatefiles={setFiles}
                                        allowMultiple={true}
                                        maxFiles={3}
                                        server="/api"
                                        name="files" /* sets the file input name, it's filepond by default */
                                        labelIdle='Drag & Drop your file here or click '
                                    />
                                </div>
                                <Col xl={12}>
                                    <label className="form-label">Blog Content</label>
                                    <div id="blog-content"> <SpkSunEditor height={'200px'} /></div>
                                </Col>
                                <Col xl={12}>
                                    <Form.Label className="">Blog Type</Form.Label>
                                    <div className="d-flex align-items-center">
                                        <div className="form-check me-3">
                                            <input className="form-check-input" type="radio" name="blog-type" id="blog-free1" defaultChecked />
                                            <Form.Label className="form-check-label" htmlFor="blog-free1">
                                                Free
                                            </Form.Label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="blog-type" id="blog-paid1" />
                                            <Form.Label className="form-check-label" htmlFor="blog-paid1">
                                                Paid
                                            </Form.Label>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <div className="btn-list text-end">
                                <SpkButton Buttonvariant="success" Buttontype="button">Save As Draft</SpkButton>
                                <SpkButton Buttonvariant="primary" Buttontype="button">Post Blog</SpkButton>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
                {/*<!--End::row-1 -->*/}
        </Fragment>
    )
};

export default CreateBlog;