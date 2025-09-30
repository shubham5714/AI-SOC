"use client"
import Spkapexcharts from "@/shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import { Areabasicoptions, Areabasicseries, Areagithuboptions, Areagithubseries, Areanulloptions, Areanullseries, Areasplineoptions, Areasplineseries, Areastackoptions, Areastackseries, Areatimeoptions, Areatimeseries, Areavalueoptions, Areavalueseries, Dateoptions, Dateseries, optionsYears, seriesYears } from "@/shared/data/charts/apexcharts/areachartdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import ApexCharts from 'apexcharts';

interface AreaChartProps { }

const AreaChart: React.FC<AreaChartProps> = () => {
    const [_selection, setSelection] = useState('one_year');

    const updateData = (timeline: string) => {
        setSelection(timeline);

        switch (timeline) {
            case 'one_month':
                ApexCharts.exec(
                    'area-datetime',
                    'zoomX',
                    new Date('28 Jan 2013').getTime(),
                    new Date('27 Feb 2013').getTime()
                );
                break;
            case 'six_months':
                ApexCharts.exec(
                    'area-datetime',
                    'zoomX',
                    new Date('27 Sep 2012').getTime(),
                    new Date('27 Feb 2013').getTime()
                );
                break;
            case 'one_year':
                ApexCharts.exec(
                    'area-datetime',
                    'zoomX',
                    new Date('27 Feb 2012').getTime(),
                    new Date('27 Feb 2013').getTime()
                );
                break;
            case 'ytd':
                ApexCharts.exec(
                    'area-datetime',
                    'zoomX',
                    new Date('01 Jan 2013').getTime(),
                    new Date('27 Feb 2013').getTime()
                );
                break;
            case 'all':
                ApexCharts.exec(
                    'area-datetime',
                    'zoomX',
                    new Date('23 Jan 2012').getTime(),
                    new Date('27 Feb 2013').getTime()
                );
                break;
            default:
                break;
        }
    };
    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title={"Area Charts"} />
            <Pageheader title="Charts" subtitle="Apex Charts" currentpage="Apex Area Charts" activepage="Apex Area Charts" />
            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Basic Area Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="area-basic">
                                <Spkapexcharts chartOptions={Areabasicoptions} chartSeries={Areabasicseries} type="area" width={"100%"} height={300} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Spline Area Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="area-spline">
                                <Spkapexcharts chartOptions={Areasplineoptions} chartSeries={Areasplineseries} type="area" width={"100%"} height={300} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Area Chart With Negative Values</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="area-negative">
                                <Spkapexcharts chartOptions={Areavalueoptions} chartSeries={Areavalueseries} type="area" width={"100%"} height={323} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Selection-Github Style Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="wrapper">
                                <div id="chart-months">
                                    <Spkapexcharts chartOptions={Areagithuboptions} chartSeries={Areagithubseries} type="area" width={"100%"} height={130} />
                                </div>

                                <div className="github-style d-flex align-items-center">
                                    <div className="me-2">
                                        <Image className="userimg rounded" src="../../../assets/images/faces/1.jpg"
                                            data-hovercard-user-id="634573" alt="" width="38" height="38" />
                                    </div>
                                    <div className="userdetails lh-1">
                                        <Link href="#!" className="username fw-semibold fs-14">coder</Link>
                                        <span className="cmeta d-block mt-1">
                                            <span className="commits"></span> commits
                                        </span>
                                    </div>
                                </div>

                                <div id="chart-years">
                                    <Spkapexcharts chartOptions={optionsYears} chartSeries={seriesYears} type="area" width={"100%"} height={140} />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Stacked Area Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="area-stacked">
                                <Spkapexcharts chartOptions={Areastackoptions} chartSeries={Areastackseries} type="area" width={"100%"} height={350} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Irregular Time Series Chart</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="area-irregular">
                                <Spkapexcharts chartOptions={Areatimeoptions} chartSeries={Areatimeseries} type="area" width={"100%"} height={350} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Area Chart With Null Values</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="area-null">
                                <Spkapexcharts chartOptions={Areanulloptions} chartSeries={Areanullseries} type="area" width={"100%"} height={350} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="card-title">Area Chart-Datetime X-Axis Chart</div>
                            <div className="btn-group ms-auto">
                                <SpkButton Buttonvariant="primary" Customclass="btn  btn-sm" onClickfunc={() => updateData('one_month')}>1M</SpkButton>
                                <SpkButton Buttonvariant="primary" Customclass="btn  btn-sm" onClickfunc={() => updateData('six_months')}>6M</SpkButton>
                                <SpkButton Buttonvariant="primary" Customclass="btn  btn-sm" onClickfunc={() => updateData('one_year')}>1Y</SpkButton>
                                <SpkButton Buttonvariant="primary" Customclass="btn  btn-sm" onClickfunc={() => updateData('all')}>ALL</SpkButton>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="area-datetime">
                                <Spkapexcharts chartOptions={Dateoptions} chartSeries={Dateseries} type='area' height={350} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}
        </Fragment>
    )
};
export default AreaChart;