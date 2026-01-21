"use client"
const EnvironmentContextWizard = dynamic(() => import("@/shared/data/environment-context/environment-context-wizard"), { ssr: false });
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Seo from "@/shared/layouts-components/seo/seo";
import dynamic from "next/dynamic";

const EnvironmentContext: React.FC = () => {
    return (
        <Fragment>
            <Seo title="Environment Context" />
            
            <div className="container-fluid">
                {/* Header Section */}
                <Row>
                    <Col xl={12}>
                        <div className="d-flex justify-content-between align-items-center" style={{ paddingTop: '0.75rem', paddingBottom: '0.75rem', marginBottom: 0 }}>
                            <h5 className="mb-0">Environment Context</h5>
                        </div>
                    </Col>
                </Row>

                {/* Form Wizard Section */}
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <div className="card-title">
                                    Form
                                </div>
                            </Card.Header>
                            <div className="card-body p-0 form-wizard1 pt-3">
                                <EnvironmentContextWizard />
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};

export default EnvironmentContext;

