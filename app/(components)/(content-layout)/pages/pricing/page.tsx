"use client"
import SpkPricingcards from "@/shared/@spk-reusable-components/reusable-pages/spk-pricingcard";
import SpkPricingCard2 from "@/shared/@spk-reusable-components/reusable-pages/spk-pricingcard2";
import SpkBadge from "@/shared/@spk-reusable-components/reusable-uiElements/spk-badge";
import { pricingPlanMonth, pricingPlansYear, pricingsdata } from "@/shared/data/pages/pricingdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { Fragment, useState } from "react";
import { Button, Card, Col, Form, Nav, Row, Tab } from "react-bootstrap";

interface PricingProps { }



const Pricing: React.FC<PricingProps> = () => {

    const [isMonthly, setIsMonthly] = useState(true);

    const handleToggle = () => {
        setIsMonthly(!isMonthly);
    };


    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}
            <Seo title="Pages-Pricing" />

            <Pageheader title="Pages" currentpage="Pricing" activepage="Pricing" />

            {/* <!-- End::page-header --> */}
            {/*<!-- Start:: row-1 -->*/}
            <Row className=" justify-content-center">
                <Col xl={9} id="convertable-pricing">
                    <div className="p-3 pt-0">
                        <div className="text-center">
                            <h3>Pricing</h3>
                            <h5 className="d-block">Plans that flex with your needs.</h5>
                            <p className="text-muted mb-4">Stay agile with plans that seamlessly adjust to your changing requirements, ensuring you always have the flexibility you need.</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mb-4">
                        <div className="switcher-box">
                            <span className="pricing-time-span">Monthly</span>
                            <div className="switcher-pricing text-center">
                                <input type="checkbox" onChange={handleToggle} className="pricing-toggle" />
                            </div>
                            <span className="pricing-time-span">Annually</span>
                        </div>
                    </div>
                    <div className={`tab-content ${isMonthly ? 'show' : ''}`} id="monthly1">
                        <Row className=" d-flex align-items-center justify-content-center mb-5">
                            {pricingsdata.map((idx) => (
                                <Col lg={8} xl={4} xxl={4} md={8} sm={12} className="" key={idx.id}>
                                    <SpkPricingcards card={idx} planType="monthly" />
                                </Col>
                            ))}
                        </Row>
                    </div>
                    <div className={`tab-content ${isMonthly ? '' : 'show'}`} id="yearly1">
                        <Row className=" d-flex align-items-center justify-content-center mb-5">
                            {pricingsdata.map((idx) => (
                                <Col lg={8} xl={4} xxl={4} md={8} sm={12} className="" key={idx.id}>
                                    <SpkPricingcards card={idx} />
                                </Col>
                            ))}
                        </Row>
                    </div>

                </Col>
            </Row>
            {/*<!-- End:: row-1 -->*/}

            {/*<!-- Start:: row-2 -->*/}
            <Row className=" justify-content-center">
                <Col xl={9} className="">
                    <Tab.Container defaultActiveKey="month">
                        <div className="text-center mb-5 mt-4">
                            <div className="tab-style-1 border p-1 bg-white shadow-sm rounded-pill d-inline-block">
                                <Nav className="nav-pills">
                                    <Nav.Item>
                                        <Nav.Link eventKey="month" type="button" className="rounded-pill fw-medium" data-bs-toggle="pill" data-bs-target="#pills-monthly">Monthly</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="year" type="button" className="rounded-pill fw-medium" data-bs-toggle="pill" data-bs-target="#pills-yearly">Annually <SpkBadge variant="info" Customclass="ms-1 rounded-pill">Save 10%</SpkBadge></Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                        </div>
                        <Tab.Content className="">
                            <Tab.Pane eventKey="month" className="p-0 border-0" id="pills-monthly">
                                <Row className=" align-items-center">
                                    {pricingPlanMonth.map((plan, index) => (
                                        <SpkPricingCard2 billingCycle="Month" key={index} plan={plan} />
                                    ))}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="year" className="p-0 border-0" id="pills-yearly">
                                <Row className=" align-items-center">
                                    {pricingPlansYear.map((plan, index) => (
                                        <SpkPricingCard2 billingCycle="Year" key={index} plan={plan} />
                                    ))}
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Col>

            </Row>
            {/*<!-- End:: row-2 -->*/}

        </Fragment>
    )
};

export default Pricing