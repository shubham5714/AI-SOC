"use client"
import SpkPodcastcard from "@/shared/@spk-reusable-components/reusable-dashboard/spk-podcast";
import Spkapexcharts from "@/shared/@spk-reusable-components/reusable-plugins/spk-apexcharts";
import SpkTables from "@/shared/@spk-reusable-components/reusable-tables/spk-tables";
import SpkBadge from "@/shared/@spk-reusable-components/reusable-uiElements/spk-badge";
import SpkButton from "@/shared/@spk-reusable-components/reusable-uiElements/spk-buttons";
import SpkDropdown from "@/shared/@spk-reusable-components/reusable-uiElements/spk-dropdown";
import { Categories, PodcastActivityOPtions, PodcastActivitySeries, Podcasters, Podcasts, PodcastsType, RecentlyPlayed, Recommendations, Shortcuts } from "@/shared/data/dashboards/podcastdata";
import Pageheader from "@/shared/layouts-components/pageheader/pageheader";
import Seo from "@/shared/layouts-components/seo/seo";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { Card, Col, Dropdown, Form, Row } from "react-bootstrap";

interface PodcastProps { }

const Podcast: React.FC<PodcastProps> = () => {

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [data, setData] = useState<PodcastsType[]>(Podcasts);


    useEffect(() => {
        setData(
            Podcasts.filter((podcast) =>
                podcast.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm]);

    // Handle search input change
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    // Handle deletion of an employee
    const handleDelete = (contactId: number): void => {
        setData((prevData) => prevData.filter((contact) => contact.id !== contactId));
    };
    return (
        <Fragment>
            <Seo title="Dashboards Podcast" />
            <Pageheader title='Dashboards' currentpage='Podcast' activepage='Podcast' />
            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xxl={6}>
                    <Card className="custom-card card-bg-primary podcast-card">
                        <Card.Body className=" p-4">
                            <Row className="justify-content-between">
                                <Col xxl={4} xl={5} lg={4} md={3} sm={4} className="d-sm-block d-none text-end my-auto ">
                                    <Image width={202} height={268} src="../../assets/images/media/media-81.png" alt="" className="img-fluid music-img" />
                                </Col>
                                <Col xxl={8} xl={7} lg={8} md={9} sm={8}>
                                    <div className="ms-2">
                                        <SpkBadge variant="white-transparent" Customclass="mb-2">Featured This Month</SpkBadge>
                                        <h4 className="mb-2 fw-semibold text-fixed-white">Do You Want Your Music Distribution ?</h4>
                                        <p className="mb-2">Ready to unleash your music's potential?
                                            Let's amplify your reach together.
                                            It's time to make your sound heard</p>
                                        <div className="fw-medium text-fixed-white"><i className="ti ti-music me-1"></i>30 + Eps
                                            <span className="ms-2 text-fixed-white fs-12 op-8"><i
                                                className="ri-play-circle-line fs-13 me-1"></i>260.517/ Monthly
                                                Listeners</span>
                                            <div className="d-flex align-items-center gap-2 mt-3">
                                                <SpkButton Buttonvariant="secondary" Customclass="btn btn-wave">Listen Now</SpkButton>
                                                <SpkButton Buttonvariant="outline-success" Customclass="btn btn-wave">Add To  Favorite</SpkButton>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6}>
                    <Row>
                        <Col xl={12}>
                            <div className="mb-4 d-flex align-items-center justify-content-between">
                                <h6 className="fw-medium mb-0">Shortcuts :</h6>
                                <Link scroll={false} href="#!" className="fs-12 text-muted tag-link"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                            </div>
                            <Row>
                                {Shortcuts.map((idx) => (
                                    <Col xxl={4} md={4} sm={6} className="col-12" key={idx.id}>
                                        <SpkPodcastcard card={idx} />
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}

            {/* <!-- Start: row-2 --> */}
            <Row>
                <Col xl={9}>
                    <div className="mb-4 d-flex align-items-center justify-content-between">
                        <h6 className="fw-medium mb-0">Categories</h6>
                        <Link scroll={false} href="#!" className="fs-12 text-muted tag-link"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                    </div>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Body className="">
                                    <div className="d-flex align-items-center justify-content-between gap-4 flex-wrap">
                                        {Categories.map((idx) => (
                                            <div className="d-flex align-items-center gap-2" key={idx.id}>
                                                <Link scroll={false} aria-label="anchor" href="#!" className={`btn btn-icon btn-${idx.color}-light btn-wave border-0`}>
                                                    <i className={`ti ti-${idx.icon} fs-4`}></i>
                                                </Link>
                                                <Link scroll={false} href="#!" className="d-block fw-medium fs-12">{idx.label}</Link>
                                            </div>
                                        ))}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <div className="mb-4 d-flex align-items-center justify-content-between">
                        <h6 className="fw-medium mb-0">Recommendations :</h6>
                        <Link scroll={false} href="#!" className="fs-12 text-muted tag-link"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                    </div>
                    <Row>
                        {Recommendations.map((idx) => (
                            <Col xxl={4} xl={6} lg={6} md={6} dm={6} className="col-12" key={idx.id}>
                                <Card className="custom-card">
                                    <Row className="gx-2">
                                        <Col md={4}>
                                            <Image fill src={idx.image} className="img-fluid rounded-start h-100 w-100" alt="..." />
                                        </Col>
                                        <Col md={8} className="align-self-center">
                                            <div className="p-3">
                                                <div>
                                                    <Link scroll={false} href="#!">
                                                        <h6 className="fw-medium mb-0">{idx.title}</h6>
                                                    </Link>
                                                    <span className="text-muted fs-12">{idx.author}</span>
                                                </div>
                                                <div className="d-flex align-items-end justify-content-between flex-wrap gap-1">
                                                    <div className="d-flex align-items-center gap-3 lh-1 flex-wrap">
                                                        <span className="d-block d-flex align-items-center gap-2 text-muted fs-12 lh-1"><i className="ri-time-line lh-1 align-middle fs-14"></i>3h
                                                            25m</span>
                                                        <span className="d-block d-flex align-items-center gap-2 fs-14 fw-medium lh-1 me-2"><i className="ri-volume-up-line lh-1 align-middle fs-14"></i>15,352</span>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <SpkButton Buttonvariant="primary-light" Customclass="btn btn-icon btn-sm btn-wave">
                                                            <i className="ri-play-fill"></i>
                                                        </SpkButton>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col xl={3}>
                    <Row>
                        <Col xxl={12}>
                            <Card className="custom-card bg-primary border-0 shadow-none">
                                <Card.Body className=" p-0">
                                    <div className="d-flex align-items-start gap-3 mb-0 p-3 pb-3">
                                        <div className="flex-fill">
                                            <span className="fw-medium d-block text-fixed-white">PLAYING NOW</span>
                                        </div>
                                    </div>
                                    <div className="text-center mb-5 pb-1">
                                        <span className="avatar avatar-rounded mb-4 podcast-playing-now-avatar shadow custom-width">
                                            <Image fill src="../../assets/images/media/podcast/1.jpg" alt="" />
                                        </span>
                                        <Link scroll={false} href="#!">
                                            <h6 className="fw-medium mb-1 text-fixed-white">Random Ramblings</h6>
                                        </Link>
                                        <span className="text-fixed-white op-8 fs-12">By Alice Mumbleton</span>
                                    </div>
                                    <div className="p-3 py-4 bg-white-transparent">
                                        <Row className="justify-content-center">
                                            <Col xl={9}>
                                                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 lh-1">
                                                    <Link scroll={false} href="#!">
                                                        <i className="ri-repeat-2-fill fs-5 text-fixed-white"></i>
                                                    </Link>
                                                    <Link scroll={false} href="#!">
                                                        <i className="ri-skip-back-line fs-5 text-fixed-white"></i>
                                                    </Link>
                                                    <Link scroll={false} href="#!">
                                                        <i className="ri-play-circle-line fs-3 text-fixed-white"></i>
                                                    </Link>
                                                    <Link scroll={false} href="#!">
                                                        <i className="ri-skip-forward-line fs-5 text-fixed-white"></i>
                                                    </Link>
                                                    <Link scroll={false} href="#!">
                                                        <i className="ri-shuffle-fill fs-5 text-fixed-white"></i>
                                                    </Link>
                                                </div>
                                                <div className="d-flex gap-3 align-items-center mt-3">
                                                    <div className="fs-12 text-fixed-white">12.25</div>
                                                    <div className="progress progress-xs progress-animate podcast-playing-progress" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>
                                                        <div className="progress-bar progress-bar-secondary bg-fixed-white" style={{ width: '80%' }}> </div>
                                                    </div>
                                                    <div className="fs-12 text-fixed-white">23.45</div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {/* <!-- End: row-2 --> */}

            {/* <!-- Start: row-3 --> */}
            <Row>
                <Col xxl={3} xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Recently Played
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="">
                            <ul className="list-unstyled podcast-recently-played-list mb-0">
                                {RecentlyPlayed.map((idx) => (
                                    <li key={idx.id}>
                                        <div className="d-flex align-items-center gap-2">
                                            <div className="lh-1">
                                                <span className="avatar avatar-md custom-width">
                                                    <Image fill src={idx.image} alt="" />
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <Link scroll={false} href="#!" className="fw-medium">{idx.title}</Link>
                                                <span className="d-block fs-12 text-muted">{idx.author}</span>
                                            </div>
                                            <div className="text-end">
                                                <span className="fw-medium"><i className="ti ti-volume me-1  d-inline-flex"></i>{idx.plays}</span>
                                                <span className="d-block fs-12 text-muted">{idx.duration}</span>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Popular Podcasters
                            </Card.Title>
                            <Link scroll={false} href="#!" className="fs-12 text-muted tag-link"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="table text-nowrap table-hover">
                                    {Podcasters.map((idx) => (
                                        <tr key={idx.id}>
                                            <td className={idx.tdClass}>
                                                {idx.id}
                                            </td>
                                            <td className={idx.tdClass}>
                                                <div className="d-flex align-items-center gap-2">
                                                    <span className="avatar avatar-md avatar-rounded custom-width">
                                                        <Image fill src={idx.image} alt="" />
                                                    </span>
                                                    <div>
                                                        <Link scroll={false} href="#!" className="fw-medium d-block">{idx.name}</Link>
                                                        <span className="fs-12 text-muted">{idx.category}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={idx.tdClass}>
                                                <span className="fs-11 text-muted d-block">Followers</span>
                                                <span>{idx.followers}</span>
                                            </td>
                                            <td className={idx.tdClass}>
                                                <span className="fs-11 text-muted d-block">Episodes</span>
                                                <span>{idx.episodes}</span>
                                            </td>
                                            <td className={idx.tdClass}>
                                                <SpkButton Buttonvariant={`${idx.isFollowing ? 'primary' : 'primary-light'}`} Customclass="btn btn-sm btn-wave">{idx.isFollowing ? 'Following' : 'Follow'}</SpkButton>
                                            </td>
                                        </tr>
                                    ))}
                                </SpkTables>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} className="col-12">
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="justify-content-between">
                            <Card.Title>Podcast Activity</Card.Title>
                            <SpkDropdown toggleas='a' Customtoggleclass="p-2 fs-12 text-muted no-caret" Toggletext="Sort By" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                <li><Dropdown.Item href="#!">This Week</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">Last Week</Dropdown.Item></li>
                                <li><Dropdown.Item href="#!">This Month</Dropdown.Item></li>
                            </SpkDropdown>
                        </Card.Header>
                        <Card.Body className=" pb-0">
                            <div className="ps-3">
                                <div className="text-muted fs-12 mb-1">Total Watch Time<span className="ms-2 d-inline-block text-success"><i className="fe fe-arrow-up-right"></i>0.25%</span>
                                </div>
                                <h5 className="fw-medium mb-0">527 Hours</h5>
                            </div>
                            <div id="podcast-activity">
                                <Spkapexcharts chartOptions={PodcastActivityOPtions} chartSeries={PodcastActivitySeries} type='area' width={'100%'} height={246} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- Start: row-3 --> */}

            {/* <!-- Start: row-4 --> */}
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Popular Podcasts
                            </Card.Title>
                            <div className="d-flex flex-wrap gap-2">
                                <div>
                                    <Form.Control className=" form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" value={searchTerm} onChange={handleSearch} />
                                </div>
                                <SpkDropdown toggleas='a' Customtoggleclass="btn btn-primary btn-sm btn-wave no-caret" Toggletext="Sort By" Icon={true} IconClass="ri-arrow-down-s-line align-middle ms-1 d-inline-block">
                                    <li><Dropdown.Item href="#!">New</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Popular</Dropdown.Item></li>
                                    <li><Dropdown.Item href="#!">Relevant</Dropdown.Item></li>
                                </SpkDropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <SpkTables tableClass="table text-nowrap" header={[{ title: 'Podcast Name' }, { title: 'Frequency' }, { title: 'Category' }, { title: 'Latest Episode' }, { title: 'Views' }, { title: 'Average Duration' }, { title: 'Ratings' }, { title: 'Actions' },]}>
                                    {data.length > 0 ? (
                                        data.map((idx) => (
                                            <tr key={idx.id}>
                                                <td>
                                                    <div className="d-flex gap-2">
                                                        <span className="avatar avatar-md custom-width"><Image fill src={idx.image} className="" alt="..." /></span>
                                                        <div>
                                                            <Link scroll={false} href="#!" className="fw-medium mb-0 d-flex align-items-center">{idx.name}</Link>
                                                            <span className="fs-12 d-block text-muted">{idx.host}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {idx.frequency}
                                                </td>
                                                <td>
                                                    <SpkBadge variant={`${idx.color}-transparent`}>{idx.category}</SpkBadge>
                                                </td>
                                                <td>
                                                    {idx.episode}
                                                </td>
                                                <td>
                                                    <span className="fw-medium text-muted"><i className="ti ti-volume me-1"></i>{idx.listeners}</span>
                                                </td>
                                                <td>
                                                    {idx.duration}
                                                </td>
                                                <td>
                                                    {idx.rating}<i className="ri-star-fill ms-1 text-warning"></i>
                                                </td>
                                                <td>
                                                    <div className="btn-list">
                                                        <SpkButton Buttontype="button" Buttonvariant="primary-light" Customclass="btn btn-sm btn-icon btn-wave"><i className="ri-download-line"></i></SpkButton>
                                                        <SpkButton Buttontype="button" Buttonvariant="secondary-light" Customclass="btn btn-sm btn-icon  btn-wave" onClickfunc={() => handleDelete(idx.id)}><i className="ri-delete-bin-line"></i></SpkButton>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td className='text-center' colSpan={9}>No data found</td>
                                        </tr>
                                    )}

                                </SpkTables>
                            </div>
                        </Card.Body>
                        <Card.Footer className="border-top-0">
                            <div className="d-flex align-items-center">
                                <div> Showing 5 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i> </div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <ul className="pagination mb-0">
                                            <li className="page-item disabled"> <Link scroll={false} className="page-link" href="#!"> Prev </Link> </li>
                                            <li className="page-item active"><Link scroll={false} className="page-link" href="#!">1</Link></li>
                                            <li className="page-item"><Link scroll={false} className="page-link" href="#!">2</Link></li>
                                            <li className="page-item"> <Link scroll={false} className="page-link text-primary" href="#!"> next </Link> </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            {/* <!-- Start: row-4 --> */}
        </Fragment>
    );
};

export default Podcast;