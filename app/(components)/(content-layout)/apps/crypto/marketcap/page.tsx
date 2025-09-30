"use client"
import Spkapexcharts from "@/shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import { CryptoMarketCap, CryptoMarketCapType, MarketcapData, } from "@/shared/data/apps/crypto/marketcapdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Card, Col, Dropdown, Form, ProgressBar, Row } from "react-bootstrap";

interface MarketcapProps { }

const Marketcap: React.FC<MarketcapProps> = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const CryptoMarketcap: CryptoMarketCapType[] = CryptoMarketCap.filter(marcket =>
        marcket.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };
    return (
        <Fragment>
            <Seo title="Marketcap" />
            <Pageheader title='Apps' subtitle='Crypto' currentpage='Marketcap' activepage='Marketcap' />
            {/* <!-- Start::row-1 --> */}
            <Row>
                {MarketcapData.map((idx) => (
                    <Col xxl={4} xl={6} lg={12} key={idx.id}>
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="d-flex flex-wrap">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <div className="d-flex align-items-center mb-3">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md avatar-rounded">
                                                        <Image fill src={idx.icon} alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <h6 className="mb-1">
                                                        {idx.name}
                                                    </h6>
                                                    <span className="text-muted "> {idx.symbol} - Rank {idx.rank}</span>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="mb-1">
                                                    <span className="fs-20 fw-medium lh-1 text-primary mb-1">{idx.marketCap}</span>
                                                    <span className="mb-0 text-muted ms-2"><span className="text-muted">Vol:</span><span className="text-success fw-medium"> ({idx.volume})</span></span>
                                                </div>
                                                <p className="fw-medium mb-0">{idx.price} <span className="mb-1 fw-normal fs-13 text-muted">({idx.symbol} / USD)</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ms-auto text-end">
                                        <div className="mb-4">
                                            <p className="tx-14 mb-1 fw-semibold text-dark">Market Cap:</p>
                                            <p className="mb-0 fs-14 custom-market-card">{idx.marketCap}<span className="text-success mb-0 font-weight-normal tx-13 mx-1">
                                                {idx.marketCapChange}<span className={`text-${idx.marketCapChange.startsWith('-') ? 'danger' : 'success'} numberfont`}>{idx.CapChange}</span>
                                            </span>
                                            </p>
                                        </div>
                                        <div>
                                            <div id={idx.chartId}>
                                                <Spkapexcharts chartOptions={idx.chartOptions} chartSeries={idx.chartSeries} type='area' width={163} height={40} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            {/* <!--End::row-1 --> */}

            {/* <!-- Start::row-2  --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Crypto MarketCap
                            </Card.Title>
                            <div className="d-flex flex-wrap gap-2">
                                <div>
                                    <Form.Control className="form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" value={searchTerm} onChange={handleSearch}/>
                                </div>
                                <SpkDropdown toggleas='a' Customtoggleclass="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret" Toggletext="Sort By" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                    <li><Dropdown.Item href="#!">Market Cap</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Price</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Trading Volume</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Price Change (24h)</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Rank</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">A - Z</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">All-Time High (ATH)</Dropdown.Item></li>
                                </SpkDropdown>
                                <div>
                                    <SpkButton Buttonvariant="secondary" Customclass="btn btn-sm btn-wave waves-effect waves-light">View All</SpkButton>
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="table text-nowrap" header={[{ title: '' }, { title: '#', headerClassname: 'fw-medium' }, { title: 'Crypto Name' }, { title: 'MarketCap' }, { title: 'last 1Week' }, { title: '1h Change' }, { title: 'Price (USD)' }, { title: '24h Change' }, { title: 'Volume (24h)' }, { title: 'Circulating Supply' }, { title: 'Trade' },]}>
                                    {CryptoMarketcap.map((idx) => (
                                        <tr key={idx.id}>
                                            <td className="text-center">
                                                <Link scroll={false} href="#!"><i className="ri-star-line fs-16 text-muted"></i></Link>
                                            </td>
                                            <td>{idx.id}</td>
                                            <td>
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <Image fill src={idx.image} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="fw-medium"><Link scroll={false} href="#!">{idx.name}</Link></div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="fw-medium">{idx.marketCap}</span>
                                            </td>
                                            <td>
                                                <div id="btc-chart">
                                                    <Spkapexcharts chartOptions={idx.chartOptions} chartSeries={idx.chartSeries} type='line' width={120} height={30} />
                                                </div>
                                            </td>
                                            <td>
                                                <span className={`text-${idx.arrow === 'up' ? 'success' : 'danger'} fw-medium`}><i className={`ti ti-arrow-narrow-${idx.arrow} fs-15 fw-medium`}></i>{idx.priceChange}</span>
                                            </td>
                                            <td>
                                                <span className="fw-medium">
                                                    <Link scroll={false} href="#!">{idx.price}</Link>
                                                </span>
                                            </td>
                                            <td>
                                                <span className={`text-${idx.arrow24 === 'up' ? 'success' : 'danger'} fw-medium`}><i className={`ti ti-arrow-narrow-${idx.arrow24} fs-15 fw-medium`}></i>{idx.change24h}</span>
                                            </td>
                                            <td>
                                                <Link scroll={false} href="#!">
                                                    <span className="d-block fw-medium">{idx.volume}</span>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link scroll={false} href="#!">
                                                    <span className="fw-medium d-block mb-2">
                                                        {idx.totalSupply}
                                                    </span>
                                                    {idx.progress ? (
                                                        <ProgressBar className="progress-stacked progress-xs w-75">
                                                            <ProgressBar className="progress-bar bg-success op-5" role="progressbar" now={idx.progress1} style={{ width: `${idx.progress1}%` }}
                                                                aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></ProgressBar>
                                                            <ProgressBar className="progress-bar bg-danger op-5" role="progressbar" now={idx.progress2} style={{ width: `${idx.progress2}%` }}
                                                                aria-valuenow={15} aria-valuemin={0} aria-valuemax={100}></ProgressBar>
                                                        </ProgressBar>
                                                    ) : ''}

                                                </Link>
                                            </td>
                                            <td>
                                                <SpkButton Buttonvariant="success-light" Customclass="btn btn-sm">Trade</SpkButton>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                        <div className="card-footer border-top-0">
                            <nav aria-label="Page navigation">
                                <ul className="pagination mb-0 float-end">
                                    <li className="page-item disabled">
                                        <Link href='#!' scroll={false} className="page-link">Previous</Link>
                                    </li>
                                    <li className="page-item"><Link scroll={false} className="page-link" href="#!">1</Link></li>
                                    <li className="page-item active" aria-current="page">
                                        <Link scroll={false} className="page-link" href="#!">2</Link>
                                    </li>
                                    <li className="page-item">
                                        <Link scroll={false} className="page-link" href="#!">Next</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End::row-2  --> */}
        </Fragment>
    );
};

export default Marketcap;