"use client"
import SpkMarketplaceCard from "@/shared/@spk-reusable-components/reusable-apps/spk-marketplace";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import { NFTItemdata } from "@/shared/data/apps/nft/market-place-data";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Col, Dropdown, Nav, Row, Tab } from "react-bootstrap";

interface MarketPlaceProps { }

const MarketPlace: React.FC<MarketPlaceProps> = () => {
    return (
        <Fragment>
            <Seo title="Market Place" />
            <Pageheader title='Apps' subtitle='NFT' currentpage='Market Place' activepage='Market Place' />

            {/* <!-- Start::row-1 --> */}
            <Tab.Container defaultActiveKey='all'>
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                    <div>
                                        <Nav as='ul' className="nav nav-tabs nav-tabs-header mb-0" role="tablist">
                                            <Nav.Item as='li' role="presentation">
                                                <Nav.Link as='a' eventKey='all' className="nav-link" data-bs-toggle="tab" role="tab" aria-current="page" href="#nft-all" aria-selected="true">All</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as='li' role="presentation">
                                                <Nav.Link as='a' eventKey='art' className="nav-link" data-bs-toggle="tab" role="tab" aria-current="page" href="#nft-art" aria-selected="false" tabIndex={-1}>Art</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as='li' role="presentation">
                                                <Nav.Link as='a' eventKey='gaming' className="nav-link" data-bs-toggle="tab" role="tab" aria-current="page" href="#nft-gaming" aria-selected="false" tabIndex={-1}>Gaming</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as='li' role="presentation">
                                                <Nav.Link as='a' eventKey='domain' className="nav-link" data-bs-toggle="tab" role="tab" aria-current="page" href="#nft-domain" aria-selected="false" tabIndex={-1}>Domain</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as='li' role="presentation">
                                                <Nav.Link as='a' eventKey='music' className="nav-link" data-bs-toggle="tab" role="tab" aria-current="page" href="#nft-music" aria-selected="false" tabIndex={-1}>Music</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as='li' role="presentation">
                                                <Nav.Link as='a' eventKey='realestate' className="nav-link" data-bs-toggle="tab" role="tab" aria-current="page" href="#nft-realestate" aria-selected="false" tabIndex={-1}>Real Estate</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as='li' role="presentation">
                                                <Nav.Link as='a' eventKey='sports' className="nav-link" data-bs-toggle="tab" role="tab" aria-current="page" href="#nft-sports" aria-selected="false" tabIndex={-1}>Sports</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as='li' role="presentation">
                                                <Nav.Link as='a' eventKey='fashion' className="nav-link" data-bs-toggle="tab" role="tab" aria-current="page" href="#nft-fashion" aria-selected="false" tabIndex={-1}>Fashion</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as='li' role="presentation">
                                                <Nav.Link as='a' eventKey='avatars' className="nav-link" data-bs-toggle="tab" role="tab" aria-current="page" href="#nft-avatars" aria-selected="false" tabIndex={-1}>Avatars</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item as='li' role="presentation">
                                                <Nav.Link as='a' eventKey='memes' className="nav-link" data-bs-toggle="tab" role="tab" aria-current="page" href="#nft-memes" aria-selected="false" tabIndex={-1}>Memes</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                    <div className="d-flex gap-2">
                                        <SpkButton Buttontype="button" Buttonvariant="secondary" Customclass="btn btn-sm btn-wave">Filters</SpkButton>
                                        <SpkDropdown Customclass="nav-item" toggleas="a" Customtoggleclass="btn btn-sm btn-wave btn-primary waves-effect waves-light no-caret" Toggletext="Sort By" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block" Navigate="#!">
                                            <Link scroll={false} className="dropdown-item" href="#!">New Collection</Link>
                                            <Link scroll={false} className="dropdown-item" href="#!">High - Low</Link>
                                            <Link scroll={false} className="dropdown-item" href="#!">Low - High</Link>
                                        </SpkDropdown>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* <!--End::row-1 --> */}

                {/* <!-- Start:: row-2 --> */}
                <Row>
                    <Col xl={12}>
                        <Tab.Content>
                            <Tab.Pane eventKey='all' className="tab-pane p-0 border-0" id="nft-all" role="tabpanel">
                                <Row>
                                    {NFTItemdata.map((idx) => (
                                        <Col xxl={3} xl={6} lg={6} md={6} className="col-12" key={idx.id}>
                                            <SpkMarketplaceCard card={idx} AvatarSize="md"/>
                                        </Col>
                                    ))}
                                    <nav aria-label="Page navigation">
                                        <ul className="pagination justify-content-end mb-4">
                                            <li className="page-item disabled">
                                                <a className="page-link">Previous</a>
                                            </li>
                                            <li className="page-item"><a className="page-link" href="#!">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#!">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#!">3</a></li>
                                            <li className="page-item">
                                                <a className="page-link" href="#!">Next</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey='art' className="tab-pane p-0 border-0" id="nft-art" role="tabpanel">
                                <Row>
                                    {NFTItemdata.filter(item => (item.tab === 'art')).map((idx) => (
                                        <Col xxl={3} xl={6} lg={6} md={6} className="col-12" key={idx.id}>
                                            <SpkMarketplaceCard card={idx} AvatarSize="md"/>
                                        </Col>
                                    ))}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey='gaming' className="tab-pane p-0 border-0" id="nft-gaming" role="tabpanel">
                                <Row>
                                    {NFTItemdata.filter(item => (item.tab1 === 'gameing')).map((idx) => (
                                        <Col xxl={3} xl={6} lg={6} md={6} className="col-12" key={idx.id}>
                                            <SpkMarketplaceCard card={idx} AvatarSize="md"/>
                                        </Col>
                                    ))}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey='domain' className="tab-pane p-0 border-0" id="nft-domain" role="tabpanel">
                                <Row>
                                    {NFTItemdata.filter(item => (item.tab === 'domain')).map((idx) => (
                                        <Col xxl={3} xl={6} lg={6} md={6} className="col-12" key={idx.id}>
                                            <SpkMarketplaceCard card={idx} AvatarSize="md"/>
                                        </Col>
                                    ))}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey='music' className="tab-pane p-0 border-0" id="nft-music" role="tabpanel">
                                <Row>
                                    {NFTItemdata.filter(item => (item.tab === 'music')).map((idx) => (
                                        <Col xxl={3} xl={6} lg={6} md={6} className="col-12" key={idx.id}>
                                            <SpkMarketplaceCard card={idx} AvatarSize="md"/>
                                        </Col>
                                    ))}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey='realestate' className="tab-pane p-0 border-0" id="nft-realestate" role="tabpanel">
                                <Row>
                                    {NFTItemdata.filter(item => (item.tab === 'realestate')).map((idx) => (
                                        <Col xxl={3} xl={6} lg={6} md={6} className="col-12" key={idx.id}>
                                            <SpkMarketplaceCard card={idx} AvatarSize="md"/>
                                        </Col>
                                    ))}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey='sports' className="tab-pane p-0 border-0" id="nft-sports" role="tabpanel">
                                <Row>
                                    {NFTItemdata.filter(item => (item.tab1 === 'sports')).map((idx) => (
                                        <Col xxl={3} xl={6} lg={6} md={6} className="col-12" key={idx.id}>
                                            <SpkMarketplaceCard card={idx} AvatarSize="md"/>
                                        </Col>
                                    ))}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey='fashion' className="tab-pane p-0 border-0" id="nft-fashion" role="tabpanel">
                                <Row>
                                    {NFTItemdata.filter(item => (item.tab2 === 'fashion')).map((idx) => (
                                        <Col xxl={3} xl={6} lg={6} md={6} className="col-12" key={idx.id}>
                                            <SpkMarketplaceCard card={idx} AvatarSize="md"/>
                                        </Col>
                                    ))}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey='avatars' className="tab-pane p-0 border-0" id="nft-avatars" role="tabpanel">
                                <Row>
                                    {NFTItemdata.filter(item => (item.tab === 'music')).map((idx) => (
                                        <Col xxl={3} xl={6} lg={6} md={6} className="col-12" key={idx.id}>
                                            <SpkMarketplaceCard card={idx} AvatarSize="md"/>
                                        </Col>
                                    ))}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey='memes' className="tab-pane p-0 border-0" id="nft-memes" role="tabpanel">
                                <Row>
                                    {NFTItemdata.filter(item => (item.tab2 === 'fashion')).map((idx) => (
                                        <Col xxl={3} xl={6} lg={6} md={6} className="col-12" key={idx.id}>
                                            <SpkMarketplaceCard card={idx} AvatarSize="md"/>
                                        </Col>
                                    ))}
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
            {/* <!-- End:: row-2 --> */}
        </Fragment>
    );
};

export default MarketPlace;