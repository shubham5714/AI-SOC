"use client"
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import { ChooseNetwork, Transaction, WalletCard } from "@/shared/data/apps/nft/wallet-integration-data";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { Card, Col, Dropdown, ListGroup, Row } from "react-bootstrap";

interface WalletIntegrationProps { }

const WalletIntegration: React.FC<WalletIntegrationProps> = () => {
    return (
        <Fragment>
            <Seo title="Wallet Integration" />
            <Pageheader title='Apps' subtitle='NFT' currentpage='Wallet Integration' activepage='Wallet Integration' />
            {/* <!-- Start::row-1 --> */}
            <Row className="justify-content-center">
                <Col xxl={3}>
                    <Card className="custom-card overflow-hidden bg-primary nft-wallet-card">
                        <Card.Body className=" text-center">
                            <div className="fw-medium mb-2 text-fixed-white op-7">
                                Wallet Balance
                            </div>
                            <h5 className="fw-bold text-fixed-white">$25,680</h5>
                            <p className="text-muted mb-0 text-fixed-white op-7">Available Balance</p>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Wallet Transactions
                            </Card.Title>
                            <SpkDropdown toggleas='a' Customtoggleclass="p-2 py-2 bg-light fs-12 text-muted no-caret" Toggletext="Last 24 Hours" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                <li><Dropdown.Item href="#!">Last 24 Hours</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Last 7 Days</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Last 30 Days</Dropdown.Item></li>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <ListGroup className="list-group list-group-flush">
                                {Transaction.map((idx) => (
                                    <ListGroup.Item key={idx.id}>
                                        <div className="d-flex gap-3 align-items-center flex-wrap">
                                            <div className="lh-1">
                                                <span className={`avatar avatar-xl bg-${idx.iconColor}`}>
                                                    <i className={`ri-${idx.icon} fs-25`}></i>
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <div className="mb-1 d-flex justify-content-between gap-1"><span className="fw-medium"> {idx.title}</span><span className="fs-12 text-muted ms-auto d-inline-block">{idx.time}</span></div>
                                                <div className="fs-13">{idx.to}: <span className="text-primary fw-medium">{idx.from}</span></div>
                                                <div className="fs-13">Amount: <span className={`text-${idx.color} fw-medium`}>{idx.amount ? idx.amount : idx.price}</span></div>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                            <div className="p-3 text-center border-top">
                                <Link scroll={false} href="#!" className="text-center text-primary text-decoration-underline">View All Transactions</Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={9}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="">
                            <Card.Title>
                                Choose Network
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <ListGroup as="ul" className="list-group-flush nft-list d-flex align-items-center gap-4 flex-row p-3 bg-opacity-50 flex-wrap">
                                {ChooseNetwork.map((idx) => (
                                    <ListGroup.Item as="li" className={`border ${idx.liclass ? `${idx.liclass}` : ''}`} key={idx.id}>
                                        <Link scroll={false} href="#!" className="stretched-link"></Link>
                                        <div className="d-flex align-items-center gap-2">
                                            <div>
                                                <span className="avatar avatar-rounded avatar-sm bg-light p-1 custom-width">
                                                    <Image fill src={idx.image} alt="" />
                                                </span>
                                            </div>
                                            <div className="fs-14 fw-medium">{idx.name}</div>
                                        </div>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Connect Wallet
                            </Card.Title>
                            <div>
                            </div>
                        </Card.Header>
                        <Card.Body className="pb-0">
                            <Row className="justify-content-center">
                                {WalletCard.map((idx) => (
                                    <Col xxl={6} key={idx.id}>
                                        <Card className={`custom-card nft-wallet ${idx.isActive ? 'active' : ''}`}>
                                            <Card.Body className="p-3">
                                                <div className="d-flex align-items-center gap-3 flex-wrap">
                                                    <div className="lh-1">
                                                        <span className={`avatar avatar-rounded ${idx.imgClass ? `${idx.imgClass}` : ''} bg-light custom-width`}>
                                                            <Image fill src={idx.image} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h6 className="fw-medium mb-0">{idx.name}</h6>
                                                    </div>
                                                    <Link scroll={false} href="#!" className="btn btn-primary-light ms-auto">Connect</Link>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </Card.Body>
                        <Card.Footer className="d-flex justify-content-between gap-2">
                            <SpkButton Buttonvariant="primary-light" Customclass="btn  btn-wave">Import More</SpkButton>
                            <SpkButton Buttonvariant="primary" Customclass="btn btn-wave">Add New Wallet</SpkButton>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    );
};

export default WalletIntegration;