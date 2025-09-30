"use client"
import Spkapexcharts from "@/shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import SpkSelect from "@/shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import { Cryptocurrencies } from "@/shared/data/apps/crypto/currency-exchangedata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";

interface CurrencyExchangeProps { }

const CurrencyExchange: React.FC<CurrencyExchangeProps> = () => {
    const Currency = [
        { label: 'USD', value: 1 },
        { label: 'Pound', value: 2 },
        { label: 'Rupee', value: 3 },
        { label: 'Euro', value: 4 },
        { label: 'Won', value: 5 },
        { label: 'Dinar', value: 6 },
        { label: 'Rial', value: 7 },
    ]
    const SellCoins = [
        { label: 'Bitcoin', value: 1 },
        { label: 'Etherium', value: 2 },
        { label: 'Litecoin', value: 3 },
        { label: 'Ripple', value: 4 },
        { label: 'Cardano', value: 5 },
        { label: 'Neo', value: 6 },
        { label: 'Stellar', value: 7 },
        { label: 'EOS', value: 7 },
        { label: 'NEM', value: 8 },
    ]
    return (
        <Fragment>
            <Seo title="Currency Exchange" />
            <Pageheader title='Apps' subtitle='Crypto' currentpage='Currency Exchange' activepage='Currency Exchange' />
            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card currency-exchange-card">
                        <Card.Body className=" p-5 d-flex align-items-center justify-content-center z-1">
                            <div className="container">
                                <h3 className="text-fixed-white text-center">Buy and Sell Coins without additional fees</h3>
                                <span className="d-block fs-16 text-fixed-white text-center op-8 mb-4">
                                    Buy now and get +50% extra bonus Minimum pre-sale amount 100 Crypto Coin. We accept BTC crypto-currency..
                                </span>
                                <div className="p-3 mb-4 rounded currency-exchange-area">
                                    <Row className="gy-3">
                                        <Col xxl={3} className="col-12">
                                            <Form.Control type="text" className="" defaultValue="0.0453" placeholder="Enter Amount" />
                                        </Col>
                                        <Col xxl={2} className="col-12">
                                            <div>
                                                <SpkSelect name="colors" option={SellCoins}
                                                    placeholder="Bitcoin" classNameprefix='Select2' mainClass="multi-select basic-multi-select"
                                                    defaultvalue={[SellCoins[0]]} menuplacement='auto' />
                                            </div>
                                        </Col>
                                        <Col xxl={2} className="col-12 text-center">
                                            <Link scroll={false} aria-label="anchor" href="#!" className="btn btn-success btn-icon btn-sm my-2 rounded-pill"><i className="ti ti-arrows-exchange fs-19 align-middle"></i></Link>
                                        </Col>
                                        <Col xxl={3} className="col-12">
                                            <Form.Control type="text" className="" defaultValue="1350.93" placeholder="Exchange Amount" />
                                        </Col>
                                        <Col xxl={2} className="col-12">
                                            <SpkSelect name="colors" option={Currency} mainClass="basic-multi-select "
                                                defaultvalue={[Currency[0]]} menuplacement='auto' classNameprefix="Select2" />
                                        </Col>
                                    </Row>
                                </div>
                                <div className="text-center">
                                    <SpkButton Buttonvariant="success" Customclass="btn  btn-wave">Exchange Now</SpkButton>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row className="justify-content-center">
                {Cryptocurrencies.map((idx) => (
                    <Col xl={4} key={idx.id}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Body className="">
                                <div className="d-flex align-items-end justify-content-between flex-wrap">
                                    <div>
                                        <div className="d-flex align-items-center gap-2 mb-3">
                                            <div className="lh-1">
                                                <span className="avatar avatar-rounded avatar-md">
                                                    <Image fill src={idx.logo} alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <h6 className="fw-medium mb-0">{idx.name}</h6>
                                                <span className="text-muted"> - {idx.symbol}</span>
                                            </div>
                                        </div>
                                        <div className="fs-24 d-block d-flex align-items-center fw-medium">
                                            {idx.percentage}
                                            <span className={`fs-12 text-${idx.arrow === 'up' ? 'success' : 'danger'} op-7 fw-normal ms-1`}>{idx.change}
                                                <i className={`ti ti-arrow-big-${idx.arrow}-line ms-1 d-inline-flex`}></i>
                                            </span>
                                            <span className={`badge bg-${idx.arrow === 'up' ? 'success' : 'danger'} fs-10 ms-2`}>24H</span>
                                        </div>
                                    </div>
                                    <div className="text-end ms-auto">
                                        <div className="">
                                            <span className="fs-15 text-primary">{idx.value}</span>
                                            <span className="text-success ms-1 d-inline-block">{idx.price}</span>
                                        </div>
                                        <div id={idx.chartId} className="mt-4 w-100">
                                            <Spkapexcharts chartOptions={idx.chartOptions} chartSeries={idx.chartSeries} type='area' width={230} height={45} />
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                <Col xl={12}>
                    <div className="text-center my-4">
                        <SpkButton Buttonvariant="primary-light" Customclass="btn" Buttontype="button" Disabled>
                            <span className="spinner-border spinner-border-sm align-middle me-1" role="status" aria-hidden="true"></span> Loading...
                        </SpkButton>
                    </div>
                </Col>
            </Row>
            {/* <!-- End:: row-2 --> */}
        </Fragment>
    );
};

export default CurrencyExchange;