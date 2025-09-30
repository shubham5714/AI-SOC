"use client"
import Spkapexcharts from "@/shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import { Timeadvanceoptions, Timeadvanceseries, Timecoloroptions, Timecolorseries, Timedumbeloptions, Timedumbelseries, Timegroupoptions, Timegroupseries, Timelineoptions, Timelineseries, Timemultioptions, Timemultiseries } from "@/shared/data/charts/apexcharts/timelinechartdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { Fragment } from "react";
import { Card, Col, Row } from "react-bootstrap";

interface TimelineChartProps { }

const TimelineChart: React.FC<TimelineChartProps> = () => {
    return (
        <Fragment>

            {/* <!-- Page Header --> */}
            <Seo title={"Timeline Charts"} />

            <Pageheader title="Charts" subtitle="Apex Charts" currentpage="Apex Timeline Charts" activepage="Apex Timeline Charts" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Basic TImeline Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="timeline-basic">
                                <Spkapexcharts chartOptions={Timelineoptions} chartSeries={Timelineseries} type="rangeBar" width={"100%"} height={320} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Multiple Colored TImeline Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="timeline-colors">
                                <Spkapexcharts chartOptions={Timecoloroptions} chartSeries={Timecolorseries} type="rangeBar" width={"100%"} height={320} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Multi Series Timeline Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="timeline-multi">
                                <Spkapexcharts chartOptions={Timemultioptions} chartSeries={Timemultiseries} type="rangeBar" width={"100%"} height={320} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Advanced Timeline Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="timeline-advanced">
                                <Spkapexcharts chartOptions={Timeadvanceoptions} chartSeries={Timeadvanceseries} type="rangeBar" width={"100%"} height={320} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Timeline-Grouped Rows</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="timeline-grouped">
                                <Spkapexcharts chartOptions={Timegroupoptions} chartSeries={Timegroupseries} type="rangeBar" width={"100%"} height={320} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Dumbbell Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="dumbbell-chart">
                                <Spkapexcharts chartOptions={Timedumbeloptions} chartSeries={Timedumbelseries} type="rangeBar" width={"100%"} height={320} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    )
};
export default TimelineChart;