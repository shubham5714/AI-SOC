"use client"
import SpkGridjstables from "@/shared/@spk-reusable-components/reusable-plugins/spk-gridjstables";
import SpkCard from "@/shared/@spk-reusable-components/reusable-uiElements/reusable-cards/spk-basiccard";
import { Columns, Data, Data1, Data2, Data3 } from "@/shared/data/tables/gridjstablesdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";

interface GridJsTablesProps { }

const GridJsTables: React.FC<GridJsTablesProps> = () => {

    return (

        <Fragment>
            <Seo title="Grid Js" />

            <Pageheader title="Tables" currentpage="Grid Js" activepage="Grid Js" />
            {/* <!--Start::row-1 --> */}
            <Row>
                <Col xl={12}>
                    <SpkCard header="Basic Table" bodyText={(
                        <div id="grid-example1">
                            <SpkGridjstables Data={Data} Columns={["Date", "Name", "Email", "Id", "Price", "Quantity", "Total"]} />
                        </div>
                    )}
                    />
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}

            {/* <!--Start:: row-2 --> */}
            <Row>
                <Col xl={12}>
                    <SpkCard header="Table With Pagination" bodyText={(
                        <div id="grid-pagination">
                            <SpkGridjstables Data={Data} Columns={["Date", "Name", "Email", "Id", "Price", "Quantity", "Total"]} Pagination={{ limit: 5 }} />
                        </div>
                    )}
                    />
                </Col>
            </Row>
            {/* <!-- End:: row-2 --> */}

            {/* <!--Start:: row-3 --> */}
            <Row>
                <Col xl={12}>
                    <SpkCard header="Table With Search" bodyText={(
                        <div id="grid-search">
                            <SpkGridjstables Search={true} Data={Data} Columns={["Date", "Name", "Email", "Id", "Price", "Quantity", "Total"]} Pagination={{ limit: 5 }} />
                        </div>
                    )}
                    />
                </Col>
            </Row>
            {/* <!--End:: row-3 --> */}

            {/* <!--Start:: row-4 --> */}
            <Row>
                <Col xl={12}>
                    <SpkCard header="Table Sorting" bodyText={(
                        <div id="grid-sorting">
                            <SpkGridjstables Sort={true} Search={true} Data={Data} Columns={["Date", "Name", "Email", "Id", "Price", "Quantity", "Total"]} Pagination={{ limit: 5 }} />
                        </div>
                    )}
                    />
                </Col>
            </Row>
            {/* <!--End:: row-4 --> */}

            {/* <!--Start:: row-5 --> */}
            <Row>
                <Col xl={12}>
                    <SpkCard header=" Table Loading" bodyText={(
                        <div id="grid-loading">
                            <SpkGridjstables Sort={true} Search={true} Data={Data1} Columns={["Date", "Name", "Email", "Id", "Price", "Quantity", "Total"]} Pagination={{ limit: 5 }} />
                        </div>
                    )}
                    />
                </Col>
            </Row>
            {/* <!--End:: row-5 --> */}

            {/* <!--Start:: row-6 --> */}
            <Row>
                <Col xl={12}>
                    <SpkCard header=" Wide Table" bodyText={(
                        <div id="grid-wide">
                            <SpkGridjstables reSizable={true} Sort={true} Search={true} Data={Data2} Columns={["Date", "Name", "Email", "Id", "Price", "Quantity", "Total"]} Pagination={{ limit: 5 }} />
                        </div>
                    )}
                    />
                </Col>
            </Row>
            {/* <!--End:: row-6 --> */}

            {/* <!--Start:: row-7 --> */}
            <Row>
                <Col xl={12}>
                    <SpkCard header=" Fixed Header" bodyText={(
                        <div id="grid-header-fixed">
                            <SpkGridjstables fixedHeader={true} Height="350px" Sort={true} Search={true} Data={Data3} Columns={["Date", "Name", "Email", "Id", "Price", "Quantity", "Total"]} Pagination={{ limit: 11 }} />
                        </div>
                    )}
                    />
                </Col>
            </Row>
            {/* <!--End:: row-7 --> */}

            {/* <!--    Start:: row-8 --> */}
            <Row>
                <Col xl={12}>
                    <SpkCard header="Hidden Columns" bodyText={(
                        <div id="grid-hidden-column">
                            <div className="table-responsive">
                                <SpkGridjstables Sort={true} Search={true} Data={Data} Columns={Columns} Pagination={{ limit: 5 }} />
                            </div>
                        </div>
                    )}
                    />
                </Col>
            </Row>
            {/* <!-- End:: row-8 --> */}
        </Fragment>

    )

};

export default GridJsTables;