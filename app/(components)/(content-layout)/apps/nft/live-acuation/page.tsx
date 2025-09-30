"use client"
import SpkMarketplaceCard from "@/shared/@spk-reusable-components/reusable-apps/spk-marketplace";
import SpkBadge from "@/shared/@spk-reusable-components/reusable-uiElements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import { NFTItemdata } from "@/shared/data/apps/nft/market-place-data";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";

interface LiveAuctionProps { }

const LiveAuction: React.FC<LiveAuctionProps> = () => {
    const Tags = [
        { id: 1, text: 'All Items', icon: 'earth-line', colorClass: 'nft-tag-primary', isActive: true },
        { id: 2, text: 'New Trends', icon: 'fire-line', colorClass: 'nft-tag-success', isActive: false },
        { id: 3, text: 'Virtual', icon: 'robot-2-line', colorClass: 'nft-tag-info', isActive: false },
        { id: 4, text: 'Photography', icon: 'camera-line', colorClass: 'nft-tag-secondary', isActive: false },
        { id: 5, text: 'Art Work', icon: 'palette-line', colorClass: 'nft-tag-warning', isActive: false },
        { id: 6, text: 'Others', icon: 'gift-line', colorClass: 'nft-tag-danger', isActive: false },
    ];
    return (
        <Fragment>
            <Seo title="Live Auction" />
            <Pageheader title='Apps' subtitle='NFT' currentpage='Live Auction' activepage='Live Auction' />
            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xxl={3} xl={4}>
                    <Card className="custom-card products-navigation-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Filter
                            </Card.Title>
                            <SpkButton Buttonvariant="primary-light" Customclass="btn btn-sm btn-wave waves-effect waves-light">Clear All</SpkButton>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="p-3 border border-dashed rounded m-2">
                                <div className="fw-medium mb-0">Creator Verification</div>
                                <div className="px-0 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <Form.Check.Input className=" me-2" type="checkbox" value="" id="Verified-Creator" defaultChecked />
                                        <Form.Check.Label htmlFor="Verified-Creator">
                                            Verified
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">13</SpkBadge>
                                    </div>
                                    <div className="form-check mb-0">
                                        <Form.Check.Input className=" me-2" type="checkbox" value="" id="Non-Verified-Creator" />
                                        <Form.Check.Label className=" w-50" htmlFor="Non-Verified-Creator">
                                            Non-Verified
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">67</SpkBadge>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border border-dashed rounded m-2">
                                <div className="fw-medium mb-0">NFT Type</div>
                                <div className="px-0 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <Form.Check.Input className=" me-2" type="checkbox" value="" id="NFT-Art" defaultChecked />
                                        <Form.Check.Label htmlFor="NFT-Art">
                                            Art
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">45</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check.Input className=" me-2" type="checkbox" value="" id="NFT-Graphic" />
                                        <Form.Check.Label htmlFor="NFT-Graphic">
                                            Graphic
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">30</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check.Input className=" me-2" type="checkbox" value="" id="NFT-Music" />
                                        <Form.Check.Label htmlFor="NFT-Music">
                                            Music
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">15</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check.Input className=" me-2" type="checkbox" value="" id="NFT-Fashion" />
                                        <Form.Check.Label htmlFor="NFT-Fashion">
                                            Fashion
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">19</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check.Input className=" me-2" type="checkbox" value="" id="NFT-Trending" />
                                        <Form.Check.Label htmlFor="NFT-Trending">
                                            Trending
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">19</SpkBadge>
                                    </div>
                                    <div className="form-check mb-0">
                                        <Form.Check.Input className=" me-2" type="checkbox" value="" id="NFT-Games" />
                                        <Form.Check.Label htmlFor="NFT-Games">
                                            Games
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">45</SpkBadge>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border border-dashed rounded m-2">
                                <div className="fw-medium mb-0">Price Range</div>
                                <div className="px-0 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <Form.Check.Input className=" me-2" type="checkbox" value="" id="Price-Under-1ETH" defaultChecked />
                                        <Form.Check.Label htmlFor="Price-Under-1ETH">
                                            Under 1 ETH
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">55</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check.Input className=" me-2" type="checkbox" value="" id="Price-1-3ETH" />
                                        <Form.Check.Label htmlFor="Price-1-3ETH">
                                            1 - 3 ETH
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">34</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check.Input className=" me-2" type="checkbox" value="" id="Price-3-5ETH" />
                                        <Form.Check.Label htmlFor="Price-3-5ETH">
                                            3 - 5 ETH
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">34</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check.Input className=" me-2" type="checkbox" value="" id="Price-5-7ETH" />
                                        <Form.Check.Label htmlFor="Price-5-7ETH">
                                            5 - 7 ETH
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">12</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check.Input className=" me-2" type="checkbox" value="" id="Price-7-8ETH" />
                                        <Form.Check.Label htmlFor="Price-7-8ETH">
                                            7 - 8 ETH
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">12</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check.Input className=" me-2" type="checkbox" value="" id="Price-10-15ETH" />
                                        <Form.Check.Label htmlFor="Price-10-15ETH">
                                            10 - 15 ETH
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">12</SpkBadge>
                                    </div>
                                    <div className="form-check mb-0">
                                        <Form.Check.Input className=" me-2" type="checkbox" value="" id="Price-Above-15ETH" />
                                        <Form.Check.Label htmlFor="Price-Above-15ETH">
                                            Above 15 ETH
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">7</SpkBadge>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border border-dashed rounded m-2">
                                <div className="fw-medium mb-0">Token Standard</div>
                                <div className="px-0 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <Form.Check.Input className=" me-2" type="checkbox" value="" id="ERC-721" />
                                        <Form.Check.Label htmlFor="ERC-721">
                                            ERC-721
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">50</SpkBadge>
                                    </div>
                                    <div className="form-check mb-0">
                                        <Form.Check.Input className=" me-2" type="checkbox" value="" id="ERC-1155" />
                                        <Form.Check.Label htmlFor="ERC-1155">
                                            ERC-1155
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">25</SpkBadge>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border border-dashed rounded m-2">
                                <div className="fw-medium mb-0">Auction Status</div>
                                <div className="px-0 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <Form.Check.Input className=" me-2" type="checkbox" value="" id="Status-Active" defaultChecked />
                                        <Form.Check.Label htmlFor="Status-Active">
                                            Active
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">89</SpkBadge>
                                    </div>
                                    <div className="form-check mb-2">
                                        <Form.Check.Input className=" me-2" type="checkbox" value="" id="Status-OnHold" />
                                        <Form.Check.Label htmlFor="Status-OnHold">
                                            On Hold
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">05</SpkBadge>
                                    </div>
                                    <div className="form-check mb-0">
                                        <Form.Check.Input className=" me-2" type="checkbox" value="" id="Status-Ended" />
                                        <Form.Check.Label htmlFor="Status-Ended">
                                            Ended
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">25</SpkBadge>
                                    </div>
                                </div>
                            </div>
                            <div className="p-3 border border-dashed rounded m-2">
                                <div className="fw-medium mb-0">Ownership Status</div>
                                <div className="px-0 py-3 pb-1">
                                    <div className="form-check mb-2">
                                        <Form.Check.Input className=" me-2" type="checkbox" value="" id="Owned" />
                                        <Form.Check.Label htmlFor="Owned">
                                            Owned
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">40</SpkBadge>
                                    </div>
                                    <div className="form-check mb-1">
                                        <Form.Check.Input className=" me-2" type="checkbox" value="" id="Not-Owned" />
                                        <Form.Check.Label htmlFor="Not-Owned">
                                            Not Owned
                                        </Form.Check.Label>
                                        <SpkBadge variant="light" Customclass="text-default float-end">60</SpkBadge>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={9} xl={8}>
                    <Card className="custom-card">
                        <Card.Body>
                            <div className="d-flex align-Items-center justify-content-between mb-3">
                                <h6 className="fw-medium mb-0">Categories</h6>
                                <div className="d-flex gap-2 align-items-center">
                                    <Link scroll={false} href='#!' className="categories-arrow left bg-primary-transparent">
                                        <i className="ri-arrow-left-s-line text-primary"></i>
                                    </Link>
                                    <Link href='#!' scroll={false} className="categories-arrow right bg-primary text-fixed-white">
                                        <i className="ri-arrow-right-s-line text-fixed-white"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4">
                                {Tags.map((idx) => (
                                    <div className={`nft-tag ${idx.colorClass} ${idx.isActive ? 'active' : '' } `} key={idx.id}>
                                        <Link scroll={false} href="#!" className="stretched-link"></Link>
                                        <span className="nft-tag-icon"><i className={`ri-${idx.icon} fs-18 align-middle`}></i></span>
                                        <span className="nft-tag-text">{idx.text}</span>
                                    </div>
                                ))}
                            </div>
                            <Row>
                                <h6 className="fw-medium mb-3">Live Auction :</h6>
                                {NFTItemdata.slice(0, 6).map((idx) => (
                                    <Col xxl={4} xl={6} lg={6} md={6} sm={6} className="col-12" key={idx.id}>
                                        <SpkMarketplaceCard card={idx} CustomCardClass='border' AvatarSize="sm" />
                                    </Col>
                                ))}
                                <nav aria-label="Page navigation" className="pagination-style-4">
                                    <ul className="pagination text-center justify-content-end mb-0 flex-wrap">
                                        <li className="page-item disabled">
                                            <Link scroll={false} className="page-link" href="#!">
                                                Prev
                                            </Link>
                                        </li>
                                        <li className="page-item active"><Link scroll={false} className="page-link" href="#!">1</Link></li>
                                        <li className="page-item"><Link scroll={false} className="page-link" href="#!">2</Link></li>
                                        <li className="page-item">
                                            <Link scroll={false} className="page-link" href="#!">
                                                <i className="bi bi-three-dots"></i>
                                            </Link>
                                        </li>
                                        <li className="page-item"><Link scroll={false} className="page-link" href="#!">16</Link></li>
                                        <li className="page-item"><Link scroll={false} className="page-link" href="#!">17</Link></li>
                                        <li className="page-item">
                                            <Link scroll={false} className="page-link text-primary" href="#!">
                                                next
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}

        </Fragment>
    );
};

export default LiveAuction;