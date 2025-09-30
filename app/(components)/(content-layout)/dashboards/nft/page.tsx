"use client"
import SpkNft from "@/shared/@spk-reusable-components/reusable-dashboard/spk-nft";
import SpkNftCard from "@/shared/@spk-reusable-components/reusable-dashboard/spk-nftcard";
import Spkapexcharts from "@/shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/reusable-uiElements/spk-badge";
import SpkButtongroup from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttongroup";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import SpkTooltips from "@/shared/@spk-reusable-components/reusable-uiElements/spk-tooltips";
import { BalanceOPtions, BalanceSeries, Collections, HotBids, LiveAuction, LiveAuctionType, NFTcardData, NFTsStatisticsOptions, NFTsStatisticsSeries, RecentActivities, TopSellers, TrendingCreators } from "@/shared/data/dashboards/nftdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Card, Col, Dropdown, Form, ListGroup, Row } from "react-bootstrap";

interface NftProps { }

const Nft: React.FC<NftProps> = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const Liveauction: LiveAuctionType[] = LiveAuction.filter(nft =>
        nft.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <Fragment>
            <Seo title="Dashboards NFT" />
            <Pageheader title='Dashboards' currentpage='NFT' activepage='NFT' />
            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xxl={5}>
                    <Card className="custom-card nft-banner-card overflow-hidden">
                        <Card.Body className=" p-4">
                            <Row className="align-items-center mx-0">
                                <Col xl={7}>
                                    <h4 className="fw-semibold text-fixed-white lh-base mb-1">
                                        Discover,Explore Collect and Sell your NFTS
                                    </h4>
                                    <p className="text-fixed-white op-8 mb-4 fs-14">Create, Trade, Showcase, Thrive!</p>
                                    <div className="btn-list">
                                        <SpkButton Buttonvariant="light" Customclass="btn btn-wave me-2">Explore Now</SpkButton>
                                        <SpkButton Buttonvariant="info" Customclass="btn btn-wave">Learn More</SpkButton>
                                    </div>
                                </Col>
                                <Col xl={5} className="text-end">
                                    <Image width={155} height={122} src="../../assets/images/nft-images/1.jpg" className="img-fluid nft-main-banner-image shadow p-3" alt="" />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4}>
                    <Row>
                        {NFTcardData.map((idx) => (
                            <Col xxl={6} xl={6} lg={6} md={6} sm={6} className="col-12" key={idx.id}>
                                <SpkNft card={idx} />
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Body className=" p-0">
                            <div className="d-flex flex-wrap align-items-start gap-3 flex-xl-nowrap p-3 pb-0">
                                <div>
                                    <span className="avatar avatar-lg bg-warning svg-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.37-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z"></path><circle cx="16" cy="12" r="1.5"></circle>
                                        </svg>
                                    </span>
                                </div>
                                <div>
                                    <p className="mb-0 ">Your Balance</p>
                                    <h5 className="mb-0">$28,546.96 </h5>
                                    <span className="text-muted fs-12 fw-normal ms-1"> Increased By <span className="text-success align-center fs-11 ms-1 fw-medium d-inline-block">0.14% <i className="ti ti-arrow-narrow-up fs-14"></i></span></span>
                                </div>
                            </div>
                            <div id="balance">
                                <Spkapexcharts chartOptions={BalanceOPtions} chartSeries={BalanceSeries} type='area' width={'100%'} height={120} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start::row-2 --> */}
            <Row>
                <Col xxl={6}>
                    <div className="mb-4 d-flex align-items-center justify-content-between">
                        <h6 className="mb-0">&#128293; Hot Bids :</h6>
                        <div>
                            <SpkButton Buttonvariant="primary-light" Buttontype="button" Customclass="btn-sm ">View All</SpkButton>
                        </div>
                    </div>
                    <Row>
                        {HotBids.map((idx) => (
                            <Col xxl={4} xl={4} key={idx.id}>
                                <SpkNftCard customCardClass="overflow-hidden" cardBodyClass="nft-body" card={idx} />
                            </Col>
                        ))}
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header className=" justify-content-between flex-wrap">
                                    <Card.Title>
                                        NFTs Statistics
                                    </Card.Title>
                                    <SpkButtongroup Buttongrplabel="Basic example">
                                        <SpkButton Buttontype="button" Buttonvariant="primary" Customclass="btn btn-sm btn-wave">1D</SpkButton>
                                        <SpkButton Buttontype="button" Buttonvariant="primary-light" Customclass="btn btn-sm btn-wave">1W</SpkButton>
                                        <SpkButton Buttontype="button" Buttonvariant="primary-light" Customclass="btn btn-sm btn-wave">1M</SpkButton>
                                        <SpkButton Buttontype="button" Buttonvariant="primary-light" Customclass="btn btn-sm btn-wave">3M</SpkButton>
                                        <SpkButton Buttontype="button" Buttonvariant="primary-light" Customclass="btn btn-sm btn-wave">6M</SpkButton>
                                        <SpkButton Buttontype="button" Buttonvariant="primary-light" Customclass="btn btn-sm btn-wave">1Y</SpkButton>
                                    </SpkButtongroup>
                                </Card.Header>
                                <Card.Body className=" p-0">
                                    <div className="d-flex flex-wrap p-3 border-bottom border-block-end-dashed flex-wrap gap-3">
                                        <div className="me-3">
                                            <span className="avatar avatar-md avatar-rounded p-2 bg-light">
                                                <Image fill src="../../assets/images/crypto-currencies/regular/Ethereum.svg" alt="" />
                                            </span>
                                        </div>
                                        <div className="d-flex flex-wrap justify-content-evenly flex-fill flex-wrap gap-3">
                                            <div className="m-sm-0 m-2">
                                                <span>Symbol</span>
                                                <p className="mb-0">ETH</p>
                                            </div>
                                            <div className="m-sm-0 m-2">
                                                <span>Price Benchmark</span>
                                                <p className="mb-0">-0.39%</p>
                                            </div>
                                            <div className="m-sm-0 m-2">
                                                <span>Price (USD)</span>
                                                <p className="text-success mb-0">$1,212.67</p>
                                            </div>
                                            <div className="m-sm-0 m-2">
                                                <span>Change (24H)</span>
                                                <p className="text-danger mb-0">-0.14%</p>
                                            </div>
                                            <div className="m-sm-0 m-2">
                                                <span>Market Cap</span>
                                                <p className="mb-0">$148.20B</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="nft-statistics" className="p-3">
                                        <Spkapexcharts chartOptions={NFTsStatisticsOptions} chartSeries={NFTsStatisticsSeries} type='bar' width={'100%'} height={290} />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Featured Collections
                            </Card.Title>
                            <SpkDropdown toggleas='a' Customtoggleclass="btn-light btn btn-sm text-muted no-caret" Toggletext="View All" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1">
                                <li className="border-bottom"><Dropdown.Item href="#!">Today</Dropdown.Item></li>
                                <li className="border-bottom"><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Last Week</Dropdown.Item></li>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <ListGroup as='ul' className="list-group list-group-flush mb-0">
                                {Collections.map((idx) => (
                                    <ListGroup.Item as='li' className="list-group-item d-flex gap-1 flex-wrap" key={idx.id}>
                                        <Link scroll={false} href="#!">
                                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <Image alt="" width={40} height={40} src={idx.image} />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="fw-medium mb-0">{idx.name}</p>
                                                        <span className="text-muted fs-12">{idx.handle}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="ms-auto my-auto">
                                            <div className="d-flex align-items-center">
                                                <div className="me-2 lh-1">
                                                    <div className="avatar-list-stacked">
                                                        {idx.src.map((img, index) => (
                                                            <span className="avatar avatar-sm avatar-rounded" key={index}>
                                                                <Image width={30} height={30} src={img} alt="" className="rounded-circle" />
                                                            </span>
                                                        ))}
                                                        {idx.count ? (
                                                            <span className={`avatar avatar-sm ${idx.count ? `bg-${idx.countColor}` : ''} avatar-rounded`}>
                                                                {idx.count}
                                                            </span>
                                                        ) : ''}

                                                    </div>
                                                </div>
                                                <Link scroll={false} href="#!" className="btn btn-primary-light btn-sm">Buy Now</Link>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Trending Creators
                            </Card.Title>
                            <SpkDropdown toggleas='a' Customtoggleclass="fs-12 text-muted no-caret" Toggletext="View All" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                <li><Dropdown.Item href="#!">Download</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Import</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Export</Dropdown.Item></li>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body className=" p-0" id="top-collector">
                            <div className="table-responsive">
                                <SpkTables tableClass="table table-hover text-nowrap">
                                    {TrendingCreators.map((idx) => (
                                        <tr key={idx.id}>
                                            <td className={idx.tdClass}>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-sm avatar-rounded bg-light custom-width">
                                                            <Image fill src={idx.image} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="fw-medium">{idx.name}</div>
                                                </div>
                                            </td>
                                            <td className={idx.tdClass}>
                                                <div id={idx.trendingId}>
                                                    <Spkapexcharts chartOptions={idx.chartOptions} chartSeries={idx.chartSeries} type='line' width={80} height={20} />
                                                </div>
                                            </td>
                                            <td className={`text-end ${idx.tdClass}`}>
                                                <p className="mb-0">{idx.amount}</p>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Top Sellers
                            </Card.Title>
                            <Link scroll={false} href="#!" className="fs-12 text-muted"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                        </Card.Header>
                        <Card.Body className="">
                            <ul className="list-unstyled nft-top-sellers-list">
                                {TopSellers.map((idx) => (
                                    <li key={idx.id}>
                                        <div className="d-flex align-items-center gap-3 flex-wrap">
                                            <div className="lh-1">
                                                <span className="avatar avatar-md avatar-rounded bg-pink-transparent custom-width">
                                                    <Image fill src={idx.src} alt="" />
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <Link scroll={false} href="#!" className="mb-0 d-block fw-medium lh-1">{idx.name}</Link>
                                                <span className="fs-12 text-muted">{idx.username} {idx.isVerified ? (<i className="bi bi-patch-check-fill text-primary ms-1 fs-14"></i>) : ''} </span>
                                            </div>
                                            <div className="d-flex align-items-center ms-auto gap-2">
                                                <SpkTooltips placement="top" title={idx.isFollowed ? 'Follow' : 'UnFollow'}>
                                                    <Link scroll={false} href="#!" className={`btn btn-${idx.isFollowed ? 'outline-light' : 'secondary'} btn-sm rounded-pill btn-icon`}>
                                                        <i className={`ti ti-${idx.isFollowed ? 'user-plus' : 'user-check'}`}></i>
                                                    </Link>
                                                </SpkTooltips>
                                                <SpkDropdown Menuas='ul' toggleas='a' Customtoggleclass="btn btn-light btn-icon btn-sm rounded-pill no-caret" Icon={true} IconClass="ri-more-2-fill">
                                                    <li><Dropdown.Item href="#!">Week</Dropdown.Item></li>
                                                    <li><Dropdown.Item href="#!">Day</Dropdown.Item></li>
                                                    <li><Dropdown.Item href="#!">Year</Dropdown.Item></li>
                                                </SpkDropdown>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Recent Activities
                            </Card.Title>
                            <SpkDropdown toggleas='a' Customtoggleclass="btn-light btn btn-sm text-muted no-caret" Toggletext="View All" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1">
                                <li className="border-bottom"><Dropdown.Item href="#!">Today</Dropdown.Item></li>
                                <li className="border-bottom"><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Last Week</Dropdown.Item></li>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <ListGroup as='ul' className=" list-group-flush mb-0">
                                {RecentActivities.map((idx) => (
                                    <ListGroup.Item as='li' key={idx.id}>
                                        <Link scroll={false} href="#!">
                                            <div className="d-flex flex-wrap align-items-start justify-content-between flex-xl-nowrap">
                                                <div className="d-flex align-items-start">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-md avatar-rounded ">
                                                            <Image width={40} height={40} src={idx.image} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="fw-medium mb-0 ">{idx.title}
                                                            <span className="text-primary"> {idx.username}</span>
                                                            {idx.sub ? (<span className="text-muted"> #isther457</span>) : ''}

                                                        </p>
                                                        <span className="text-muted fs-12">{idx.description}</span>
                                                    </div>
                                                </div>
                                                <div className="w-25 text-end">
                                                    <span className="text-muted fs-12 mt-1 ms-1">{idx.timeAgo}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End::row-2 --> */}

            {/* <!-- Start::row-4 --> */}
            <Row>
                <Col xxl={12} xl={12}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Live Auction
                            </Card.Title>
                            <div className="d-flex flex-wrap gap-2">
                                <div>
                                    <Form.Control className=" form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" value={searchTerm} onChange={handleSearch} />
                                </div>
                                <SpkDropdown toggleas='a' Customtoggleclass="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret" Toggletext="Sort By" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                    <li><Dropdown.Item href="#!">New</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Popular</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Relevant</Dropdown.Item></li>
                                </SpkDropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="table text-nowrap" header={[{ title: 'Item' }, { title: 'Open Price' }, { title: 'Auction Time' }, { title: 'Your Bid' }, { title: 'Last Bid' }, { title: 'Actions' },]}>
                                    {Liveauction.length > 0 ? (
                                        Liveauction.map((idx) => (
                                            <tr key={idx.id}>
                                                <td className={idx.tdClass}>
                                                    <div className="d-flex align-items-center gap-3">
                                                        <span className="avatar avatar-md ">
                                                            <Image width={40} height={40} src={idx.image} alt="" />
                                                        </span>
                                                        <div>
                                                            <span className="d-block fw-medium">{idx.title}</span>
                                                            <span className="fs-12 text-muted">by {idx.artist}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className={idx.tdClass}>{idx.currentBid}</td>
                                                <td className={idx.tdClass}><SpkBadge variant={`${idx.color}-transparent`}>{idx.timeRemaining}</SpkBadge></td>
                                                <td className={idx.tdClass}>{idx.previousBid}</td>
                                                <td className={idx.tdClass}>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="avatar avatar-xs avatar-rounded custom-width">
                                                            <Image fill src={idx.src} alt="" />
                                                        </span>
                                                        <span>{idx.topBidderAmount}</span>
                                                    </div>
                                                </td>
                                                <td className={idx.tdClass}>
                                                    <SpkButton Buttonvariant="primary-light" Customclass="btn btn-sm btn-wave waves-effect waves-light">
                                                        View <i className="ti ti-arrow-narrow-right ms-1 d-inline-block"></i>
                                                    </SpkButton>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td className='text-center border-bottom-0' colSpan={9}>No data found</td>
                                        </tr>
                                    )}

                                </SpkTables>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <div className="d-flex align-items-center">
                                <div> Showing 5 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i> </div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <ul className="pagination mb-0">
                                            <li className="page-item disabled"> <Link scroll={false} className="page-link" href="#!"> Prev </Link> </li>
                                            <li className="page-item active"><Link scroll={false} className="page-link" href="#!">1</Link></li>
                                            <li className="page-item"><Link scroll={false} className="page-link" href="#!">2</Link></li>
                                            <li className="page-item"> <Link scroll={false} className="page-link text-primary" href="#!"> next </Link> </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End::row-4 --> */}
        </Fragment>
    );
};

export default Nft;