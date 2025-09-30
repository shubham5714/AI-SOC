"use client"
import SpkCard from "@/shared/@spk-reusable-components/reusable-uiElements/reusable-cards/spk-basiccard";
import { bgcolor, bggradient, bgoutline, bgtransparent, bordercolors, opacityValues, Othercolors, textColors } from "@/shared/data/utilities/colorsdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import React, { Fragment } from "react";
import {  Col, Row } from "react-bootstrap";

interface ColorsProps { }

const Colors: React.FC<ColorsProps> = () => {
    return (
        <Fragment>
            <Seo title={"Colors"} />
            <Pageheader title="Utilities" currentpage="Colors" activepage="Colors" />
            {/* <!-- Start:: row-1 --> */}
            <Row className="">
                <Col lg={12} sm={6} className="">
                    <SpkCard header="Background Colors" bodyText={(
                        <Row className="row-cols-12 d-flex align-items-center">
                            {bgcolor.map((idx, index) => (
                                <div className="p-3 col-xl-2 col-lg-6" key={index}>
                                    <div className={`m-2 bg-${idx.color} mx-auto color-container`}></div>
                                    <p className="pb-0 mb-0 fw-medium text-center"><code>{idx.class}</code></p>
                                </div>
                            ))}
                        </Row>
                    )}
                    />
                </Col>
                <Col lg={12} sm={6} className="">
                    <SpkCard header="Background gradients" bodyText={(
                        <Row className="row-cols-12 d-flex align-items-center">
                            {bggradient.map((idx, index) => (
                                <div className="p-2 col-xl-2 col-lg-6" key={index}>
                                    <div className={`m-2 bg-${idx.color} mx-auto color-container`}></div>
                                    <p className="pb-0 mb-0 fw-medium text-center"><code>{idx.class}</code></p>
                                </div>
                            ))}
                        </Row>
                    )}
                    />
                </Col>
                <Col lg={12} sm={6} className="">
                    <SpkCard header="Background transparent colors" bodyText={(
                        <Row className="row-cols-12 d-flex align-items-center">
                            {bgtransparent.map((idx, index) => (
                                <div className="p-3 col-xl-2 col-lg-6" key={index}>
                                    <div className={`m-2 bg-${idx.color} mx-auto color-container`}></div>
                                    <p className="pb-0 mb-0 fw-medium text-center"><code>{idx.class}</code></p>
                                </div>
                            ))}
                        </Row>
                    )}
                    />
                </Col>
                <Col lg={12} sm={6} className="">
                    <SpkCard header="  Background outline colors" bodyText={(
                        <Row className="row-cols-12 d-flex align-items-center">
                            {bgoutline.map((idx, index) => (
                                <div className="p-3 col-xl-2 col-lg-6" key={index}>
                                    <div className={`m-2 bg-${idx.color} mx-auto color-container`}><i className="bi bi-emoji-smile fs-18"></i></div>
                                    <p className="pb-0 mb-0 fw-medium text-center"><code>{idx.class}</code></p>
                                </div>
                            ))}
                        </Row>
                    )}
                    />
                </Col>
                <Col lg={12} sm={6} className="">
                    <SpkCard header="Border Colors" bodyText={(
                        <Row className="row-cols-12 d-flex align-items-center">
                            {bordercolors.map((idx, index) => (
                                <div className="p-3 col-xl-2 col-lg-6" key={index}>
                                    <div className={`m-2 border ${idx.color} mx-auto color-container`}></div>
                                    <p className="pb-0 mb-0 fw-medium text-center"><code>{idx.class}</code></p>
                                </div>
                            ))}
                        </Row>
                    )}
                    />
                </Col>
                <Col lg={12} sm={6} className="">
                    <SpkCard header="Background Opacity" bodyText={(
                        <Row className="row-cols-12 d-flex align-items-center">
                            {opacityValues.map((opacity, index) => (
                                <div key={index} className="p-3 col">
                                    <div className={`m-2 bg-success text-fixed-${opacity.color} bg-opacity-${opacity.value} mx-auto color-container`} >
                                        {opacity.value}%
                                    </div>
                                    <p className="pb-0 mb-0 fw-medium text-center">
                                        <code>.bg-opacity-{opacity.value}</code>
                                    </p>
                                </div>
                            ))}
                        </Row>
                    )}
                    />
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row className="">
                <Col xl={12} className="">
                    <SpkCard header=" Text Colors" bodyText={(
                        <Row className="row-cols-12 d-flex align-items-center">
                            {textColors.map((color, index) => (
                                <Col xl={2} lg={6} key={index} className="p-3">
                                    <div className={`m-2 ${color.className} fw-medium fs-14 text-center`}>
                                        {color.label}
                                    </div>
                                    <p className="pb-0 mb-0 fw-medium text-center">
                                        <code>{`.${color.className}`}</code>
                                    </p>
                                </Col>
                            ))}
                        </Row>
                    )}
                    />
                </Col>
            </Row>
            {/* <!-- End:: row-2 --> */}

            {/* <!-- Start:: row-3 --> */}
            <Row className="">
                <Col xl={12} className="">
                    <Row className="">
                        <Col xl={12} className="">
                            <SpkCard header="Text Opacity" bodyText={(
                                <Row className="row-cols-12 d-flex align-items-center">
                                    {opacityValues.map((opacity, index) => (
                                        <div key={index} className="p-3 col">
                                            <div className={`m-2 text-primary fw-medium text-opacity-${opacity.value} fs-14 text-center bg-opacity-${opacity.value} `} >
                                                Opacity-{opacity.value}
                                            </div>
                                            <p className="pb-0 mb-0 fw-medium text-center">
                                                <code>.text-opacity-{opacity.value}</code>
                                            </p>
                                        </div>
                                    ))}
                                </Row>
                            )}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/* <!-- End:: row-3 --> */}

            {/* <!-- Start:: row-4 --> */}
            <Row className="">
                <Col xl={12} className="">
                    <SpkCard header="Callout" bodyText={(
                        <>
                            <div className="callout">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. </div>
                            <div className="callout callout-info">Lorem ipsum dolor sit amet consectetur
                                adipisicing
                                elit. </div>
                            <div className="callout callout-warning">Lorem ipsum dolor sit amet
                                consectetur
                                adipisicing elit. </div>
                            <div className="callout callout-danger">Lorem ipsum dolor sit amet
                                consectetur
                                adipisicing elit.
                            </div>
                        </>
                    )}
                    />
                </Col>
            </Row>
            {/* <!-- End:: row-4 --> */}

            {/* <!-- Start:: row-5 --> */}
            <h6 className="mb-3">Other Colors:</h6>
            <Row className="">
                <Col xl={12} className="">
                    <SpkCard bodyClass="d-xl-flex flex-wrap" bodyText={(
                        <>
                            {Othercolors.map((idx, index) => (
                                <div className={`flex-fill p-3 bd-blue-${idx.data}`} key={index}>$blue-{idx.data}</div>
                            ))}

                            <div className="flex-fill p-3 bd-blue">$blue</div>
                        </>
                    )}
                    />
                </Col>
                <Col xl={12} className="">
                    <SpkCard bodyClass="d-xl-flex flex-wrap" bodyText={(
                        <>
                            {Othercolors.map((idx, index) => (
                                <div className={`flex-fill p-3 bd-indigo-${idx.data}`} key={index}>$indigo-{idx.data}</div>
                            ))}

                            <div className="flex-fill p-3 bd-indigo">$indigo</div>
                        </>
                    )}
                    />
                </Col>
                <Col xl={12} className="">
                    <SpkCard bodyClass="d-xl-flex flex-wrap" bodyText={(
                        <>
                            {Othercolors.map((idx, index) => (
                                <div className={`flex-fill p-3 bd-purple-${idx.data}`} key={index}>$purple-{idx.data}</div>
                            ))}
                            <div className="flex-fill p-3 bd-purple">$purple</div>
                        </>
                    )}
                    />
                </Col>

                <Col xl={12} className="">
                    <SpkCard bodyClass="d-xl-flex flex-wrap" bodyText={(
                        <>
                            {Othercolors.map((idx, index) => (
                                <div className={`flex-fill p-3 bd-pink-${idx.data}`} key={index}>$pink-{idx.data}</div>
                            ))}
                            <div className="flex-fill p-3 bd-pink">$pink</div>
                        </>
                    )}
                    />
                </Col>
                <Col xl={12} className="">
                    <SpkCard bodyClass="d-xl-flex flex-wrap" bodyText={(
                        <>
                            {Othercolors.map((idx, index) => (
                                <div className={`flex-fill p-3 bd-red-${idx.data}`} key={index}>$red-{idx.data}</div>
                            ))}
                            <div className="flex-fill p-3 bd-red">$red</div>
                        </>
                    )}
                    />
                </Col>
                <Col xl={12} className="">
                    <SpkCard bodyClass="d-xl-flex flex-wrap" bodyText={(
                        <>
                            {Othercolors.map((idx, index) => (
                                <div className={`flex-fill p-3 bd-orange-${idx.data}`} key={index}>$orange-{idx.data}</div>
                            ))}
                            <div className="flex-fill p-3 bd-orange">$orange</div>
                        </>
                    )}
                    />
                </Col>
                <Col xl={12} className="">
                    <SpkCard bodyClass="d-xl-flex flex-wrap" bodyText={(
                        <>
                            {Othercolors.map((idx, index) => (
                                <div className={`flex-fill p-3 bd-yellow-${idx.data}`} key={index}>$yellow-{idx.data}</div>
                            ))}
                            <div className="flex-fill p-3 bd-yellow">$yellow</div>
                        </>
                    )}
                    />
                </Col>
                <Col xl={12} className="">
                    <SpkCard bodyClass="d-xl-flex flex-wrap" bodyText={(
                        <>
                            {Othercolors.map((idx, index) => (
                                <div className={`flex-fill p-3 bd-green-${idx.data}`} key={index}>$green-{idx.data}</div>
                            ))}
                            <div className="flex-fill p-3 bd-green">$green</div>
                        </>
                    )}
                    />
                </Col>
                <Col xl={12} className="">
                    <SpkCard bodyClass="d-xl-flex flex-wrap" bodyText={(
                        <>
                            {Othercolors.map((idx, index) => (
                                <div className={`flex-fill p-3 bd-teal-${idx.data}`} key={index}>$teal-{idx.data}</div>
                            ))}
                            <div className="flex-fill p-3 bd-teal">$teal</div>
                        </>
                    )}
                    />
                </Col>
                <Col xl={12} className="">
                    <SpkCard bodyClass="d-xl-flex flex-wrap" bodyText={(
                        <>
                            {Othercolors.map((idx, index) => (
                                <div className={`flex-fill p-3 bd-cyan-${idx.data}`} key={index}>$cyan-{idx.data}</div>
                            ))}
                            <div className="flex-fill p-3 bd-cyan">$cyan</div>
                        </>
                    )}
                    />
                </Col>
                <Col xl={12} className="">
                    <SpkCard bodyClass="d-xl-flex flex-wrap" bodyText={(
                        <>
                            {Othercolors.map((idx, index) => (
                                <div className={`flex-fill p-3 bd-gray-${idx.data}`} key={index}>$gray-{idx.data}</div>
                            ))}
                            <div className="flex-fill p-3 bd-gray">$gray</div>
                        </>
                    )}
                    />
                </Col>
            </Row>
            {/* <!-- End:: row-5 --> */}
        </Fragment>
    );
};

export default Colors;