"use client"
import React, { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Card, Col, Row } from "react-bootstrap";
import Seo from "@/shared/layouts-components/seo/seo";
import SpkSwiperJs from "@/shared/@spk-reusable-components/reusable-plugins/spk-swiperjs";
import { Basicdata, Customdata, Dynamicdata, Effectcovberflowdata, Effectcubedata, Effectfadedata, Effectflipdata, Fractiondata, Keyboarddata, Mousewheeldata, Navigationdata, Paginationdata, Progressdata, Scrollbardata, Thumbdata, Verticaldata } from "@/shared/data/adavanec-ui/swiperjsdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Image from "next/image";

interface SwiperJsProps { }

const SwiperJs: React.FC<SwiperJsProps> = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return "<span class=\"" + className + "\">" + (index + 1) + "</span>";
        },
    };

    return (
        <Fragment>
            {/* <!-- Page Header --> */}
            <Seo title={"Swiper Js"} />
            <Pageheader title="Advanced Ui" currentpage="Swiper" activepage="Swiper" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start::row-1 --> */}
            <Row>
                <Col xl={4} lg={6} md={6} sm={12} className="">
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Basic Swiper
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <SpkSwiperJs slides={Basicdata} spaceBetween={30} centeredSlides={true} autoplay={true} className="mySwiper swiper-basic" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12} className="">
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Swiper With Navigation
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <SpkSwiperJs slides={Navigationdata} spaceBetween={30} centeredSlides={true} navigation={true} autoplay={true} className="mySwiper swiper-navigation" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12} className="">
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Swiper with Pagination
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <SpkSwiperJs slides={Paginationdata} spaceBetween={30} centeredSlides={true} pagination={{ clickable: true, }} autoplay={true} className="mySwiper" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12} className="">
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Dynamic Pagination
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <SpkSwiperJs slides={Dynamicdata} spaceBetween={30} centeredSlides={true} pagination={{ clickable: true, }} autoplay={true} className="mySwiper" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12} className="">
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Pagination With Progress
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <SpkSwiperJs slides={Progressdata} pagination={{ type: 'progressbar' }} navigation={true} autoplay={true} className="mySwiper" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12} className="">
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Pagination Fraction
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <SpkSwiperJs slides={Fractiondata} pagination={{ type: 'fraction' }} navigation={true} autoplay={true} className="mySwiper pagination-fraction" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12} className="">
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Custom Pagination
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <SpkSwiperJs slides={Customdata} pagination={pagination} autoplay={true} className="mySwiper swiper custom-pagination" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12} className="">
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Scrollbar Swiper
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <SpkSwiperJs slides={Scrollbardata} scrollbar={{ hide: true, }} autoplay={true} className="mySwiper swiper scrollbar-swiper" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12} className="">
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Vertical Swiper
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <SpkSwiperJs slides={Verticaldata} direction={"vertical"} pagination={{ clickable: true, }} autoplay={true} className="mySwiper vertical custom-swiper-vertical swiper-vertical" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12} className="">
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Mouse Wheel Control
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <SpkSwiperJs slides={Mousewheeldata} direction={"vertical"} slidesPerView={1} spaceBetween={30} pagination={{ clickable: true, }} autoplay={true} className="mySwiper vertical vertical-mouse-control" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12} className="">
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Keyboard Control
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <SpkSwiperJs slides={Keyboarddata} pagination={{ clickable: true, }} autoplay={true} slidesPerView={1} spaceBetween={30} navigation={true} keyboard={{ enabled: true }} className="mySwiper" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12} className="">
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Nested Swiper</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Swiper className="mySwiper swiper-h swiper swiper-horizontal1" spaceBetween={50} pagination={{ clickable: true, }} modules={[Pagination]}>
                                <SwiperSlide><Image fill src="../../assets/images/media/media-30.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide>
                                    <Swiper className="mySwiper2 swiper-v swiper vertical swiper-vertical1" direction={"vertical"} spaceBetween={50} pagination={{ clickable: true, }}
                                        modules={[Pagination]}>
                                        <SwiperSlide><Image fill src="../../assets/images/media/media-25.jpg" alt="" /></SwiperSlide>
                                        <SwiperSlide><Image fill src="../../assets/images/media/media-31.jpg" alt="" /></SwiperSlide>
                                        <SwiperSlide><Image fill src="../../assets/images/media/media-32.jpg" alt="" /></SwiperSlide>
                                    </Swiper>
                                </SwiperSlide>
                                <SwiperSlide><Image fill src="../../assets/images/media/media-28.jpg" alt="" /></SwiperSlide>
                                <SwiperSlide><Image fill src="../../assets/images/media/media-29.jpg" alt="" /></SwiperSlide>
                            </Swiper>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12} className="">
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Effect Cube
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <SpkSwiperJs slides={Effectcubedata} spaceBetween={30} cubeEffect={{ shadow: true, slideShadows: true, shadowOffset: 30, shadowScale: 0.94}} effect={"cube"} navigation={true} pagination={{ clickable: true, }} autoplay={true} className="mySwiper swiper swiper-fade cube-custom" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12} className="">
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Effect Fade
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <SpkSwiperJs slides={Effectfadedata} effect={"fade"} pagination={{ clickable: true, }} navigation={true} autoplay={true} className="mySwiper swiper-fade" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12} className="">
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Effect Flip
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <SpkSwiperJs slides={Effectflipdata} effect={"flip"} grabCursor={true} pagination={{ clickable: true, }} navigation={true} autoplay={true} className="mySwiper" />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!--End::row-1 --> */}

            {/* <!-- Start:: row-2 --> */}
            <Row>
                <div className="col-xl-12">
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Effect Coverflow
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <SpkSwiperJs slides={Effectcovberflowdata} effect={"coverflow"} grabCursor={true} centeredSlides={false} slidesPerView={4} pagination={{ clickable: true, }} autoplay={true} coverflowEffect={{ rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true }} className="mySwiper" />
                        </Card.Body>
                    </Card>
                </div>
            </Row>
            {/* <!-- End:: row-2 --> */}

            {/* <!-- Start:: row-3 --> */}
            <Row>
                <div className="col-xl-12">
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Thumbs Gallery
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <SpkSwiperJs slides={Thumbdata} navigation={true} autoplay={true} thumb={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }} className="mySwiper bd-gray-100 product-details-page" />
                            <SpkSwiperJs slides={Thumbdata} onswiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} freemode={true} autoplay={true} watchslide={true} className="swiper mt-2 swiper-view swiper-initialized swiper-horizontal swiper-free-mode swiper-watch-progress swiper-backface-hidden swiper-thumbs" />
                        </Card.Body>
                    </Card>
                </div>
            </Row>
            {/* <!-- End:: row-3 --> */}
        </Fragment>
    )
};
export default SwiperJs;