"use client"
import { Lightboxcomponent } from "@/shared/@spk-reusable-components/reusable-plugins/spk-lightbox";
import SpkSwiperJs from "@/shared/@spk-reusable-components/reusable-plugins/spk-swiperjs";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkProgress from "@/shared/@spk-reusable-components/reusable-uiElements/spk-progress";
import { RatingsSwiper, RelatedSwiper, Slides } from "@/shared/data/apps/ecommerce/productdetailsdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Card, Col, Form, Nav, Row, Tab, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

interface ProductsDetailsProps { }

const ProductsDetails: React.FC<ProductsDetailsProps> = () => {

    const selectedItem = useSelector((state) => state.reducer.selectedItem);
    const [open, setOpen] = useState(false);
    const localshopdetails = [{ id: 30, image: "../../../assets/images/ecommerce/png/3.png", name: "Womens Leather Jacket With Pockets" }]

    function dec(el: React.MouseEvent<HTMLElement>) {
        const input = el.currentTarget.parentElement?.querySelector("input") as HTMLInputElement;
        if (!input) return;
        let unit = parseInt(input.value, 10);
        if (unit <= 0) {
            return false;
        } else {
            input.value = (unit - 1).toString();
        }
    }

    function inc(el: React.MouseEvent<HTMLElement>) {
        const input = el.currentTarget.parentElement?.querySelector("input") as HTMLInputElement;
        if (!input) return;
        let unit = parseInt(input.value, 10);
        input.value = (unit + 1).toString();
    }

    const breakpoints = {
        500: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1600: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
        1800: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    }

    return (
        <Fragment>
            <Seo title="Products Details" />
            <Pageheader title='Apps' subtitle='Ecommerce' currentpage='Products Details' activepage='Products Details' />
            {/* <!-- Start:: Row-1 --> */}
            <Row className="">
                <Col xxl={4} className="">
                    <Card className=" custom-card">
                        <Card.Body className=" p-4">
                            <Link scroll={false} href="#!" className="glightbox card border-0 mb-0" data-gallery="gallery1" data-title="Peach Color" data-type="image" data-draggable="true">
                                <div className="ecommerce-gallery d-block text-center">
                                    <span className="badge bg-info tag-badge z-1">Featured</span>
                                    {selectedItem ? (
                                        <Image fill alt='Selected Product' src={selectedItem.image} className="" />
                                    ) : (
                                        <Image fill className="" alt='Default Product' src={localshopdetails[0].image} />
                                    )}

                                    <span onClick={() => setOpen(true)} className="p-3 py-2 rounded text-fixed-white view-lightbox ">View More Images</span>
                                </div>
                            </Link>

                            {selectedItem ? (
                                <Lightboxcomponent
                                    close={() => setOpen(false)} // Close function
                                    zoom={{ maxZoomPixelRatio: 10, scrollToZoom: true }} // Zoom settings
                                    open={open}
                                    plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                                    slides={selectedItem.Slides} index={0} />

                            ) : (
                                <Lightboxcomponent
                                    close={() => setOpen(false)} // Close function
                                    zoom={{ maxZoomPixelRatio: 10, scrollToZoom: true }} // Zoom settings
                                    open={open}
                                    plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                                    slides={Slides} index={0} />
                            )}
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={8} className="">
                    <Card className=" custom-card">
                        <Card.Body className=" p-4">
                            <div>
                                <p className="fs-22 fw-medium mb-0">{selectedItem ? selectedItem.name : localshopdetails[0].name} </p>
                                <p className="fs-14 mb-3">
                                    <i className="ri-star-s-fill text-warning align-middle"></i>
                                    <i className="ri-star-s-fill text-warning align-middle"></i>
                                    <i className="ri-star-s-fill text-warning align-middle"></i>
                                    <i className="ri-star-s-fill text-warning align-middle"></i>
                                    <i className="ri-star-half-s-fill text-warning align-middle"></i>
                                    <span className="fw-medium ms-1">4.6<a className="text-primary ms-2"
                                        href="#!">(1.8k Reviews)</a></span>
                                </p>
                                <Row className=" mb-3 justify-content-between">
                                    <Col xxl={4} xl={12} className=" d-flex align-items-center gap-3">
                                        <p className="mb-1"><span className="h3 fw-medium"><sup
                                            className="fs-14">$</sup>1,299<sup
                                                className="fs-14">.00</sup></span></p>
                                        <p className="mb-0 text-muted fs-12">M.R.P-<s>$1,499.00</s></p>
                                    </Col>
                                </Row>
                                <div className="mb-3">
                                    <p className="fs-16 fw-medium mb-1">Description :</p>
                                    <p className="text-muted mb-0">
                                        Elevate your style with this women's leather jacket, designed for both comfort and sophistication. Crafted from high-quality leather, it offers durability and a sleek, timeless look. Featuring functional pockets, this jacket is perfect for keeping your essentials close while making a bold fashion statement.
                                    </p>
                                </div>
                                <div className="mb-2">
                                    <Row className="">
                                        <Col xxl={7} xl={6} lg={6} md={6} sm={12} className="">
                                            <p className="fs-15 fw-medium mb-2">Select Color :</p>
                                            <p className="mb-0 d-flex">
                                                <Link scroll={false} className="color-3 product-sizes" href="#!">
                                                    Orange
                                                </Link>
                                                <Link scroll={false} className="color-1 product-sizes selected" href="#!">
                                                    Green
                                                </Link>
                                                <Link scroll={false} className="color-2 product-sizes" href="#!">
                                                    Blue
                                                </Link>
                                                <Link scroll={false} className="color-3 product-sizes" href="#!">
                                                    Purple
                                                </Link>
                                            </p>
                                        </Col>
                                        <Col xxl={5} xl={6} lg={6} md={6} sm={12} className=" mt-md-0 mt-3">
                                            <p className="fs-15 fw-medium mb-2">Select Size :</p>
                                            <p className="mb-0 d-flex">
                                                <Link scroll={false} className="color-1 product-sizes" href="#!">
                                                    XS
                                                </Link>
                                                <Link scroll={false} className="color-2 product-sizes selected"
                                                    href="#!">
                                                    S
                                                </Link>
                                                <Link scroll={false} className="color-3 product-sizes" href="#!">
                                                    M
                                                </Link>
                                                <Link scroll={false} className="color-3 product-sizes" href="#!">
                                                    L
                                                </Link>
                                                <Link scroll={false} className="color-3 product-sizes" href="#!">
                                                    XL
                                                </Link>
                                            </p>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="d-flex gap-2 flex-wrap mb-4">
                                    <Link href="/apps/ecommerce/wishlist/" className="btn btn-primary-ghost"><i className="ri-heart-2-line me-2"></i>Add To Favourites</Link>
                                    <div className="fs-14">
                                        <Link scroll={false} href="#!" className="btn btn-danger-ghost"><i className="ri-share-forward-line me-2"></i>Compare Product</Link>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center flex-wrap gap-2">
                                    <p className="fs-15 mb-0 me-4 fw-medium">Share :</p>
                                    <div className="btn-list mb-0">
                                        <SpkButton Buttonvariant="primary-light" Size="sm" Customclass="btn  btn-icon  btn-wave waves-effect waves-light mb-md-0"><i className="ri-whatsapp-line"></i></SpkButton>
                                        <SpkButton Buttonvariant="success-light" Size="sm" Customclass="btn  btn-icon  btn-wave waves-effect waves-light mb-md-0"><i className="ri-instagram-line"></i></SpkButton>
                                        <SpkButton Buttonvariant="info-light" Size="sm" Customclass="btn  btn-icon  btn-wave waves-effect waves-light mb-md-0"><i className="ri-twitter-x-line"></i></SpkButton>
                                        <SpkButton Buttonvariant="secondary-light" Size="sm" Customclass="btn  btn-icon  btn-wave waves-effect waves-light mb-md-0"><i className="ri-youtube-line"></i></SpkButton>
                                        <SpkButton Buttonvariant="warning-light" Size="sm" Customclass="btn  btn-icon  btn-wave waves-effect waves-light mb-md-0"><i className="ri-facebook-line"></i></SpkButton>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={8} className="">
                    <Card className=" custom-card">
                        <Tab.Container defaultActiveKey="second" >
                            <Card.Header className="card-header">
                                <Nav className=" nav-tabs tab-style-7 scaleX profile-settings-tab gap-2" id="myTab4" role="tablist">
                                    <Nav.Item className="nav-item" role="presentation">
                                        <Nav.Link eventKey="first" className="nav-link border border-dashed rounded-bottom-0 px-4" id="product-details" data-bs-toggle="tab" data-bs-target="#product-details-pane" type="button" role="tab" aria-controls="product-details-pane" aria-selected="true">Product Details</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="nav-item" role="presentation">
                                        <Nav.Link eventKey="second" className="nav-link border border-dashed px-4 " id="key-features-tab" data-bs-toggle="tab" data-bs-target="#key-features-tab-pane" type="button" role="tab" aria-controls="key-features-tab-pane" aria-selected="false" tabIndex={-1}>Key Features</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="nav-item" role="presentation">
                                        <Nav.Link eventKey="third" className="nav-link border border-dashed px-4" id="add-features-tab" data-bs-toggle="tab" data-bs-target="#add-features-tab-pane" type="button" role="tab" aria-controls="add-features-tab-pane" aria-selected="false" tabIndex={-1}>Additional Features</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Card.Header>
                            <Card.Body className="tab-content">
                                <Tab.Pane eventKey="first" className="  p-0 border-0" id="product-details-pane" role="tabpanel" aria-labelledby="product-details" tabIndex={0}>
                                    <div className="table-responsive">
                                        <table className="table text-nowrap table-bordered">
                                            <tbody>
                                                <tr>
                                                    <th scope="row" className="fw-medium">
                                                        Brand
                                                    </th>
                                                    <td>TechPro</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" className="fw-medium">
                                                        Model Name
                                                    </th>
                                                    <td>
                                                        X15 Elite - 2024 Edition
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" className="fw-medium">
                                                        Display
                                                    </th>
                                                    <td>
                                                        15.6" 4K UHD Touchscreen
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" className="fw-medium">
                                                        Processor
                                                    </th>
                                                    <td>
                                                        Intel Core i7
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" className="fw-medium">
                                                        Operating System
                                                    </th>
                                                    <td>
                                                        Windows 10 Home
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second" className="p-0 border-0" id="key-features-tab-pane" role="tabpanel" aria-labelledby="key-features-tab" tabIndex={1}>
                                    <ul className="mb-0 ps-0 list-unstyled">
                                        <li className="mb-3"><span className="fw-medium">Display:</span> Stunning 4K UHD resolution with touchscreen capability for immersive visuals and easy navigation.</li>
                                        <li className="mb-3"><span className="fw-medium">Processor:</span> High-performance Intel Core i7 processor for seamless multitasking and powerful computing.</li>
                                        <li className="mb-3"><span className="fw-medium">Memory:</span> 16GB DDR4 RAM ensures smooth performance even with multiple applications running simultaneously.</li>
                                        <li className="mb-3"><span className="fw-medium">Storage:</span> Ample 1TB SSD storage for fast boot-up times, quick file access, and plenty of space for your files and applications.</li>
                                        <li className="mb-3"><span className="fw-medium">Graphics:</span> NVIDIA GeForce GTX 1650 Ti graphics card delivers smooth gaming performance and supports creative applications.</li>
                                        <li className="mb-0"><span className="fw-medium">Operating System:</span> Pre-installed with Windows 10 Home for a familiar and user-friendly computing experience.</li>
                                    </ul>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third" className=" p-0 border-0" id="add-features-tab-pane" role="tabpanel" aria-labelledby="add-features-tab" tabIndex={2}>
                                    <ul className="mb-0 ps-0 list-unstyled">
                                        <li className="mb-3"><span className="fw-medium">Connectivity:</span> Wi-Fi, Bluetooth, USB ports, HDMI output, and more for easy connectivity to peripherals and accessories.</li>
                                        <li className="mb-3"><span className="fw-medium">Design:</span> Sleek and stylish design with premium materials for durability and aesthetics.</li>
                                        <li className="mb-3"><span className="fw-medium">Battery Life:</span> Long-lasting battery to keep you productive on the go.</li>
                                        <li className="mb-3"><span className="fw-medium">Audio:</span> High-quality audio for immersive entertainment and clear communication.</li>
                                        <li className="mb-3"><span className="fw-medium">Security:</span> Built-in security features to protect your data and privacy.</li>
                                        <li className=""><span className="fw-medium">Warranty:</span> Backed by TechPro's warranty for peace of mind.</li>
                                    </ul>
                                </Tab.Pane>
                            </Card.Body>
                        </Tab.Container>
                    </Card>
                    <Card className=" custom-card">
                        <Card.Header className="card-header">
                            <div className="card-title">
                                Reviews &amp; Ratings
                            </div>
                        </Card.Header>
                        <Card.Body className="">
                            <Row className="">
                                <Col xxl={4} xl={12} lg={12} md={12} sm={12} className="">
                                    <div className="d-flex align-items-top mb-3">
                                        <div className="me-2 lh-1">
                                            <i className="ri-star-fill fs-25 text-warning"></i>
                                        </div>
                                        <div className="lh-1">
                                            <p className="mb-1 fw-medium">4.2 out of 5</p>
                                            <p className="mb-0 text-muted fs-11">Based on (23,435) ratings</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="fs-12 me-2 fw-medium">5 <i
                                            className="ri-star-fill fs-10"></i>
                                        </div>
                                        <SpkProgress mainClass="progress progress-xs flex-fill " variant="success" now={55} />
                                        <div className="text-muted ms-2 fs-12">(10,893)</div>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="fs-12 me-2 fw-medium">4 <i
                                            className="ri-star-fill fs-10"></i>
                                        </div>
                                        <SpkProgress mainClass="progress progress-xs flex-fill " variant="success" now={22} />
                                        <div className="text-muted ms-2 fs-12">(6,534)</div>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="fs-12 me-2 fw-medium">3 <i
                                            className="ri-star-fill fs-10"></i>
                                        </div>
                                        <SpkProgress mainClass="progress progress-xs flex-fill " variant="success" now={8} />
                                        <div className="text-muted ms-2 fs-12">(4,342)</div>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="fs-12 me-2 fw-medium">2 <i
                                            className="ri-star-fill fs-10"></i>
                                        </div>
                                        <SpkProgress mainClass="progress progress-xs flex-fill " variant="warning" now={9} />
                                        <div className="text-muted ms-2 fs-12">(1,432)</div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="fs-12 me-2 fw-medium">1 <i
                                            className="ri-star-fill fs-10"></i>
                                        </div>
                                        <SpkProgress mainClass="progress progress-xs flex-fill " variant="danger" now={6} />
                                        <div className="text-muted ms-2 fs-12">(1,453)</div>
                                    </div>
                                </Col>
                                <Col xxl={8} xl={12} lg={12} md={12} sm={12} className="mt-xxl-0 mt-3">
                                    <SpkSwiperJs slides={RatingsSwiper} navigation={false} slidesPerView={1} className="swiper swiper-reviews swiper-backface-hidden" autoplay={true} />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4} className="">
                    <Card className="set-order-card custom-card">
                        <Card.Header className="">
                            <div className="card-title">Set Order</div>
                        </Card.Header>
                        <Card.Body className="px-0 pt-0">
                            <div className="table-responsive">
                                <Table className=" text-nowrap table-borderless mb-3">
                                    <tbody>
                                        <tr>
                                            <td className="pb-0"><span className="text-muted">Item :</span></td>
                                            <td className="pb-0"> <span className="avatar avatar-md custom-width">
                                                {selectedItem ? (
                                                    <Image fill alt='Selected Product' src={selectedItem.image} className="" />
                                                ) : (
                                                    <Image fill className="" alt='Default Product' src={localshopdetails[0].image} />
                                                )}
                                            </span> </td>
                                        </tr>
                                        <tr>
                                            <td className=""><span className="text-muted">Brand :</span></td>
                                            <td className="text-start "> <span className="">SnuggleKnits</span> </td>
                                        </tr>
                                        <tr>
                                            <td className=""><span className="text-muted">Color :</span></td>
                                            <td className="text-start "> <span className="">Baby Pink</span> </td>
                                        </tr>
                                        <tr>
                                            <td className=""><span className="text-muted">Modal Name :</span></td>
                                            <td className="text-start "> <span className="">Baby Pink</span> </td>
                                        </tr>
                                        <tr>
                                            <td className=""><span className="text-muted">Style :</span></td>
                                            <td className="text-start "> <span className="">Plain Neck Sweater</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className=""><span className="text-muted">Size :</span></td>
                                            <td className="text-start "> <span className="">Medium</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className=""><span className="text-muted">Quantity :</span></td>
                                            <td className="text-start ">
                                                <div className="input-group rounded prod-details-qty flex-nowrap order-qnt">
                                                    <SpkButton Buttonvariant="primary-light" onClickfunc={dec} Customclass="btn btn-icon btn-primary input-group-text product-quantity-minus border-end-0"><i className="ri-subtract-line "></i></SpkButton>
                                                    <Form.Control type="text" className="form-control form-control-sm text-center" aria-label="quantity" id="product-quantity" defaultValue="2" />
                                                    <SpkButton Buttonvariant="primary-light" onClickfunc={inc} Customclass="btn btn-icon btn-primary input-group-text product-quantity-plus border-start-0"><i className="ri-add-line "></i></SpkButton>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className=""><span className="text-muted">Total :</span></td>
                                            <td className="text-start "> <span className="">$2000</span> </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <div className="text-primary px-3 fs-13 fw-medium my-3">Expected Delivery By
                                Feb 25 ,2025
                            </div>
                            <div className="d-grid mt-3 px-3">
                                <Link href="/apps/ecommerce/cart/" className="btn btn-primary m-1">Add To Cart</Link>
                                <Link href="/apps/ecommerce/checkout/" className="btn btn-outline-primary m-1">Buy Now</Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: Row-1 --> */}

            {/* <!-- Start:: Row-2 --> */}
            <h5 className="mb-3">Related Products</h5>
            <SpkSwiperJs slides={RelatedSwiper} breakpoint={breakpoints} navigation={true} slidesPerView={1} spaceBetween={20} className="swiper swiper-related-products swiper-backface-hidden" autoplay={true} />
            {/* <!-- End:: Row-2 --> */}

        </Fragment>
    );
};

export default ProductsDetails;