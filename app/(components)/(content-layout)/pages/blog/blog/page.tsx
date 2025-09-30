"use client"

import SpkCarouselComponent from "@/shared/@spk-reusable-components/reusable-advancedui/spk-carousel";
import SpkBlogCard from "@/shared/@spk-reusable-components/reusable-pages/spk-blogcard";
import SpkBadge from "@/shared/@spk-reusable-components/reusable-uiElements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkListgroup from "@/shared/@spk-reusable-components/reusable-uiElements/spk-listgroup";
import { BlogsData, categories, Featuredblogdata, Relatedblogdata } from "@/shared/data/pages/blog/blogdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { Fragment } from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";

interface BlogProps { }

const Blog: React.FC<BlogProps> = () => {

    const router = useRouter();

    const navigateToDetails = () => {
        router.push("/pages/blog/blog-details");
    };
    const Carouseldata = [
        <div className="custom-width">
            <Image width={300} height={303} src="../../../assets/images/media/blog/1.jpg" className="d-block w-100 h-100" alt="..." />
        </div>,
        <div className="custom-width">
            <Image width={300} height={303} src="../../../assets/images/media/blog/3.jpg" className="d-block w-100 h-100" alt="..." />
        </div>,
        <div className="custom-width">
            <Image width={300} height={303} src="../../../assets/images/media/blog/2.jpg" className="d-block w-100 h-100" alt="..." />
        </div>
    ]
    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}
            <Seo title="Pages-Blog" />
            <Pageheader title="Pages" subtitle="Blog" currentpage="Blog" activepage="Blog" />
            {/* <!-- End::page-header --> */}
            {/*<!-- Start:: row-1 -->*/}
            <Row className="">
                <Col xxl={9} className="">
                    <Row className="">
                        <Col xxl={5} className="">
                            <Row className="">
                                <Col xl={12} className="">
                                    <Card className=" custom-card overflow-hidden">
                                        <Card.Body className=" p-0">
                                            <div
                                                className="stretched-link"
                                                role="button"
                                                onClick={navigateToDetails}
                                                style={{ cursor: "pointer" }}
                                            >
                                                <SpkCarouselComponent controls={false} items={Carouseldata} mainClass="blog-carousel" />
                                            </div>

                                            <div className="p-3">
                                                <h5 className="fw-semibold lh-base"><a href="blog-details.html">The Serene Beauty of Nature's Landscape</a></h5>
                                                <p className="mb-3">Nature offers breathtaking landscapes, from lush green valleys to towering mountain peaks.<a href="#!" className="fw-medium text-primary ms-2 align-middle fs-12 text-Augoration-underline d-inline-block">Read More</a></p>
                                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center flex-wrap gap-1">
                                                        <div className="avatar avatar-md avatar-rounded me-2 custom-width">
                                                            <Image fill src="../../../assets/images/faces/1.jpg" alt="" />
                                                        </div>
                                                        <div>
                                                            <p className="mb-0 fw-medium">Emily Davis</p>
                                                            <p className="text-muted fs-12 mb-0">25, Mar 2024 - 14:20</p>
                                                        </div>
                                                    </div>
                                                    <div className="avatar avatar-sm bg-danger-transparent avatar-rounded">
                                                        <i className="ri-heart-line text-danger"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xl={12} className="">
                                    {BlogsData.slice(0, 1).map((card, index) => (
                                        <SpkBlogCard card={card} key={index} />
                                    ))}
                                </Col>
                            </Row>
                        </Col>
                        <Col xxl={7} className="">
                            <Row className="">
                                {BlogsData.slice(1, 5).map((card, index) => (
                                    <Col xl={6} className="" key={index}>
                                        <SpkBlogCard  ImagePadding={true} card={card} />
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                        {BlogsData.slice(5, 9).map((card, index) => (
                            <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12" key={index}>
                                <SpkBlogCard card={card} />
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col xxl={3} className="">
                    <Row className="">
                        <Col xl={12} className="">
                            <Card className=" custom-card overflow-hidden">
                                <Card.Header className="justify-content-between">
                                    <Card.Title>
                                        Categories
                                    </Card.Title>
                                    <Link scroll={false} href="#!" className="btn btn-light btn-wave btn-sm text-muted waves-effect waves-light">All<i className="ti ti-arrow-narrow-right ms-1"></i></Link>
                                </Card.Header>
                                <Card.Body className=" p-0">
                                    <SpkListgroup as="ul" Variant="flush" CustomClass="list-style">
                                        {categories.map((category) => (
                                            <ListGroup.Item key={category.id} className="">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <span className="fw-medium">
                                                        <i
                                                            className={`fs-14 p-1 rounded-2 me-2 d-inline-block align-middle lh-1 bg-${category.badgeColor} text-fixed-white ${category.icon}`}
                                                        ></i>
                                                        {category.name}
                                                    </span>
                                                    <SpkBadge variant="" Customclass={` bg-${category.badgeColor}-transparent`}>{category.count}</SpkBadge>
                                                </div>
                                            </ListGroup.Item>
                                        ))}
                                    </SpkListgroup>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12} className="">
                            <Card className="custom-card overflow-hidden">
                                <Card.Header className="d-flex align-items-center justify-content-between">
                                    <Card.Title>
                                        Related Blogs
                                    </Card.Title>
                                    <div>
                                        <SpkBadge Pill={true} Customclass="bg-primary-transparent">15</SpkBadge>
                                    </div>
                                </Card.Header>
                                <Card.Body className="p-0">
                                    <SpkListgroup as="ul" Variant="flush" CustomClass="">
                                        {Relatedblogdata.map((item) => (
                                            <ListGroup.Item as="li" className="border-bottom-0" key={item.id}>
                                                <div className="d-flex flex-wrap flex-xxl-nowrap align-items-center gap-2">
                                                    <span className="avatar avatar-xl flex-shrink-0 me-1">
                                                        <Image width={64} height={64} src={item.imageSrc} className="img-fluid" alt={item.name} />
                                                    </span>
                                                    <div className="flex-fill text-wrap">
                                                        <Link scroll={false} href="#!" className="fs-14 fw-medium mb-0">
                                                            {item.name}
                                                        </Link>
                                                        <p className="mb-1 text-muted">{item.description}</p>
                                                        <span className="text-muted fs-10">{item.date}</span>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                        ))}
                                    </SpkListgroup>
                                    <div className="p-3 pt-1">
                                        <SpkButton Buttonvariant="primary" Customclass="mx-auto  btn-loader text-center justify-content-center w-100">
                                            <span className="me-2">Load More</span>
                                            <span className="loading"><i className="ri-loader-4-line fs-16 align-middle"></i></span>
                                        </SpkButton>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12} className="">
                            <Card className="custom-card overflow-hidden">
                                <Card.Header className="d-flex align-items-center justify-content-between">
                                    <Card.Title className="">
                                        Featured Blogs
                                    </Card.Title>
                                    <div>
                                        <SpkBadge Customclass="bg-primary-transparent">23 Blogs</SpkBadge>
                                    </div>
                                </Card.Header>
                                <Card.Body className="p-0">
                                    <SpkListgroup as="ul" Variant="flush" CustomClass="">
                                        {Featuredblogdata.map((idx) => (
                                            <ListGroup.Item as="li" key={idx.id} className={idx.class}>
                                                <div className="d-flex flex-wrap align-items-center gap-3">
                                                    <span className="avatar avatar-lg ">
                                                        <Image width={48} height={48} src={idx.src} className="img-fluid" alt="..." />
                                                    </span>
                                                    <div className="flex-fill">
                                                        <Link scroll={false} href="#!" className="fs-14 fw-medium mb-1">{idx.title}</Link>
                                                        <p className="mb-0 mt-1 popular-blog-content text-truncate">
                                                            {idx.text}
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <SpkButton Buttonvariant="light" Size="sm" Customclass="btn-icon rtl-rotate"><i className="ri-arrow-right-s-line"></i></SpkButton>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                        ))}
                                    </SpkListgroup>
                                    <div className="p-3 pt-1">
                                        <SpkButton Buttonvariant="primary-light" Size="sm" Customclass="btn mx-auto btn-loader text-center justify-content-center w-100 ">
                                            <span className="me-2">Load More</span>
                                            <span className="loading"><i className="ri-loader-4-line fs-16 lh-1"></i></span>
                                        </SpkButton>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/*<!-- End:: row-1 -->*/}

        </Fragment>
    )
};

export default Blog;