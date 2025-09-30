"use client"
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import { WalletData, WalletSummaries } from "@/shared/data/apps/crypto/walletdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import React, { Fragment } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";

interface WalletProps { }

const Wallet: React.FC<WalletProps> = () => {
    return (
        <Fragment>
            <Seo title="Wallet" />
            <Pageheader title='Apps' subtitle='Crypto' currentpage='Wallet' activepage='Wallet' />
            {/* <!-- Start::row-1 --> */}
            <Row>
                {WalletData.map((idx) => (
                    <Col xl={4} key={idx.id}>
                        <Card className="custom-card">
                            <Card.Header className=" justify-content-between">
                                <Card.Title>
                                    {idx.title}
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="d-flex align-items-center flex-wrap justify-content-between gap-4 mb-3">
                                    <div className="flex-fill">
                                        <label htmlFor="btc-wallet-address1" className="form-label">Wallet Address</label>
                                        <div className="input-group">
                                            <Form.Control type="text" className="" id="btc-wallet-address1" defaultValue="afb0dc8bc84625587b85415c86ef43ed8df" placeholder="Placeholder" />
                                            <SpkButton Buttonvariant="primary" Customclass="btn">Copy</SpkButton>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="avatar avatar-xxl border custom-width">
                                            <Image fill src="../../../assets/images/media/media-68.png" className="p-1 qr-image" alt="" />
                                        </span>
                                    </div>
                                </div>
                                <Row className="p-2 py-3 bg-light mx-0 gy-2">
                                    <Col xxl={4}>
                                        <div>
                                            <div className="d-flex align-items-center gap-3 flex-wrap">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-md bg-success-transparent">
                                                        <i className="ti ti-arrow-narrow-down fs-20"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="d-block text-muted">Received</span>
                                                    <span className="d-block fw-medium">6.2834 <span className="fs-12 text-muted fw-normal">{idx.currency}</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xxl={4}>
                                        <div>
                                            <div className="d-flex align-items-center gap-3 flex-wrap">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-md bg-danger-transparent">
                                                        <i className="ti ti-arrow-narrow-up fs-20"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="d-block text-muted">Sent</span>
                                                    <span className="d-block fw-medium">2.7382 <span className="fs-12 text-muted fw-normal">{idx.currency}</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xxl={4}>
                                        <div>
                                            <div className="d-flex align-items-center gap-3 flex-wrap">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-md bg-secondary-transparent">
                                                        <i className="ti ti-wallet fs-20"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="d-block text-muted">Wallet</span>
                                                    <span className="d-block fw-medium">12.5232 <span className="fs-12 text-muted fw-normal">{idx.currency}</span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Footer className=" text-center d-grid">
                                <SpkButton Buttonvariant="primary" Customclass="btn btn-w-lg btn-wave waves-effect waves-light">Connect</SpkButton>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
            {/* <!--End::row-1 --> */}

            {/* <!--Start::row-2 --> */}
            <Row>
                {WalletSummaries.map((idx) => (
                    <Col xxl={3} lg={6} key={idx.id}>
                        <Card className="custom-card">
                            <Card.Header className="">
                                <Card.Title>
                                    {idx.name}
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="d-flex align-items-center justify-content-between gap-2">
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="lh-1">
                                            <span className="avatar avatar-rounded">
                                                <Image fill src={idx.icon} alt="" />
                                            </span>
                                        </div>
                                        <div>
                                            <span className="d-block text-muted fs-12 fw-normal">Available {idx.symbol}</span>
                                            <span className="fw-medium fs-15">{idx.balance}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="fw-medium">{idx.balanceUSD}</span>
                                        <span className="d-block text-muted fs-12 fw-normal">In USD</span>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Footer className="">
                                <div className="d-flex gap-2 flex-wrap">
                                    <SpkButton Buttonvariant="primary-light" Customclass="btn  btn-w-lg btn-wave flex-fill">Deposit</SpkButton>
                                    <SpkButton Buttonvariant="success-light" Customclass="btn btn-w-lg btn-wave flex-fill">Withdraw</SpkButton>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
            {/* <!--End::row-2 --> */}
        </Fragment>
    );
};

export default Wallet;