"use client"
import SpkBadge from "@/shared/@spk-reusable-components/reusable-uiElements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Col, Form, ListGroup, Row } from "react-bootstrap";
import SimpleBar from "simplebar-react";
import { blogItems, comments, hashtags, LightboxGallery, listItems } from "@/shared/data/pages/blog/blogdetailsdata";
import SpkListgroup from "@/shared/@spk-reusable-components/reusable-uiElements/spk-listgroup";
import Image from "next/image";


interface BlogDetails { }

const BlogDetails: React.FC<BlogDetails> = () => {


    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}
            <Seo title="Pages-Blogdetails" />
            <Pageheader title="Pages" subtitle="Blog" currentpage="Blog Details" activepage="Blog Details" />
            {/* <!-- End::page-header --> */}

            {/*<!-- Start::row-1 -->*/}
            <Row className="">
                <Col xl={9}>
                    <Row className="">
                        <Col xl={12} className="">
                            <Card className=" custom-card">
                                <Link scroll={false} href="#!" className="p-3 custom-width">
                                    <Image fill src="../../../assets/images/media/blog/7.jpg" className="card-img rounded-3 blog-details-img" alt="..." />
                                </Link>
                                <Card.Body className=" p-4">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <p className="h5 fw-semibold mb-0">The Vital Connection Between Flora and Fauna</p>
                                        <span className="badge bg-success">Nature</span>
                                    </div>
                                    <div className="d-sm-flex align-items-center mb-3">
                                        <div className="d-flex align-items-center flex-fill">
                                            <span className="avatar avatar-md avatar-rounded me-3 custom-width">
                                                <Image fill src="../../../assets/images/faces/12.jpg" alt="" />
                                            </span>
                                            <div>
                                                <p className="mb-0 fw-medium">Herbert Paul</p>
                                                <div className="fs-12 text-muted fw-normal"><i className="ri-calendar-fill me-2 align-middle lh-1 text-success"></i>25 Dec 2024 - 14:24</div>
                                            </div>
                                        </div>
                                        <div className="btn-list mt-sm-0 mt-2">
                                            <SpkButton Buttonvariant="info-light" Size="sm"><i className="ri-thumb-up-line"></i> Like</SpkButton>
                                            <SpkButton Buttonvariant="secondary-light" Size="sm"><i className="ri-share-line"></i> Share</SpkButton>
                                            <SpkButton Buttonvariant="info-light" Size="sm"><i className="ri-message-square-line"></i> Comment</SpkButton>
                                        </div>
                                    </div>
                                    <p className="mb-4">
                                        From dense forests to expansive deserts, nature's variety is awe-inspiring. Each habitat supports unique forms of life and displays stunning adaptations that highlight the intricacy of the natural world.
                                    </p>
                                    <p className="mb-4">
                                        Animals play a crucial role in maintaining ecosystems, from pollination to soil aeration. Their movements, behaviors, and patterns of survival contribute to the health of the environment. Rivers, lakes, and oceans not only provide sustenance but also offer stunning views. Their reflective surfaces and rhythmic movements bring serenity to anyone who observes them.
                                    </p>

                                    <p className="mb-4">The relationship between plants and animals is essential for life. This symbiotic connection fosters growth, reproduction, and the survival of countless species within the web of life.The beauty of nature has inspired art, literature, and science for centuries. Its forms and patterns remind us of the boundless creativity and ingenuity present in the natural world.</p>
                                    <blockquote className="blockquote custom-blockquote primary mb-4 text-center">
                                        <h6 className="lh-base">"Conservation is essential to preserve the magnificence of nature for future generations. Protecting natural habitats and reducing human impact ensure that this beauty endures. </h6>
                                        <footer className="blockquote-footer mt-3 text-success mb-0">Someone famous as <cite title="Source Title">- Ayyan Abhi</cite></footer>
                                        <span className="quote-icon"><i className="ri-double-quotes-l"></i></span>
                                    </blockquote>
                                    <p className="mb-0">
                                        Nature offers breathtaking landscapes, from lush green valleys to towering mountain peaks. The harmony of colors, textures, and forms creates a sense of peace and wonder.
                                    </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12} className="">
                            <Card className=" custom-card overflow-hidden">
                                <Card.Header className="">
                                    <div className="card-title">
                                        COMMENTS
                                    </div>
                                </Card.Header>
                                <Card.Body className=" p-0">
                                    <SimpleBar className="list-group list-group-flush" id="blog-details-comment-list">
                                        {comments.map((comment) => (
                                            <li key={comment.id} className={`list-group-item border-0 ${comment.borderClass ? 'border-bottom-0' : 'border-bottom'} `}>
                                                <div className="d-flex align-items-start gap-3 flex-wrap">
                                                    <div>
                                                        <span className="avatar avatar-lg avatar-rounded custom-width">
                                                            <Image fill src={comment.avatar} alt={comment.name} />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill w-50">
                                                        <span className="fw-medium d-block mb-1">{comment.name}</span>
                                                        <span className="d-block mb-3">{comment.message}</span>
                                                        <div className="btn-list">
                                                            <SpkButton Buttonvariant="primary-light" Size="sm">Reply<i className="ri-reply-line ms-1"></i></SpkButton>
                                                            <SpkButton Buttonvariant="success-light" Size="sm">Report<i className="ri-error-warning-line ms-1"></i></SpkButton>
                                                        </div>
                                                    </div>
                                                    <div className="btn-list">
                                                        <SpkButton Buttonvariant="info-light" Size="sm" Customclass="btn-icon btn-wave"><i className="ri-thumb-up-line"></i></SpkButton>
                                                        <SpkButton Buttonvariant="secondary-light" Size="sm" Customclass="btn-icon btn-wave"><i className="ri-thumb-down-line"></i></SpkButton>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </SimpleBar>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12} className="">
                            <Card className="custom-card">
                                <Card.Header className="">
                                    <div className="card-title">
                                        Leave a Comment
                                    </div>
                                </Card.Header>
                                <Card.Body className="">
                                    <Row className=" gy-3">
                                        <Col xl={6}>
                                            <label htmlFor="blog-first-name" className="form-label">First Name</label>
                                            <input type="text" className="form-control" id="blog-first-name" placeholder="Enter Name" />
                                        </Col>
                                        <Col xl={6}>
                                            <label htmlFor="blog-email" className="form-label">Email ID</label>
                                            <input type="text" className="form-control" id="blog-email" placeholder="Enter Email" />
                                        </Col>
                                        <Col xl={12}>
                                            <label htmlFor="blog-comment" className="form-label">Write Comment</label>
                                            <textarea className="form-control" id="blog-comment" rows={4} placeholder="Write Here......."></textarea>
                                        </Col>
                                    </Row>
                                </Card.Body>
                                <Card.Footer className="">
                                    <div className="text-end">
                                        <SpkButton Buttonvariant="primary">Post Comment</SpkButton>
                                    </div>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xl={3} className="">
                    <Row className="">
                        <Col xl={12} className="">
                            <Card className=" custom-card">
                                <Card.Header className="card-header">
                                    <div className="card-title">
                                        Related Topics
                                    </div>
                                </Card.Header>
                                <Card.Body className=" p-0">
                                    <SpkListgroup as="ul" Variant="flush" CustomClass="">
                                        {listItems.map((item) => (
                                            <ListGroup.Item key={item.id} className="list-group-item">
                                                <Link scroll={false} href="#!">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <div>
                                                                <i className={`${item.iconClass} fs-14 p-1 rounded-2 d-inline-block align-middle lh-1 ${item.bgColor} text-fixed-white`}></i>
                                                            </div>
                                                            <div>
                                                                <span className="fw-medium ms-2">{item.text}</span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <SpkBadge variant="" Customclass={item.badgeColor}>{item.badgeCount}</SpkBadge>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </ListGroup.Item>
                                        ))}

                                    </SpkListgroup>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12} className="">
                            <Card className=" custom-card overflow-hidden">
                                <Card.Header className=" justify-content-between">
                                    <div className="card-title">
                                        Recent Posts
                                    </div>
                                    <Link scroll={false} href="#!" className="fs-12 text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                                </Card.Header>
                                <Card.Body className=" p-0">
                                    <ListGroup className=" list-group-flush">
                                        {blogItems.map((item) => (
                                            <ListGroup.Item key={item.id} className="">
                                                <div className="d-flex gap-3 flex-wrap align-items-center">
                                                    <span className="avatar avatar-xl">
                                                        <Image width={64} height={64} src={item.imageSrc} className="img-fluid" alt={item.title} />
                                                    </span>
                                                    <div className="flex-fill">
                                                        <Link scroll={false} href="#!" className={`fs-14 mb-0 ${item.categoryColor}`}>
                                                            {item.category}
                                                        </Link>
                                                        <p className="mb-1 w-75 text-truncate fw-medium">{item.title}</p>
                                                        <span className="text-muted fs-12">{item.date}</span>
                                                    </div>
                                                    <div>
                                                        <SpkButton Buttonvariant="light" Size="sm" Customclass="btn-icon rtl-rotate"><i className="ri-arrow-right-s-line"></i></SpkButton>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12} className="">
                        <Card className="custom-card">
                                <Card.Header className="">
                                    <Card.Title className="">
                                        Gallery
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body className="">
                                    <LightboxGallery />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12} className="">
                            <Card className=" custom-card bg-primary-transparent border-0 shadow-none">
                                <Card.Header className="card-header justify-content-between">
                                    <Card.Title className="">
                                        Our News Letter
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body className="">
                                    <label className="form-check-label mb-3">
                                        Subscribe for Updates on the Latest News & Posts
                                    </label>
                                    <div className="input-group">
                                        <Form.Control type="text" className=" shadow-none" placeholder="Email Here" aria-label="blog-email" aria-describedby="blog-subscribe" />
                                        <SpkButton Buttonvariant="primary" Customclass=" btn-wave" Buttontype="button" Id="blog-subscribe">Subscribe</SpkButton>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12} className="">
                            <Card className=" custom-card">
                                <Card.Header className="">
                                    <Card.Title className="">
                                        Popular Tags
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body className="card-body">
                                    <div className="blog-popular-tags">
                                        {hashtags.map((hashtag, index) => (
                                            <Link key={index} scroll={false} href="#!">
                                                <SpkBadge variant="light" Customclass="text-muted">
                                                    {hashtag}
                                                </SpkBadge>
                                            </Link>
                                        ))}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/*<!--End::row-1 -->*/}
        </Fragment>
    )
};

export default BlogDetails;