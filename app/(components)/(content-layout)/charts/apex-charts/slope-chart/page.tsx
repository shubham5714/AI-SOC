"use client"
import Spkapexcharts from '@/shared/@spk-reusable-components/reusable-plugins/spk-apexcharts';
import { BasiSlopChartOptions, BasiSlopChartSeries, MultigroupOptions, MultigroupSeries } from '@/shared/data/charts/apexcharts/slopechartdata';
import Pageheader from '@/shared/layouts-components/pageheader/pageheader';
import Seo from '@/shared/layouts-components/seo/seo';
import React, { Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

interface SlopeChartProps { }

const SlopeChart: React.FC<SlopeChartProps> = () => {
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title={"Slope Charts"} />

            <Pageheader title="Charts" subtitle="Apex Charts" currentpage="Apex Slope Charts" activepage="Apex Slope Charts" />

            {/* <!-- Page Header Close --> */}
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Basic Slope Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="basic-slope-chart">
                                <Spkapexcharts chartOptions={BasiSlopChartOptions} chartSeries={BasiSlopChartSeries} type='line' width={'100%'} height={300} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Multi-group Slope Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="multigroupchart">
                                <Spkapexcharts chartOptions={MultigroupOptions} chartSeries={MultigroupSeries} type='line' width={'100%'} height={300} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}

export default SlopeChart;
