"use client"
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import { DayCounter } from "@/shared/data/authentication/comingsoondata";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";

interface UnderMaintenanceProps { }

const UnderMaintenance: React.FC<UnderMaintenanceProps> = () => {

    return (
        <Fragment>
            <Row className=" authentication coming-soon justify-content-center g-0 my-auto">
                <Col xxl={5} xl={5} lg={5} md={6} sm={7} className="col-11 my-auto">
                    <Card className="authentication-cover rounded-3 overflow-hidden  custom-card my-3">
                        <div className="aunthentication-cover-content text-center">
                            <Row className=" justify-content-center align-items-center mx-0 g-0">
                                <Col xxl={11} xl={10} lg={10} md={12} sm={12} className=" col-12">
                                    <div>
                                        <div className="mb-4"> <Link scroll={false} href="/dashboards/sales/">
                                            <Image fill src="../../assets/images/brand-logos/toggle-white.png" alt="" className="authentication-brand" /> </Link>
                                        </div>
                                        <h4 className="mb-2 text-fixed-white fs-2">Under Maintenance</h4>
                                        <p className="mb-5 text-muted text-fixed-white fs-16 op-8">We're currently performing some updates to improve your experience. Please bear with us – we'll be back shortly!</p>
                                        <div className="input-group mb-5">
                                            <Form.Control type="email" className="form-control form-control-lg bg-light" placeholder="info@gmail.com" aria-label="info@gmail.com" aria-describedby="button-addon2" />
                                            <SpkButton Buttonvariant="secondary" Buttontype="button" Size="lg" >Subscribe</SpkButton>
                                        </div>
                                        <DayCounter />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default UnderMaintenance;