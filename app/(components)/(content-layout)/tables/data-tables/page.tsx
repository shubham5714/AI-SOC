"use client"
import BasicDatatable from "@/shared/@spk-reusable-components/reusable-tables/reusable-datatables/basicDatatable";
import CustomizedTables from "@/shared/@spk-reusable-components/reusable-tables/reusable-datatables/customizedTables";
import Deletetable from "@/shared/@spk-reusable-components/reusable-tables/reusable-datatables/deletetable";
import ExportTable from "@/shared/@spk-reusable-components/reusable-tables/reusable-datatables/exportTable";
import StickyHeadTable from "@/shared/@spk-reusable-components/reusable-tables/reusable-datatables/stickyHeadTable";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";

interface DataTablesProps { }

const DataTables: React.FC<DataTablesProps> = () => {

    return (

        <Fragment>

            <Seo title="Data Tables" />

            <Pageheader title="Tables" currentpage="Data tables" activepage="Data Tables" />

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title> Basic Datatable </Card.Title>
                        </Card.Header>
                        <Card.Body id="basic-datatables">
                            <BasicDatatable />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title> Editable Table </Card.Title>
                        </Card.Header>
                        <Card.Body className="custom-data-list">
                            <ExportTable />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-2 --> */}

            {/* <!-- Start:: row-3 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title> Sticky header Table </Card.Title>
                        </Card.Header>
                        <Card.Body id="StickyheaderTable">
                            <StickyHeadTable />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-3 --> */}

            {/* <!-- Start:: row-4 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Customization Table</Card.Title>
                        </Card.Header>
                        <Card.Body className="">
                            <CustomizedTables />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-4 --> */}

            {/* <!-- Start:: row-5 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title> Edit Row Table </Card.Title>
                        </Card.Header>
                        <Card.Body className="custom-edit-row">
                            <Deletetable />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-5 --> */}

        </Fragment>
    )
};

export default DataTables;