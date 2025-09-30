"use client"
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";

interface EmptyProps { }

const Empty: React.FC<EmptyProps> = () => {

    return (
        <Fragment>
            {/* <!-- Start::page-header --> */}
            <Seo title="Pages-Empty" />

            <Pageheader title="Pages" currentpage="Empty" activepage="Empty" />

            {/* <!-- End::page-header --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body className="">
                            <h6 className="mb-0">EMPTY CARD</h6>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    )
};

export default Empty;