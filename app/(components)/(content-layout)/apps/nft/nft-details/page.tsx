"use client"
import SpkMarketplaceCard from "@/shared/@spk-reusable-components/reusable-apps/spk-marketplace";
import SpkSwiperJs from "@/shared/@spk-reusable-components/reusable-plugins/spk-swiperjs";
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkTooltips from "@/shared/@spk-reusable-components/reusable-uiElements/spk-tooltips";
import { NFTItemdata } from "@/shared/data/apps/nft/market-place-data";
import { NftSwiperCardData, PopularNftdata, Swiperdata } from "@/shared/data/apps/nft/nft-details-data";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

interface NftDetailsProps { }

const NftDetails: React.FC<NftDetailsProps> = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    const breakpoints = {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1600: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    }
    return (
        <Fragment>
            <Seo title="NFT Details" />
            <Pageheader title='Apps' subtitle='NFT' currentpage='NFT Details' activepage='NFT Details' />
            {/* <!-- Start::row-1 --> */}
            <Card className="custom-card overflow-hidden">
                <Card.Body>
                    <Row className="gy-3">
                        <Col xxl={4} xl={12}>
                            <SpkSwiperJs slides={Swiperdata} spaceBetween={30} navigation={true} centeredSlides={true} autoplay={true} thumb={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                className="swiper swiper-preview-details bg-light product-details-page" />
                            <SpkSwiperJs slides={Swiperdata} className="swiper swiper-view-details mt-2" onswiper={setThumbsSwiper} autoplay={true} spaceBetween={10} slidesPerView={4} freemode={true} watchslide={true}
                                mainClass="" />
                        </Col>
                        <Col xxl={8} xl={12}>
                            <Card className="custom-card shadow-none border mb-0">
                                <Card.Body>
                                    <Row>
                                        <Col xl={12} className="mt-xxl-0 mt-3">
                                            <div className="d-flex gap-2 align-items-center justify-content-between mb-3">
                                                <div>
                                                    <p className="fs-18 fw-medium mb-0">Vibrant Symphony - NFT Digital Art</p>
                                                    <span className="mb-0 fw-medium fs-15">Digital Art NFT
                                                        <SpkTooltips placement="top" title="Verified">
                                                            <i className="ri-checkbox-circle-fill text-primary"></i>
                                                        </SpkTooltips>
                                                    </span>
                                                </div>
                                                <p className="fs-18 text-end ms-auto mb-0">
                                                    <i className="ri-heart-3-fill text-danger align-middle me-2"></i>
                                                    <span className="fw-medium text-muted"><Link scroll={false} className="text-info fs-14" href="#!">(2.4k Likes)</Link></span>
                                                </p>
                                            </div>
                                            <div className="mb-3">
                                                <p className="fs-15 fw-medium mb-1">Description :</p>
                                                <p className="text-muted mb-0">
                                                    "Vibrant Symphony" is a mesmerizing NFT artwork created by a renowned digital artist. This unique piece takes viewers on a journey through a vivid and ethereal world, where vibrant colors blend seamlessly with abstract forms. The artwork is a digital representation of the artist's imagination, combining elements of surrealism and futuristic aesthetics.
                                                </p>
                                            </div>
                                            <Row className="justify-content-center">
                                                <Col xxl={12}>
                                                    <div className="ecommerce-assurance">
                                                        <div className="d-flex justify-content-between gap-2 align-items-center flex-wrap">
                                                            <div>
                                                                <p className="fs-14 fw-medium mb-2">Highest Bid :</p>
                                                                <div className="avatar avatar-sm avatar-rounded p-1 bg-primary-transparent me-2 border border-primary border-opacity-10">
                                                                    <Image fill src="../../../assets/images/crypto-currencies/regular/Ethereum.svg" alt="" />
                                                                </div>
                                                                <h4 className="mb-2 d-inline-block text-success">  2.9ETH</h4>
                                                                <p className="text-muted mb-0 fs-12"> Highest Bid By <span className="text-primary fw-medium">@abstract65</span></p>
                                                            </div>
                                                            <div>
                                                                <p className="fs-14 fw-medium mb-2">Blockchain :</p>
                                                                <div className="d-flex gap-1 align-items-center">
                                                                    <div className="avatar avatar-sm avatar-rounded p-1 bg-primary-transparent me-2 border border-primary border-opacity-10">
                                                                        <Image fill src="../../../assets/images/crypto-currencies/regular/Ethereum.svg" alt="" />
                                                                    </div>
                                                                    <h6 className="mb-0">  Ethereum</h6>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <p className="fs-14 fw-medium mb-2">Sales Ends in :</p>
                                                                <p className="nft-details-auction-time bg-light px-3 py-1 text-default rounded-pill mb-0"><i className="ri-time-line"></i> 07hrs : 33m : 45s</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row className="mt-4">
                                                <Col xxl={3} xl={6} lg={6} md={6} sm={12} className="mt-xxl-0 mt-3">
                                                    <p className="mb-2 fs-15 fw-medium">Collection:</p>
                                                    <div className="d-flex align-items-center fw-medium">
                                                        <span className="avatar avatar-sm avatar-rounded lh-1 me-1"><Image width={28} height={28} src="../../../assets/images/nft-images/2.jpg" alt="" /></span>
                                                        Digital Art NFT
                                                    </div>
                                                </Col>
                                                <Col xxl={2} xl={6} lg={6} md={6} sm={12} className="mt-xxl-0 mt-3">
                                                    <p className="mb-2 fs-15 fw-medium">Owned By:</p>
                                                    <div className="d-flex align-items-center fw-medium">
                                                        <span className="avatar avatar-sm avatar-rounded lh-1 me-1 custom-width"><Image fill src="../../../assets/images/faces/9.jpg" alt="" /></span>
                                                        Henry Milo
                                                    </div>
                                                </Col>
                                                <Col xxl={3} xl={6} lg={6} md={6} sm={12} className="mt-xxl-0 mt-3">
                                                    <p className="mb-2 fs-15 fw-medium">Published :</p>
                                                    <span className="d-block fw-medium">24, Jul 2024 - 12:45PM</span>
                                                </Col>
                                                <Col xxl={4} xl={12}>
                                                    <p className="mb-2 fs-15 fw-medium">Price:
                                                        <span className="ms-3 badge bg-success-transparent">30% Off</span>
                                                    </p>
                                                    <p className="mb-0">
                                                        <span className="h3">
                                                            <span className="avatar avatar-sm avatar-rounded p-1 bg-primary-transparent me-2 border border-primary border-opacity-10">
                                                                <Image fill src="../../../assets/images/crypto-currencies/regular/Ethereum.svg" alt="" />
                                                            </span>2.299<sup className="fs-14">.00</sup></span>  <span className="mb-0 text-muted fs-12"><s>ETH2,599.00</s>
                                                        </span>
                                                    </p>
                                                </Col>
                                            </Row>
                                            <Row className="mt-4 align-items-end justify-content-between">
                                                <Col xl={6}>
                                                    <div className="d-flex gap-1 mb-2 mb-xl-0">
                                                        <button className="btn btn-primary mb-0 btn-wave flex-fill me-1">Place a bid</button>
                                                        <button className="btn btn-secondary-light mb-0 btn-wave flex-fill">Buy Now</button>
                                                    </div>
                                                </Col>
                                                <Col xl={3}>
                                                    <div className="d-flex gap-2 justify-content-end">
                                                        <p className="fs-12 bg-primary-transparent badge rounded-pill text-end mb-0">
                                                            <i className="ri-eye-line text-primary me-2 align-middle"></i>
                                                            <span className="fw-medium"><Link scroll={false} href="#!"></Link>3.5k Views</span>
                                                        </p>
                                                        <p className="fs-12 bg-primary-transparent badge rounded-pill text-end mb-0">
                                                            <i className="ri-share-line text-primary me-2 align-middle"></i>
                                                            <span className="fw-medium"><Link scroll={false} href="#!"></Link>Share</span>
                                                        </p>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            {/* <!--End::row-1 --> */}

            {/* <!--Start::row-2 --> */}
            <Row>
                <Col xxl={4} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>Product Details :</Card.Title>
                            <Link scroll={false} href="#!" className="btn btn-light btn-sm text-muted ms-auto">
                                View More
                            </Link>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <SpkTables tableClass="table table-bordered text-nowrap" headerClass="d-none">
                                    <tr>
                                        <th scope="row" className="fw-medium">
                                            Artist Name
                                        </th>
                                        <td>Henry Milo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="fw-medium">
                                            Royalty
                                        </th>
                                        <td>
                                            10% royalty paid to the artist on secondary sales
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="fw-medium">
                                            Total Bids
                                        </th>
                                        <td>
                                            32
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="fw-medium">
                                            Current Owner
                                        </th>
                                        <td>
                                            Nikki Jones
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="fw-medium">
                                            NFT Type
                                        </th>
                                        <td>
                                            Digital art work
                                        </td>
                                    </tr>
                                </SpkTables>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4} xl={6}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Key Features :
                            </Card.Title>
                            <Link scroll={false} href="#!" className="btn btn-light btn-sm text-muted ms-auto">
                                View More
                            </Link>
                        </Card.Header>
                        <Card.Body>
                            <ul className="mb-0 list-unstyled">
                                <li className="mb-3">
                                    <span className="fw-medium">NFT Title:</span> "Vibrant Symphony"
                                </li>
                                <li className="mb-3">
                                    <span className="fw-medium">Edition:</span> Limited edition of 25
                                </li>
                                <li className="mb-3">
                                    <span className="fw-medium">Tags:</span> #digitalart, #sunset, #mystical, #dreamscape
                                </li>
                                <li className="mb-3">
                                    <span className="fw-medium">Creation Date:</span> July 1, 2024
                                </li>
                                <li className="mb-3">
                                    <span className="fw-medium">Average Rating:</span> 4.8/5
                                </li>
                                <li className="mb-3">
                                    <span className="fw-medium">Dimensions:</span> 3000x2000 pixels
                                </li>
                                <li className="mb-1">
                                    <span className="fw-medium">Exhibition History:</span> Digital Art Expo 2024 - Gallery XYZ, New York City
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4} xl={6}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Reviews &amp; Ratings
                            </Card.Title>
                            <Link scroll={false} href="#!" className="btn btn-light btn-sm text-muted ms-auto">
                                View All
                            </Link>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col xxl={12} xl={12} lg={12} md={12} sm={12}>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="me-2 lh-1">
                                            <i className="ri-star-fill fs-26 text-warning"></i>
                                        </div>
                                        <div className="lh-1">
                                            <p className="mb-0 fw-medium">4.5 out of 5<span className="mb-0 text-muted fs-11 fw-normal"> Based on (2.1k) ratings</span></p>
                                        </div>
                                    </div>
                                    <SpkSwiperJs slides={NftSwiperCardData} className='swiper crypto-swiper swiper-basic' autoplay={true} loop={true} spaceBetween={30} />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-2 --> */}

            {/* <!--Start::row-3 --> */}
            <Row>
                <Col xxl={3} sm={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Popular NFT's :
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="">
                            <div className="table-responsive">
                                <SpkTables tableClass="table table-bordered text-nowrap">
                                    {PopularNftdata.map((idx) => (
                                        <tr key={idx.id}>
                                            <td>
                                                <Link scroll={false} href="#!">
                                                    <div className="d-flex align-items-top">
                                                        <div className="avatar me-2 ">
                                                            <Image width={42} height={42} src={idx.image} alt="" />
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="mb-1 fs-14 fw-medium similar-product-name text-truncate">{idx.name}</p>
                                                            <p className="mb-0">
                                                                <span className="badge bg-success">{idx.likes}<i className="ri-heart-3-fill align-middle ms-1"></i></span>
                                                                <span className="text-muted ms-1">({idx.totalLikes})</span>
                                                            </p>
                                                        </div>
                                                        <div className="text-center">
                                                            <p className="mb-0 fs-16 fw-medium">
                                                                <span className="avatar avatar-xs avatar-rounded p-1"><Image fill src="../../../assets/images/crypto-currencies/regular/Ethereum.svg" alt="" /></span>{idx.price}
                                                            </p>
                                                            <p className="mb-0 text-muted">
                                                                <s><span className="avatar avatar-xs avatar-rounded p-1"><Image fill src="../../../assets/images/crypto-currencies/regular/Ethereum.svg" alt="" /></span>{idx.oldPrice}</s>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                    <tr><td className="d-grid"> <SpkButton Buttonvariant="secondary-light">View All NFT's</SpkButton> </td></tr>
                                </SpkTables>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={9}>
                    <div className="d-flex gap-1 align-items-center justify-content-between mb-3">
                        <h6 className="fw-medium mb-0">Explore More NFT's:</h6>
                        <Link scroll={false} href="#!" className="btn btn-primary-light btn-sm ms-auto">
                            View More
                        </Link>
                    </div>
                    <Row>
                        {NFTItemdata.slice(0, 4).map((idx) => (
                            <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12" key={idx.id}>
                                <SpkMarketplaceCard card={idx} AvatarSize="xs"/>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
            {/* <!--End::row-3 --> */}
        </Fragment>
    );
};

export default NftDetails;