import Link from "next/link";
import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

interface Error500Props { }

const Error500: React.FC<Error500Props> = () => {
    return (
        <Fragment>
            <div className="page error-bg">
                {/* <!-- Start::error-page --> */}
                <div className="error-page">
                    <Container className="container">
                        <div className="my-auto">
                            <Row className=" align-items-center justify-content-center h-100 text-center">
                                <Col xl={7} lg={5} md={6} className=" col-12">
                                    <p className="error-text mb-4 text-fixed-white">500</p>
                                    <p className="fs-4 fw-normal mb-2 text-fixed-white">Internal Server Error</p>
                                    <p className="fs-15 mb-5 text-fixed-white">Something went wrong on our end. Please try again later or contact support.</p>
                                    <Link scroll={false} href="/dashboards/sales/" className="btn btn-primary"><i className="ri-arrow-left-line align-middle me-1 d-inline-block"></i> BACK TO HOME PAGE</Link>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </div>
        </Fragment>
    );
};

export default Error500;