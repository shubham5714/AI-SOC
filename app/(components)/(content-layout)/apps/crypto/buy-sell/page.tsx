"use client"
import Spkapexcharts from "@/shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import SpkSelect from "@/shared/@spk-reusable-components/reusable-plugins/spk-reactselect";
import SpkButtongroup from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttongroup";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import { Amount, Crypto1, Cryptodata, SellCrypto, SellCrypto1, SellStatisticsOptions, SellStatisticsSeries } from "@/shared/data/apps/crypto/buyselldata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Col, Form, Row, Tab } from "react-bootstrap";

interface BuySellProps { }

const BuySell: React.FC<BuySellProps> = () => {
    return (
        <Fragment>
            <Seo title="Buy & Sell" />
            <Pageheader title='Apps' subtitle='Crypto' currentpage='Buy & Sell' activepage='Buy & Sell' />
            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Buy Crypto
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div>
                                <Row>
                                    <Col xl={6}>
                                        <div className="input-group mb-3 flex-nowrap buy-crypto" id="buy-crypto">
                                            <Form.Control type="text" className="" aria-label="crypto buy select" placeholder="Select Currency" />
                                            <SpkSelect name="colors" option={Cryptodata} mainClass="basic-multi-select buysell" placeholder="BTC"
                                                menuplacement='auto' classNameprefix="Select2"
                                            />
                                        </div>
                                    </Col>
                                    <Col xl={6}>
                                        <div className="input-group mb-3 flex-nowrap buy-crypto">
                                            <Form.Control type="text" className="" aria-label="crypto buy select" />
                                            <SpkSelect name="colors" option={Crypto1} mainClass="basic-multi-select buysell" placeholder="USD"
                                                menuplacement='auto' classNameprefix="Select2"
                                            />
                                        </div>
                                    </Col>
                                </Row>
                                <div className="bg-light pt-2 p-3 rounded">
                                    <div className="fs-14 py-2"><span className="fw-medium text-dark">Price:</span><span className="text-muted ms-2 fs-14 d-inline-block">6.003435</span><span className="text-dark fw-medium float-end">BTC</span></div>
                                    <div className="fs-14 py-2"><span className="fw-medium text-dark">Amount:</span><span className="text-muted ms-2 fs-14 d-inline-block">2,34,4543.00</span><span className="text-dark fw-medium float-end">LTC</span></div>
                                    <div className="fw-medium fs-14 py-2">Total: <span className="fs-14 d-inline-block">22.00 BTC</span></div>
                                    <div className="fs-12 text-success">Additional Charges: 0.32%(0.0001231 BTC)</div>
                                </div>
                                <label className="fw-medium fs-12 mt-4 mb-3">SELECT PAYMENT METHOD :</label>
                                <Row className="g-2">
                                    <Col xl={4}>
                                        <div className="p-2 border rounded">
                                            <div className="form-check mb-0">
                                                <Form.Check.Input className="" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
                                                <Form.Check.Label className="fs-12" htmlFor="flexRadioDefault1">
                                                    Credit / Debit Cards
                                                </Form.Check.Label>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={4}>
                                        <div className="p-2 border rounded">
                                            <div className="form-check mb-0">
                                                <Form.Check.Input className="" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                                <Form.Check.Label className="fs-12" htmlFor="flexRadioDefault2">
                                                    Paypal
                                                </Form.Check.Label>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={4}>
                                        <div className="p-2 border rounded">
                                            <div className="form-check mb-0">
                                                <Form.Check.Input className="" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                                <Form.Check.Label className="fs-12" htmlFor="flexRadioDefault3">
                                                    Wallet
                                                </Form.Check.Label>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <div className="d-grid mt-4 pt-1">
                                    <SpkButton Buttonvariant="primary" Buttontype="button" Customclass="btn  btn-wave">BUY</SpkButton>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Sell Crypto
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col xl={6}>
                                    <div className="input-group mb-3 flex-nowrap buy-crypto">
                                        <Form.Control type="text" className="" aria-label="crypto buy select" placeholder="Select Currency" />
                                        <SpkSelect name="colors" option={SellCrypto} mainClass="basic-multi-select buysell" placeholder="BTC"
                                            menuplacement='auto' classNameprefix="Select2"
                                        />
                                    </div>
                                </Col>
                                <Col xl={6}>
                                    <div className="input-group mb-3 flex-nowrap buy-crypto">
                                        <Form.Control type="text" className="" aria-label="crypto buy select" />
                                        <SpkSelect name="colors" option={SellCrypto1} mainClass="basic-multi-select buysell" placeholder="USD"
                                            menuplacement='auto' classNameprefix="Select2"
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={6}>
                                    <div className="mb-3">
                                        <span className="form-label">Crypto Value :</span>
                                        <div className="position-relative">
                                            <div className="p-2 border rounded d-flex align-items-center justify-content-between gap-3 mt-1 flex-wrap">
                                                <div className="gap-2 d-flex align-items-center">
                                                    <div className="lh-1">
                                                        <span className="avatar bg-light p-2">
                                                            <Image fill src="../../../assets/images/crypto-currencies/regular/Bitcoin.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="fw-medium">Bitcoin - BTC</div>
                                                </div>
                                                <div className="text-end ms-auto">
                                                    <span className="fw-medium d-block">0.374638535 BTC</span>
                                                    <span className="text-muted">$5,364.65</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6}>
                                    <div className="mb-3">
                                        <span className="form-label">Deposit To :</span>
                                        <div className="position-relative">
                                            <div className="p-2 border rounded d-flex align-items-center gap-2 mt-1">
                                                <div className="lh-1">
                                                    <span className="avatar bg-light p-2">
                                                        <i className="ri-bank-line text-info fs-20"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="fw-medium d-block">Banking</span>
                                                    <span className="text-muted">Checking ...</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <div className="bg-light pt-2 p-3 rounded">
                                <div className="fs-14 py-2">
                                    <div className="d-inline-flex">
                                        <span className="fw-medium text-dark">Price:</span><span className="text-muted ms-2 fs-14">6.003435</span>
                                    </div>
                                    <span className="text-dark fw-medium float-end">BTC</span>
                                </div>
                                <div className="fs-14 py-2">
                                    <div className="d-inline-flex">
                                        <span className="fw-medium text-dark">Amount:</span><span className="text-muted ms-2 fs-14">2,34,4543.00</span>
                                    </div>
                                    <span className="text-dark fw-medium float-end">LTC</span>
                                </div>
                                <div className="fw-medium fs-14 py-2">Total: <span className="fs-14 d-inline-block">22.00 BTC</span></div>
                                <div className="fs-12 text-success">Additional Charges: 0.32%(0.0001231 BTC)</div>
                            </div>
                            <div className="d-grid mt-4">
                                <SpkButton Buttonvariant="secondary" Buttontype="button" Customclass="btn btn-wave">SELL</SpkButton>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row>
                <Col xxl={3}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Quick Secure Transfer
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="tab-pane border-0 p-0" id="sell-crypto" role="tabpanel">
                                <div className="mb-3">
                                    <span className="form-label">Crypto Value :</span>
                                    <div className="position-relative">
                                        <Link scroll={false} href="#!" className="stretched-link"></Link>
                                        <div className="p-2 border rounded d-flex align-items-center justify-content-between gap-3 mt-1 flex-wrap">
                                            <div className="gap-2 d-flex align-items-center">
                                                <div className="lh-1">
                                                    <span className="avatar bg-light p-2 avatar-md">
                                                        <Image fill src="../../../assets/images/crypto-currencies/regular/Bitcoin.svg" alt="" />
                                                    </span>
                                                </div>
                                                <div className="fw-medium">Bitcoin - BTC</div>
                                            </div>
                                            <div className="text-end ms-auto">
                                                <span className="fw-medium d-block">0.374638535 BTC</span>
                                                <span className="text-muted">$5,364.65</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <span className="form-label">Deposit To :</span>
                                    <div className="position-relative">
                                        <Link scroll={false} href="#!" className="stretched-link"></Link>
                                        <div className="p-2 border rounded d-flex align-items-center gap-2 mt-1">
                                            <div className="lh-1">
                                                <span className="avatar bg-light avatar-md p-2">
                                                    <i className="ri-bank-line text-info fs-20"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <span className="fw-medium d-block">Banking</span>
                                                <span className="text-muted">Checking ...</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-1">
                                    <span className="form-label">Amount :</span>
                                </div>
                                <div className="input-group mb-3 flex-nowrap buy-crypto">
                                    <Form.Control type="text" className="" aria-label="crypto buy select" />
                                    <SpkSelect name="colors" option={Amount} mainClass="basic-multi-select buysell" placeholder="BTC"
                                        menuplacement='top' classNameprefix="Select2"
                                    />
                                </div>
                                <div className="p-3 bg-light rounded">
                                    <div className="fs-14 pb-1">
                                        <div className="d-inline-flex">
                                            <span className="fw-medium text-dark">Price:</span><span className="text-muted ms-2 fs-14">6.003435</span>
                                        </div>
                                        <span className="text-dark fw-medium float-end">BTC</span>
                                    </div>
                                    <div className="fs-14 pt-2">
                                        <div className="d-inline-flex">
                                            <span className="fw-medium text-dark">Amount:</span><span className="text-muted ms-2 fs-14">2,34,4543.00</span>
                                        </div>
                                        <span className="text-dark fw-medium float-end">LTC</span>
                                    </div>
                                </div>
                                <div className="d-grid mt-3">
                                    <SpkButton Buttonvariant="info" Buttontype="button" Customclass="btn  btn-wave waves-effect waves-light">Transfer</SpkButton>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={9}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Buy & Sell Statistics
                            </Card.Title>
                            <SpkButtongroup Customclass="flex-wrap" Buttongrplabel="Basic example">
                                <SpkButton Buttonvariant="primary" Buttontype="button" Customclass="btn btn-sm btn-wave">1D</SpkButton>
                                <SpkButton Buttonvariant="primary-light" Buttontype="button" Customclass="btn btn-sm btn-wave">1W</SpkButton>
                                <SpkButton Buttonvariant="primary-light" Buttontype="button" Customclass="btn btn-sm btn-wave">1M</SpkButton>
                                <SpkButton Buttonvariant="primary-light" Buttontype="button" Customclass="btn btn-sm btn-wave">3M</SpkButton>
                                <SpkButton Buttonvariant="primary-light" Buttontype="button" Customclass="btn btn-sm btn-wave">6M</SpkButton>
                                <SpkButton Buttonvariant="primary-light" Buttontype="button" Customclass="btn btn-sm btn-wave">1Y</SpkButton>
                            </SpkButtongroup>
                        </Card.Header>
                        <Card.Body className="p-xl-0">
                            <Row className="align-items-center">
                                <Col xl={8} className="pe-0 border-end border-inline-end-dashed">
                                    <div className="d-flex flex-wrap align-items-center border-bottom border-block-end-dashed mb-3 p-3 gap-4 justify-content-between">
                                        <div>
                                            <span className="d-block mb-1">Total Buy</span>
                                            <span className="d-block fw-medium fs-16 text-success">$324.25 USD</span>
                                        </div>
                                        <div>
                                            <span className="d-block mb-1">Total Sell</span>
                                            <span className="d-block fw-medium fs-16 text-danger">$4,235.25 USD</span>
                                        </div>
                                        <div>
                                            <span className="d-block mb-1">Available Balance</span>
                                            <span className="d-block fw-medium fs-16 text-primary">$22,803.92 USD</span>
                                        </div>
                                        <div>
                                            <span className="d-block mb-1">Total Crypto Asset Value</span>
                                            <span className="d-block fw-medium fs-16 text-warning">$4,56,683.00 USD</span>
                                        </div>
                                        <div></div>
                                    </div>
                                    <div id="buy_sell-statistics" className="px-3">
                                        <Spkapexcharts chartOptions={SellStatisticsOptions} chartSeries={SellStatisticsSeries} type='line' width={'100%'} height={316} />
                                    </div>
                                </Col>
                                <Col xl={4} className="ps-xl-0">
                                    <div className="p-3">
                                        <Card className="custom-card bg-light shadow-none">
                                            <Card.Body>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div>
                                                        <span className="d-block text-muted mb-2">BTC/USD</span>
                                                        <h5 className="fw-medium mb-1">27.53612</h5>
                                                        <span className="text-danger d-block fs-12 mt-1">-0.06%</span>
                                                    </div>
                                                    <div>
                                                        <span className="avatar avatar-xl avatar-rounded">
                                                            <Image fill src="../../../assets/images/crypto-currencies/square-color/Bitcoin.svg" alt="" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                        <Card className="custom-card bg-light shadow-none">
                                            <Card.Body>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div>
                                                        <span className="d-block text-muted mb-2">ETH/USD</span>
                                                        <h5 className="fw-medium mb-1">20.6782</h5>
                                                        <span className="text-success d-block fs-12 mt-1">+2.86%</span>
                                                    </div>
                                                    <div>
                                                        <span className="avatar avatar-xl avatar-rounded">
                                                            <Image fill src="../../../assets/images/crypto-currencies/square-color/Ethereum.svg" alt="" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                        <Card className="custom-card bg-light shadow-none mb-0">
                                            <Card.Body>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div>
                                                        <span className="d-block text-muted mb-2">LTC/USD</span>
                                                        <h5 className="fw-medium mb-1">54.2912</h5>
                                                        <span className="text-success d-block fs-12 mt-1">+15.93%</span>
                                                    </div>
                                                    <div>
                                                        <span className="avatar avatar-xl avatar-rounded">
                                                            <Image fill src="../../../assets/images/crypto-currencies/square-color/Litecoin.svg" alt="" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-2 --> */}
        </Fragment>
    );
};

export default BuySell;