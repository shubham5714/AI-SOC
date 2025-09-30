"use client"

import SpkBadge from "@/shared/@spk-reusable-components/reusable-uiElements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import SpkTooltips from "@/shared/@spk-reusable-components/reusable-uiElements/spk-tooltips";
import { books, LightboxGallery, newsData } from "@/shared/data/pages/searchdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Card, Col, Dropdown, Form, Nav, Pagination, Row, Tab } from "react-bootstrap";

interface SearchProps { }

const Search: React.FC<SearchProps> = () => {
    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}
            <Seo title="Pages-Search" />
            <Pageheader title="Pages" currentpage="Search" activepage="Search" />
            {/* <!-- End::page-header --> */}

            <Tab.Container defaultActiveKey="all">
                {/*<!-- Start::row-1 -->*/}
                <Row className="">
                    <Col xl={12}>
                        <Card className=" custom-card overflow-hidden">
                            <Card.Body className="p-0">
                                <div className="p-3 border-bottom">
                                    <div className="input-group mb-3 search-result-input gap-2">
                                        <Form.Control type="text" className="form-control form-control-lg bg-light rounded-pill" placeholder="Search Here ..." aria-label="Search Here ..." aria-describedby="button-addon1" />
                                        <span className="position-absolute start-0 text-muted mt-3 ms-3 lh-1 search-result-icon"><i className="ri-search-line"></i></span>
                                        <SpkButton Buttonvariant="primary" Customclass="btn-w-sm rounded-pill" Buttontype="button" Id="button-addon1"> Search</SpkButton>
                                    </div>
                                    <div className="d-flex gap-2 flex-wrap">
                                        <SpkBadge variant="light" Customclass="border text-default rounded-pill">Designs <Link scroll={false} href="#!"><i className="ri-close-line"></i></Link></SpkBadge>
                                        <SpkBadge variant="light" Customclass="border text-default rounded-pill">Template <Link scroll={false} href="#!"><i className="ri-close-line"></i></Link></SpkBadge>
                                        <SpkBadge variant="light" Customclass="border text-default rounded-pill">Dashboard <Link scroll={false} href="#!"><i className="ri-close-line"></i></Link></SpkBadge>
                                        <SpkBadge variant="light" Customclass="border text-default rounded-pill">Admin Templates <Link scroll={false} href="#!"><i className="ri-close-line"></i></Link></SpkBadge>
                                        <SpkBadge variant="light" Customclass="border text-default rounded-pill"> Templates <Link scroll={false} href="#!"><i className="ri-close-line"></i></Link></SpkBadge>
                                        <SpkBadge variant="light" Customclass="border text-default rounded-pill">Admin <Link scroll={false} href="#!"><i className="ri-close-line"></i></Link></SpkBadge>
                                        <SpkBadge variant="light" Customclass="border text-default rounded-pill">Hosting Templates <Link scroll={false} href="#!"><i className="ri-close-line"></i></Link></SpkBadge>
                                        <SpkBadge variant="light" Customclass="border text-default rounded-pill">Hosting <Link scroll={false} href="#!"><i className="ri-close-line"></i></Link></SpkBadge>
                                        <SpkBadge variant="light" Customclass="border text-default rounded-pill">Bootstrap <Link scroll={false} href="#!"><i className="ri-close-line"></i></Link></SpkBadge>
                                        <SpkBadge variant="light" Customclass="border text-default rounded-pill">Sales  <Link scroll={false} href="#!"><i className="ri-close-line"></i></Link></SpkBadge>
                                        <div className="ms-auto">
                                            <Link scroll={false} href="#!" className="text-primary text-decoration-underline fw-medium mx-2"> Clear All </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3 d-flex gap-2 justify-content-between flex-wrap align-items-center">
                                    <div className="text-muted">Total of 55,142 results were found.</div>
                                    <div className="ms-auto d-flex gap-2 flex-wrap">
                                        <SpkDropdown toggleas="a" Customtoggleclass="btn btn-sm btn-w-md btn-light text-muted " Toggletext="Sort By">
                                            <li><Link className="dropdown-item" href="#!">Alphabets</Link></li>
                                            <li><Link className="dropdown-item" href="#!">First Word</Link></li>
                                            <li><Link className="dropdown-item" href="#!">Numeric</Link></li>
                                        </SpkDropdown>
                                        <SpkDropdown toggleas="a" Customtoggleclass="btn btn-sm btn-w-md btn-primary " Toggletext="Filter By">
                                            <li><Link scroll={false} href="#!" className="dropdown-item">Alphabets</Link></li>
                                            <li><Link scroll={false} href="#!" className="dropdown-item">First Word</Link></li>
                                            <li><Link scroll={false} href="#!" className="dropdown-item">Numeric</Link></li>
                                        </SpkDropdown>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 px-3 pt-1 pb-3">
                                    <Nav className="nav-tabs tab-style-6 p-0 search-tab gap-2" role="tablist">
                                        <Nav.Item className="" role="presentation">
                                            <Nav.Link eventKey="all" className="fw-medium" data-bs-toggle="tab" role="tab" aria-current="page" href="#search-all" aria-selected="true"><i className="ri-search-line me-2"></i>All</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="" role="presentation">
                                            <Nav.Link eventKey="image" className="fw-medium" data-bs-toggle="tab" role="tab" aria-current="page" href="#search-images" aria-selected="false" tabIndex={-1}><i className="ri-image-line me-2"></i>Images</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="" role="presentation">
                                            <Nav.Link eventKey="books" className="fw-medium" data-bs-toggle="tab" role="tab" aria-current="page" href="#search-books" aria-selected="false" tabIndex={-1}><i className="ri-book-line me-2"></i>Books</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="" role="presentation">
                                            <Nav.Link eventKey="news" className="fw-medium" data-bs-toggle="tab" role="tab" aria-current="page" href="#search-news" aria-selected="false" tabIndex={-1}><i className="ri-newspaper-line me-2"></i>News</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className="" role="presentation">
                                            <Nav.Link eventKey="videos" className="fw-medium" data-bs-toggle="tab" role="tab" aria-current="page" href="#search-videos" aria-selected="false" tabIndex={-1}><i className="ri-live-line me-2"></i>Videos</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/*<!--End::row-1 -->*/}

                {/*<!-- Start:: row-2 -->*/}
                <Row className="">
                    <Col xl={12}>
                        <Tab.Content>
                            <Tab.Pane eventKey="all" className=" p-0 border-0 " id="search-all" role="tabpanel">
                                <Card className=" custom-card overflow-hidden">
                                    <Card.Body className=" p-0">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-start justify-content-between">
                                                    <div className="text-truncate">
                                                        <div className="mb-2">
                                                            <span className="d-block fw-medium"><Link scroll={false} href="#!">Best Tech Gadgets</Link></span>
                                                            <Link scroll={false} href="#!" className="link-success w-75 text-truncate d-block"> http://www.besttechgadgets.com</Link>
                                                        </div>
                                                        <div className="mb-2">
                                                            <h6 className="fw-semibold mb-1"><Link scroll={false} href="#!" className="searched-item-main-link">Explore the Latest and Greatest Tech Gadgets</Link></h6>
                                                            <span className="d-block text-muted">Discover cutting-edge technology and must-have gadgets. Stay ahead in the tech world with our carefully curated list of innovative devices.</span>
                                                        </div>
                                                        <div className="d-flex align-items-center gap-3 flex-wrap">
                                                            <Link scroll={false} href="#!" className="link-primary link-offset-2 link-underline-opacity-10 link-underline-opacity-100-hover text-decoration-underline">Shop Now</Link>
                                                            <Link scroll={false} href="#!" className="link-primary link-offset-2 link-underline-opacity-10 link-underline-opacity-100-hover text-decoration-underline">Top 10 Picks</Link>
                                                        </div>
                                                    </div>
                                                    <SpkDropdown toggleas="a" Customtoggleclass=" no-caret" Icon={true} IconClass="ri-more-2-fill fs-5 text-muted" >
                                                        <li><Dropdown.Item>Week</Dropdown.Item></li>
                                                        <li><Dropdown.Item>Day</Dropdown.Item></li>
                                                        <li><Dropdown.Item>Year</Dropdown.Item></li>
                                                    </SpkDropdown>

                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-start justify-content-between">
                                                    <div className="text-truncate">
                                                        <div className="mb-2">
                                                            <span className="d-block fw-medium"><Link scroll={false} href="#!">Healthy Recipes Hub</Link></span>
                                                            <Link scroll={false} href="#!" className="link-success w-75 text-truncate d-block">http://www.healthyrecipeshub.com</Link>
                                                        </div>
                                                        <div className="mb-2">
                                                            <h6 className="fw-semibold mb-1"><Link scroll={false} href="#!" className="searched-item-main-link">Wholesome and Delicious Recipes for a Healthy Lifestyle</Link></h6>
                                                            <span className="d-block text-muted">Find a variety of nutritious recipes to support your well-being. From breakfast to dinner, we have a collection of tasty meals that prioritize your health.</span>
                                                        </div>
                                                        <div className="d-flex align-items-center gap-3 flex-wrap">
                                                            <Link scroll={false} href="#!" className="link-primary link-offset-2 link-underline-opacity-10 link-underline-opacity-100-hover text-decoration-underline">Browse Recipes</Link>
                                                            <Link scroll={false} href="#!" className="link-primary link-offset-2 link-underline-opacity-10 link-underline-opacity-100-hover text-decoration-underline">Nutrition Tips</Link>
                                                        </div>
                                                    </div>
                                                    <SpkDropdown toggleas="a" Customtoggleclass=" no-caret" Icon={true} IconClass="ri-more-2-fill fs-5 text-muted" >
                                                        <li><Dropdown.Item>Week</Dropdown.Item></li>
                                                        <li><Dropdown.Item>Day</Dropdown.Item></li>
                                                        <li><Dropdown.Item>Year</Dropdown.Item></li>
                                                    </SpkDropdown>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-start justify-content-between">
                                                    <div className="text-truncate">
                                                        <div className="mb-2">
                                                            <span className="d-block fw-medium"><Link scroll={false} href="#!">Travel Explorer</Link></span>
                                                            <Link scroll={false} href="#!" className="link-success w-75 text-truncate d-block">http://www.travelexplorer.com</Link>
                                                        </div>
                                                        <div className="mb-2">
                                                            <h6 className="fw-semibold mb-1"><Link scroll={false} href="#!" className="searched-item-main-link">Embark on Unforgettable Journeys Around the Globe</Link></h6>
                                                            <span className="d-block text-muted">Plan your next adventure with Travel Explorer. Discover hidden gems, travel tips, and amazing destinations to create memories that last a lifetime.</span>
                                                        </div>
                                                        <div className="d-flex align-items-center gap-3 flex-wrap">
                                                            <Link scroll={false} href="#!" className="link-primary link-offset-2 link-underline-opacity-10 link-underline-opacity-100-hover text-decoration-underline">Explore Destinations</Link>
                                                            <Link scroll={false} href="#!" className="link-primary link-offset-2 link-underline-opacity-10 link-underline-opacity-100-hover text-decoration-underline">Travel Guides</Link>
                                                        </div>
                                                    </div>
                                                    <SpkDropdown toggleas="a" Customtoggleclass=" no-caret" Icon={true} IconClass="ri-more-2-fill fs-5 text-muted" >
                                                        <li><Dropdown.Item>Week</Dropdown.Item></li>
                                                        <li><Dropdown.Item>Day</Dropdown.Item></li>
                                                        <li><Dropdown.Item>Year</Dropdown.Item></li>
                                                    </SpkDropdown>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-start justify-content-between">
                                                    <div className="text-truncate">
                                                        <div className="mb-2">
                                                            <span className="d-block fw-medium"><Link scroll={false} href="#!">Nature Photography Bliss</Link></span>
                                                            <Link scroll={false} href="#!" className="link-success w-75 text-truncate d-block">http://www.natureblissphotos.com</Link>
                                                        </div>
                                                        <div className="mb-2">
                                                            <span className="mb-2 d-block"><Link scroll={false} href="#!" className="fw-medium">Search Related Images :</Link></span>
                                                            <div className="d-flex align-items-start gap-3 flex-wrap">
                                                                <div>
                                                                    <figure className="figure">
                                                                        <Link scroll={false} className="avatar avatar-search " href="#!">
                                                                            <Image width={188} height={120} className="img-fluid rounded card-img" src="../../assets/images/media/media-59.jpg" alt="..." />
                                                                        </Link>
                                                                        <Link scroll={false} href="#!" className="d-block">
                                                                            Natural Serenity
                                                                        </Link>
                                                                    </figure>
                                                                </div>
                                                                <div>
                                                                    <figure className="figure">
                                                                        <Link scroll={false} className="avatar avatar-search" href="#!">
                                                                            <Image width={188} height={120} className="img-fluid rounded card-img" src="../../assets/images/media/media-60.jpg" alt="..." />
                                                                        </Link>
                                                                        <Link scroll={false} href="#!" className="d-block">
                                                                            Active Living
                                                                        </Link>
                                                                    </figure>
                                                                </div>
                                                                <div>
                                                                    <figure className="figure">
                                                                        <Link scroll={false} className="avatar avatar-search" href="#!">
                                                                            <Image width={188} height={120} className="img-fluid rounded card-img" src="../../assets/images/media/media-61.jpg" alt="..." />
                                                                        </Link>
                                                                        <Link scroll={false} href="#!" className="d-block">
                                                                            Creative Elegance
                                                                        </Link>
                                                                    </figure>
                                                                </div>
                                                                <div>
                                                                    <figure className="figure">
                                                                        <Link scroll={false} href="#!" className="avatar px-4 avatar-search fw-medium bg-primary-transparent">
                                                                            View All <i className="ti ti-arrow-narrow-right ms-2"></i>
                                                                        </Link>
                                                                    </figure>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <SpkDropdown toggleas="a" Customtoggleclass=" no-caret" Icon={true} IconClass="ri-more-2-fill fs-5 text-muted" >
                                                        <li><Dropdown.Item>Week</Dropdown.Item></li>
                                                        <li><Dropdown.Item>Day</Dropdown.Item></li>
                                                        <li><Dropdown.Item>Year</Dropdown.Item></li>
                                                    </SpkDropdown>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-start justify-content-between">
                                                    <div className="text-truncate">
                                                        <div className="mb-2">
                                                            <span className="d-block fw-medium"><Link scroll={false} href="#!">Fashion Finds</Link></span>
                                                            <Link scroll={false} href="#!" className="link-success w-75 text-truncate d-block">http://www.fashionfinds.com</Link>
                                                        </div>
                                                        <div className="mb-2">
                                                            <h6 className="fw-semibold mb-1"><Link scroll={false} href="#!" className="searched-item-main-link">Elevate Your Style with the Latest Fashion Trends</Link></h6>
                                                            <span className="d-block text-muted">Stay in vogue with Fashion Finds. Explore a curated selection of clothing, accessories, and style tips to express your unique fashion sense.</span>
                                                        </div>
                                                        <div className="d-flex align-items-center gap-3 flex-wrap">
                                                            <Link scroll={false} href="#!" className="link-primary link-offset-2 link-underline-opacity-10 link-underline-opacity-100-hover text-decoration-underline">Shop Now</Link>
                                                            <Link scroll={false} href="#!" className="link-primary link-offset-2 link-underline-opacity-10 link-underline-opacity-100-hover text-decoration-underline">Trend Alerts</Link>
                                                        </div>
                                                    </div>
                                                    <SpkDropdown toggleas="a" Customtoggleclass=" no-caret" Icon={true} IconClass="ri-more-2-fill fs-5 text-muted" >
                                                        <li><Dropdown.Item>Week</Dropdown.Item></li>
                                                        <li><Dropdown.Item>Day</Dropdown.Item></li>
                                                        <li><Dropdown.Item>Year</Dropdown.Item></li>
                                                    </SpkDropdown>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-start justify-content-between">
                                                    <div className="text-truncate">
                                                        <div className="mb-2">
                                                            <span className="d-block fw-medium"><Link scroll={false} href="#!">Science Fiction Book Haven</Link></span>
                                                            <Link scroll={false} href="#!" className="link-success w-75 text-truncate d-block">http://www.sci-fibooks.com</Link>
                                                        </div>
                                                        <div className="mb-2">
                                                            <h6 className="fw-semibold mb-1"><Link scroll={false} href="#!" className="searched-item-main-link">Journey to Other Worlds with the Best Science Fiction Books</Link></h6>
                                                            <span className="d-block text-muted">Dive into the realms of imagination with our collection of mind-bending science fiction novels. Embark on epic adventures beyond the stars.</span>
                                                        </div>
                                                        <div className="d-flex align-items-center gap-3 flex-wrap">
                                                            <Link scroll={false} href="#!" className="link-primary link-offset-2 link-underline-opacity-10 link-underline-opacity-100-hover text-decoration-underline">Explore Books</Link>
                                                            <Link scroll={false} href="#!" className="link-primary link-offset-2 link-underline-opacity-10 link-underline-opacity-100-hover text-decoration-underline">Author Interviews</Link>
                                                        </div>
                                                    </div>
                                                    <SpkDropdown toggleas="a" Customtoggleclass=" no-caret" Icon={true} IconClass="ri-more-2-fill fs-5 text-muted" >
                                                        <li><Dropdown.Item>Week</Dropdown.Item></li>
                                                        <li><Dropdown.Item>Day</Dropdown.Item></li>
                                                        <li><Dropdown.Item>Year</Dropdown.Item></li>
                                                    </SpkDropdown>
                                                </div>
                                            </li>
                                        </ul>
                                    </Card.Body>
                                </Card>
                                <nav aria-label="Page navigation" className="pagination-style-4">
                                    <Pagination className="pagination overflow-auto justify-content-center gap-1">
                                        <Pagination.Item disabled>Prev</Pagination.Item>
                                        <Pagination.Item active>1</Pagination.Item>
                                        <Pagination.Item>2</Pagination.Item>
                                        <li className="page-item">
                                            <Link scroll={false} className="page-link" href="#!">
                                                <i className="bi bi-three-dots"></i>
                                            </Link>
                                        </li>
                                        <Pagination.Item>16</Pagination.Item>
                                        <Pagination.Item>17</Pagination.Item>
                                        <Pagination.Item className="pagination-next text-primary">next</Pagination.Item>
                                    </Pagination>
                                </nav>
                            </Tab.Pane>
                            <Tab.Pane eventKey="image" className=" border-0 p-0" id="search-images" role="tabpanel">
                                <Card className="custom-card">
                                    <Card.Body className=" pb-0">
                                        <LightboxGallery />
                                    </Card.Body>
                                </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey="books" className=" border-0 p-0" id="search-books" role="tabpanel">
                                <Row className="">
                                    {books.map((book) => (
                                        <Col xl={6} className="" key={book.id}>
                                            <Card className=" custom-card">
                                                <Card.Body className="card-body">
                                                    <div className="d-flex align-items-start flex-wrap gap-3 justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <div>
                                                                <span className="avatar avatar-xl bg-primary bg-opacity-10 border custom-width">
                                                                    <Image fill src={book.image} alt={book.title} />
                                                                </span>
                                                            </div>
                                                            <div className="ms-2">
                                                                <div>
                                                                    <span className="text-muted">Published On</span> - <span className="fw-medium mb-0">{book.publishedOn}</span>
                                                                </div>
                                                                <h6 className="fw-medium my-1 d-flex align-items-center">
                                                                    <Link href="#!">{book.title}</Link>
                                                                </h6>
                                                                <span className="d-block text-muted">{book.description}</span>
                                                            </div>
                                                        </div>
                                                        <div className="btn-list">
                                                            <SpkTooltips placement="top" title="Add to favourite">
                                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-success-light"><span><i className="ri-heart-3-line align-middle"></i></span></Link>
                                                            </SpkTooltips>
                                                            <SpkTooltips placement="top" title="Share Link">
                                                                <Link scroll={false} href="#!" className="btn btn-sm btn-icon btn-info-light me-0"><span><i className="ri-share-line"></i></span></Link>
                                                            </SpkTooltips>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex gap-2 justify-content-between mt-3">
                                                        <div className="popular-tags">
                                                            {book.tags.map((tag, index) => (
                                                                <Link scroll={false} key={index} href="#!" className="badge me-1 rounded-pill bg-primary-transparent">
                                                                    {tag}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                        <Link scroll={false} href="#!">
                                                            <span className="fw-semibold">Author:</span> <i>{book.author}</i>
                                                        </Link>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                    <Col xl={12} className=" mb-4">
                                        <SpkButton Buttonvariant="info-light" Customclass="btn-loader mx-auto">
                                            <span className="me-2">Loading</span>
                                            <span className="loading"><i className="ri-loader-4-line fs-16"></i></span>
                                        </SpkButton>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="news" className=" border-0 p-0" id="search-news" role="tabpanel">
                                <div className="row">
                                    {newsData.map((item, index) => (
                                        <Col xl={4} key={index} className="">
                                            <Card className=" custom-card">
                                                <Card.Body className="">
                                                    <Link scroll={false} href="#!" className="stretched-link"></Link>
                                                    <div className="mb-2">
                                                        <h6 className="mb-3">{item.title}</h6>
                                                        <div className="mb-1">
                                                            <i className="ri-calendar-line p-1 bg-primary-transparent text-primary rounded-circle lh-1 mb-1"></i> {item.date}
                                                        </div>
                                                        <div>
                                                            <i className="ri-map-pin-line text-success p-1 bg-success-transparent rounded-circle lh-1"></i> {item.location}
                                                        </div>
                                                    </div>
                                                    <span className="text-muted">{item.description}</span>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </div>
                                <nav aria-label="Page navigation" className="pagination-style-4">
                                    <ul className="pagination text-center justify-content-center gap-1">
                                        <Pagination className="pagination overflow-auto justify-content-center gap-1">
                                            <Pagination.Item disabled>Prev</Pagination.Item>
                                            <Pagination.Item active>1</Pagination.Item>
                                            <Pagination.Item>2</Pagination.Item>
                                            <li className="page-item">
                                                <Link scroll={false} className="page-link" href="#!">
                                                    <i className="bi bi-three-dots"></i>
                                                </Link>
                                            </li>
                                            <Pagination.Item>16</Pagination.Item>
                                            <Pagination.Item>17</Pagination.Item>
                                            <Pagination.Item className="pagination-next text-primary">next</Pagination.Item>
                                        </Pagination>
                                    </ul>
                                </nav>
                            </Tab.Pane>
                            <Tab.Pane eventKey="videos" className=" border-0 p-0" id="search-videos" role="tabpanel">
                                <Card className=" custom-card">
                                    <Card.Body className=" pb-1">
                                        <Row className=" gy-4">
                                            <Col lg={4} md={3} sm={6} className="col-12">
                                                <div className="ratio ratio-16x9">
                                                    <iframe src="https://www.youtube.com/embed/HWvHA2FY8Ok?si=Bf-6pyMAcBG-_dR0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                                </div>
                                                <div className="p-2">
                                                    <div className="d-flex align-items-center gap-1">
                                                        <div className="figure-caption fs-13 fw-medium text-default text-truncate">Valex - Bootstrap 5 Admin & Dashboard HTML Template</div>
                                                    </div>
                                                    <Link scroll={false} href="https://www.spruko.com/demo/valex/" target="_blank" className="fs-12 link-primary text-decoration-underline">https://www.spruko.com/demo/valex/</Link>
                                                </div>
                                            </Col>
                                            <Col lg={4} md={3} sm={6} className="col-12">
                                                <div className="ratio ratio-16x9">
                                                    <iframe src="https://www.youtube.com/embed/Zx1HjMhcQdE?si=Nhbu6XA2PoyAlYhy" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                                </div>
                                                <div className="p-2">
                                                    <div className="d-flex align-items-center gap-1">
                                                        <div className="figure-caption fs-13 fw-medium text-default text-truncate">Azea - Admin & Dashboard Bootstrap 5 HTML5 Template</div>
                                                    </div>
                                                    <Link scroll={false} href="https://spruko.com/demo/azea/" target="_blank" className="fs-12 link-primary text-decoration-underline">https://spruko.com/demo/azea/</Link>
                                                </div>
                                            </Col>
                                            <Col lg={4} md={3} sm={6} className="col-12">
                                                <div className="ratio ratio-16x9">
                                                    <iframe src="https://www.youtube.com/embed/JP_os1DC1MQ?si=qyUJRBl7ZJBhR_P5" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                                </div>
                                                <div className="p-2">
                                                    <div className="d-flex align-items-center gap-1">
                                                        <div className="figure-caption fs-13 fw-medium text-default text-truncate">YNEX - HTML Installation & Usage process</div>
                                                    </div>
                                                    <Link scroll={false} href="https://spruko.com/demo/ynex/" target="_blank" className="fs-12 link-primary text-decoration-underline">https://spruko.com/demo/ynex/</Link>
                                                </div>
                                            </Col>
                                            <Col lg={4} md={3} sm={6} className="col-12">
                                                <div className="ratio ratio-16x9">
                                                    <iframe src="https://www.youtube.com/embed/-lDlbQ7DiCI?si=-GRS_5Dco6Qc5ius" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                                </div>
                                                <div className="p-2">
                                                    <div className="d-flex align-items-center gap-1">
                                                        <div className="figure-caption fs-13 fw-medium text-default text-truncate">Sash - Admin and Dashboard Multipurpose HTML Advanced Template</div>
                                                    </div>
                                                    <Link scroll={false} href="https://spruko.com/demo/sash/" target="_blank" className="fs-12 link-primary text-decoration-underline">https://spruko.com/demo/sash/</Link>
                                                </div>
                                            </Col>
                                            <Col lg={4} md={3} sm={6} className="col-12">
                                                <div className="ratio ratio-16x9">
                                                    <iframe src="https://www.youtube.com/embed/JP_os1DC1MQ?si=qyUJRBl7ZJBhR_P5" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                                </div>
                                                <div className="p-2">
                                                    <div className="d-flex align-items-center gap-1">
                                                        <div className="figure-caption fs-13 fw-medium text-default text-truncate">Ynex - Bootstrap 5 Admin & Dashboard HTML5 Template</div>
                                                    </div>
                                                    <Link scroll={false} href="https://spruko.com/demo/ynex/" target="_blank" className="fs-12 link-primary text-decoration-underline">https://spruko.com/demo/ynex/</Link>
                                                </div>
                                            </Col>
                                            <Col lg={4} md={3} sm={6} className="col-12">
                                                <div className="ratio ratio-16x9">
                                                    <iframe src="https://www.youtube.com/embed/bVRW4Li8inE?si=pOpS9ep2Hn3cGL3y" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                                </div>
                                                <div className="p-2">
                                                    <div className="d-flex align-items-center gap-1">
                                                        <div className="figure-caption fs-13 fw-medium text-default text-truncate">Zanex - Bootstrap 5 Admin & Dashboard HTML5 Template</div>
                                                    </div>
                                                    <Link scroll={false} href="https://spruko.com/demo/zanex/" target="_blank" className="fs-12 link-primary text-decoration-underline">https://spruko.com/demo/zanex/</Link>
                                                </div>
                                            </Col>
                                            <div className="col-xl-12 my-3">
                                                <SpkButton Buttonvariant="info-light" Customclass="btn-loader mx-auto">
                                                    <span className="me-2">Loading</span>
                                                    <span className="loading"><i className="ri-loader-4-line fs-16"></i></span>
                                                </SpkButton>
                                            </div>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
                {/*<!-- End:: row-2 -->*/}
            </Tab.Container>
        </Fragment>
    )
};

export default Search;