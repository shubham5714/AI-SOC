"use client"
import SpkSunEditor from "@/shared/@spk-reusable-components/reusable-plugins/spk-suneditor";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import dynamic from "next/dynamic";
import React, { Fragment, useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
const SpkSelect = dynamic(() => import("@/shared/@spk-reusable-components/reusable-plugins/spk-reactselect"), { ssr: false });
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);

import { Availableselect, Brandselect, Categoryselect, Colorselect, Genderselect, Productselect, Publishselect, Sizeselect } from "@/shared/data/apps/executive/addproductsdata";
import SpkDatepickr from "@/shared/@spk-reusable-components/reusable-plugins/spk-datepicker";

interface AddProductProps { }

const AddProduct: React.FC<AddProductProps> = () => {
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
    const [fileState, setFileState] = useState({
        Productfiles: [],
        Warrentyfiles: []
    });


    return (
        <Fragment>

            <Seo title="Add Product" />
            <Pageheader title='Apps' subtitle='Executive' currentpage='Add Product' activepage='Add Product' />

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body className="add-products">
                            <Row className="gx-4 gy-3">
                                <Col xxl={6} xl={12} lg={12} md={6} className="">
                                    <Card className="custom-card shadow-none mb-0 border-0">
                                        <Card.Body className="p-0">
                                            <div className="row gy-3">
                                                <Col xl={12}>
                                                    <Form.Label htmlFor="product-name-add" className="">Product Name</Form.Label>
                                                    <Form.Control type="text" className="" id="product-name-add" placeholder="Name" />
                                                    <Form.Label htmlFor="product-name-add" className=" mt-1 fs-12 fw-normal text-muted mb-0">*Product Name should not exceed 30 characters</Form.Label>
                                                </Col>
                                                <Col xl={6}>
                                                    <Form.Label htmlFor="product-size-add" className="">Size</Form.Label>
                                                    <SpkSelect name="colors" option={Sizeselect} mainClass="basic-multi-select"
                                                        menuplacement='auto' classNameprefix="Select2" placeholder="Select"
                                                    />
                                                </Col>
                                                <Col xl={6}>
                                                    <Form.Label htmlFor="product-brand-add" className="">Brand</Form.Label>
                                                    <SpkSelect name="colors" option={Brandselect} mainClass="basic-multi-select"
                                                        menuplacement='auto' classNameprefix="Select2" placeholder="Select"
                                                    />
                                                </Col>
                                                <Col xl={6}>
                                                    <Form.Label htmlFor="product-category-add" className="">Category</Form.Label>
                                                    <SpkSelect name="colors" option={Categoryselect} mainClass="basic-multi-select"
                                                        menuplacement='auto' classNameprefix="Select2" placeholder="Category"
                                                    />
                                                </Col>
                                                <Col xl={6}>
                                                    <Form.Label htmlFor="product-gender-add" className="">Gender</Form.Label>
                                                    <SpkSelect name="colors" option={Genderselect} mainClass="basic-multi-select"
                                                        menuplacement='auto' classNameprefix="Select2" placeholder="Select"
                                                    />
                                                </Col>
                                                <div className="col-xl-6 color-selection">
                                                    <Form.Label htmlFor="product-color-add" className="">Colors</Form.Label>
                                                    <SpkSelect multi name="colors" option={Colorselect} mainClass="basic-multi-select"
                                                        menuplacement='auto' classNameprefix="Select2" placeholder="Select"
                                                    />
                                                </div>
                                                <Col xl={6}>
                                                    <Form.Label htmlFor="product-cost-add" className="">Enter Cost</Form.Label>
                                                    <Form.Control type="text" className="" id="product-cost-add" placeholder="Cost" />
                                                    <Form.Label htmlFor="product-cost-add" className=" mt-1 fs-12 fw-normal text-muted mb-0">*Mention final price of the product</Form.Label>
                                                </Col>
                                                <Col xl={12}>
                                                    <Form.Label htmlFor="product-description-add" className="">Product Description</Form.Label>
                                                    <Form.Control as="textarea" className="" id="product-description-add" rows={2} />
                                                    <Form.Label htmlFor="product-description-add" className=" mt-1 fs-12 fw-normal text-muted mb-0">*Description should not exceed 500 letters</Form.Label>
                                                </Col>
                                                <Col xl={6}>
                                                    <Form.Label htmlFor="product-type" className="">Product Type</Form.Label>
                                                    <Form.Control type="text" className="" id="product-type" placeholder="Type" />
                                                </Col>
                                                <Col xl={6}>
                                                    <Form.Label htmlFor="product-discount" className="">Item Weight</Form.Label>
                                                    <Form.Control type="text" className="" id="product-discount1" placeholder="Weight in gms" />
                                                </Col>
                                                <Col xl={12} className="product-documents-container">
                                                    <p className="fw-medium mb-2 fs-14">Product Images :</p>
                                                    <FilePond className="multiple-filepond" files={fileState.Productfiles} onupdatefiles={(fileItems) => setFileState(prevState => ({ ...prevState, Productfiles: fileItems.map(fileItem => fileItem.file) }))} allowMultiple={true} maxFiles={6} server="/api" name="files" labelIdle='Drag & Drop your file here or click ' />

                                                </Col>
                                                <Form.Label className=" text-muted mt-3 fw-normal fs-12">* Minimum of 6 images are need to be uploaded,
                                                    all images should be uniformly maintained, width and height to the container.
                                                </Form.Label>
                                                <Col xl={12}>
                                                    <Form.Label htmlFor="product-status-add1" className="">Availability</Form.Label>
                                                    <SpkSelect name="colors" option={Availableselect} mainClass="basic-multi-select" menuplacement='auto' classNameprefix="Select2" placeholder="Select" />
                                                </Col>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xxl={6} xl={12} lg={12} md={6} className="">
                                    <Card className="custom-card shadow-none mb-0 border-0">
                                        <Card.Body className="p-0">
                                            <div className="row gy-3">
                                                <Col xl={12}>
                                                    <Form.Label className="">Product Features</Form.Label>
                                                    <div id="product-features"><SpkSunEditor height={'80px'} /></div>
                                                </Col>
                                                <div className="col-xl-12 product-documents-container">
                                                    <p className="fw-medium mb-2 fs-14">Warrenty Documents :</p>
                                                    <FilePond className="multiple-filepond" files={fileState.Warrentyfiles} onupdatefiles={(fileItems) => setFileState(prevState => ({ ...prevState, Warrentyfiles: fileItems.map(fileItem => fileItem.file) }))} allowMultiple={true} maxFiles={6} server="/api" name="files" labelIdle='Drag & Drop your file here or click' />
                                                </div>
                                                <Col xl={4}>
                                                    <Form.Label htmlFor="product-actual-price" className="">Actual Price</Form.Label>
                                                    <Form.Control type="text" className="" id="product-actual-price" placeholder="Actual Price" />
                                                </Col>
                                                <Col xl={4}>
                                                    <Form.Label htmlFor="product-dealer-price" className="">Dealer Price</Form.Label>
                                                    <Form.Control type="text" className="" id="product-dealer-price" placeholder="Dealer Price" />
                                                </Col>
                                                <Col xl={4}>
                                                    <Form.Label htmlFor="product-discount" className="">Discount</Form.Label>
                                                    <Form.Control type="text" className="" id="product-discount" placeholder="Discount in %" />
                                                </Col>
                                                <Col xl={6} className="custom-blog">
                                                    <Form.Label htmlFor="publish-date" className="">Publish Date</Form.Label>
                                                    <SpkDatepickr className="form-control" selected={dates["PublishDate"] ? new Date(dates["PublishDate"]) : null} onChange={(date: Date | null) => handleDateChange("PublishDate", date)} placeholderText='Choose Date' />
                                                </Col>
                                                <Col xl={6} className="custom-blog">
                                                    <Form.Label htmlFor="publish-time" className="">Publish Time</Form.Label>
                                                    <SpkDatepickr className="form-control" showTimeSelect dateFormat="h:mm aa" showTimeSelectOnly selected={dates["PublishTime"] ? new Date(dates["PublishTime"]) : null} onChange={(date: Date | null) => handleDateChange("PublishTime", date)} placeholderText='Choose time' />

                                                </Col>
                                                <Col xl={12}>
                                                    <Form.Label htmlFor="product-status-add" className="">Published Status</Form.Label>
                                                    <SpkSelect name="colors" option={Publishselect} mainClass="basic-multi-select"
                                                        menuplacement='auto' classNameprefix="Select2" placeholder="Select"
                                                    />
                                                </Col>
                                                <Col xl={12}>
                                                    <Form.Label htmlFor="product-tags" className="">Product Tags</Form.Label>
                                                    <SpkSelect multi name="colors" option={Productselect} defaultvalue={[Productselect[3], Productselect[0]]}
                                                        mainClass="basic-multi-select" searchable
                                                        menuplacement='auto' classNameprefix="Select2" placeholder="Select"
                                                    />
                                                </Col>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer className=" border-top border-block-start-dashed d-sm-flex justify-content-end">
                            <SpkButton Buttonvariant="success" Customclass="me-2 mb-2 mb-sm-0">Add Product<i className="bi bi-plus-lg ms-2"></i></SpkButton>
                            <SpkButton Buttonvariant="primary" Customclass="mb-2 mb-sm-0">Save Product<i className="bi bi-download ms-2"></i></SpkButton>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default AddProduct;